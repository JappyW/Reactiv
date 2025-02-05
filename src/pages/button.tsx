import { ButtonSettingsProvider } from "@/providers/ButtonSettingsProvider";
import { ButtonPreview } from "@components/ButtonPreview";

const ButtonPage = () => {
  return (
    <ButtonSettingsProvider>
      <ButtonPreview />
    </ButtonSettingsProvider>
  );
};

export default ButtonPage;
