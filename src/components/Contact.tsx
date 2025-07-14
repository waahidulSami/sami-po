import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  MessageCircle,
  Clock,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save message to database
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: `${formData.subject}\n\n${formData.message}`
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'wahidulislamsami5@gmail.com',
      action: () => window.open('mailto:wahidulislamsami5@gmail.com')
    },
    
    {
      icon: MapPin,
      title: 'Location',
      content: 'bangladesh',
      action: () => {}
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: 'Within 24 hours',
      action: () => {}
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/waahidulSami',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/wahidul-islam-sami-804330341/',
      color: 'hover:text-blue-400'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      url: 'https://wa.me/01845236298',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Let's Work <span className="text-primary">Together</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Ready to bring your project to life? Get in touch and let's discuss how I can help you achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8 animate-slide-in-left">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-8">
                  Have a project in mind? I'd love to hear about it. Send me a message and I'll respond as soon as possible.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                    onClick={info.action}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                          <info.icon size={20} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground text-sm">{info.title}</h4>
                          <p className="text-muted-foreground text-sm">{info.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-card/50 border border-border/50 flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:border-primary/50`}
                      aria-label={social.name}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slide-in-right">
              <Card className="bg-card-gradient border-border/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                        placeholder="Project inquiry, question, etc."
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 resize-none"
                        placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>

                  {/* Success Message */}
                  <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center text-green-400 text-sm opacity-0 transition-opacity duration-300">
                    <CheckCircle size={16} className="mr-2" />
                    Message sent successfully! I'll get back to you soon.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;