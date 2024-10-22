/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ajtoklipmhjkbydsgjre.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-image/**",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
