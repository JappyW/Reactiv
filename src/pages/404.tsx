import { Button } from "@components/ShadCN";
import { useNavigate } from "react-router";

export const NotFoundPage = () => {
  const navigation = useNavigate();

  const handleRedirectToPreviousPage = () => {
    // Navigate back by one (-1) page
    return navigation(-1);
  };

  return (
    <div className="flex flex-col justify-center items-center h-80 w-full gap-4">
      <h3 className="text-4xl">Ooops...</h3>
      <h4 className="text-3xl">The page is not found</h4>
      <Button onClick={handleRedirectToPreviousPage}>Go back</Button>
    </div>
  );
};
