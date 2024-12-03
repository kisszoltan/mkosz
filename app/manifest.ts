import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest & {
  screenshots: {
    src: string;
    type?: string;
    sizes?: string;
    form_factor?: string;
  }[];
} {
  return {
    name: "MkOSZ",
    short_name: "mkosz",
    description: "Ha nem megy a matek",
    icons: [
      {
        src: "/icon.png",
        type: "image/png",
        sizes: "800x800",
      },
    ],
    start_url: "/",
    screenshots: [
      {
        src: "screenshots/desktop.png",
        sizes: "1280x800",
        type: "image/png",
        form_factor: "wide",
      },
      {
        src: "screenshots/mobile.png",
        sizes: "719x1280",
        type: "image/png",
      },
    ],
    display: "standalone",
    theme_color: "#ffffff",
    background_color: "#ffffff",
  };
}
