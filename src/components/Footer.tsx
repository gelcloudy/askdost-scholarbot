import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="w-full bg-dost-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-dost-yellow">About AskDOST</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              AskDOST is an AI-powered assistant designed to help students and families 
              navigate DOST scholarship programs with accurate, personalized support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-dost-yellow">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#scholarships" className="text-white/80 hover:text-white transition-colors">Scholarship Programs</a></li>
              <li><a href="#requirements" className="text-white/80 hover:text-white transition-colors">Requirements</a></li>
              <li><a href="#application" className="text-white/80 hover:text-white transition-colors">How to Apply</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-dost-yellow">Contact DOST-SEI</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-dost-yellow" />
                <span className="text-white/80">(02) 8837-2071</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-dost-yellow" />
                <span className="text-white/80">info@sei.dost.gov.ph</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-dost-yellow mt-0.5" />
                <span className="text-white/80">
                  DOST Compound, General Santos Ave.,<br />
                  Bicutan, Taguig City 1631
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-dost-yellow">Follow DOST-SEI</h3>
            <div className="flex gap-3 mb-4">
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-white/10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-white/80 text-sm">
              Stay updated with the latest scholarship announcements and opportunities.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 Department of Science and Technology - Science Education Institute. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#privacy" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#feedback" className="text-white/60 hover:text-white text-sm transition-colors">Feedback</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;