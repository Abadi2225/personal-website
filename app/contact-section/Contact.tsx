import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { motion } from "framer-motion";
import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub, AiFillLinkedin  } from "react-icons/ai";
import { bodyAnimation } from "../animations/animations";
import FramerMagnetic from "../utils/FramerMagnetic";

const Contact = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[95vh] w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28 3xl:h-[75vh]"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <Image 
      src="/bg_blur-min.png"
      alt="bg"
      width={1920}
      height={1080}
      className="absolute left-0 top-0 bg-center w-full h-full bg-cover"
      />

      <div className="mx-auto  flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">

        <div
          className={`flex flex-col items-start justify-center ${monaSans.className} relative w-full sm:items-center lg:max-w-[1440px] `}
        >
          <AnimatedWords2
            title={"Let's Connect"}
            style={
              "flex max-w-[500px] flex-col items-start text-left text-[150px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[170px] md:text-[200px] lg:text-center lg:text-[270px] xl:text-[300px]"
            }
          />
        </div>

        <div className="mt-20 flex w-full flex-col items-end justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">

          <div className=" flex w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">

            <AnimatedBody
              text={
                "Got a question, proposal, project, or want to work together on something?"
              }
              className={
                "-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
              }
            />

            <div className="bor der mt-5 flex w-[298px] items-center gap-1 md:w-[10px] md:gap-2.5">
              <Link
                href="mailto:abdullahefelemban@gmail.com"
                target="_blank"
                aria-label="Send me an email"
                className="mt-1 w-[147px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[170px] md:mt-3 lg:mt-4"
              >
                <AnimatedBody
                  text={"Send me an email"}
                  className={"pr-[40px] md:w-[170px] md:pr-0"}
                />
              </Link>
            </div>
          </div>

          <div className="flex gap-10 text-[16px] font-bold text-[#e4ded7]  sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
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

            {/* <Link
              href="https://twitter.com/"
              target="_blank"
              aria-label="View Twitter Profile"
            >
              <motion.p
              variants={bodyAnimation}
            >
              <AiFillTwitterCircle size={24} />
            </motion.p>
            </Link> */}

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
      </div>
    </motion.section>
  );
};

export default Contact;
