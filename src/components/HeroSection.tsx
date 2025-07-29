import { Button } from "@/components/ui/button"
import { MessageCircle, Users, GraduationCap, Heart } from "lucide-react"

interface HeroSectionProps {
  onStartChat: () => void;
}

const HeroSection = ({ onStartChat }: HeroSectionProps) => {
  return (
    <section className="w-full dost-gradient text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get Instant Answers About
            <span className="block text-dost-yellow">DOST Scholarships</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Our AI-powered assistant provides fast, accurate, and personalized support for all your DOST scholarship questions.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8 text-dost-yellow" />
              </div>
              <h3 className="text-2xl font-bold">24/7</h3>
              <p className="text-white/80">Available Support</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <GraduationCap className="w-8 h-8 text-dost-yellow" />
              </div>
              <h3 className="text-2xl font-bold">90%+</h3>
              <p className="text-white/80">Accuracy Rate</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Heart className="w-8 h-8 text-dost-yellow" />
              </div>
              <h3 className="text-2xl font-bold">1000+</h3>
              <p className="text-white/80">Students Helped</p>
            </div>
          </div>

          <Button
            variant="dostYellow"
            size="xl"
            onClick={onStartChat}
            className="shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Start Asking Questions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;