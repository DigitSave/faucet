import { useEffect, useState } from "react";
import { CloseIcon, HamburgerIcon } from "../icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full flex justify-between items-center py-4 px-6 md:px-10 bg-tertiary-7 bg-opacity-90 border-b border-neutral-8 ${
          scrolled ? "bg-[#008888]" : ""
        } ß`}
      >
        <div className="text-2xl font-bold ">
          <img src="/images/logo/logo.png" alt="logo" className="h-6 md:h-7" />
        </div>

        {/*  nav */}
        <nav className=" hidden md:block space-x-6">
          <a
            href="https://digitsave.finance"
            target="_blank"
            className="hover:text-gray-400"
          >
            Save
          </a>

          <a
            href="https://digitsave.finance/learn"
            target="_blank"
            className="hover:text-gray-400"
          >
            Learn
          </a>
        </nav>
        <button onClick={() => setNavOpen(!navOpen)} className="md:hidden">
          {navOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </header>
      {navOpen && (
        <div
          className="md:hidden z-40 top-14 fixed left-0 bottom-0 bg-tertiary-7 right-0 bg-opacity-75 backdrop-blur-sm"
          onClick={() => setNavOpen(!navOpen)}
        >
          <div
            className={`md:hidden z-50 top-0 fixed overflow-hidden right-0 flex-col gap-4 items-left bg-[#2B2B2B] w-60 pb-20 px-6 py-6 `}
          >
            <ul
              className="flex z-50 flex-col gap-2 text-neutral-3"
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href="https://digitsave.finance"
                target="_blank"
                className="cursor-pointer hover:text-white transition-colors duration-300"
              >
                Save
              </a>

              <a
                href="https://digitsave.finance/learn"
                target="_blank"
                className="cursor-pointer hover:text-white transition-colors duration-300"
              >
                Learn
              </a>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
