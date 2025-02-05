import { ButtonProps, ClassNameHelper } from "@/types";

// const MobileButtonLabel = ({
//   link,
//   label,
//   style,
// }: Pick<ButtonProps, "link" | "label"> & { style: React.CSSProperties }) => {
//   if (link) {
//     return (
//         {label}
//       </a>
//     );
//   }

//   return
// };

export const MobileButton = ({
  bgColor,
  label,
  labelColor,
  link,
  borderRadius,
  padding,
  className,
}: ButtonProps & ClassNameHelper) => {
  console.log(link);

  return (
    <a rel="noopener noreferrer" target="_blank" style={{ color: labelColor }} href={link}>
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
