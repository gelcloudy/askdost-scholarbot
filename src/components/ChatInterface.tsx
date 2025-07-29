import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, ThumbsUp, ThumbsDown, User, Bot, MessageCircle } from "lucide-react"
import Footer from "./Footer"

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  feedback?: 'helpful' | 'not-helpful';
}

interface ChatInterfaceProps {
  userRole: 'applicant' | 'parent' | 'scholar';
  onBackToHome: () => void;
}

const ChatInterface = ({ userRole, onBackToHome }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: `Hello! I'm your DOST scholarship assistant. I see you're here as a ${userRole}. I'm ready to help you with any questions about DOST scholarships, requirements, application processes, and more. What would you like to know?`,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: `I understand you're asking about "${newMessage}". As a ${userRole}, here's what I can tell you: This is a simulated response. In the actual implementation, this would connect to OpenAI GPT-4 to provide accurate, personalized answers about DOST scholarships based on your role and specific question.`,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleFeedback = (messageId: string, feedback: 'helpful' | 'not-helpful') => {
    setMessages(prev =>
      prev.map(msg =>
        msg.id === messageId ? { ...msg, feedback } : msg
      )
    );
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'applicant': return 'bg-blue-100 text-blue-800';
      case 'parent': return 'bg-yellow-100 text-yellow-800';
      case 'scholar': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const suggestedQuestions = [
    "What are the requirements for DOST undergraduate scholarship?",
    "How do I apply for a DOST scholarship?",
    "What is the monthly stipend amount?",
    "Can I change my course while on scholarship?",
    "What are my obligations as a DOST scholar?"
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-dost-blue rounded-full flex items-center justify-center">
              <MessageCircle className="text-white w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-dost-blue">DOST Scholarship Assistant</h3>
              <div className="flex items-center gap-2">
                <Badge className={getRoleColor(userRole)} variant="secondary">
                  {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
                </Badge>
                <span className="text-xs text-muted-foreground">Online</span>
              </div>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={onBackToHome}>
            Back to Home
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.sender === 'bot' && (
              <div className="w-8 h-8 bg-dost-blue rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="text-white w-4 h-4" />
              </div>
            )}
            <div className="max-w-md">
              <Card className={`p-3 ${
                message.sender === 'user' 
                  ? 'bg-dost-blue text-white' 
                  : 'bg-white border border-gray-200'
              }`}>
                <p className="text-sm">{message.content}</p>
              </Card>
              <div className="flex items-center gap-2 mt-1 px-1">
                <span className="text-xs text-muted-foreground">
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </span>
                {message.sender === 'bot' && (
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`h-6 w-6 p-0 hover:bg-green-100 ${
                        message.feedback === 'helpful' ? 'bg-green-100 text-green-600' : ''
                      }`}
                      onClick={() => handleFeedback(message.id, 'helpful')}
                    >
                      <ThumbsUp className="w-3 h-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`h-6 w-6 p-0 hover:bg-red-100 ${
                        message.feedback === 'not-helpful' ? 'bg-red-100 text-red-600' : ''
                      }`}
                      onClick={() => handleFeedback(message.id, 'not-helpful')}
                    >
                      <ThumbsDown className="w-3 h-3" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
            {message.sender === 'user' && (
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="text-gray-600 w-4 h-4" />
              </div>
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 bg-dost-blue rounded-full flex items-center justify-center">
              <Bot className="text-white w-4 h-4" />
            </div>
            <Card className="p-3 bg-white border border-gray-200">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </Card>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      {messages.length === 1 && (
        <div className="p-4 border-t border-gray-200 bg-white">
          <p className="text-sm font-medium text-muted-foreground mb-3">
            Suggested questions:
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs h-8"
                onClick={() => setNewMessage(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Ask anything about DOST scholarships..."
            className="flex-1"
            disabled={isTyping}
          />
          <Button 
            type="submit" 
            variant="dost" 
            disabled={!newMessage.trim() || isTyping}
            className="px-4"
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          This is a demo. In production, responses would be powered by AI trained on DOST scholarship information.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ChatInterface;