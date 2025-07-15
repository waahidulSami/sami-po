import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import samiAvatar from '@/assets/sami-avatar.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/waahidulSami', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/wahidul-islam-sami-804330341/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:wahidulislamsami5@gmail.com', label: 'Email' },
  ];

  return (
<section
  id="hero"
  className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-32 pb-20 sm:pb-24"

      style={{
        backgroundImage: `linear-gradient(rgba(34, 34, 58, 0.8), rgba(34, 34, 58, 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-scale-in">
            <div className="w-32 h-32 mx-auto rounded-full border-4 border-primary/30 p-1 bg-card-gradient shadow-glow-purple">
              <img
                src={samiAvatar}
                alt="Sami - Web Developer"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-6 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="text-primary animate-glow-pulse">Sami</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              WordPress & Front-End Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I create fast, responsive, and user-friendly websites that help businesses grow online. 
              Specializing in WordPress development, custom designs, and performance optimization.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              View My Work
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="glass"
              size="xl"
              onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vQnn4v4Y3aJKrkIls5oo7dDjzmFmE-jr99GLkYkIiaz5lDvbXcmo76z_vRSY9_-eECnyHCGNzLiii_P/pub', '_blank')}
              className="group"
            >
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
<div className="flex justify-center space-x-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
  {socialLinks.map((social) => (
    <a
      key={social.label}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-card/20 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-card/30 transition-all duration-300 hover:scale-110"
      aria-label={social.label}
    >
      <social.icon size={20} />
    </a>
  ))}
</div>

        </div>
      </div>

      {/* Scroll Indicator */}
<div className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
  <button
    onClick={() => scrollToSection('about')}
    className="text-muted-foreground hover:text-primary transition-colors"
    aria-label="Scroll to About section"
  >
    <ArrowDown size={24} />
  </button>
</div>

    </section>
  );
};

export default Hero;