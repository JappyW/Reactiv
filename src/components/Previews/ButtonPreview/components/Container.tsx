import { MobileButton } from "@/mobile/components/Button";
import { useButtonSettings } from "@/providers/ButtonSettingsProvider";
import { PhoneScreen } from "@components/PhoneScreen";
import { Card, CardHeader, CardTitle } from "@components/ShadCN";

export const ButtonContainer = () => {
  const {
    state: { bgColor, label, labelColor, link, borderRadius, padding, ...rest },
  } = useButtonSettings();

  return (
    <Card className="p-10 w-fit flex justify-center items-center flex-col">
      <CardHeader className="mb-10">
        <CardTitle>Button Preview</CardTitle>
      </CardHeader>

      <PhoneScreen>
        <MobileButton
          {...rest}
          className="max-w-72 hover:scale-105 active:scale-95 shadow-md shadow-primary/10 transition-transform duration-150"
          borderRadius={borderRadius}
          padding={padding}
          bgColor={bgColor}
          label={label}
          link={link}
          labelColor={labelColor}
        />
      </PhoneScreen>
    </Card>
  );
};
