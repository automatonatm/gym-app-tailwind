import React from "react";
import { Selectedpage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: Selectedpage) => void;
  children: React.ReactNode;
};

const ActionButton = ({ setSelectedPage, children }: Props) => {
  return (
    <AnchorLink
      className="cursor-pointer rounded-md bg-secondary-500 px-10 py-2  hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(Selectedpage.ContactUs)}
      href={`#${Selectedpage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
