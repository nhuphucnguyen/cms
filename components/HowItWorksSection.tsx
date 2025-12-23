"use client";

const steps = [
  {
    step: "01",
    title: "Funds",
    description:
      "Streamline fund operations with automated order management, processing and distribution infrastructure.",
  },
  {
    step: "02",
    title: "Structured Products",
    description:
      "Enable efficient issuance, servicing and lifecycle management of complex financial instruments.",
  },
  {
    step: "03",
    title: "Credit",
    description:
      "Modernize lending markets with digital infrastructure for origination, servicing and settlement.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="solution" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Solutions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transforming traditional financial markets with blockchain-enabled infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((item) => (
            <div key={item.step} className="relative">
              <div className="mb-4">
                <span className="text-5xl font-bold text-purple-600/20 dark:text-purple-400/20">
                  {item.step}
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
