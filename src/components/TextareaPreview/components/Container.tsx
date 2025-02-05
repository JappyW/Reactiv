import { MobileTextarea } from "@/mobile/components/Textarea";
import { useTextareaSettings } from "@/providers/TextareaSettingsProvider";
import { PhoneScreen } from "@components/PhoneScreen";
import { Card, CardHeader, CardTitle } from "@components/ShadCN";

export const TextareaContainer = () => {
  const {
    state: { description, descriptionColor, title, titleColor, ...rest },
  } = useTextareaSettings();

  return (
    <Card className="p-10 w-fit flex justify-center items-center flex-col">
      <CardHeader className="mb-10">
        <CardTitle>Textarea Preview</CardTitle>
      </CardHeader>

      <PhoneScreen>
        <MobileTextarea
          {...rest}
          description={description}
          descriptionColor={descriptionColor}
          title={title}
          titleColor={titleColor}
        />
      </PhoneScreen>
    </Card>
  );
};
