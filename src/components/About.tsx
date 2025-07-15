import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Award, Users, Coffee, Rocket, Heart } from 'lucide-react';
import samiAvatar from '@/assets/sami-avatar.jpg';

const About = () => {
  const stats = [
    { number: '3+', label: 'Years Experience', icon: Award },
    { number: '85+', label: 'Projects Completed', icon: Rocket },
    { number: '64+', label: 'Happy Clients', icon: Users },
    { number: '1000+', label: 'Cups of Coffee', icon: Coffee },
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'Every line of code is crafted with precision and attention to detail.',
      icon: '🎯'
    },
    {
      title: 'Client-Focused',
      description: 'Your success is my priority. I listen, understand, and deliver.',
      icon: '🤝'
    },
    {
      title: 'Innovation',
      description: 'Staying ahead with the latest technologies and best practices.',
      icon: '💡'
    }
  ];

  const skills = [
    { name: 'WordPress', level: 95 },
    { name: 'JavaScript/React', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Performance Optimization', level: 92 },
    { name: 'SEO', level: 88 }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Crafting digital experiences that blend creativity with functionality. 
              Let me help bring your vision to life.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Profile Section */}
            <div className="lg:col-span-1 animate-slide-in-left">
              <div className="relative mb-8">
                <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-elegant bg-card-gradient">
                  <img
                    src={samiAvatar}
                    alt="Sami - Web Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-glow-purple">
                  <Heart size={24} className="text-primary-foreground" />
                </div>
              </div>

              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-2">Sami</h3>
                <p className="text-primary font-semibold mb-4">WordPress & Frontend Developer</p>
                <p className="text-muted-foreground mb-6">
                  Based in [Your Location], working globally with clients who value quality and innovation.
                </p>
                <Button 
                  variant="glass" 
                  className="w-full lg:w-auto"
                  onClick={() => window.open('https://drive.google.com/file/d/1pij0vxUn9xa3GlEKgTA_fNzNf6kOo7SF/view?usp=sharing', '_blank')}
                >
                  <Download size={16} className="mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Story & Values */}
            <div className="lg:col-span-2 space-y-8 animate-slide-in-right">
              <div>
                <h3 className="text-2xl font-bold mb-6">My Story</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    My journey into web development began 3 years ago with a simple question: 
                    "How can I make the web a better place?" This curiosity led me down a path 
                    of continuous learning and growth.
                  </p>
                  <p>
                    Today, I specialize in creating lightning-fast WordPress websites and modern 
                    web applications that don't just look stunning—they perform exceptionally. 
                    From small business websites to complex e-commerce platforms, I've helped 
                    over 80 clients achieve their digital goals.
                  </p>
                  <p>
                    What sets me apart is my holistic approach: I don't just code, I solve problems. 
                    Whether it's optimizing site speed, improving user experience, or implementing 
                    the latest design trends, I ensure every project delivers real value.
                  </p>
                </div>
              </div>

              {/* Values Grid */}
              <div>
                <h4 className="text-xl font-bold mb-6">What Drives Me</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {values.map((value, index) => (
                    <Card key={index} className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl mb-3">{value.icon}</div>
                        <h5 className="font-semibold mb-2">{value.title}</h5>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card">
                <CardContent className="p-6 text-center">
                  <stat.icon size={32} className="text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Section */}
          <div className="bg-card-gradient rounded-3xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Expertise</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life. Whether you need a new website, 
              performance optimization, or custom development, I'm here to help.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="animate-glow-pulse"
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;