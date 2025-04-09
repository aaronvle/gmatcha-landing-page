import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-matcha-600 mb-8 px-40 py-8 text-center">
          Empowering professionals around the world to take their career growth into their own hands
        </h1>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-3xl">
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-lg aspect-square border-2 border-gray-200 flex items-center justify-center mb-4">
                <span className="text-gray-400">Team Member 1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Jarren San Jose</h3>
              <p className="text-gray-600">Co-Founder</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-lg aspect-square border-2 border-gray-200 flex items-center justify-center mb-4">
                <span className="text-gray-400">Team Member 2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Aaron Le</h3>
              <p className="text-gray-600">Co-Founder</p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6 px-40">
            At gmatcha, our objective to build tools to help users accelerate their professional growth. 
            We deeply value agency and believe that everyone must take their growth into their own hands to maximize their potential.
            We strive to find the right mix of fun design, ease of use, and AI augmentation with everything we build. Oh yeah, and we love matcha.
          </p>
          
          <p className="text-gray-700 px-40">
            Our team was founded by long-time friends with a history of building together. 
            A shared passion for pushing personal boundaries and helping others reach their goals sparked the idea to build software to accelerate that.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About; 