import Link from "next/link";

const NavBar = () => {
  const navLinks = [
    {
      text: "about me",
      path: "/about-me",
    },
    {
      text: "projects",
      path: "/projects",
    },
    {
      text: "blog",
      path: "/about-me",
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
              <Link href={link.path} className="font-bold hover:text-off-blue">
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
