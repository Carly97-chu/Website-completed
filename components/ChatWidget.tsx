import React, { useState, useRef, useEffect } from 'react';

import { MessageSquare, X, Send, Bot, User } from 'lucide-react';


interface Message {

  id: number;

  text: string;

  isUser: boolean;

}


const ChatWidget: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([

    { id: 1, text: "Hello! I'm Carlotta's AI Assistant. Ask me about her automation skills, background in Data Analysis, or AI projects!", isUser: false }

  ]);

  const [inputValue, setInputValue] = useState("");

  const [isTyping, setIsTyping] = useState(false);

  const [sessionId] = useState(() => Math.random().toString(36).substring(7));

  const messagesEndRef = useRef<HTMLDivElement>(null);


  const webhookUrl = 'https://n8n.46.224.232.131.sslip.io/webhook/2c6db3c2-1f38-433f-a55c-e47007aadb0f/chat';


  const scrollToBottom = () => {

    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

  };


  useEffect(() => {

    scrollToBottom();

  }, [messages, isOpen]);


  const handleSend = async () => {

    if (!inputValue.trim() || isTyping) return;


    const userMsgText = inputValue.trim();

    const userMsg = { id: Date.now(), text: userMsgText, isUser: true };

   

    setMessages(prev => [...prev, userMsg]);

    setInputValue("");

    setIsTyping(true);


    try {

      const response = await fetch(webhookUrl, {

        method: 'POST',

        headers: {

          'Content-Type': 'application/json',

          'Accept': 'application/json'

        },

        body: JSON.stringify({

          action: "sendMessage",

          chatInput: userMsgText,

          sessionId: sessionId

        })

      });


      if (!response.ok) throw new Error('Network response was not ok');

     

      const data = await response.json();

     

      // n8n Chat node usually returns an array of messages or a single object

      let botResponse = "I'm having trouble connecting to my brain right now. Please try again later!";

     

      if (Array.isArray(data) && data.length > 0) {

        botResponse = data[0].text || data[0].message || botResponse;

      } else if (data.text || data.message) {

        botResponse = data.text || data.message;

      } else if (data.output) {

        botResponse = data.output;

      }


      setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, isUser: false }]);

    } catch (error) {

      console.error('Chat error:', error);

      setMessages(prev => [...prev, {

        id: Date.now() + 1,

        text: "Sorry, I'm experiencing a temporary connection issue. You can also reach Carlotta directly at carlottaemiro@gmail.com!",

        isUser: false

      }]);

    } finally {

      setIsTyping(false);

    }

  };


  const handleKeyPress = (e: React.KeyboardEvent) => {

    if (e.key === 'Enter') handleSend();

  };


  return (

    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">

     

      {/* Chat Window */}

      <div

        className={`mb-4 w-80 md:w-96 bg-[#0f1115]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right ${

          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'

        }`}

      >

        {/* Header */}

        <div className="bg-gradient-to-r from-indigo-600 to-sky-600 p-4 flex justify-between items-center shadow-lg">

          <div className="flex items-center gap-2">

            <div className="p-1.5 bg-white/20 rounded-full">

              <Bot className="w-4 h-4 text-white" />

            </div>

            <div>

              <h3 className="font-semibold text-white text-sm">Carlotta's Assistant</h3>

              <div className="flex items-center gap-1">

                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>

                <span className="text-[10px] text-white/80">Powered by n8n AI</span>

              </div>

            </div>

          </div>

          <button

            onClick={() => setIsOpen(false)}

            className="text-white/80 hover:text-white transition-colors p-1"

          >

            <X className="w-5 h-5" />

          </button>

        </div>


        {/* Messages Body */}

        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-black/40">

          {messages.map((msg) => (

            <div

              key={msg.id}

              className={`flex items-start gap-2 ${msg.isUser ? 'flex-row-reverse' : ''} animate-fade-in-up`}

            >

              <div

                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${

                  msg.isUser ? 'bg-indigo-600' : 'bg-slate-700'

                }`}

              >

                {msg.isUser ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-sky-400" />}

              </div>

              <div

                className={`max-w-[80%] p-3 text-sm rounded-2xl shadow-sm ${

                  msg.isUser

                    ? 'bg-indigo-600 text-white rounded-tr-none'

                    : 'bg-white/10 text-slate-200 rounded-tl-none border border-white/5'

                }`}

              >

                {msg.text}

              </div>

            </div>

          ))}

         

          {isTyping && (

            <div className="flex items-center gap-2 animate-pulse">

               <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">

                  <Bot className="w-4 h-4 text-sky-400" />

               </div>

               <div className="bg-white/10 px-4 py-2 rounded-2xl rounded-tl-none border border-white/5">

                 <div className="flex gap-1">

                   <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>

                   <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>

                   <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>

                 </div>

               </div>

            </div>

          )}

          <div ref={messagesEndRef} />

        </div>


        {/* Input Area */}

        <div className="p-3 bg-[#0f1115] border-t border-white/10 flex gap-2">

          <input

            type="text"

            value={inputValue}

            onChange={(e) => setInputValue(e.target.value)}

            onKeyDown={handleKeyPress}

            placeholder="Ask me something..."

            className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-sky-500/50 transition-colors placeholder:text-slate-500"

          />

          <button

            onClick={handleSend}

            className="p-2 bg-sky-600 hover:bg-sky-500 rounded-full text-white transition-all transform active:scale-90 disabled:opacity-50 disabled:cursor-not-allowed"

            disabled={!inputValue.trim() || isTyping}

          >

            <Send className="w-4 h-4" />

          </button>

        </div>

      </div>


      {/* Toggle Button */}

      <button

        onClick={() => setIsOpen(!isOpen)}

        className={`group relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 ${

          isOpen ? 'bg-slate-800 rotate-90' : 'bg-gradient-to-r from-indigo-600 to-sky-600 hover:shadow-indigo-500/40'

        }`}

      >

        {isOpen ? (

           <X className="w-6 h-6 text-white" />

        ) : (

           <MessageSquare className="w-6 h-6 text-white" />

        )}

       

        {/* Active Indicator when closed */}

        {!isOpen && (

          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-sky-400 rounded-full border-2 border-[#0a0a0a] animate-pulse shadow-sm"></span>

        )}

      </button>


    </div>

  );

};


export default ChatWidget; 