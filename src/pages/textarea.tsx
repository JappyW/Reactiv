import { TextareaSettingsProvider } from "@/providers/TextareaSettingsProvider";
import { TextareaPreview } from "@components/TextareaPreview";

const TextareaPage = () => {
  return (
    <TextareaSettingsProvider>
      <TextareaPreview />
    </TextareaSettingsProvider>
  );
};

export default TextareaPage;
