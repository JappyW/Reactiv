import { CarouselModeEnum, CarouselOrientationEnum } from "@/constants/enums";
import { useCarouselSettings } from "@/providers/CarouselSettingsProvider";
import { CarouselImage, CarouselMode, CarouselOrientation, ClassNameHelper } from "@/types";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
  ScrollArea,
  ScrollBar,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ShadCN";
import { v4 as uuidv4 } from "uuid";

import { capitalize, isImgUrl } from "@/lib/utils";
import { Pencil, XIcon } from "lucide-react";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { toast } from "sonner";

export const CarouselSettings = ({ className }: ClassNameHelper) => {
  const [newImage, setNewImage] = useState<CarouselImage | undefined>();
  const [existingImage, setExistingImage] = useState<CarouselImage | undefined>(undefined);

  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  const {
    state: { images, mode, orientation },
    actions: { addImage, removeImage, setMode, setOrientation, editImage },
  } = useCarouselSettings();

  const modeValues = useMemo(() => Object.values(CarouselModeEnum), [CarouselModeEnum]);
  const orientationValues = useMemo(
    () => Object.values(CarouselOrientationEnum),
    [CarouselOrientationEnum]
  );

  const handleChangeNewImageSrc = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewImage((prev) => ({ id: prev?.id ?? uuidv4(), src: value }));
  }, []);

  const handleChangeExisitingImageSrc = useCallback(
    (event: ChangeEvent<HTMLInputElement>, image: CarouselImage) => {
      const { value } = event.target;
      setExistingImage({ ...image, src: value });
    },
    [existingImage]
  );

  const handleChangeMode = useCallback((value: CarouselMode) => {
    setMode(value);
  }, []);

  const handleChangeOrientation = useCallback((value: CarouselOrientation) => {
    setOrientation(value);
  }, []);

  const handleSubmitNewImage = useCallback(() => {
    if (newImage == null || !isImgUrl(newImage.src)) {
      toast.error("Please enter a valid img url");
      return;
    }

    addImage({ ...newImage });
    setNewImage(undefined);
  }, [newImage]);

  const handleSubmitExistingImage = useCallback(() => {
    if (existingImage == null || !isImgUrl(existingImage?.src)) {
      toast.error("Please enter a valid img url");
      return;
    }

    editImage({ ...existingImage });
    setExistingImage(undefined);
  }, [existingImage]);

  return (
    <div className="flex justify-center items-center gap-10 flex-col md:w-6/12 w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Carousel Settings</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid w-full items-center gap-2">
            <div className="flex flex-col justify-center w-full gap-2">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Image</Label>
                <Input
                  className="w-full"
                  placeholder="Image source"
                  id="image"
                  name="image"
                  value={newImage?.src ?? ""}
                  onChange={handleChangeNewImageSrc}
                />
              </div>
              <div className="flex justify-end gap-4">
                <Button
                  title="Clear"
                  type="button"
                  variant="destructive"
                  className=" text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                  onClick={() => setNewImage(undefined)}
                >
                  Clear
                </Button>
                <Button
                  title="Save"
                  type="button"
                  variant="secondary"
                  className=" text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                  onClick={handleSubmitNewImage}
                >
                  Save
                </Button>
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Mode</Label>
              <Select value={mode} onValueChange={handleChangeMode}>
                <SelectTrigger id="mode">
                  <SelectValue placeholder="Select mode" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {modeValues.map((mode) => (
                    <SelectItem value={mode}>{capitalize(mode)}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Orientation</Label>
              <Select value={orientation} onValueChange={handleChangeOrientation}>
                <SelectTrigger id="orientation">
                  <SelectValue placeholder="Select orientation" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {orientationValues.map((orientation) => (
                    <SelectItem value={orientation}>{capitalize(orientation)}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Carousel Images</CardTitle>
        </CardHeader>

        <CardContent>
          <ScrollArea className="w-full whitespace-nowrap rounded-md ">
            <div className="flex w-max space-x-4 p-4">
              {images.map((image) => (
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
                    className="absolute right-0 top-0 h-7 w-7 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                    onClick={() => removeImage(image.id)}
                  >
                    <XIcon className="h-4 w-4" />
                  </Button>
                  <Button
                    title="Edit image"
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute left-0 top-0 h-7 w-7 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
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
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CardContent>
      </Card>
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
    </div>
  );
};
