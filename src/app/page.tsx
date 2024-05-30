import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockURLs = [
  "https://utfs.io/f/247a4d32-0b68-453b-879c-c197e87f5898-nbp11s.jpeg",
  "https://utfs.io/f/0b1cadcd-c7fa-4925-b037-8119fe73c6cc-wdt1fs.jpeg",
  "https://utfs.io/f/87c11f69-539d-4471-a075-b5d437d8a4f2-p47dym.jpg",
  "https://utfs.io/f/e2ed205d-1256-4278-937c-944ba829bd14-195xyt.jpg"
];

const mockImages = mockURLs.map((url, index) => ({
  id: index +1,
  url,
}));

export default async function HomePage() {
  
  const posts = await db.query.posts.findMany();

  console.log(posts);
  
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
                <img src={image.url} alt="Image" />
          </div>
        ))}
      </div>
      
    </main>
  );
}
