/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { flexBetween } from "@/styles";
import Link from "./Link";
import { Selectedpage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { useState } from "react";

type Props = {
  selectedPage: Selectedpage;
  setSelectedPage: (value: Selectedpage) => void;
  isTopOfPage: boolean;
};

const NavBar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {

  const [isMenuToggled, setIsMenuToggle] = useState<boolean>(false);

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/*  LEFT SIDE */}

            <img src={Logo} alt="logo" />

            {/*  RIGHT SIDE */}

            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    //@ts-ignore
                    selectedPage={selectedPage}
                    //@ts-ignore
                    setSelectedPage={selectedPage}
                  />

                  <Link
                    page="Benefits"
                    //@ts-ignore
                    selectedPage={selectedPage}
                    //@ts-ignore
                    setSelectedPage={selectedPage}
                  />

                  <Link
                    page="Our Classes"
                    //@ts-ignore
                    selectedPage={selectedPage}
                    //@ts-ignore
                    setSelectedPage={selectedPage}
                  />

                  <Link
                    page="Contact Us"
                    //@ts-ignore
                    selectedPage={selectedPage}
                    //@ts-ignore
                    setSelectedPage={selectedPage}
                  />
                </div>

                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2 md:block"
                onClick={() => setIsMenuToggle(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menue */}

      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* Close Icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggle(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}

          <div className="flex flex-col">
            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
              <Link
                page="Home"
                selectedPage={selectedPage}
                //@ts-ignore
                setSelectedPage={selectedPage}
              />

              <Link
                page="Benefits"
                selectedPage={selectedPage}
                //@ts-ignore
                setSelectedPage={selectedPage}
              />

              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                //@ts-ignore
                setSelectedPage={selectedPage}
              />

              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                //@ts-ignore
                setSelectedPage={selectedPage}
              />
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-5">
              <p>Sign In</p>
              <ActionButton setSelectedPage={setSelectedPage}>
                Become a Member
              </ActionButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
