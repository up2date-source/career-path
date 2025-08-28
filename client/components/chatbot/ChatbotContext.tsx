import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'options' | 'typing';
}

interface ChatbotContextType {
  isOpen: boolean;
  messages: ChatMessage[];
  isTyping: boolean;
  toggleChat: () => void;
  sendMessage: (content: string) => void;
  clearChat: () => void;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
};

interface ChatbotProviderProps {
  children: React.ReactNode;
}

export const ChatbotProvider: React.FC<ChatbotProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messageIdRef = useRef(0);

  // Welcome message on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: `msg-${messageIdRef.current++}`,
        content: "👋 Hi there! I'm CareerBot, your AI career guidance assistant. I can help you with:\n\n• Career exploration and recommendations\n• Skills assessment and development\n• Learning path suggestions\n• Job market insights\n• Resume and interview tips\n\nWhat can I help you with today?",
        sender: 'bot',
        timestamp: new Date(),
        type: 'text'
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const generateBotResponse = async (userMessage: string): Promise<string> => {
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    const message = userMessage.toLowerCase();
    
    // Career-related responses
    if (message.includes('career') || message.includes('job')) {
      if (message.includes('software') || message.includes('programming') || message.includes('developer')) {
        return "🚀 Software Engineering is an excellent choice! It's one of our fastest-growing career paths with:\n\n• 15,000+ job openings\n• +22% growth rate\n• $65k-$180k salary range\n• High demand for JavaScript, React, Python skills\n\nWould you like me to show you our detailed Software Engineering career path or take a skills assessment?";
      }
      
      if (message.includes('data') || message.includes('analytics') || message.includes('science')) {
        return "📊 Data Science is incredibly hot right now! Here's what makes it exciting:\n\n• +31% job growth (highest among tech careers)\n• $70k-$200k salary range\n• High demand for Python, SQL, ML skills\n• 8,500+ available positions\n\nI can guide you through our Data Science learning path or help assess your current skills. What interests you most?";
      }
      
      if (message.includes('design') || message.includes('ui') || message.includes('ux')) {
        return "🎨 UX/UI Design is perfect for creative problem-solvers! Key highlights:\n\n• Growing +13% annually\n• $55k-$160k salary range\n• High demand for Figma, user research skills\n• 3,800+ job opportunities\n\nWould you like to explore our design career path or learn about building a design portfolio?";
      }
      
      return "🎯 Great question about careers! We have 8 detailed career paths including:\n\n• Software Engineering (💻)\n• Data Science (📊) \n• Product Management (🎯)\n• UX/UI Design (🎨)\n• Cybersecurity (🔐)\n• DevOps Engineering (⚙️)\n• Digital Marketing (📱)\n• Cloud Architecture (☁️)\n\nWhich field interests you most? I can provide detailed insights!";
    }
    
    // Skills and learning responses
    if (message.includes('skill') || message.includes('learn') || message.includes('course')) {
      return "📚 Perfect! Skill development is key to career success. Here's how I can help:\n\n• **Skills Assessment**: Take our comprehensive assessment to identify your strengths\n• **Learning Paths**: Structured courses with projects and milestones\n• **Goal Tracking**: Monitor your progress and achievements\n• **Personalized Recommendations**: Based on your career goals\n\nWhat specific skills are you looking to develop? Or would you like to start with our skills assessment?";
    }
    
    // Assessment related
    if (message.includes('assessment') || message.includes('test') || message.includes('evaluate')) {
      return "🎯 Our Skills Assessment is a great starting point! It includes:\n\n• **Technical Skills**: Programming, tools, frameworks\n• **Soft Skills**: Communication, leadership, problem-solving\n• **Industry Knowledge**: Domain-specific expertise\n• **Career Readiness**: Interview prep, portfolio review\n\nThe assessment takes about 15-20 minutes and provides:\n✓ Detailed skill analysis\n✓ Personalized recommendations\n✓ Career path suggestions\n✓ Learning priorities\n\nReady to get started? I can guide you through it!";
    }
    
    // Salary and job market
    if (message.includes('salary') || message.includes('pay') || message.includes('money') || message.includes('market')) {
      return "💰 Here's current salary data across our career paths:\n\n**High Growth Fields:**\n• Data Science: $70k-$200k (+31% growth)\n• Cybersecurity: $75k-$190k (+35% growth)\n• Cloud Architecture: $95k-$220k (+28% growth)\n• DevOps Engineering: $70k-$175k (+25% growth)\n\n**Stable High-Paying:**\n• Software Engineering: $65k-$180k\n• Product Management: $80k-$220k\n\nSalaries vary by location, experience, and company size. Would you like specific data for any field or location?";
    }
    
    // Resume and interview help
    if (message.includes('resume') || message.includes('cv') || message.includes('interview')) {
      return "📝 I'd love to help with your job search materials! Here are our resources:\n\n**Resume Optimization:**\n• ATS-friendly formatting\n• Skills-based content\n• Industry-specific keywords\n• Achievement quantification\n\n**Interview Preparation:**\n• Common technical questions\n• Behavioral interview prep\n• Mock interview practice\n• Portfolio presentation tips\n\nWhich area would you like to focus on first? I can provide specific guidance based on your target role.";
    }
    
    // Goal setting and planning
    if (message.includes('goal') || message.includes('plan') || message.includes('roadmap')) {
      return "🎯 Goal setting is crucial for career success! Our Goal Tracking system helps you:\n\n**Set SMART Goals:**\n• Specific skill development targets\n• Measurable progress milestones\n• Time-bound objectives\n\n**Track Progress:**\n• Daily/weekly check-ins\n• Achievement badges\n• Progress visualization\n\n**Stay Motivated:**\n• Milestone celebrations\n• Peer comparisons\n• Success stories\n\nWould you like help setting up your first career goal? I can guide you through the process!";
    }
    
    // General help and greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "👋 Hello! Great to meet you! I'm here to help accelerate your career journey. Whether you're:\n\n• 🔍 Exploring new career paths\n• 📈 Looking to upskill\n• 🎯 Setting career goals\n• 💼 Preparing for job interviews\n\nI've got you covered! What's your biggest career challenge right now?";
    }
    
    if (message.includes('help') || message.includes('what') || message.includes('how')) {
      return "🤝 I'm here to help! As your AI career assistant, I can:\n\n**Career Guidance:**\n• Explore 8+ detailed career paths\n• Get salary and job market insights\n• Understand skill requirements\n\n**Skill Development:**\n• Take comprehensive assessments\n• Follow structured learning paths\n• Track your progress\n\n**Job Search Support:**\n• Resume optimization tips\n• Interview preparation\n• Portfolio guidance\n\n**Goal Achievement:**\n• Set and track career milestones\n• Get personalized recommendations\n\nWhat specific area interests you most?";
    }
    
    // Default response for unrecognized queries
    const defaultResponses = [
      "That's an interesting question! While I specialize in career guidance, I'd love to help you find the right resources. Could you tell me more about your career goals?",
      "I want to make sure I give you the most helpful information. Are you looking for guidance on career paths, skill development, or job search strategies?",
      "Let me help you with your career journey! What specific aspect would you like to explore - career options, skills assessment, or learning resources?",
      "I'm focused on helping with career development. Could you clarify how I can best assist you with your professional goals?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const sendMessage = async (content: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: `msg-${messageIdRef.current++}`,
      content,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    try {
      // Generate bot response
      const botResponse = await generateBotResponse(content);
      
      const botMessage: ChatMessage = {
        id: `msg-${messageIdRef.current++}`,
        content: botResponse,
        sender: 'bot',
        timestamp: new Date(),
        type: 'text'
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: `msg-${messageIdRef.current++}`,
        content: "I apologize, but I'm having trouble processing your request right now. Please try again in a moment, or feel free to explore our career resources directly!",
        sender: 'bot',
        timestamp: new Date(),
        type: 'text'
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    messageIdRef.current = 0;
  };

  return (
    <ChatbotContext.Provider value={{
      isOpen,
      messages,
      isTyping,
      toggleChat,
      sendMessage,
      clearChat
    }}>
      {children}
    </ChatbotContext.Provider>
  );
};
