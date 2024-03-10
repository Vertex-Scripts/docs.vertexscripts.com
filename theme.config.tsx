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
    "https://github.com/Vertex-Scripts/docs.vertexscripts.com",
  footer: {
    text: "Vertex Scripts Documentation",
  },
  primaryHue: 7,
};

export default config;
