import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav() {
    
    return(
      <nav className="flex items-center justify-between w-full bg-black p-4 text-xl font-semibold border-b">
        <div>Gallery</div>
        <div className="flex flex-row items-center gap-4">
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <SimpleUploadButton />
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    );
  }