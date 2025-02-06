import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-80 gap-10">
      <h1 className="text-7xl text-center">Hello Reactiv!</h1>
      <div className="flex justify-center items-center gap-10 flex-wrap">
        <Link className="w-24 outline p-1 outline-2 rounded-sm text-center" to="/button">
          Button
        </Link>
        <Link className="w-24 outline p-1 outline-2 rounded-sm text-center" to="/carousel">
          Carousel
        </Link>
        <Link className="w-24 outline p-1 outline-2 rounded-sm text-center" to="/textarea">
          Text Area
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
