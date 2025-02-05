import { TextareaProps } from "@/types";

export const MobileTextarea = ({
  description,
  descriptionColor,
  title,
  titleColor,
}: TextareaProps) => {
  return (
    <div className="flex flex-col gap-4 w-full overflow-y-auto">
      <label htmlFor="textarea" className="text-center" style={{ color: titleColor }}>
        {title}
      </label>
      <style>{`
        #textarea::-webkit-input-placeholder {
          color: ${descriptionColor};
        }
        #textarea::-moz-placeholder {
          color: ${descriptionColor};
        }
        #textarea::placeholder {
          color: ${descriptionColor};
        }
        #textarea::placeholder {
          color: ${descriptionColor};
        }
      `}</style>
      <textarea
        id="textarea"
        name="textarea"
        style={{ color: descriptionColor }}
        className={`placeholder:text-[${descriptionColor}]`}
        placeholder={description}
      />
    </div>
  );
};
