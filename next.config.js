/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  turbopack: {
    root: __dirname,
  },
  // Re-writes dont work with Tauri...since output above is set to "export"
  // rewrites: async () => {
  //   return [
  //     {
  //       source: "/api/v1/text/:path*",
  //       destination:
  //         process.env.NODE_ENV === "development"
  //           ? "http://127.0.0.1:8008/api/v1/text/:path*"
  //           : "/api/v1/text/:path*",
  //     },
  //   ];
  // },
  allowedDevOrigins: ['192.168.0.136'],
};

module.exports = nextConfig;
