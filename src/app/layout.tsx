import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { ClerkProvider, SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs'
import { TopNav } from "./_components/topnav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { propagateServerField } from "next/dist/server/lib/render-server";

export const metadata = {
  title: "T3 Gallery",
  description: "T3 Photo Gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode,
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${GeistSans.variable}`}>
    <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
      <body className={'font-sans ${inter.variable}'}>
      <div className="h-screen grid grid-rows-[auto,1fr]">
        <TopNav />
        <main className="overflow-y-scroll">{children}</main>
        </div>
        {modal}
        <div id="modal-root" />
      </body>
    </html>
    </ClerkProvider>
  );
}
