import { Link } from "@remix-run/react";
import { navLinks } from "../Constants";

const Nav = () => {
  return (
    <header className="sm:px-16 px-8 py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-w-[1440px] my-0 mx-auto">
        <Link to="/">
          <img
            src={"/images/header-logo.svg"}
            alt="Logo"
            width={130}
            height={29}
          />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={"/icons/hamburger.svg"}
            alt="Hamburger"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
