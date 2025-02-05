import { Button, Card, CardContent, CardHeader, CardTitle, Input } from "@components/ShadCN";

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
import { ColorPicker, IColor, useColor } from "react-color-palette";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  MAX_TEXTAREA_DESCRIPTION_LENGTH,
  MAX_TEXTAREA_TITLE_LENGTH,
  MIN_TEXTAREA_DESCRIPTION_LENGTH,
  MIN_TEXTAREA_TITLE_LENGTH,
} from "@/constants";
import { useTextareaSettings } from "@/providers/TextareaSettingsProvider";
import { TextareaProps } from "@/types";
import { toast } from "sonner";

const textareaFormSchema = z.object({
  title: z
    .string()
    .min(MIN_TEXTAREA_TITLE_LENGTH, `Title must ${MIN_TEXTAREA_TITLE_LENGTH} character or more`)
    .max(MAX_TEXTAREA_TITLE_LENGTH, "Title is too long"),
  description: z
    .string()
    .min(
      MIN_TEXTAREA_DESCRIPTION_LENGTH,
      `Description must ${MIN_TEXTAREA_DESCRIPTION_LENGTH} character or more`
    )
    .max(MAX_TEXTAREA_DESCRIPTION_LENGTH, "Description is too long"),
  titleColor: z.string().regex(/^#[0-9A-F]{6}$/i, "Invalid color code"),
  descriptionColor: z.string().regex(/^#[0-9A-F]{6}$/i, "Invalid color code"),
});

export const TextareaSettings = () => {
  const {
    state: textareaState,
    actions: { setDescription, setDescriptionColor, setTitle, setTitleColor },
  } = useTextareaSettings();

  const { description, descriptionColor, title, titleColor } = textareaState;

  const [descriptionColorFromPicker, setDescriptionColorFromPicker] = useColor(descriptionColor);
  const [titleColorFromPicker, setTitleColorFromPicker] = useColor(titleColor);

  const form = useForm<z.infer<typeof textareaFormSchema>>({
    resolver: zodResolver(textareaFormSchema),
    defaultValues: textareaState,
  });

  const resetFormFields = () => {
    form.reset();
  };

  const handleChangeTitleColor = (newColor: IColor, onChange: (...event: any[]) => void) => {
    setTitleColorFromPicker(newColor);
    onChange(newColor.hex);
  };

  const handleChangeDescriptionColor = (newColor: IColor, onChange: (...event: any[]) => void) => {
    setDescriptionColorFromPicker(newColor);
    onChange(newColor.hex);
  };

  const onSubmit = (values: z.infer<typeof textareaFormSchema>) => {
    let showToast = Object.keys(textareaState).some(
      (key) => values[key as keyof TextareaProps] !== textareaState[key as keyof TextareaProps]
    );

    if (values.title !== title) {
      setTitle(values.title);
    }

    if (values.description !== description) {
      setDescription(values.description);
    }

    if (values.titleColor !== titleColor) {
      setTitleColor(values.titleColor);
    }

    if (values.descriptionColor !== descriptionColor) {
      setDescriptionColor(values.descriptionColor);
    }

    if (showToast) {
      toast("Settings updated");
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Textarea Settings</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Title..." id="title" />
                    </FormControl>
                    <FormDescription>Title for Textarea</FormDescription>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Any text will do..." id="description" />
                    </FormControl>
                    <FormDescription>Description for Textarea</FormDescription>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <div className="flex flex-wrap gap-4">
              <div className="w-50">
                <FormField
                  control={form.control}
                  name="titleColor"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Title color</FormLabel>
                        <FormControl>
                          <div className="w-56">
                            <ColorPicker
                              height={100}
                              hideInput={["rgb", "hsv"]}
                              color={titleColorFromPicker}
                              onChange={(c) => handleChangeTitleColor(c, field.onChange)}
                            />
                          </div>
                        </FormControl>
                        <FormDescription>Title color for Textarea</FormDescription>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <div className="w-50">
                <FormField
                  control={form.control}
                  name="descriptionColor"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Description color</FormLabel>
                        <FormControl>
                          <div className="w-56">
                            <ColorPicker
                              height={100}
                              hideInput={["rgb", "hsv"]}
                              color={descriptionColorFromPicker}
                              onChange={(c) => handleChangeDescriptionColor(c, field.onChange)}
                            />
                          </div>
                        </FormControl>
                        <FormDescription>Description color for Textarea</FormDescription>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <Button type="button" variant="destructive" onClick={resetFormFields}>
                Reset
              </Button>
              <Button variant="secondary" type="submit">
                Save
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
