import { ReactivLogoSVG } from "@components/Native/SVGIcons";
import { ThemeSwitch } from "@components/Native/ThemeSwitch";

import { Link } from "react-router";

export const NavBar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-primary-dark text-primary-content dark:bg-primary-dark dark:text-primary-content-dark shadow-md shadow-indigo-500/10">
      <div className="flex gap-2">
        <a href="https://www.reactivapp.com/" target="_blank" className="w-40">
          <ReactivLogoSVG color="#0DD686" />
        </a>
      </div>
      <ul className="flex flex-wrap gap-4 items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/button">Button</Link>
        </li>
        <li>
          <Link to="/carousel">Carousel</Link>
        </li>
        <li>
          <Link to="/textarea">TextArea</Link>
        </li>
        <li>
          <ThemeSwitch />
        </li>
      </ul>
    </nav>
  );
};
