import { Button } from "@components/ShadCN";
import { Link } from "react-router";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-5/6 gap-10">
      <h1 className="text-7xl text-center">Hello Reactiv!</h1>
      <div className="flex justify-center items-center gap-10 flex-wrap">
        <Button className="w-24">
          <Link to="/carousel">Carousel</Link>
        </Button>
        <Button className="w-24">
          <Link to="/button">Button</Link>
        </Button>
        <Button className="w-24">
          <Link to="/textarea">Text Area</Link>
        </Button>
      </div>
    </div>
  );
};
