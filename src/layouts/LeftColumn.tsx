import { ReactFCWithChildren } from "@/types";

export const LeftColumn: ReactFCWithChildren = ({ children }) => {
  return (
    <div className="flex justify-center items-center gap-10 flex-col w-full md:w-6/12 max-lg:flex-grow">
      {children}
    </div>
  );
};
