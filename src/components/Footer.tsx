
import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8" />
              <div>
                <h3 className="font-bold text-lg">Astha Vidya Mandir</h3>
                <p className="text-sm text-blue-200">Excellence in Education</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm mb-4">
              Committed to providing quality education and nurturing young minds for a better tomorrow.
            </p>
            <div className="flex space-x-3">
              <Facebook className="h-5 w-5 text-blue-200 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-blue-200 hover:text-white cursor-pointer" />
              <Youtube className="h-5 w-5 text-blue-200 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-blue-200 hover:text-white">About Us</Link></li>
              <li><Link to="/academics" className="text-blue-200 hover:text-white">Academics</Link></li>
              <li><Link to="/admission" className="text-blue-200 hover:text-white">Admission</Link></li>
              <li><Link to="/teachers" className="text-blue-200 hover:text-white">Teachers</Link></li>
              <li><Link to="/gallery" className="text-blue-200 hover:text-white">Gallery</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/news" className="text-blue-200 hover:text-white">News & Events</Link></li>
              <li><Link to="/students" className="text-blue-200 hover:text-white">Student Corner</Link></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Downloads</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Notifications</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Calendar</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-200" />
                <span className="text-blue-200">123 Education Street, Learning City, State 123456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-200" />
                <span className="text-blue-200">+91-XXXX-XXXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-200" />
                <span className="text-blue-200">info@asthavidyamandir.edu.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-blue-200">
              © 2024 Astha Vidya Mandir. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="text-blue-200 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-white">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
