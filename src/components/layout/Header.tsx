import { Link } from "react-router-dom";
import YoutubeLogo from "../ui/YoutubeLogo";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <YoutubeLogo />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
            <Link to="/audio-science" className="nav-link">
              Audio Science
            </Link>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </div>
          
          {/* Mobile menu button - could be expanded later */}
          <div className="md:hidden">
            <button className="p-2 text-foreground">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;