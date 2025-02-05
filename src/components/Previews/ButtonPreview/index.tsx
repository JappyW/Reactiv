import { LeftColumn, RightColumn } from "@/layouts/ColumnLayout";
import { ButtonSettings } from "@components/Previews/ButtonPreview/components/ButtonSettings";
import { ButtonContainer } from "@components/Previews/ButtonPreview/components/Container";

export const ButtonPreview = () => {
  return (
    <>
      <LeftColumn>
        <ButtonSettings />
      </LeftColumn>
      <RightColumn>
        <ButtonContainer />
      </RightColumn>
    </>
  );
};
