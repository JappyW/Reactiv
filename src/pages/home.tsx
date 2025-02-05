import { Button } from "@components/ShadCN";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-80 gap-10">
      <h1 className="text-7xl text-center">Hello Reactiv!</h1>
      <div className="flex justify-center items-center gap-10 flex-wrap">
        <Button className="w-24 p-0">
          <Link className="w-full" to="/carousel">
            Carousel
          </Link>
        </Button>
        <Button className="w-24 p-0">
          <Link className="w-full" to="/button">
            Button
          </Link>
        </Button>
        <Button className="w-24 p-0">
          <Link className="w-full" to="/textarea">
            Text Area
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
