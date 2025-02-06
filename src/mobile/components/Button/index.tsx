import { ButtonProps, ClassNameHelper } from "@/types";

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
    <a
      id="mobile-button"
      className="mobile-button-link"
      rel="noopener noreferrer"
      target="_blank"
      style={{ color: labelColor }}
      href={link === "" ? undefined : link}
    >
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
        <span style={{ color: labelColor }}>{label}</span>
      </button>
    </a>
  );
};
