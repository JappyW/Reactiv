import { ReactivLogoSVG } from "@components/Icons/ReactivLogo";
import { ThemeSwitch } from "@components/ThemeSwitch";

import { Link } from "react-router";

export const NavBar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-primary-dark text-primary-content dark:bg-primary-dark dark:text-primary-content-dark shadow-md shadow-primary/10">
      <div className="flex gap-2">
        <a href="https://www.reactivapp.com/" target="_blank" className="w-40">
          <ReactivLogoSVG color="hsl(var(--primary))" />
        </a>
      </div>
      <ul className="flex flex-wrap gap-4 items-center">
        <li>
          <Link
            to="/"
            className="w-24 hover:outline hover:outline-2 p-1 rounded-sm text-center block"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/button"
            className="w-24 hover:outline hover:outline-2 p-1 rounded-sm text-center block"
          >
            Button
          </Link>
        </li>
        <li>
          <Link
            to="/carousel"
            className="w-24 hover:outline hover:outline-2 p-1 rounded-sm text-center block"
          >
            Carousel
          </Link>
        </li>
        <li>
          <Link
            to="/textarea"
            className="w-24 hover:outline hover:outline-2 p-1 rounded-sm text-center block"
          >
            TextArea
          </Link>
        </li>
        <li>
          <ThemeSwitch />
        </li>
      </ul>
    </nav>
  );
};
