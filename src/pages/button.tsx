import { ButtonSettingsProvider } from "@/providers/ButtonSettingsProvider";
import { ButtonPreview } from "@components/ButtonPreview";

export const ButtonPage = () => {
  return (
    <ButtonSettingsProvider>
      <ButtonPreview />
    </ButtonSettingsProvider>
  );
};
