import { Selectedpage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import ponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

type Props = {
  setSelectedPage: (value: Selectedpage) => void;
};

  const variants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const variants2: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

const Home = ({ setSelectedPage }: Props) => {
  


  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0 ">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
       onViewportEnter={() => setSelectedPage(Selectedpage.Home)}
       className="mx-auto  flex w-5/6 flex-col items-center justify-center md:h-5/6 md:flex-row"
       >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={variants}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="homepage-text" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          {/* ACTIONS */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 1, duration: 0.5 }}
            variants={variants2}
            className="mt-8 flex flex-row items-center gap-8"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold underline hover:text-secondary-500"
              onClick={() => setSelectedPage(Selectedpage.ContactUs)}
              href={`#${Selectedpage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </motion.div>

      {/* SPONSORS */}

      <div className="mt-10 h-[100px]  w-full  bg-primary-100 py-5 md:mt-0 md:h-[150px] md:py-10">
        <div className="mx-auto w-5/6">
          <div className="flex w-[100%] items-center  justify-between gap-8 overflow-x-auto  overflow-y-hidden  md:w-3/5">
            <img src={SponsorRedBull} alt="redbul-sponsor" />
            <img src={SponsorForbes} alt="forbes-sponsor" />
            <img src={ponsorFortune} alt="fortun-sponsor" />
            <img src={SponsorRedBull} alt="redbul-sponsor" />
            <img src={SponsorForbes} alt="forbes-sponsor" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Home;
