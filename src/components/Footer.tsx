import { Button } from '@/components/ui/button';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const services = [
    'Website Development',
    'WordPress Customization',
    'E-commerce Solutions',
    'Speed Optimization',
    'SEO & Marketing',
    'UI/UX Design'
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/waahidulSami', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/wahidul-islam-sami-804330341/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:wahidulislamsami5@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-background border-t border-border/50 relative">
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        variant="hero"
        size="icon"
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full shadow-glow-purple"
      >
        <ArrowUp size={20} />
      </Button>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Sami<span className="text-foreground">.</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  WordPress & Front-End Developer passionate about creating exceptional web experiences. 
                  I help businesses grow online with fast, responsive, and user-friendly websites.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted/30 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-muted-foreground text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <span>© 2024 Sami. Made with</span>
                <Heart size={16} className="text-red-400 fill-current" />
                <span>and lots of coffee</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Get In Touch
                </button>
                <a 
                  href="/privacy" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;