import { Selectedpage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: Selectedpage;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  setSelectedPage: (value: Selectedpage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {

  const lowerCase = page.toLowerCase().replace(/ /g, "") as Selectedpage;

  return (
    <AnchorLink
      href={`#${lowerCase}`}
      onClick={() => setSelectedPage(lowerCase)}
      className={`${
        selectedPage === lowerCase ? "text-primary-500" : ""
      } transition duration-500  hover:text-primary-300`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
