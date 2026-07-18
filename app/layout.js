import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  preload: false,
});

export const metadata = {
  title: "Open Random Recipes",
  description: "Automate your nutrition. Add years to your life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="light h-full" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="dark"){document.documentElement.classList.replace("light","dark")}}catch(e){}`,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${playfair.variable} bg-background text-on-background h-full flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container`}
      >
        {children}
      </body>
    </html>
  );
}
