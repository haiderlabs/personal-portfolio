import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles, ArrowDown } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const QUICK_ACTIONS = [
  "What are your skills?",
  "Tell me about your projects",
  "How can I contact you?",
  "Your experience?",
];

const PORTFOLIO_DATA: Record<string, string> = {
  skills:
    "Here's what I work with:\n\n**Frontend:** React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Bootstrap, MUI, Shadcn UI, Redux/RTK Query\n**Backend:** Node.js, Express.js, REST API, GraphQL, WebSocket (Socket.IO)\n**Database:** MongoDB, SQL, Mongoose (ORM), Prisma (ORM)\n**Auth & Tools:** JWT, OAuth, Git/GitHub\n\nI also have strong foundations in **OOP**, **Data Structures & Algorithms**, **Software Engineering Practices**, and **Database Design**.",
  projects:
    "Here are some projects I've built:\n\n• **The Tax Truths** — Tax Advisory & Management Platform with Admin, Client, Super Admin & Operations dashboards. Built with React.js, MUI, and Tailwind CSS.\n• **ApoTek** — Laboratory Management System with role-based dashboards for Admin, Lab Admin, Sales, Logistics, Customer Service & Clients.\n• **Kordia** — Musical Academy platform connecting musicians, students & event organizers with real-time chat and course management.\n• **RHS** — School Management System with dashboards for students, guardians & staff, tracking academics, attendance & grades.\n\nAll built with React.js, Material-UI, and Tailwind CSS!",
  contact:
    "You can reach me through any of these:\n\n• **WhatsApp/Phone:** +92 308 550 8631\n• **Email:** haideraly360@gmail.com\n• **LinkedIn:** linkedin.com/in/alyhaiderdev\n\nOr just fill out the **Contact form** below and I'll get back to you!",
  experience:
    "Here's my work experience:\n\n• **Fabulous Technology Solutions** — Full Stack Developer (Sep 2024 – Present)\nBuilding RESTful APIs with Express.js & Node.js, implementing JWT/OAuth authentication, managing state with Redux & Context API, and translating wireframes into pixel-perfect interfaces.\n\n• **Techno Soft Solution** — Junior React Developer (Feb 2024 – Aug 2024)\nDeveloped responsive UIs with React.js, MUI & Tailwind CSS. Collaborated with backend & design teams, contributed to agile sprints and code reviews.\n\n**Education:** BS Information Technology (2020 – 2024)",
  about:
    "I'm **Ali Haider**, a MERN Stack Developer based in **Sialkot, Pakistan**. I'm a proactive, detail-oriented developer with a solid background in web app development. I hold a **BS in Information Technology** (2020–2024). I thrive in fast-paced environments, learn new technologies quickly, and focus on continuous improvement and innovation. I speak **Urdu**, **Punjabi**, and **English**.",
  hello:
    "Hey there! 👋 I'm Haider's portfolio assistant. I can tell you about his skills, projects, experience, and how to get in touch. What would you like to know?",
  default:
    "That's a great question! I can help with info about Haider's **skills**, **projects**, **experience**, or **contact details**. Try asking about one of those, or use the quick actions below!",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase().trim();

  if (/^(hi|hello|hey|yo|sup|what'?s up|howdy)/.test(lower)) return PORTFOLIO_DATA.hello;
  if (/skill|tech|stack|language|tool|framework|what (do|can) you (do|use|know)/.test(lower)) return PORTFOLIO_DATA.skills;
  if (/project|work|portfolio|built|build|made|create/.test(lower)) return PORTFOLIO_DATA.projects;
  if (/contact|reach|email|hire|connect|get in touch|message/.test(lower)) return PORTFOLIO_DATA.contact;
  if (/experience|background|career|job|history|year/.test(lower)) return PORTFOLIO_DATA.experience;
  if (/about|who|tell me about|yourself|introduce/.test(lower)) return PORTFOLIO_DATA.about;

  return PORTFOLIO_DATA.default;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi! 👋 I'm Haider's portfolio assistant. Ask me anything about his skills, projects, or experience!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleScroll = () => {
    const el = messagesContainerRef.current;
    if (!el) return;
    const isNearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
    setShowScrollDown(!isNearBottom);
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: [
            {
              role: 'system',
              content: `You are a friendly and professional AI assistant embedded on Ali Haider's portfolio website. Your primary job is to answer questions about Ali Haider using ONLY the data provided below. For general knowledge questions unrelated to the portfolio, you may answer normally but keep it concise.

=== ALI HAIDER'S PORTFOLIO DATA ===

About: ${PORTFOLIO_DATA.about}

Skills & Technologies: ${PORTFOLIO_DATA.skills}

Projects: ${PORTFOLIO_DATA.projects}

Work Experience: ${PORTFOLIO_DATA.experience}

Contact Information: ${PORTFOLIO_DATA.contact}

=== END OF DATA ===

Rules:
- For portfolio-related questions, ONLY use the data above. Do not make up or assume anything beyond it.
- Keep responses concise (2-4 sentences unless detail is needed).
- Be friendly and professional.
- If someone says hi/hello, introduce yourself as Haider's portfolio assistant.
- For general questions (e.g. "what is React?"), answer briefly and helpfully.`,
            },
            {
              role: 'user',
              content: text,
            },
          ],
          max_tokens: 300,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      const botMsg: Message = {
        id: crypto.randomUUID(),
        text: data.choices[0]?.message?.content || getResponse(text),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      // Fallback to local responses if API fails
      const botMsg: Message = {
        id: crypto.randomUUID(),
        text: getResponse(text),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  // Render markdown-lite (bold only)
  const renderText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="text-primary font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <>
      {/* Floating toggle button */}
      <motion.button
        onClick={() => setIsOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Ping indicator */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-primary border-2 border-primary-foreground" />
          </span>
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 flex w-[370px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-border/60 shadow-2xl"
            style={{ height: "min(520px, calc(100vh - 8rem))" }}
          >
            {/* Header */}
            <div className="relative flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-secondary to-card border-b border-border/40">
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 ring-2 ring-primary/30">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-secondary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground leading-tight">Haider's Assistant</h3>
                <p className="text-xs text-muted-foreground">Ask me anything about the portfolio</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={messagesContainerRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/95 backdrop-blur-sm"
              style={{ scrollbarWidth: "thin", scrollbarColor: "hsl(var(--border)) transparent" }}
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex gap-2.5 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  {/* Avatar */}
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs ${
                      msg.sender === "bot"
                        ? "bg-primary/15 text-primary ring-1 ring-primary/20"
                        : "bg-muted text-muted-foreground ring-1 ring-border"
                    }`}
                  >
                    {msg.sender === "bot" ? <Bot className="h-3.5 w-3.5" /> : <User className="h-3.5 w-3.5" />}
                  </div>

                  {/* Bubble */}
                  <div
                    className={`max-w-[75%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-secondary/80 text-foreground rounded-bl-md border border-border/30"
                    }`}
                  >
                    {msg.sender === "bot" ? renderText(msg.text) : msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/20">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                  <div className="rounded-2xl rounded-bl-md bg-secondary/80 border border-border/30 px-4 py-3 flex items-center gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Scroll-to-bottom button */}
            <AnimatePresence>
              {showScrollDown && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={scrollToBottom}
                  className="absolute bottom-[140px] left-1/2 -translate-x-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-secondary border border-border shadow-md text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowDown className="h-4 w-4" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Quick actions */}
            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-1.5 px-4 py-2 bg-background/95 border-t border-border/30">
                {QUICK_ACTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs text-primary hover:bg-primary/15 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-border/40 bg-secondary/40 px-4 py-3">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                disabled={isTyping}
              />
              <motion.button
                type="submit"
                disabled={!input.trim() || isTyping}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
              >
                <Send className="h-4 w-4" />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
