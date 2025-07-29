import { Button } from "@/components/ui/button"
import { MessageCircle, Home } from "lucide-react"

interface HeaderProps {
  onNavigate: (page: 'home' | 'chat') => void;
  currentPage: 'home' | 'chat';
}

const Header = ({ onNavigate, currentPage }: HeaderProps) => {
  return (
    <header className="w-full bg-white border-b-2 border-dost-blue shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-dost-blue rounded-lg flex items-center justify-center">
              <MessageCircle className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-dost-blue">AskDOST</h1>
              <p className="text-xs text-muted-foreground">AI Scholarship Assistant</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            <Button
              variant={currentPage === 'home' ? 'dost' : 'ghost'}
              size="sm"
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Home
            </Button>
            <Button
              variant={currentPage === 'chat' ? 'dost' : 'dostOutline'}
              size="sm"
              onClick={() => onNavigate('chat')}
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Ask Questions
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;