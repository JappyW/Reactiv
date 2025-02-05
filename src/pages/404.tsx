import { Button } from "@components/ShadCN";
import { useNavigate } from "react-router";

export const NotFoundPage = () => {
  const navigation = useNavigate();

  const handleRedirectToPreviousPage = () => {
    // Navigate back by one (-1) page
    return navigation(-1);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h3>Ooops...</h3>
      <h4>The page is not found</h4>
      <Button onClick={handleRedirectToPreviousPage}>Go back</Button>
    </div>
  );
};
