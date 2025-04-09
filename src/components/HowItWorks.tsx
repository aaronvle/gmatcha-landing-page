
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description: "Sign up in under a minute and set up your personal workspace to start tracking your professional journey."
    },
    {
      number: "02",
      title: "Record Daily Updates",
      description: "Spend just 2-3 minutes each day documenting your accomplishments, plans, and challenges."
    },
    {
      number: "03",
      title: "Showcase Your Impact",
      description: "Leverage your growing record of achievements for standups, reviews, promotions, and job interviews to show your results."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-4">How <span className="gradient-text">gmatcha</span> Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start building your professional narrative in minutes with these simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                <div className="w-12 h-12 rounded-full bg-matcha-100 text-matcha-600 flex items-center justify-center font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 text-matcha-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-matcha-500 hover:bg-matcha-600 text-white px-8 py-6 h-auto text-lg">
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
