
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Students", href: "/students" },
    { name: "Teachers", href: "/teachers" },
    { name: "Admission", href: "/admission" },
    { name: "Gallery", href: "/gallery" },
    { name: "News", href: "/news" },
  ];

  const contactItems = [
    { name: "Contact Form", href: "/contact" },
    { name: "Location & Map", href: "/contact/map" },
    { name: "Reach Us", href: "/contact/reach-us" },
    { name: "Feedback", href: "/contact/feedback" },
  ];

  const isActive = (href: string) => location.pathname === href;
  const isContactActive = contactItems.some(item => location.pathname === item.href);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="bg-school-primary text-school-text-light py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@asthavidyamandir.edu.in</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Excellence in Education Since 1985</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-school-primary p-2 rounded-lg">
              <GraduationCap className="h-8 w-8 text-school-text-light" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-school-primary">Astha Vidya Mandir</h1>
              <p className="text-sm text-muted-foreground">Excellence in Education</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-school-primary text-school-text-light"
                    : "text-foreground hover:bg-school-primary/10 hover:text-school-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Contact Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                    isContactActive
                      ? "bg-school-primary text-school-text-light"
                      : "text-foreground hover:bg-school-primary/10 hover:text-school-primary"
                  }`}
                >
                  Contact
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {contactItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className={`w-full ${
                        isActive(item.href)
                          ? "bg-school-primary/10 text-school-primary font-medium"
                          : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-school-primary text-school-text-light"
                      : "text-foreground hover:bg-school-primary/10 hover:text-school-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Contact Section */}
              <div className="pt-2">
                <div className="px-4 py-2 text-sm font-medium text-muted-foreground">
                  Contact
                </div>
                {contactItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`pl-6 pr-4 py-2 rounded-md text-sm font-medium transition-colors block ${
                      isActive(item.href)
                        ? "bg-school-primary text-school-text-light"
                        : "text-foreground hover:bg-school-primary/10 hover:text-school-primary"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
