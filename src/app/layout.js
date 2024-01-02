import { Raleway, Poppins } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"], display: "swap" });
// export const poppins = Poppins({
//   subsets: ["latin"],
//   display: "swap",
// });

export const metadata = {
  title: "Emerald Hills - Key One Realty Group",
  description:
    "Welcome to Emerald Hills, where opulence meets exclusivity. Explore our exclusive Ultra Luxury Mansion and redefine your concept of luxury living in the heart of Dubai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
