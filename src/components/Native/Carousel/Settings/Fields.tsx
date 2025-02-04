import {
    CarouselAlignmentEnum,
    CarouselModeEnum,
    CarouselOrientationEnum,
} from "@/constants/enums";
import { useCarouselSettings } from "@/providers/CarouselSettingsProvider";
import {
    CarouselAlignmentOptions,
    CarouselImage,
    CarouselMode,
    CarouselOrientation,
} from "@/types";
import {
    Button,
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    Input,
    Label,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Switch,
} from "@components/ShadCN";

import { v4 as uuidv4 } from "uuid";

import { capitalize, isImgUrl } from "@/lib/utils";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { toast } from "sonner";

export const CarouselFieldsSettings = () => {
  const [newImage, setNewImage] = useState<CarouselImage | undefined>();

  const {
    state: { mode, orientation, alignment, loop, autoplay },
    actions: { setMode, setOrientation, setAlignment, setLoop, setAutoplay, addImage },
  } = useCarouselSettings();

  const modeValues = useMemo(() => Object.values(CarouselModeEnum), [CarouselModeEnum]);
  const orientationValues = useMemo(
    () => Object.values(CarouselOrientationEnum),
    [CarouselOrientationEnum]
  );
  const alignmentValues = useMemo(
    () => Object.values(CarouselAlignmentEnum),
    [CarouselAlignmentEnum]
  );

  const handleChangeMode = useCallback((value: CarouselMode) => {
    setMode(value);
  }, []);

  const handleChangeOrientation = useCallback((value: CarouselOrientation) => {
    setOrientation(value);
  }, []);

  const handleChangeAlignment = useCallback((value: CarouselAlignmentOptions) => {
    setAlignment(value);
  }, []);

  const handleChangeAutoplay = useCallback((value: boolean) => {
    setAutoplay(value);
  }, []);

  const handleChangeLoop = useCallback((value: boolean) => {
    setLoop(value);
  }, []);

  const handleChangeNewImageSrc = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewImage((prev) => ({ id: prev?.id ?? uuidv4(), src: value }));
  }, []);

  const handleSubmitNewImage = useCallback(() => {
    if (newImage == null || !isImgUrl(newImage.src)) {
      toast.error("Please enter a valid img url");
      return;
    }

    addImage({ ...newImage });
    setNewImage(undefined);
  }, [newImage]);

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Carousel Settings</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid w-full items-center gap-2">
            <div className="flex flex-col justify-center w-full gap-2">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="image">Image</Label>
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
                  onClick={() => setNewImage(undefined)}
                >
                  Clear
                </Button>
                <Button
                  title="Save"
                  type="button"
                  variant="secondary"
                  onClick={handleSubmitNewImage}
                >
                  Save
                </Button>
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="mode">Mode</Label>
              <Select value={mode} onValueChange={handleChangeMode}>
                <SelectTrigger id="mode">
                  <SelectValue placeholder="Select mode" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {modeValues.map((mode) => (
                    <SelectItem key={mode} value={mode}>
                      {capitalize(mode)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="orientation">Orientation</Label>
              <Select value={orientation} onValueChange={handleChangeOrientation}>
                <SelectTrigger id="orientation">
                  <SelectValue placeholder="Select orientation" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {orientationValues.map((orientation) => (
                    <SelectItem key={orientation} value={orientation}>
                      {capitalize(orientation)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="orientation">Alignment</Label>
              <Select value={alignment} onValueChange={handleChangeAlignment}>
                <SelectTrigger id="orientation">
                  <SelectValue placeholder="Select orientation" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {alignmentValues.map((alignment) => (
                    <SelectItem key={alignment} value={alignment}>
                      {capitalize(alignment)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex space-x-1.5 items-center">
              <Switch id="autoplay" checked={autoplay} onCheckedChange={handleChangeAutoplay} />
              <Label htmlFor="autoplay">Autoplay</Label>
            </div>

            <div className="flex space-x-1.5 items-center">
              <Switch id="loop" checked={loop} onCheckedChange={handleChangeLoop} />
              <Label htmlFor="loop">Loop</Label>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </>
  );
};
