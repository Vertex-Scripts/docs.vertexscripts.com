import React from "react";
import Image from "next/image";

import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: "flex", gap: "10px" }}>
      <Image src="/logo.png" alt="Vertex Scripts" width={30} height={30} />
      <span style={{ fontWeight: "semi-bold" }}>Vertex Scripts</span>
    </div>
  ),
  project: {
    link: "https://github.com/Vertex-Scripts/docs.vertexscripts.com",
  },
  chat: {
    link: "https://discord.gg/vertexscripts",
  },
  docsRepositoryBase:
    "https://github.com/Vertex-Scripts/docs.vertexscripts.com/tree/main",
  footer: {
    text: "Vertex Scripts Documentation",
  },
  primaryHue: 7,
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Vertex Scripts",
      description: "Documentation for https://vertexscripts.com",
    };
  },
  head: (
    <>
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#ff0000" />
    </>
  ),
};

export default config;
