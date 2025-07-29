import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Heart, GraduationCap, ArrowRight } from "lucide-react"
import Footer from "./Footer"

interface RoleSelectorProps {
  onRoleSelect: (role: 'applicant' | 'parent' | 'scholar') => void;
}

const roles = [
  {
    id: 'applicant' as const,
    title: 'Student/Applicant',
    description: 'I\'m a student interested in applying for DOST scholarships',
    icon: User,
    color: 'bg-blue-50 hover:bg-blue-100 border-dost-blue'
  },
  {
    id: 'parent' as const,
    title: 'Parent/Guardian',
    description: 'I\'m a parent helping my child with scholarship applications and inquiries',
    icon: Heart,
    color: 'bg-yellow-50 hover:bg-yellow-100 border-dost-yellow'
  },
  {
    id: 'scholar' as const,
    title: 'Ongoing Scholar',
    description: 'I\'m already a DOST scholar with questions about my scholarship',
    icon: GraduationCap,
    color: 'bg-green-50 hover:bg-green-100 border-green-500'
  }
];

const RoleSelector = ({ onRoleSelect }: RoleSelectorProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-dost-blue mb-4">
          Who are you?
        </h2>
        <p className="text-lg text-muted-foreground">
          Select your role to get personalized assistance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roles.map((role) => {
          const Icon = role.icon;
          return (
            <Card 
              key={role.id}
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${role.color}`}
              onClick={() => onRoleSelect(role.id)}
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-dost-blue" />
                </div>
                <h3 className="text-lg font-semibold text-dost-blue mb-2">
                  {role.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {role.description}
                </p>
                <Button
                  variant="dost"
                  size="sm"
                  className="w-full group"
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="text-center mt-6">
      </div>
    </div>
  );
};

export default RoleSelector;