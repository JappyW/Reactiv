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

import { textareaFormSchema } from "@/constants/validationSchemas";
import { useTextareaSettings } from "@/providers/TextareaSettingsProvider";
import { useCallback } from "react";

export const TextareaSettings = () => {
  const {
    state: { description, descriptionColor, title, titleColor },
    actions: { setDescription, setDescriptionColor, setTitle, setTitleColor },
  } = useTextareaSettings();

  const [descriptionColorFromPicker, setDescriptionColorFromPicker] = useColor(descriptionColor);
  const [titleColorFromPicker, setTitleColorFromPicker] = useColor(titleColor);

  const form = useForm<z.infer<typeof textareaFormSchema>>({
    resolver: zodResolver(textareaFormSchema),
    defaultValues: { description, descriptionColor, title, titleColor },
  });

  const resetFormFields = useCallback(() => {
    form.reset();
  }, []);

  const handleChangeTitleColor = useCallback(
    (newColor: IColor, onChange: (...event: any[]) => void) => {
      setTitleColorFromPicker(newColor);
      onChange(newColor.hex);
    },
    []
  );

  const handleChangeDescriptionColor = useCallback(
    (newColor: IColor, onChange: (...event: any[]) => void) => {
      setDescriptionColorFromPicker(newColor);
      onChange(newColor.hex);
    },
    []
  );

  const onSubmit = (values: z.infer<typeof textareaFormSchema>) => {
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
                    <FormLabel htmlFor="title">Title</FormLabel>
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
                    <FormLabel htmlFor="description">Description</FormLabel>
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
                        <FormLabel htmlFor="titleColor">Title color</FormLabel>
                        <FormControl>
                          <div className="w-56" id="titleColor">
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
                        <FormLabel htmlFor="descriptionColor">Description color</FormLabel>
                        <FormControl>
                          <div className="w-56" id="descriptionColor">
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
              <Button type="submit" variant="destructive" onClick={resetFormFields}>
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
