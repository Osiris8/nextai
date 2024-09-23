const features = [
  {
    title: "Instant Responses",
    description:
      "Receive quick, accurate answers to your questions in real-time, thanks to our advanced AI technology.",
    icon: "💬",
  },
  {
    title: "24/7 Availability",
    description:
      "Our platform is accessible anytime, anywhere, ensuring that you can get assistance when you need it.",
    icon: "⏰",
  },
  {
    title: "Data Security",
    description:
      "Your data is protected with top-tier security, ensuring your interactions remain private and confidential.",
    icon: "🔒",
  },
];

export default function Features() {
  return (
    <div className="py-16 bg-base-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card bg-base-200 shadow-lg hover:shadow-xl p-6 rounded-lg transition-transform transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center text-6xl">
                <span>{feature.icon}</span>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-semibold text-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base-content">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
