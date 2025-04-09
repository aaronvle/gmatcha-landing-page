import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      billingFrequency: "",
      features: [
        "Save up to 100 updates",
        "Record your updates with voice",
        "Summarize your updates with AI",
      ],
      buttonText: "Sign up",
      buttonLink: "#", // Update with Stripe link
    },
    {
      name: "Premium (Monthly)",
      price: "$3.99",
      billingFrequency: "/month",
      features: [
        "Save unlimited updates",
        "Access to AI features ",
        "Get personalized insights",
      ],
      buttonText: "Get started",
      buttonLink: "#", // Update with Stripe link
    },
    {
      name: "Premium (Yearly)",
      price: "$39.99",
      billingFrequency: "/year",
      features: [
        "All in the pro plan",
        "2 months free!",
        "Exclusive access to gmatcha merch ",
      ],
      buttonText: "Get started",
      buttonLink: "#", // Update with Stripe link
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4">Choose Your Plan</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the plan that best fits your needs and start your journey with us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white hover:border-matcha-200"
            >
              <h3 className="text-xl font-semibold mb-3">{plan.name}</h3>
              <p className="text-2xl font-bold mb-4">{plan.price}{plan.billingFrequency}</p>
              <ul className="mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-600 mb-2">{feature}</li>
                ))}
              </ul>
              <a 
                href={plan.buttonLink} 
                className="inline-block px-6 py-2 text-white bg-matcha-500 rounded-full hover:bg-matcha-600 transition"
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 