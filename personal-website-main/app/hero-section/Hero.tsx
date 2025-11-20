import Link from "next/link";
import Image from "next/image";


import { AiFillInstagram, AiFillLinkedin, AiFillGithub  } from "react-icons/ai";

//Animation
import { motion } from "framer-motion";
import { bodyAnimation, imageAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import { monaSans } from "../fonts/monaSans";
import FramerMagnetic from "../utils/FramerMagnetic";

const Hero = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
        behavior: "smooth",
    });
};

  return (
    <motion.section
      className="relative z-10 flex h-screen w-full items-stretch justify-center bg-[url('.//../public/heros.jpg')] bg-cover  bg-center py-0"
      id="home"
      initial="initial"
      animate="animate"
    >
      {/** Checked Background */}
      <Image 
      src="/background.png"
      alt="bg"
      width={1920}
      height={1080}
      className="absolute left-0 top-0 bg-center w-full h-full bg-cover"
      />

      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]"></div>

      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        {/** Connect Button */}
        <FramerMagnetic>
          <div>
            <Link
              href="#contact"
              data-blobity-magnetic="false"
              onClick={handleScroll}
              aria-label="Scroll to Contact Section"
            >
              <motion.button
                className="hidden rounded-full border-2 border-[#e4ded7] py-2 px-4 text-[14px] font-semibold text-[#e4ded7] sm:block  md:text-[16px] lg:block"
              variants={bodyAnimation}
              >
                Lets Connect
              </motion.button>
            </Link>
          </div>
        </FramerMagnetic>

        {/** Social Icons Right Side */}
        <div className="flex gap-10 text-[#e4ded7] sm:gap-6 md:gap-8 lg:gap-8">
          <FramerMagnetic>
            <Link
              href="https://github.com/Abadi2225"
              target="_blank"
              aria-label="View GitHub Profile"
            >
            <motion.p
              variants={bodyAnimation}
            >
              <AiFillGithub size={24} />
            </motion.p>
            </Link>
          </FramerMagnetic>
          <FramerMagnetic>
            <Link
              href="https://www.linkedin.com/in/abdullahefelemban/"
              target="_blank"
              aria-label="View LinkedIn Profile"
            >
              <motion.p
              variants={bodyAnimation}
              >
                <AiFillLinkedin size={24} />
              </motion.p>
            </Link>
          </FramerMagnetic>
          <FramerMagnetic>
            <Link
              href="https://www.instagram.com/___p/"
              target="_blank"
              aria-label="View Instagram Profile"
            >
              <motion.p
              variants={bodyAnimation}
              >
                <AiFillInstagram size={24} />
              </motion.p>
            </Link>
          </FramerMagnetic>
        </div>
      </div>

      <div className="-mt-36 flex flex-col items-center justify-center ">
        <div
        className={`relative flex flex-col items-center justify-center ${monaSans.className}`}
        >
            <AnimatedWords 
            title="Abdullah Felemban"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4 text-[#e4ded7]"
            />
          <motion.div
            className="absolute bottom-[-110px] mx-auto sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-190px]"
            variants={imageAnimation}
          >
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 flex items-center justify-center
      md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between">
        <motion.div
        className="max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
        variants={bodyAnimation}
        >
            <p className="z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left">
            Aspiring AI Engineer, Problem Solver, Innovator, and Future Tech Leader.
            </p>
        </motion.div>

        <motion.div
        className="max-w-[500px] hidden lg:block lg:max-w-[420px]"
        variants={bodyAnimation}
        >
            <p className="text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
            Passionate about building innovative solutions, advancing AI, and shaping the future of technology.            </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
