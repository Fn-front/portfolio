const dns = require("dns");
dns.setDefaultResultOrder("ipv4first")

module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* ここにオプション設定を書きます */
  }
  return nextConfig
};
