import { ButtonSettingsProvider } from "@/providers/ButtonSettingsProvider";
import ErrorBoundary from "@components/ErrorBoundary";
import { ButtonPreview } from "@components/Previews/ButtonPreview";

const ButtonPage = () => {
  return (
    <ButtonSettingsProvider>
      <ErrorBoundary>
        <ButtonPreview />
      </ErrorBoundary>
    </ButtonSettingsProvider>
  );
};

export default ButtonPage;
