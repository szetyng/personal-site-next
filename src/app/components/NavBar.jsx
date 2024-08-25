"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";

const NavBar = () => {
  const pathname = usePathname();
  const navLinks = [
    {
      text: "about me",
      path: "/about",
    },
    {
      text: "projects",
      path: "/projects",
    },
    {
      text: "blog",
      path: "/blog",
      disabled: true,
    },
  ];

  return (
    <>
      <nav className="flex px-20 py-4">
        <div className="w-2/5">
          <Link href="/">
            <h1 className="font-bold text-2xl  hover:text-off-blue">
              sze tyng lee
            </h1>
          </Link>
        </div>
        <div className="flex w-3/5 gap-4">
          <div className="grow"></div>
          {navLinks.map((link) => {
            return (
              <Link
                href={link.path}
                className={`font-bold hover:text-off-blue ${
                  pathname === link.path ? "text-off-blue" : ""
                }`}
                disabled={true}
                key={link.path}
              >
                {link.text}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
