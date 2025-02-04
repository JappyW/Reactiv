import { isImgUrl } from "@/lib/utils";
import { useCarouselSettings } from "@/providers/CarouselSettingsProvider";
import { CarouselImage } from "@/types";
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    Input,
    ScrollArea,
    ScrollBar,
} from "@components/ShadCN";
import { Pencil, XIcon } from "lucide-react";
import { ChangeEvent, useCallback, useState } from "react";
import { toast } from "sonner";

export const CarouselImagesSettings = () => {
  const [existingImage, setExistingImage] = useState<CarouselImage | undefined>(undefined);

  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  const {
    state: { images },
    actions: { removeImage, editImage },
  } = useCarouselSettings();

  const handleChangeExisitingImageSrc = useCallback(
    (event: ChangeEvent<HTMLInputElement>, image: CarouselImage) => {
      const { value } = event.target;
      setExistingImage({ ...image, src: value });
    },
    [existingImage]
  );

  const handleSubmitExistingImage = useCallback(() => {
    if (existingImage == null || !isImgUrl(existingImage?.src)) {
      toast.error("Please enter a valid img url");
      return;
    }

    editImage({ ...existingImage });
    setExistingImage(undefined);
  }, [existingImage]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Carousel Images</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full whitespace-nowrap rounded-md ">
          <div className="flex w-max space-x-4 p-4 mb-4">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="flex flex-col items-center relative w-[200px] h-[200px] overflow-x-hidden"
              >
                <img
                  src={image.src}
                  alt={`${image.src}_removable_image`}
                  className="w-[200px] h-[200px] rounded-md pointer-events-none pt-8"
                />

                <Button
                  title="Remove image"
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute right-0 top-0 h-7 w-7 "
                  onClick={() => removeImage(image.id)}
                >
                  <XIcon className="h-4 w-4" />
                </Button>
                <span className="absolute top-0 left-1/2 -translate-x-1/2">Image: {index + 1}</span>
                <Button
                  title="Edit image"
                  type="button"
                  size="icon"
                  className="absolute left-0 top-0 h-7 w-7 "
                  onClick={() => {
                    setExistingImage(image);
                    setEditModalOpen(true);
                  }}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="h-6"/>
        </ScrollArea>
        {existingImage ? (
          <Dialog open={editModalOpen} onOpenChange={(v) => setEditModalOpen(v)}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit image</DialogTitle>
              </DialogHeader>
              <div className={`mt-8 relative w-full`}>
                <Input
                  placeholder="Image source"
                  id="image"
                  name="image"
                  value={existingImage.src ?? ""}
                  onChange={(value) => handleChangeExisitingImageSrc(value, existingImage)}
                />
              </div>
              <DialogFooter>
                <Button
                  title="Save"
                  type="button"
                  variant="ghost"
                  onClick={handleSubmitExistingImage}
                >
                  Save
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ) : null}
      </CardContent>
    </Card>
  );
};
