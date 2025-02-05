import { MobileButton } from "@/mobile/components/Button";
import { useButtonSettings } from "@/providers/ButtonSettingsProvider";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ShadCN";

export const ButtonContainer = () => {
  const {
    state: { bgColor, label, labelColor, link, borderRadius, padding, ...rest },
  } = useButtonSettings();

  return (
    <Card className="p-10 w-fit flex justify-center items-center flex-col">
      <CardHeader className="mb-10">
        <CardTitle>Button Preview</CardTitle>
      </CardHeader>

      <CardContent>
        <MobileButton
          {...rest}
          borderRadius={borderRadius}
          padding={padding}
          bgColor={bgColor}
          label={label}
          link={link}
          labelColor={labelColor}
        />
      </CardContent>
    </Card>
  );
};
