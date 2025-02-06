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

import { buttonFormSchema } from "@/constants/validationSchemas";
import { useButtonSettings } from "@/providers/ButtonSettingsProvider";
import { useCallback } from "react";

export const ButtonSettings = () => {
  const {
    state: { bgColor, label, padding, link, labelColor, borderRadius },
    actions: { setBGColor, setLabel, setLabelColor, setLink, setBorderRadius, setPadding },
  } = useButtonSettings();

  const [bgColorFromPicker, setBGColorFromPicker] = useColor(bgColor);
  const [labelColorFromPicker, setLabelColorFromPicker] = useColor(labelColor);

  const form = useForm<z.infer<typeof buttonFormSchema>>({
    resolver: zodResolver(buttonFormSchema),
    defaultValues: {
      bgColor,
      label,
      padding,
      link,
      labelColor,
      borderRadius,
    },
  });

  const resetFormFields = useCallback(() => {
    form.reset();
  }, [form.reset]);

  const handleChangeLabelColor = useCallback(
    (newColor: IColor, onChange: (...event: any[]) => void) => {
      setLabelColorFromPicker(newColor);
      onChange(newColor.hex);
    },
    []
  );

  const handleChangeBGColor = useCallback(
    (newColor: IColor, onChange: (...event: any[]) => void) => {
      setBGColorFromPicker(newColor);
      onChange(newColor.hex);
    },
    []
  );

  const onSubmit = (values: z.infer<typeof buttonFormSchema>) => {
    if (values.link !== link) {
      setLink(values.link);
    }

    if (values.label !== label) {
      setLabel(values.label);
    }

    if (values.labelColor !== labelColor) {
      setLabelColor(values.labelColor);
    }

    if (values.bgColor !== bgColor) {
      setBGColor(values.bgColor);
    }

    if (values.borderRadius !== borderRadius) {
      setBorderRadius(values.borderRadius);
    }

    if (values.padding !== padding) {
      setPadding(values.padding);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Button Settings</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel htmlFor="label">Label</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Label..." id="label" />
                    </FormControl>
                    <FormDescription>Label for Button</FormDescription>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel htmlFor="link">Link</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="https://..."
                        id="link"
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormDescription>Link for Button</FormDescription>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="borderRadius"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel htmlFor="borderRadius">Border radius</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value ?? ""}
                        placeholder="Percentage in numbers"
                        id="borderRadius"
                      />
                    </FormControl>
                    <FormDescription>Number of percent for border radius</FormDescription>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="padding"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel htmlFor="padding">Padding</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value ?? ""}
                        placeholder="Number of pixels"
                        id="padding"
                      />
                    </FormControl>
                    <FormDescription>Number of pixels for padding</FormDescription>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <div className="flex flex-wrap gap-4">
              <div className="w-50">
                <FormField
                  control={form.control}
                  name="labelColor"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel htmlFor="labelColor">Label color</FormLabel>
                        <FormControl>
                          <div className="w-56" id="labelColor">
                            <ColorPicker
                              height={100}
                              hideInput={["rgb", "hsv"]}
                              color={labelColorFromPicker}
                              onChange={(c) => handleChangeLabelColor(c, field.onChange)}
                            />
                          </div>
                        </FormControl>
                        <FormDescription>Color for Button's label</FormDescription>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <div className="w-50">
                <FormField
                  control={form.control}
                  name="bgColor"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel htmlFor="bgColor">Background color</FormLabel>
                        <FormControl>
                          <div className="w-56" id="bgColor">
                            <ColorPicker
                              height={100}
                              hideInput={["rgb", "hsv"]}
                              color={bgColorFromPicker}
                              onChange={(c) => handleChangeBGColor(c, field.onChange)}
                            />
                          </div>
                        </FormControl>
                        <FormDescription>Background color for Button</FormDescription>
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
