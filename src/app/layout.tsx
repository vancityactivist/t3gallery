import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "T3 Gallery",
  description: "T3 Photo Gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return(
    <nav className="flex items-center justify-between w-full bg-black p-4 text-xl font-semibold border-b">
      <div>Gallery</div>
      <div>Sign In</div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className={'font-sans ${inter.variable} flex flex-col gap-4'}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
