import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Microscope, Laptop, Users } from "lucide-react"

interface ScholarshipTabsProps {
  onLearnMore: (scholarship: string) => void;
}

const scholarships = [
  {
    id: "science-technology",
    title: "Science & Technology Undergraduate",
    description: "Full scholarship for students pursuing STEM degrees",
    icon: Microscope,
    benefits: ["Full tuition", "Monthly stipend", "Books allowance", "Thesis allowance"],
    eligibility: "High school graduates with strong science and math background",
    color: "bg-blue-50 border-dost-blue"
  },
  {
    id: "junior-level",
    title: "Junior Level Science Teaching",
    description: "Scholarship for future science teachers",
    icon: BookOpen,
    benefits: ["Full tuition", "Monthly stipend", "Teaching materials", "Service obligation"],
    eligibility: "College students in education or science programs",
    color: "bg-yellow-50 border-dost-yellow"
  },
  {
    id: "senior-high",
    title: "Senior High School",
    description: "Support for STEM strand students",
    icon: GraduationCap,
    benefits: ["Tuition assistance", "Learning materials", "Uniforms allowance"],
    eligibility: "Students enrolled in STEM strand",
    color: "bg-green-50 border-green-500"
  },
  {
    id: "vocational",
    title: "Vocational Education & Training",
    description: "Technical skills development programs",
    icon: Laptop,
    benefits: ["Training fees", "Tools and equipment", "Certification support"],
    eligibility: "High school graduates or equivalent",
    color: "bg-purple-50 border-purple-500"
  },
  {
    id: "merit",
    title: "Merit Scholarship",
    description: "For academically excellent students",
    icon: Users,
    benefits: ["Full tuition", "High monthly stipend", "Research allowance", "Conference support"],
    eligibility: "Top-performing students with exceptional academic records",
    color: "bg-orange-50 border-orange-500"
  }
];

const ScholarshipTabs = ({ onLearnMore }: ScholarshipTabsProps) => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dost-blue mb-4">
            DOST Scholarship Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive scholarship programs designed to support Filipino students in science, technology, and education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scholarships.map((scholarship) => {
            const Icon = scholarship.icon;
            return (
              <Card 
                key={scholarship.id} 
                className={`p-6 scholarship-tab cursor-pointer hover:shadow-xl border-2 ${scholarship.color} transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-8 h-8 text-dost-blue mr-3" />
                  <h3 className="text-lg font-semibold text-dost-blue">
                    {scholarship.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {scholarship.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-dost-blue mb-2">Benefits:</h4>
                  <div className="flex flex-wrap gap-1">
                    {scholarship.benefits.slice(0, 2).map((benefit, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                    {scholarship.benefits.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{scholarship.benefits.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-dost-blue mb-1">Eligibility:</h4>
                  <p className="text-xs text-muted-foreground">
                    {scholarship.eligibility}
                  </p>
                </div>

                <Button
                  variant="dostOutline"
                  size="sm"
                  className="w-full"
                  onClick={() => onLearnMore(scholarship.id)}
                >
                  Learn More
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScholarshipTabs;