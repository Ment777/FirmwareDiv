import { Shield, Zap, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="relative">
          <h1 className="text-5xl font-bold mb-6">
            Next-Gen Firmware
            <br />
            <span className="text-cyan-400">For Tomorrow's Tech</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Secure, optimized, and cutting-edge firmware solutions for your advanced hardware needs.
          </p>
          <div className="flex gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-md font-semibold transition-colors">
              Explore Products
            </button>
            <button className="border border-cyan-500 hover:bg-cyan-500/10 px-8 py-3 rounded-md font-semibold transition-colors">
              Learn More
            </button>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-16">
            {[
              { icon: Shield, text: "Enterprise-grade security" },
              { icon: Zap, text: "Lightning-fast performance" },
              { icon: Clock, text: "24/7 Expert support" }
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <feature.icon className="h-6 w-6 text-cyan-400" />
                <span className="text-gray-300">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
