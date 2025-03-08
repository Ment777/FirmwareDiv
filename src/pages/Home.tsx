import { Shield, Zap, Headphones } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070B14] text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Experience Gaming<br />
          to the fullest with<br />
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">Duck's Services</span>
        </h1>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Diviner?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0A1018] p-8 rounded-lg border border-cyan-900/30 hover:border-cyan-500/50 transition-all">
            <Shield className="h-8 w-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Advanced Security</h3>
            <p className="text-gray-400">
              Our firmware implements state-of-the-art security measures, ensuring safe operation with major anti-cheat systems.
            </p>
          </div>
          <div className="bg-[#0A1018] p-8 rounded-lg border border-cyan-900/30 hover:border-cyan-500/50 transition-all">
            <Zap className="h-8 w-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Optimal Performance</h3>
            <p className="text-gray-400">
              Experience enhanced device performance with our custom-tailored firmware solutions.
            </p>
          </div>
          <div className="bg-[#0A1018] p-8 rounded-lg border border-cyan-900/30 hover:border-cyan-500/50 transition-all">
            <Headphones className="h-8 w-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
            <p className="text-gray-400">
              Get dedicated technical support from our experienced team through Discord.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Ready to Upgrade?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Join our Discord community to learn more about our premium firmware solutions and get started with your upgrade today.
        </p>
      </div>
    </div>
  );
}
