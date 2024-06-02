import { deleteImage, getImage } from "~/server/queries";
import { Modal } from "./modal";
import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "./ui/button";


export default async function FullPageImageView(props: { id: number }) {
  const idAsNumber = Number(props.id);
  const image = await getImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex w-full h-full min-w-0">
      <div className="flex-shrink flex justify-center items-center">
    <img src={image.url} className="flex-shrink object-contain " />
    </div>
    <div className="w-48 flex flex-col flex-shrink-0 gap-2 border-l">
      <div className="text-lg border-b text-center">{image.name}</div>

        <div className="p-2">
          <span>Uploaded by </span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="p-2">
          <span>Created on </span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="p-2">
          <form action={async() => {
            "use server";
            await deleteImage(idAsNumber);
          }}>
          <Button variant="destructive" >Delete</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
