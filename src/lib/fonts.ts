import { Noto_Sans_Tamil, Ubuntu } from "next/font/google";

export const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});

export const notoSansTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-tamil",
  display: "swap",
});
