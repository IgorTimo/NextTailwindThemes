/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    targetChainId: "0x5",
    networkName: "goerli",
    dbAddress: "0xd2d676c87A7F74B1B2a146f7Ba9927c38090E0b5",
    predictFactoryAddress: "0xd2Aa799B850d3e10836B614E338f3933E3E39F21"
  },
};

module.exports = nextConfig;
