import { useState } from "react"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ScholarshipTabs from "@/components/ScholarshipTabs"
import RoleSelector from "@/components/RoleSelector"
import ChatInterface from "@/components/ChatInterface"
import Footer from "@/components/Footer"

type UserRole = 'applicant' | 'parent' | 'scholar' | null;
type CurrentPage = 'home' | 'chat';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<CurrentPage>('home');
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [showRoleSelector, setShowRoleSelector] = useState(false);

  const handleStartChat = () => {
    setShowRoleSelector(true);
  };

  const handleRoleSelect = (role: UserRole) => {
    setUserRole(role);
    setShowRoleSelector(false);
    setCurrentPage('chat');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setShowRoleSelector(false);
  };

  const handleNavigation = (page: CurrentPage) => {
    if (page === 'chat' && !userRole) {
      setShowRoleSelector(true);
    } else {
      setCurrentPage(page);
    }
  };

  const handleLearnMore = (scholarshipId: string) => {
    // This would typically show more details about the specific scholarship
    // For now, it will start the chat with a pre-filled question
    setShowRoleSelector(true);
  };

  if (showRoleSelector) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header onNavigate={handleNavigation} currentPage={currentPage} />
        <div className="flex items-center justify-center py-16">
          <RoleSelector onRoleSelect={handleRoleSelect} />
        </div>
      </div>
    );
  }

  if (currentPage === 'chat' && userRole) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header onNavigate={handleNavigation} currentPage={currentPage} />
        <div className="flex-1 chat-container">
          <ChatInterface userRole={userRole} onBackToHome={handleBackToHome} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigation} currentPage={currentPage} />
      <HeroSection onStartChat={handleStartChat} />
      <ScholarshipTabs onLearnMore={handleLearnMore} />
      <Footer />
    </div>
  );
};

export default Index;
