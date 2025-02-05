import { ButtonProps, ClassNameHelper } from "@/types";

const MobileButtonLabel = ({
  link,
  label,
  style,
}: Pick<ButtonProps, "link" | "label"> & { style: React.CSSProperties }) => {
  if (link) {
    return (
      <a rel="noopener noreferrer" target="_blank" style={style} href={link}>
        {label}
      </a>
    );
  }

  return <span style={style}>{label}</span>;
};

export const MobileButton = ({
  bgColor,
  label,
  labelColor,
  link,
  borderRadius,
  padding,
  className,
}: ButtonProps & ClassNameHelper) => {
  return (
    <button
      aria-label={label}
      className={className}
      style={{
        backgroundColor: bgColor,
        borderRadius: `${borderRadius}%`,
        padding: `${padding}px`,
        whiteSpace: "normal",
        wordWrap: "break-word",
      }}
    >
      {<MobileButtonLabel label={label} link={link} style={{ color: labelColor }} />}
    </button>
  );
};
