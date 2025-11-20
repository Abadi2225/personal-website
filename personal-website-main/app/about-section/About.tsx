import Image from "next/image";
import "../animations/animate.css";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";

const About = () => {
  return (
    <section 
    className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#FFF] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
    id="about"
    >
      <Image 
      src="/bg_blur-min.png"
      alt="bg"
      width={1920}
      height={1080}
      className="absolute left-0 top-0 bg-center w-full h-full bg-cover"
      />

      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle 
        text={
            "Transforming Ideas into Reality: Bridging Technology, Innovation, and Creativity."
        }
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className="mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#333] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
        />

        <div className="mx-auto flex w-[100%] flex-col">
            <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#333] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:text-[24px]">
                <AnimatedBody 
                text={
                    "Hi! I'm Abdullah Felemban, a Computer Science and Engineering student at Ohio State University, with a specialization in Artificial Intelligence and a minor in Geographic Information Science. My journey into tech started with my curiosity to understand and build innovative solutions that improve people’s lives."
                }
                />

                <AnimatedBody 
                    text={
                        "What sets me apart is my commitment to solving problems with both technical precision and creative thinking. My experiences in cybersecurity competitions, hackathons, and personal projects have taught me how to thrive under pressure and deliver results in fast-paced, collaborative environments."
                      }
                />

            <AnimatedBody
              text={
                "I’ve developed a strong technical foundation through my academic and extracurricular pursuits. With proficiency in programming languages like Java, Python, and MATLAB, as well as experience with data processing and machine learning, I’m passionate about applying these skills to meaningful, impactful projects."
              }
            />

            <AnimatedBody
              text={
                "Currently, I’m focused on blending my skills in AI, GIS, and software development to create scalable, efficient solutions. Whether it’s building software applications or analyzing geospatial data, I’m driven to contribute to projects that make a tangible difference."
              }
            />
            </div>

            <div className="mb-24 flex w-[100%] flex-row gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#333]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16  lg:text-[18px]">
                <div className="flex flex-col gap-4 md:gap-3">
                    <AnimatedTitle 
                    text={"Programming Skills"}
                    className={
                        "text-[24px] text-[#333] md:text-[30px] lg:text-[20px]"
                    }
                    wordSpace={"mr-[0.25em]"}
                    charSpace={"mr-[0.01em]"}
                    />

                    <AnimatedBody 
                    text={
                        "Java, Python, MATLAB, HTML5, CSS3, Tailwind CSS, Git."
                    }
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <AnimatedTitle
                        text={"Design Tools"}
                        className={
                        "text-[24px] text-[#333] md:text-[30px] lg:text-[20px]"
                        }
                        wordSpace={"mr-[0.25em]"}
                        charSpace={"mr-[0.01em]"}
                    />
                    <AnimatedBody
                        text={
                        "Artificial Intelligence, Machine Learning, Geographic Information Systems (GIS), Cybersecurity, Data Analysis."
                        }
                    />
                </div>
            </div>
        </div>
      </div>    
    </section>
  )
}

export default About
