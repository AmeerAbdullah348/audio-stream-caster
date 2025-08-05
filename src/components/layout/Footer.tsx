import { Link } from "react-router-dom";
import YoutubeLogo from "../ui/YoutubeLogo";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <YoutubeLogo />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional online tool for converting YouTube videos to high-quality WAV audio files. 
              Free, fast, and secure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  YouTube to WAV Converter
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/audio-science" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Audio Science
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/dmca" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  DMCA
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Notice */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal Notice</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              This tool is for converting copyright-free content only. 
              <span className="font-semibold text-foreground block mt-2">
                Only for personal & non-commercial use.
              </span>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 YouTube to WAV Converter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;