//Button Types
export type ButtonProps = {
  label: string;
  labelColor: string;
  bgColor: string;
  padding: number;
  borderRadius: number;
  link?: string;
};

export type ButtonSettingsActions = {
  setLabel: (title: string) => void;
  setLink: (link: string) => void;
  setLabelColor: (color: string) => void;
  setBGColor: (bgColor: string) => void;
  setPadding: (padding: number) => void;
  setBorderRadius: (borderRadius: number) => void;
};
