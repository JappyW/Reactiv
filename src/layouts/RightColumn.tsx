import { ReactNode } from "react";

export const RightColumn: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex justify-center items-center gap-10 flex-col md:w-5/12 w-full">
      {children}
    </div>
  );
};
