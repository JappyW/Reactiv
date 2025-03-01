import {
  CarouselAlignmentEnum,
  CarouselModeEnum,
  CarouselOrientationEnum,
} from "@/constants/enums";
import { useCarouselSettings } from "@/providers/CarouselSettingsProvider";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
} from "@components/ShadCN";

import { MAX_ITEMS_PER_PAGE, MIN_ITEMS_PER_PAGE } from "@/constants";
import { capitalize } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ShadCN/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { carouselFormSchema } from "@/constants/validationSchemas";
import { v4 as uuid } from "uuid";

export const CarouselFieldsSettings = () => {
  const {
    state: { mode, orientation, alignment, loop, autoplay, itemsPerPage },
    actions: {
      setMode,
      setOrientation,
      setAlignment,
      setLoop,
      setAutoplay,
      addImage,
      setItemsPerPage,
    },
  } = useCarouselSettings();

  const form = useForm<z.infer<typeof carouselFormSchema>>({
    resolver: zodResolver(carouselFormSchema),
    defaultValues: {
      mode: mode as CarouselModeEnum,
      orientation: orientation as CarouselOrientationEnum,
      alignment: alignment as CarouselAlignmentEnum,
      loop,
      autoplay,
      itemsPerPage,
    },
  });

  const modeValues = useMemo(() => Object.values(CarouselModeEnum), [CarouselModeEnum]);
  const orientationValues = useMemo(
    () => Object.values(CarouselOrientationEnum),
    [CarouselOrientationEnum]
  );
  const alignmentValues = useMemo(
    () => Object.values(CarouselAlignmentEnum),
    [CarouselAlignmentEnum]
  );

  const resetFormFields = useCallback(() => {
    form.reset();
  }, [form.reset]);

  const onSubmit = (values: z.infer<typeof carouselFormSchema>) => {
    if (values.mode !== mode) {
      setMode(values.mode);
    }
    if (values.orientation !== orientation) {
      setOrientation(values.orientation);
    }

    if (values.alignment !== alignment) {
      setAlignment(values.alignment);
    }

    if (values.loop !== loop) {
      setLoop(values.loop);
    }

    if (values.itemsPerPage !== itemsPerPage) {
      setItemsPerPage(values.itemsPerPage);
    }

    if (values.autoplay !== autoplay) {
      setAutoplay(values.autoplay);
    }

    if (values.image) {
      addImage({ src: values.image, id: uuid() });
    }

    form.resetField("image");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Carousel Settings</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel htmlFor="image">Image</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        //Change undefined  to empty string
                        // Prevents uncontrolled input errors
                        value={field.value ?? ""}
                        placeholder="img url"
                        id="image"
                      />
                    </FormControl>
                    <FormDescription>Image source</FormDescription>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="mode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="mode">Mode</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger id="mode">
                        <SelectValue placeholder="Select mode" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent position="popper">
                      {modeValues.map((mode) => (
                        <SelectItem key={mode} value={mode}>
                          {capitalize(mode)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormDescription>The shape of the images</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="orientation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="orientation">Orientation</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger id="orientation">
                        <SelectValue placeholder="Select orientation" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent position="popper">
                      {orientationValues.map((orientation) => (
                        <SelectItem key={orientation} value={orientation}>
                          {capitalize(orientation)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormDescription>
                    Whether the carousel should be displayed horizontally or vertically
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="itemsPerPage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="itemsPerPage">Images Per Page</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={form.watch("orientation") !== CarouselOrientationEnum.HORIZONTAL}
                      placeholder="number of images"
                      type="number"
                      min={MIN_ITEMS_PER_PAGE}
                      max={MAX_ITEMS_PER_PAGE}
                      value={
                        //vertical carousel doesnt support multiple images
                        form.watch("orientation") !== CarouselOrientationEnum.HORIZONTAL
                          ? MIN_ITEMS_PER_PAGE
                          : field.value
                      }
                      id="itemsPerPage"
                      title={
                        form.watch("orientation") !== CarouselOrientationEnum.HORIZONTAL
                          ? "Vertical carousel only supports one image"
                          : ""
                      }
                    />
                  </FormControl>
                  <FormDescription>How many images to display at once</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="alignment"
              render={({ field }) => (
                <FormItem
                  title={
                    form.watch("orientation") !== CarouselOrientationEnum.HORIZONTAL
                      ? "Vertical carousel doesnt support alignment"
                      : ""
                  }
                >
                  <FormLabel htmlFor="alignment">Alignment</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={
                      form.watch("orientation") !== CarouselOrientationEnum.HORIZONTAL
                        ? CarouselAlignmentEnum.START
                        : field.value
                    }
                    disabled={form.watch("orientation") !== CarouselOrientationEnum.HORIZONTAL}
                  >
                    <FormControl>
                      <SelectTrigger id="alignment">
                        <SelectValue placeholder="Select alignment" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent position="popper">
                      {alignmentValues.map((alignment) => (
                        <SelectItem key={alignment} value={alignment}>
                          {capitalize(alignment)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>Align images if multiple</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="loop"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel htmlFor="loop">Loop carousel</FormLabel>
                    <FormDescription>
                      Whether the carousel should loop back to the beginning after reaching the last
                      item
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} id="loop" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="autoplay"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel htmlFor="autoplay">Autoplay</FormLabel>
                    <FormDescription>
                      Whether the carousel should automatically move to the next item
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} id="autoplay" />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-4">
              <Button variant="destructive" type="submit" onClick={resetFormFields}>
                Reset
              </Button>
              <Button type="submit">
                Save
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
