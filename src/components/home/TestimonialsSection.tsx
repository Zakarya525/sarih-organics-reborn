
import React from "react";

const testimonials = [
  {
    id: 1,
    content: "The granola from Sari Horganics is simply amazing! It's become my daily breakfast staple, and I love knowing it's made with organic ingredients.",
    author: "Sarah Johnson",
    location: "United States"
  },
  {
    id: 2,
    content: "As someone who visits Bali often, I always make sure to stock up on their honey before heading home. There's nothing like it anywhere else!",
    author: "Michael Chen",
    location: "Singapore"
  },
  {
    id: 3,
    content: "Their commitment to sustainable packaging really stands out. The products are fantastic, and I appreciate that they care about the environment too.",
    author: "Emma Wilson",
    location: "Australia"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-sari-cream-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-sari-terracotta-800">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-sari-terracotta-600 max-w-2xl mx-auto">
            Hear from people who love our organic products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-sari-terracotta-700 italic mb-4">
                "{testimonial.content}"
              </blockquote>
              <div>
                <p className="font-medium text-sari-terracotta-800">{testimonial.author}</p>
                <p className="text-sm text-sari-terracotta-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
