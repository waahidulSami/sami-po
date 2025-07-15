import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg'
import project5 from '@/assets/project-5.jpg'
import project6 from '@/assets/project-6.jpg'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Furniture Store',
      description: 'A modern e-commerce platform built with WooCommerce featuring custom product configurators, advanced filtering, and optimized checkout flow.',
      image: project1,
      technologies: ['WordPress', 'WooCommerce', 'JavaScript', 'CSS3', 'Payment Gateway'],
      liveUrl: 'https://affiche.thunder-stores.com/',
      githubUrl: 'https://github.com/sami/fashion-store',
      category: 'E-Commerce'
    },
    {
      id: 2,
      title: 'Corporate furniture  store',
      description: 'Professional furniture  website with custom CMS, team management system, and integrated blog. Fully responsive and SEO optimized and advanced filtering.',
      image: project6,
      technologies: ['WordPress', 'Custom Theme', 'ACF', 'SEO', 'Analytics'],
      liveUrl: 'https://furnique.madrasthemes.com/',
      githubUrl: 'https://github.com/sami/corporate-site',
      category: 'Furniture '
    },
    {
      id: 3,
      title: 'Creative Blog Posts',
      description: 'A full-featured blog post application with user authentication, post creation, and real-time updates , advanced filtering, and optimized checkout flow..',
      image: project2,
      technologies: ['React',  'Tailwind', 'Framer Motion', 'apwrite' ,'login ' , 'sign up'],
      liveUrl: 'https://megablog-z23q.vercel.app/',
      githubUrl: 'https://github.com/sami/portfolio-platform',
      category: 'Blog'
    },
{
  id: 4,
  title: 'Creative Pet Food',
  description: 'Nutritious pet food that promotes healthy growth, energy, and well-being for pets like dogs, cats, and birds.',
  image: project5,
  technologies: ['wordpress', 'Elementor', 'woo', 'yoast seo', 'CMS'],
  liveUrl: 'https://ecommerce.everestthemes.com/petgrub',
  githubUrl: 'https://github.com/sami/portfolio-platform',
  category: 'Pet Food store'
},

    {
      id: 5,
      title: 'Creative Pizza store',
      description: 'A  modern pizza store web  featuring product browsing, cart, and checkout functionalities  advanced filtering, and optimized checkout flow .',
      image: project3,
      technologies: ['wordpress', 'Elementor', 'woo', 'yoast seo', 'CMS'],
      liveUrl: 'https://pizzeria.madrasthemes.com/#',
      githubUrl: 'https://github.com/sami/portfolio-platform',
      category: 'pizza store'
    },
    {
      id: 6,
      title: 'Creative Portfolio',
      description: 'A stunning portfolio platform for creative professionals with smooth animations, gallery management, and client testimonial system.',
      image: project4,
      technologies: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      liveUrl: 'https://sami-p.vercel.app',
      githubUrl: 'https://github.com/sami/portfolio-platform',
      category: 'Portfolio'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              A showcase of my recent work and the solutions I've built for clients
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="group bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card hover:-translate-y-2 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button
                      variant="glass"
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="text-white hover:text-primary"
                    >
                      <Eye size={16} />
                    </Button>
                    <Button
                      variant="glass"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="text-white hover:text-primary"
                    >
                      <Github size={16} />
                    </Button>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 right-4 bg-primary/20 text-primary border-primary/30"
                  >
                    {project.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  {/* Project Title & Description */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="text-xs bg-muted/30 text-foreground border-border/50 hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="flex-1 group/btn"
                    >
                      <ExternalLink size={16} className="mr-2 group-hover/btn:translate-x-1 transition-transform" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="group/btn hover:bg-foreground hover:text-background"
                    >
                      <Github size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center animate-slide-up">
            <div className="bg-card-gradient rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Want to See More?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                These are just a few examples of my work. I have many more projects in my portfolio, including client work under NDA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => window.open('https://github.com/sami', '_blank')}
                >
                  View GitHub Profile
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  Request Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;