import { LeftColumn } from "@/layouts/LeftColumn";
import { RightColumn } from "@/layouts/RightColumn";
import { TextareaContainer } from "@components/TextareaPreview/components/Container";
import { TextareaSettings } from "@components/TextareaPreview/components/TextareaSettings";

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
