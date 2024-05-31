import Link from "next/link";
import { db } from "~/server/db";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import {getMyImages} from "~/server/queries";
export const dynamic = "force-dynamic";

async function Images() {

  const images = await getMyImages();
  return (
    <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-48">
                <img src={image.url} alt="Image" />
                <div>{image.name}</div>
          </div>
        ))}
      </div>
  );
}

export default async function HomePage() {
  
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
      
    </main>
  );
}
