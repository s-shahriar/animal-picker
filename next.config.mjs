/** @type {import('next').NextConfig} */
const nextConfig = {  
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "i.ibb.co.com", // * => for any website, www.imgbb.com=> for this site
          port: "",
          pathname: "**",
        },
      ],
    },
  };

export default nextConfig;
