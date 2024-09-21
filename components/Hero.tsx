export default function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {/* Titre principal attirant */}
          <h1 className="text-6xl font-bold text-primary">
            Ask Questions, Get Answers Instantly
          </h1>
          {/* Description courte et percutante */}
          <p className="py-6 text-lg text-base-content">
            Our AI-powered platform delivers real-time answers to your
            questions. Whether it&#39;s for business, learning, or curiosity,
            we&#39;ve got you covered 24/7.
          </p>
          {/* Bouton CTA avec une incitation claire */}
          <button className="btn btn-primary btn-lg">Get Started</button>
        </div>
      </div>
    </div>
  );
}
