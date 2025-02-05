import { ButtonSettingsProvider } from "@/providers/ButtonSettingsProvider";
import { ButtonPreview } from "@components/ButtonPreview";
import ErrorBoundary from "@components/ErrorBoundary";

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
