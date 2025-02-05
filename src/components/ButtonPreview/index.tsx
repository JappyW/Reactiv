import { LeftColumn } from "@/layouts/LeftColumn";
import { RightColumn } from "@/layouts/RightColumn";
import { ButtonSettings } from "@components/ButtonPreview/components/ButtonSettings";
import { ButtonContainer } from "@components/ButtonPreview/components/Container";

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
