import { type HomeLayoutProps } from "fumadocs-ui/home-layout";

export const baseOptions: HomeLayoutProps = {
  nav: {
    title: "Vertex Scripts",
  },
  links: [
    {
      text: "Documentation",
      url: "/",
      active: "nested-url",
    },
  ],
};
