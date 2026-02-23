import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import Header from "./_components/Header";

export const metadata = {
  // title: "The Wild Oasis"
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxury hotel in the heart of the city, offering a unique blend of comfort and style. Experience unparalleled hospitality and unforgettable moments at The Wild Oasis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`relative antialiased min-h-screen bg-primary-950 text-primary-100 flex flex-col ${josefin.className}`}
      >
        <Header />
        <div className="grid flex-1 py-12 px-9">
          <main className="w-full mx-auto max-w-7xl">{children}</main>
        </div>
      </body>
    </html>
  );
}
