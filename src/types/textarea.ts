export type TextareaProps = {
  title: string;
  description: string;
  titleColor: string;
  descriptionColor: string;
};

export type TextareaSettingsActions = {
  setTitle: (title: string) => void;
  setDescription: (title: string) => void;
  setTitleColor: (title: string) => void;
  setDescriptionColor: (title: string) => void;
};
