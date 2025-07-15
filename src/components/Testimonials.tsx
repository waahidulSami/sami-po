import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

import pic1 from '../assets/pic-1.jpeg';
import pic2 from '../assets/pic-2.jpeg';
import pic3 from '../assets/pic-3.jpg';
import pic4 from '../assets/pic-4.jpeg';
import pic5 from '../assets/pic-5.jpg';
import pic6 from '../assets/pic-6.jpeg';

const avatars = [pic1, pic2, pic3, pic4, pic5, pic6];

const testimonials = [
  {
    name: 'Mahatib',
    position: 'CEO, Soft IT Care',
    content: 'Sami delivered an exceptional website that exceeded our expectations. The performance improvements were incredible - our page load times decreased by 60%!',
    rating: 5,
  },
  {
    name: 'Ali Hossain',
    position: 'Founder, E-Commerce Store Grid',
    content: 'Working with Sami was a game-changer for our online store. The custom WooCommerce solution increased our conversion rate by 40%. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Razia',
    position: 'Logo Designer',
    content: "Sami's attention to detail and understanding of modern web design trends is outstanding. Our new website perfectly represents our brand and drives results.",
    rating: 5,
  },
  {
    name: 'David',
    position: 'Owner, Local Business',
    content: "The website Sami built for us has transformed our business. We're getting more leads than ever before, and customers love the user experience.",
    rating: 5,
  },
  {
    name: 'Lisa',
    position: 'Content Creator',
    content: 'Sami created a beautiful, fast-loading blog that perfectly showcases my content. The SEO optimization has significantly improved my search rankings.',
    rating: 4,
  },
  {
    name: 'Rakib',
    position: 'Restaurant Owner',
    content: "Our restaurant's online presence has never been better. The website is beautiful, mobile-friendly, and has increased our online orders significantly.",
    rating: 5,
  },
];

const Testimonials = () => {
  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}
      />
    ));

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
              Don't just take my word for it - here's what my clients say about working with me.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <Quote size={24} className="mb-4 text-primary/60" />
                  <div className="flex items-center mb-4">{renderStars(testimonial.rating)}</div>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={avatars[index]}
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
            {[
              ['85+', 'Projects Completed'],
              ['64+', 'Happy Clients'],
              ['99%', 'Client Satisfaction'],
              ['3+', 'Years Experience'],
            ].map(([stat, label], i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-3xl font-bold text-primary">{stat}</h3>
                <p className="text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
