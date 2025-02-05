import { CarouselSettingImageCardProps } from "@/types";
import { Button } from "@components/ShadCN";
import { Pencil, XIcon } from "lucide-react";

export const ImageCardMobile = ({
  image,
  title,
  removeImage,
  editImageClick,
}: CarouselSettingImageCardProps) => {
  return (
    <div
      key={image.id}
      className="basis-1/3 relative max-h-56 max-w-56 border-solid border-2 border-input rounded-md p-1"
    >
      <img
        src={image.src}
        alt={`${image.src}_removable_image`}
        className="min-w-52 min-h-52 rounded-md pointer-events-none pt-8"
      />

      <Button
        title="Remove image"
        type="button"
        variant="destructive"
        size="icon"
        className="absolute right-0 top-0 h-7 w-7 m-1"
        onClick={() => removeImage()}
      >
        <XIcon className="h-4 w-4" />
      </Button>
      <span className="absolute top-0 left-1/2 -translate-x-1/2">{title}</span>
      <Button
        title="Edit image"
        type="button"
        size="icon"
        className="absolute left-0 top-0 h-7 w-7 m-1"
        onClick={() => editImageClick()}
      >
        <Pencil className="h-4 w-4" />
      </Button>
    </div>
  );
};
