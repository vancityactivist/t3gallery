import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

export function TopNav() {
    return(
      <nav className="flex items-center justify-between w-full bg-black p-4 text-xl font-semibold border-b">
        <div>Gallery</div>
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    );
  }