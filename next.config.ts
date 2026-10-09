import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  outputFileTracingIncludes: {
    "/*": ["./problems/**/*"],
  },
};

export default nextConfig;
