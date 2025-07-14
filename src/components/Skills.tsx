import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Palette, 
  Zap, 
  Globe, 
  Figma, 
  ShoppingCart,
  Search,
  Smartphone
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'text-blue-400',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS'],
      description: 'Modern frontend technologies for responsive, interactive user interfaces'
    },
    {
      title: 'WordPress Development',
      icon: Globe,
      color: 'text-blue-600',
      skills: ['Custom Themes', 'Plugin Development', 'Elementor', 'WooCommerce', 'ACF', 'Gutenberg'],
      description: 'Complete WordPress solutions from custom themes to e-commerce stores'
    },
    {
      title: 'Design & UX',
      icon: Palette,
      color: 'text-pink-400',
      skills: ['Figma', 'Adobe XD', 'UI Design', 'Prototyping', 'User Research', 'Wireframing'],
      description: 'User-centered design approach for engaging digital experiences'
    },
    {
      title: 'Performance & SEO',
      icon: Zap,
      color: 'text-yellow-400',
      skills: ['Speed Optimization', 'Core Web Vitals', 'SEO', 'Google Analytics', 'Page Speed', 'Caching'],
      description: 'Technical optimization for fast loading and search engine visibility'
    },
    {
      title: 'E-commerce',
      icon: ShoppingCart,
      color: 'text-green-400',
      skills: ['WooCommerce', 'Shopify', 'Payment Gateways', 'Inventory Management', 'Order Processing'],
      description: 'Complete e-commerce solutions for online business success'
    },
    {
      title: 'Mobile & Responsive',
      icon: Smartphone,
      color: 'text-purple-400',
      skills: ['Responsive Design', 'Mobile First', 'PWA', 'Cross-browser', 'Touch Interfaces'],
      description: 'Optimized experiences across all devices and screen sizes'
    }
  ];

  const tools = [
    'VS Code', 'Git', 'WordPress Development',  'Elementor', 
    'Html' , 'CSS' , 'JavaScript' , 'Google PageSpeed' , 'React' , 'Redux' , 'seo' 
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Skills & <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Comprehensive skill set for modern web development and digital solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="group bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-muted/50 mr-4 ${category.color} group-hover:bg-primary/20 transition-colors duration-300`}>
                      <category.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {category.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-muted/30 text-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-300 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="text-center animate-slide-up">
            <h3 className="text-2xl font-bold mb-8 text-foreground">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {tools.map((tool, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="bg-card/50 border-border/50 text-foreground hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-105 px-4 py-2"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;