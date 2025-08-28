import React, { useRef, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChatbot } from './ChatbotContext';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Minimize2, 
  RotateCcw, 
  Sparkles,
  Clock,
  Loader2
} from 'lucide-react';

const TypingIndicator = () => (
  <div className="flex items-center space-x-1 p-3 bg-muted rounded-lg max-w-20">
    <Bot className="h-4 w-4 text-primary" />
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
    </div>
  </div>
);

const ChatMessage: React.FC<{ message: any }> = ({ message }) => {
  const isBot = message.sender === 'bot';
  
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`flex items-start space-x-2 max-w-[80%] ${isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isBot ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
        }`}>
          {isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
        </div>
        <div className={`p-3 rounded-lg ${
          isBot 
            ? 'bg-muted text-foreground' 
            : 'bg-primary text-primary-foreground'
        }`}>
          <div className="text-sm whitespace-pre-wrap leading-relaxed">
            {message.content}
          </div>
          <div className={`text-xs mt-1 opacity-70 ${
            isBot ? 'text-muted-foreground' : 'text-primary-foreground/70'
          }`}>
            {new Date(message.timestamp).toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const QuickActions = ({ onActionClick }: { onActionClick: (action: string) => void }) => {
  const actions = [
    { label: "Explore Careers", action: "I want to explore different career paths" },
    { label: "Skills Assessment", action: "I want to take a skills assessment" },
    { label: "Learning Paths", action: "Show me learning paths" },
    { label: "Salary Info", action: "What are current salary ranges for tech jobs?" }
  ];

  return (
    <div className="mb-4">
      <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
        <Sparkles className="h-3 w-3" />
        Quick actions
      </div>
      <div className="flex flex-wrap gap-2">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="text-xs h-7"
            onClick={() => onActionClick(action.action)}
          >
            {action.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export const Chatbot: React.FC = () => {
  const { isOpen, messages, isTyping, toggleChat, sendMessage, clearChat } = useChatbot();
  const [inputValue, setInputValue] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      sendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickAction = (action: string) => {
    sendMessage(action);
  };

  // Floating toggle button
  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          size="lg"
          className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary group"
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </Button>
        <Badge 
          variant="destructive" 
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0 flex items-center justify-center animate-bounce"
        >
          <Sparkles className="h-3 w-3" />
        </Badge>
      </div>
    );
  }

  // Main chat interface
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-96 transition-all duration-300 shadow-2xl ${
        isMinimized ? 'h-16' : 'h-[600px]'
      }`}>
        {/* Header */}
        <CardHeader className="pb-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <CardTitle className="text-sm">CareerBot</CardTitle>
                <div className="text-xs opacity-90 flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  AI Career Assistant
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="h-8 w-8 p-0 hover:bg-primary-foreground/20"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearChat}
                className="h-8 w-8 p-0 hover:bg-primary-foreground/20"
                title="Clear chat"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleChat}
                className="h-8 w-8 p-0 hover:bg-primary-foreground/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {/* Chat content - only show when not minimized */}
        {!isMinimized && (
          <>
            <CardContent className="p-0 flex-1 flex flex-col h-[calc(600px-120px)]">
              {/* Messages area */}
              <ScrollArea className="flex-1 p-4">
                {messages.length === 0 && (
                  <div className="text-center py-8">
                    <Bot className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Starting conversation...
                    </p>
                  </div>
                )}
                
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                
                {isTyping && (
                  <div className="flex justify-start mb-4">
                    <TypingIndicator />
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </ScrollArea>

              {/* Quick actions - show only when no messages or when appropriate */}
              {messages.length <= 1 && !isTyping && (
                <div className="px-4">
                  <QuickActions onActionClick={handleQuickAction} />
                </div>
              )}

              {/* Input area */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about careers, skills, or learning paths..."
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    size="sm"
                    className="px-3"
                  >
                    {isTyping ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <div className="text-xs text-muted-foreground mt-2 text-center">
                  Powered by AI • CareerPath Assistant
                </div>
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
};

export default Chatbot;
