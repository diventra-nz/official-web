import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const repoBasePath = process.env.NODE_ENV === "production" ? "/official-web" : "";

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  output: "export",
  ...(repoBasePath ? { basePath: repoBasePath, assetPrefix: repoBasePath } : {}),
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: repoBasePath,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  turbopack: {
    root: __dirname,
  },
};

export default withMDX(nextConfig);
