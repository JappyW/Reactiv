import { isImgUrl } from "@/lib/utils";
import { useCarouselSettings } from "@/providers/CarouselSettingsProvider";
import { CarouselImage } from "@/types";
import { ImageCard } from "@components/CarouselPreview/components/ImageCard/ImageCard";
import { ImageCardMobile } from "@components/CarouselPreview/components/ImageCard/ImageCardMobile";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
  Switch,
} from "@components/ShadCN";
import { Label } from "@radix-ui/react-label";
import { ChangeEvent, useCallback, useState } from "react";
import { toast } from "sonner";

export const CarouselImagesSettings = () => {
  const [existingImage, setExistingImage] = useState<CarouselImage | undefined>(undefined);

  const [mobileFriendlyImageSettings, setMobileFriendlyImageSettings] = useState<boolean>(true);

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

  const handleEditImageClick = useCallback((image: CarouselImage) => {
    setExistingImage(image);
    setEditModalOpen(true);
  }, []);

  const handleRemoveImage = useCallback(
    (id: string) => {
      if (images.length === 1) {
        toast.error("You can't remove the last image");
        return;
      }

      removeImage(id);
    },
    [images.length]
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between">
            <span>Carousel Images</span>
            <div className="flex items-center gap-2">
              <Switch
                id="mobile-friendly-image-settings"
                checked={mobileFriendlyImageSettings}
                onCheckedChange={setMobileFriendlyImageSettings}
              />
              <Label htmlFor="autoplay">Mobile-friendly</Label>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 flex-wrap justify-center max-h-52 overflow-y-auto">
          {images.map((image, index) => {
            const title = `Image ${index + 1}`;
            if (mobileFriendlyImageSettings)
              return (
                <ImageCardMobile
                  key={image.id}
                  image={image}
                  title={title}
                  editImageClick={() => handleEditImageClick(image)}
                  removeImage={() => handleRemoveImage(image.id)}
                />
              );

            return (
              <ImageCard
                key={image.id}
                image={image}
                title={title}
                editImageClick={() => handleEditImageClick(image)}
                removeImage={() => handleRemoveImage(image.id)}
              />
            );
          })}
        </div>
        {existingImage ? (
          <Dialog open={editModalOpen} onOpenChange={(v) => setEditModalOpen(v)}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit image</DialogTitle>
                <DialogDescription>
                  Make changes to the image here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <Input
                placeholder="Image source"
                id="image"
                name="image"
                value={existingImage.src ?? ""}
                onChange={(value) => handleChangeExisitingImageSrc(value, existingImage)}
              />
              <DialogFooter>
                <Button
                  title="Save"
                  type="button"
                  variant="destructive"
                  className="w-24"
                  onClick={() => setEditModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  title="Save"
                  type="button"
                  className="w-24"
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
