import { CarouselSettingImageCardProps } from "@/types";
import { Button } from "@components/ShadCN";
import { useState } from "react";

export const ImageCard = ({
  image,
  title,
  editImageClick,
  removeImage,
}: CarouselSettingImageCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      key={image.id}
      className="basis-1/3 relative max-h-56 max-w-56 border-solid border-2 border-input rounded-md p-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={image.src}
        alt={`${image.src}_removable_image`}
        className="min-w-52 min-h-52 rounded-md pointer-events-none"
      />
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center justify-center bg-background w-full h-full ${isHovered ? "" : "hidden"}`}
      >
        <div className="">{title}</div>

        <div className="flex gap-2">
          <Button title="Remove image" type="button" variant="destructive" onClick={removeImage}>
            Remove
          </Button>
          <Button title="Edit image" type="button" onClick={editImageClick}>
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};
