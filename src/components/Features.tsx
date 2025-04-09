
import { CheckCircle, Users, Clock, BarChart, Mic, Award, TrendingUp, BotMessageSquare } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Mic className="h-8 w-8 text-matcha-500" />,
      title: "Speech-to-Text",
      description: "Record your updates with your voice and let gmatcha transcribe them for you."
    },
    {
      icon: <BotMessageSquare className="h-8 w-8 text-matcha-500" />,
      title: "AI Formatting",
      description: "Let gmatcha format your updates for you, so you can focus on what really matters."
    },
    {
      icon: <Clock className="h-8 w-8 text-matcha-500" />,
      title: "Meeting Preparation",
      description: "Walk into every standup or one-on-one meeting prepared with detailed notes about your recent progress."
    },
    {
      icon: <Award className="h-8 w-8 text-matcha-500" />,
      title: "Achievement Showcase",
      description: "Collect evidence of your impact and successes to present during promotion discussions and salary negotiations."
    },
    {
      icon: <BarChart className="h-8 w-8 text-matcha-500" />,
      title: "Own Your Data",
      description: "gmatcha is built to be your personal data warehouse. You own your data and it's locked in your company's tools."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-matcha-500" />,
      title: "Career Advancement",
      description: "Transform daily work into compelling career narratives that highlight your skills and contributions."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4">Everything You Need for <span className="gradient-text">Career Success</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            gmatcha helps you document your professional journey, showcase your achievements, and build a compelling narrative for reviews and interviews.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white hover:border-matcha-200"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
