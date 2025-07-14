import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';





const Testimonials = () => {
  
  const testimonials = [
    {
      id: 1,
      name: 'mahatib',
      position: 'CEO, soft it care',
      content: 'Sami delivered an exceptional website that exceeded our expectations. The performance improvements were incredible - our page load times decreased by 60%!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/4357505/pexels-photo-4357505.jpeg'
    },
    {
      id: 2,
      name: 'Ali Hossain',
      position: 'Founder, E-Commerce store grid',
      content: 'Working with Sami was a game-changer for our online store. The custom WooCommerce solution increased our conversion rate by 40%. Highly recommended!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/8621979/pexels-photo-8621979.jpeg'
    },
    {
      id: 3,
      name: 'razia ',
      position: 'Logo designer',
      content: 'Sami\'s attention to detail and understanding of modern web design trends is outstanding. Our new website perfectly represents our brand and drives results.',
      rating: 5,
      avatar: 'https://i.pinimg.com/736x/1a/8b/e8/1a8be8c0d50dae89a09fd02b16c48dcb.jpg'
    },
    {
      id: 4,
      name: 'David ',
      position: 'Owner, Local Business',
      content: 'The website Sami built for us has transformed our business. We\'re getting more leads than ever before, and customers love the user experience.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/20709112/pexels-photo-20709112.jpeg'
    },
    {
      id: 5,
      name: 'Lisa',
      position: ' Content Creator',
      content: 'Sami created a beautiful, fast-loading blog that perfectly showcases my content. The SEO optimization has significantly improved my search rankings.',
      rating: 4,
      avatar: 'https://i.pinimg.com/1200x/ab/c6/d9/abc6d9add64fd49cfa5def44b48c09e6.jpg'
    },
    {
      id: 6,
      name: 'rakib',
      position: 'Restaurant Owner',
      content: 'Our restaurant\'s online presence has never been better. The website is beautiful, mobile-friendly, and has increased our online orders significantly.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/5346114/pexels-photo-5346114.jpeg'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Client <span className="text-primary">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Don't just take my word for it - here's what my clients say about working with me
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className="group bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote size={24} className="text-primary/60" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    "{testimonial.content}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary/20"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-xs">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-slide-up">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">85+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">64+</h3>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">99%</h3>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">3+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;