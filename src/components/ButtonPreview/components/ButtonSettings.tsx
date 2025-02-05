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
    MAX_BUTTON_BORDER_RADIUS,
    MAX_BUTTON_LABEL,
    MAX_BUTTON_PADDING,
    MIN_BUTTON_BORDER_RADIUS,
    MIN_BUTTON_LABEL,
    MIN_BUTTON_PADDING,
} from "@/constants";
import { useButtonSettings } from "@/providers/ButtonSettingsProvider";

const buttonFormSchema = z.object({
  label: z
    .string()
    .min(MIN_BUTTON_LABEL, `Label must be above ${MIN_BUTTON_LABEL} characters`)
    .max(MAX_BUTTON_LABEL, `Label must be below ${MAX_BUTTON_LABEL} characters`),
  link: z.string().url("Invalid URL").optional(),
  bgColor: z.string().regex(/^#[0-9A-F]{6}$/i, "Invalid color code"),
  labelColor: z.string().regex(/^#[0-9A-F]{6}$/i, "Invalid color code"),
  borderRadius: z.coerce
    .number()
    .gte(MIN_BUTTON_BORDER_RADIUS, "Must be 0 and above")
    .lte(MAX_BUTTON_BORDER_RADIUS, "Must be 100 and below"),
  padding: z.coerce
    .number()
    .gte(MIN_BUTTON_PADDING, "Must be 0 and above")
    .lte(MAX_BUTTON_PADDING, "Must be 40 and below"),
});

export const ButtonSettings = () => {
  const {
    state: buttonState,
    actions: { setBGColor, setLabel, setLabelColor, setLink, setBorderRadius, setPadding },
  } = useButtonSettings();

  const { bgColor, label, padding, link, labelColor, borderRadius } = buttonState;

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

  const resetFormFields = () => {
    form.reset();
  };

  const handleChangeLabelColor = (newColor: IColor, onChange: (...event: any[]) => void) => {
    setLabelColorFromPicker(newColor);
    onChange(newColor.hex);
  };

  const handleChangeBGColor = (newColor: IColor, onChange: (...event: any[]) => void) => {
    setBGColorFromPicker(newColor);
    onChange(newColor.hex);
  };

  const onSubmit = (values: z.infer<typeof buttonFormSchema>) => {
    if (values.link && values.link !== link) {
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
    <>
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
                      <FormLabel>Label</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="label..." id="label" />
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
                      <FormLabel>Link</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="https://..." id="link" />
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
                      <FormLabel>Border radius</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value ?? ""}
                          placeholder="percentage in numbers"
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
                      <FormLabel>Padding</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value ?? ""}
                          placeholder="number of pixels"
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
                          <FormLabel>Label color</FormLabel>
                          <FormControl>
                            <div className="w-56">
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
                          <FormLabel>Background color</FormLabel>
                          <FormControl>
                            <div className="w-56">
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
                <Button variant="secondary" type="submit">
                  Save
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};
