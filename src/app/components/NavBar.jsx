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
      <nav className="flex justify-center">
        <div className="flex py-4 md:px-20 px-8 max-w-7xl w-full">
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
        </div>
      </nav>
    </>
  );
};

export default NavBar;
