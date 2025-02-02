import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "scss")],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://nuquitoursfiles.nyc3.digitaloceanspaces.com",
      },
    ],
    domains: ["https://nuquitoursfiles.nyc3.digitaloceanspaces.com"],
  },
};

export default nextConfig;
