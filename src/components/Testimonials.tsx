import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Since using gmatcha, I've never been unprepared for a standup. During my annual review, I had six months of accomplishments ready to share, which helped me secure a promotion.",
      author: "Sarah Johnson",
      role: "Senior Software Developer",
      avatar: "/matcha.png"
    },
    {
      quote: "My job interviews were so much easier after using gmatcha. I could give specific examples of projects I worked on and challenges I overcame. Got offers from 3 out of 4 companies I interviewed with!",
      author: "Michael Chen",
      role: "Product Manager",
      avatar: "/matcha.png"
    },
    {
      quote: "I used to dread quarterly reviews because I could never remember what I'd accomplished. gmatcha changed that completely. My manager was impressed by my detailed progress reports and increased my responsibility.",
      author: "Priya Patel",
      role: "UX Designer",
      avatar: "/matcha.png"
    },
    {
      quote: "The personal analytics helped me identify patterns in my work that were holding me back. I was spending too much time on low-impact tasks. After refocusing, I delivered two major features that got mentioned in our company all-hands.",
      author: "James Wilson",
      role: "Full Stack Engineer",
      avatar: "/matcha.png"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-matcha-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4">Career Success <span className="gradient-text">Stories</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how professionals are advancing their careers by documenting their daily achievements with gmatcha.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-matcha-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-matcha-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-50"></div>
            <div className="relative z-20">
              <div className="text-2xl md:text-3xl text-gray-800 font-medium italic mb-8">
                "{testimonials[activeIndex].quote}"
              </div>
              <div className="flex items-center justify-center sm:justify-between flex-wrap sm:flex-nowrap gap-4">
                <div className="flex items-center">
                  <img
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonials[activeIndex].author}</div>
                    <div className="text-gray-600 text-sm">{testimonials[activeIndex].role}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="rounded-full border-matcha-200 hover:bg-matcha-100 hover:border-matcha-300"
                  >
                    <ChevronLeft className="h-5 w-5 text-matcha-700" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="rounded-full border-matcha-200 hover:bg-matcha-100 hover:border-matcha-300"
                  >
                    <ChevronRight className="h-5 w-5 text-matcha-700" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-matcha-500" : "bg-matcha-200"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
