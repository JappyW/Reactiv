import { TextareaSettingsProvider } from "@/providers/TextareaSettingsProvider";
import ErrorBoundary from "@components/ErrorBoundary";
import { TextareaPreview } from "@components/Previews/TextareaPreview";

const TextareaPage = () => {
  return (
    <TextareaSettingsProvider>
      <ErrorBoundary>
        <TextareaPreview />
      </ErrorBoundary>
    </TextareaSettingsProvider>
  );
};

export default TextareaPage;
