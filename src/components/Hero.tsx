
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="font-bold leading-tight">
              Take Control of Your <span className="gradient-text">Professional Growth</span>{" "}
              Effortlessly
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
              gmatcha helps you document daily achievements, track personal progress, and build a compelling professional narrative for reviews and interviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-matcha-500 hover:bg-matcha-600 text-white"
              >
                Start Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-matcha-500 text-matcha-600 hover:bg-matcha-50"
              >
                View Demo
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              No credit card required • Free 14-day trial
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-full max-w-md">
              <div className="glass-card p-6 w-full">
                <div className="bg-matcha-500/10 p-3 rounded-lg mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-medium text-matcha-700">Today's Update</h3>
                    <span className="text-xs bg-matcha-500 text-white px-2 py-1 rounded-full">Recording</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <h4 className="font-medium text-gray-800">What I accomplished:</h4>
                      <p className="text-gray-600 text-sm">Completed the dashboard redesign and fixed the notification bug.</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <h4 className="font-medium text-gray-800">What I'm working on next:</h4>
                      <p className="text-gray-600 text-sm">Starting work on the new analytics feature. Meeting with design at 2pm.</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <h4 className="font-medium text-gray-800">Challenges I'm facing:</h4>
                      <p className="text-gray-600 text-sm">Waiting for API access from the backend team.</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button size="sm" className="bg-matcha-500 hover:bg-matcha-600">Save Update</Button>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 bg-matcha-200/50 h-full w-full rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
