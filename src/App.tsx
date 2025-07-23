
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Admission from "./pages/Admission";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Contact from "./pages/Contact";
import ContactFeedback from "./pages/ContactFeedback";
import NotFound from "./pages/NotFound";

// Home pages
import Dashboard from "./pages/Home/Dashboard";
import WelcomeMessage from "./pages/Home/WelcomeMessage";

// About pages
import AboutSchool from "./pages/About/AboutSchool";
import VisionMission from "./pages/About/VisionMission";
import Principal from "./pages/About/Principal";

// Academic pages
import AcademicPrograms from "./pages/Academics/AcademicPrograms";
import Curriculum from "./pages/Academics/Curriculum";
import Calendar from "./pages/Academics/Calendar";

// Student pages
import StudentLife from "./pages/Students/StudentLife";
import Clubs from "./pages/Students/Clubs";
import Achievements from "./pages/Students/Achievements";

// Teacher pages
import OurTeachers from "./pages/Teachers/OurTeachers";
import Training from "./pages/Teachers/Training";

// Admission pages
import Process from "./pages/Admission/Process";
import Eligibility from "./pages/Admission/Eligibility";
import Documents from "./pages/Admission/Documents";

// Gallery pages
import Photos from "./pages/Gallery/Photos";
import Videos from "./pages/Gallery/Videos";
import GalleryEvents from "./pages/Gallery/Events";

// News pages
import Latest from "./pages/News/Latest";
import NewsEvents from "./pages/News/NewsEvents";
import Media from "./pages/News/Media";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/welcome" element={<WelcomeMessage />} />
              
              <Route path="/about" element={<AboutSchool />} />
              <Route path="/about/vision-mission" element={<VisionMission />} />
              <Route path="/about/principal" element={<Principal />} />
              
              <Route path="/academics" element={<AcademicPrograms />} />
              <Route path="/academics/curriculum" element={<Curriculum />} />
              <Route path="/academics/calendar" element={<Calendar />} />
              
              <Route path="/students" element={<StudentLife />} />
              <Route path="/students/clubs" element={<Clubs />} />
              <Route path="/students/achievements" element={<Achievements />} />
              
              <Route path="/teachers" element={<OurTeachers />} />
              <Route path="/teachers/training" element={<Training />} />
              
              <Route path="/admission" element={<Process />} />
              <Route path="/admission/eligibility" element={<Eligibility />} />
              <Route path="/admission/documents" element={<Documents />} />
              
              <Route path="/gallery" element={<Photos />} />
              <Route path="/gallery/videos" element={<Videos />} />
              <Route path="/gallery/events" element={<GalleryEvents />} />
              
              <Route path="/news" element={<Latest />} />
              <Route path="/news/events" element={<NewsEvents />} />
              <Route path="/news/media" element={<Media />} />
              
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact/map" element={<Contact />} />
              <Route path="/contact/reach-us" element={<Contact />} />
              <Route path="/contact/feedback" element={<ContactFeedback />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
