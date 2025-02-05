import { ReactFCWithChildren } from "@/types";

export const RightColumn: ReactFCWithChildren = ({ children }) => {
  return (
    <div className="flex justify-center items-center gap-10 flex-col flex-shrink-0 w-fit">
      {children}
    </div>
  );
};
