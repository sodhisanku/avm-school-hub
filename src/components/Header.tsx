
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

  const navigationItems = [
    {
      label: "Home",
      path: "/",
      hasDropdown: true,
      dropdownItems: [
        { label: "Dashboard", path: "/" },
        { label: "Welcome Message", path: "/welcome" },
      ]
    },
    {
      label: "About Us",
      path: "/about",
      hasDropdown: true,
      dropdownItems: [
        { label: "About School", path: "/about" },
        { label: "Vision & Mission", path: "/about/vision-mission" },
        { label: "Principal's Desk", path: "/about/principal" },
      ]
    },
    {
      label: "Academics",
      path: "/academics",
      hasDropdown: true,
      dropdownItems: [
        { label: "Academic Programs", path: "/academics" },
        { label: "Curriculum", path: "/academics/curriculum" },
        { label: "Academic Calendar", path: "/academics/calendar" },
      ]
    },
    {
      label: "Students",
      path: "/students",
      hasDropdown: true,
      dropdownItems: [
        { label: "Student Life", path: "/students" },
        { label: "Clubs", path: "/students/clubs" },
        { label: "Achievements", path: "/students/achievements" },
      ]
    },
    {
      label: "Teachers",
      path: "/teachers",
      hasDropdown: true,
      dropdownItems: [
        { label: "Our Teachers", path: "/teachers" },
        { label: "Teacher Training", path: "/teachers/training" },
      ]
    },
    {
      label: "Admission",
      path: "/admission",
      hasDropdown: true,
      dropdownItems: [
        { label: "Process", path: "/admission" },
        { label: "Eligibility", path: "/admission/eligibility" },
        { label: "Documents", path: "/admission/documents" },
      ]
    },
    {
      label: "Gallery",
      path: "/gallery",
      hasDropdown: true,
      dropdownItems: [
        { label: "Photos", path: "/gallery" },
        { label: "Videos", path: "/gallery/videos" },
        { label: "Events", path: "/gallery/events" },
      ]
    },
    {
      label: "News",
      path: "/news",
      hasDropdown: true,
      dropdownItems: [
        { label: "Latest News", path: "/news" },
        { label: "Events", path: "/news/events" },
        { label: "Media", path: "/news/media" },
      ]
    },
    {
      label: "Contact",
      path: "/contact",
      hasDropdown: true,
      dropdownItems: [
        { label: "Contact Form", path: "/contact" },
        { label: "Location & Map", path: "/contact/map" },
        { label: "Reach Us", path: "/contact/reach-us" },
        { label: "Feedback", path: "/contact/feedback" },
      ]
    },
  ];

  const isActive = (path: string) => location.pathname === path;
  
  const isParentActive = (item: typeof navigationItems[0]) => {
    return item.dropdownItems.some(dropdownItem => location.pathname === dropdownItem.path);
  };

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
            {navigationItems.map((item) => (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                      isParentActive(item)
                        ? "bg-school-primary text-school-text-light"
                        : "text-foreground hover:bg-school-primary/10 hover:text-school-primary"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {item.dropdownItems.map((dropdownItem) => (
                    <DropdownMenuItem key={dropdownItem.label} asChild>
                      <Link
                        to={dropdownItem.path}
                        className={`w-full ${
                          isActive(dropdownItem.path)
                            ? "bg-school-primary/10 text-school-primary font-medium"
                            : ""
                        }`}
                      >
                        {dropdownItem.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
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
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <div className="px-4 py-2 text-sm font-medium text-muted-foreground">
                    {item.label}
                  </div>
                  {item.dropdownItems.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.label}
                      to={dropdownItem.path}
                      className={`pl-6 pr-4 py-2 rounded-md text-sm font-medium transition-colors block ${
                        isActive(dropdownItem.path)
                          ? "bg-school-primary text-school-text-light"
                          : "text-foreground hover:bg-school-primary/10 hover:text-school-primary"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
