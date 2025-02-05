import { LeftColumn, RightColumn } from "@/layouts/ColumnLayout";
import { TextareaContainer } from "@components/Previews/TextareaPreview/components/Container";
import { TextareaSettings } from "@components/Previews/TextareaPreview/components/TextareaSettings";

export const TextareaPreview = () => {
  return (
    <>
      <LeftColumn>
        <TextareaSettings />
      </LeftColumn>
      <RightColumn>
        <TextareaContainer />
      </RightColumn>
    </>
  );
};
