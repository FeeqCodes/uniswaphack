import React from "react";
import Image from "next/image";

const ProtocolFeatures = () => {
  const features = [
    {
      title: "Secure Token Launch",
      description:
        "Launch your token with confidence using our battle-tested smart contracts and automated security checks",
      icon: "🛡️",
      metrics: "100% Success Rate",
      color: "from-[#644881]",
    },
    {
      title: "Liquidity Protection",
      description:
        "Time-locked liquidity with customizable thresholds ensures long-term project stability",
      icon: "🔒",
      metrics: "$24M+ Protected",
      color: "from-[#448175]",
    },
    {
      title: "Fair Distribution",
      description:
        "Automated token distribution with configurable ratios and vesting schedules",
      icon: "⚖️",
      metrics: "150+ Launches",
      color: "from-[#816444]",
    },
  ];

  return (
    <div className="min-h-screen py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#1F211C]">
        <div className="absolute top-20 right-40 w-72 h-72 bg-gradient-to-r from-[#644881] to-transparent rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-r from-[#448175] to-transparent rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-2 gap-20 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Built for the Future of{" "}
              <span className="text-[#644881]">DeFi</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              AquaVault leverages Uniswap V4's cutting-edge technology to
              provide the most secure and efficient token launch platform in
              DeFi.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-[#1F211C]/60 p-4 rounded-xl border border-gray-800">
                <h4 className="text-2xl font-bold text-white">100%</h4>
                <p className="text-gray-400">Success Rate</p>
              </div>
              <div className="bg-[#1F211C]/60 p-4 rounded-xl border border-gray-800">
                <h4 className="text-2xl font-bold text-white">$24M+</h4>
                <p className="text-gray-400">TVL</p>
              </div>
              <div className="bg-[#1F211C]/60 p-4 rounded-xl border border-gray-800">
                <h4 className="text-2xl font-bold text-white">150+</h4>
                <p className="text-gray-400">Projects</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            {/* Add your 3D visualization or platform screenshot here */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#644881]/20 to-transparent rounded-3xl animate-pulse" />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1F211C]/60 p-8 rounded-2xl border border-gray-800 hover:border-[#644881] transition-all duration-300"
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} to-[#291240]`}
                />
                <span className="text-white">{feature.metrics}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specs */}
        <div className="mt-20 bg-[#1F211C]/60 p-10 rounded-3xl border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-8">
            Technical Specifications
          </h3>
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#644881]/20 flex items-center justify-center">
                  <span className="text-[#644881]">⚡</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Gas Optimized
                  </h4>
                  <p className="text-gray-400">
                    Advanced contract optimization for minimal gas consumption
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#644881]/20 flex items-center justify-center">
                  <span className="text-[#644881]">🔄</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    MEV Protected
                  </h4>
                  <p className="text-gray-400">
                    Built-in MEV protection mechanisms for fair token launches
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#644881]/20 flex items-center justify-center">
                  <span className="text-[#644881]">🛠️</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Modular Design
                  </h4>
                  <p className="text-gray-400">
                    Flexible architecture supporting multiple AMM integrations
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#644881]/20 flex items-center justify-center">
                  <span className="text-[#644881]">🔐</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Audited Security
                  </h4>
                  <p className="text-gray-400">
                    Multiple security audits and continuous monitoring
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtocolFeatures;
