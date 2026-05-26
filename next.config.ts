import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/realizacie-projekty.html", destination: "/realizacie-projekty", permanent: true },
      { source: "/sluzby.html", destination: "/sluzby", permanent: true },
      { source: "/o-nas.html", destination: "/o-nas", permanent: true },
      { source: "/kontakt.html", destination: "/kontakt", permanent: true },
    ];
  },
};

export default nextConfig;
