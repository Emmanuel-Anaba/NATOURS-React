import { IonIcon } from "@ionic/react";
import Logo from "../assets/img/logo-white.webp";
import { close, menu } from "ionicons/icons";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About Us", link: "#about" },
    { name: "Benefits", link: "#features" },
    { name: "Tours", link: "#tours" },
    { name: "Stories", link: "#stories" },
    { name: "Book Now", link: "#book" },
  ];
  return (
    <nav
      className={`shadow-md w-full sticky top-0 text-white h-[60px] grid place-items-center z-20 md:border-none border-white transition-all duration-500 ${
        open ? "border-b-[1px]" : "border-b-0"
      }`}>
      <div className="flex items-center justify-between md:myContainer w-full px-3 md:p-0">
        <img src={Logo} alt="logo" className="h-8" />
        <div className="flex items-center gap-6">
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl cursor-pointer md:hidden grid">
            <IonIcon icon={open ? close : menu}></IonIcon>
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 md:static md:z-auto absolute z-[-1] left-0 w-full md:w-auto p-3 md:p-0 grid gap-4 transition-all duration-500 ease-in-out ${
              open ? "top-[60px] bg-[#55c57a] shadow-2xl" : "top-[-490px]"
            }`}>
            {navLinks.map(({ link, name }) => (
              <li key={name} onClick={() => setOpen(false)}>
                <a href={link} className="cursor-pointer">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
