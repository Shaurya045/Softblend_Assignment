import React, { useContext } from "react";
import { Context } from "../context/Context";
import img from "../assets/aboutIMG.jpg";

function About() {
  const { theme } = useContext(Context);
  const bgColor = theme === "light" ? "bg-black" : "bg-white";

  return (
    <div className="flex flex-col gap-[30px] mb-[30px] ">
      <div className="flex flex-col justify-center items-center my-[30px] md:my-[50px] ">
        <div className={`w-full h-[1px] ${bgColor} `}></div>
        <h1 className="text-[61px] sm:text-[100px] md:text-[130px] lg:text-[170px] xl:text-[220px] 2xl:text-[270px] font-bold mt-[-15px] sm:mt-[-20px] md:mt-[-35px] lg:mt-[-45px] xl:mt-[-55px] 2xl:mt-[-60px] ">
          John Doe
        </h1>
        <div
          className={`w-full h-[1px] mt-[-10px] sm:mt-[-15px] md:mt-[-20px] lg:mt-[-30px] xl:mt-[-40px] ${bgColor} `}
        ></div>
      </div>
      <img className="object-cover w-full h-[400px] md:h-[550px]" src={img} alt="abot img" />
      <div className="flex flex-col gap-[15px]">
        <h2 className="text-[20px] font-bold ">About Me</h2>
        <p>
          As a passionate and experienced UI designer, I am dedicated to
          creating intuitive and engaging user experiences that meet the needs
          of my clients and their users. I have a strong understanding of design
          principles and a proficiency in design tools, and I am comfortable
          working with cross-functional teams to bring projects to fruition. I
          am confident in my ability to create designs that are both visually
          appealing and functional, and I am always looking for new challenges
          and opportunities to grow as a designer.
        </p>
      </div>
      <div className="flex flex-col gap-[15px]">
        <h2 className="text-[20px] font-bold ">Skills:</h2>
        <div className="pl-[5px]">
          <div className="flex flex-row items-center gap-[5px]">
            <div className={`w-[4px] h-[4px] rounded-full ${bgColor}`}></div>
            <p>
              Extensive experience in UI design, with a strong portfolio of
              completed projects
            </p>
          </div>
          <div className="flex flex-row items-center gap-[5px]">
            <div className={`w-[4px] h-[4px] rounded-full ${bgColor}`}></div>
            <p>
              Proficiency in design tools such as Adobe Creative Suite and
              Sketch
            </p>
          </div>
          <div className="flex flex-row items-center gap-[5px]">
            <div className={`w-[4px] h-[4px] rounded-full ${bgColor}`}></div>
            <p>
              Excellent visual design skills, with a strong understanding of
              layout, color theory, and typography
            </p>
          </div>
          <div className="flex flex-row items-center gap-[5px]">
            <div className={`w-[4px] h-[4px] rounded-full ${bgColor}`}></div>
            <p>
              Ability to create wireframes and prototypes to communicate design
              concepts
            </p>
          </div>
          <div className="flex flex-row items-center gap-[5px]">
            <div className={`w-[4px] h-[4px] rounded-full ${bgColor}`}></div>
            <p>
              Strong communication and collaboration skills, with the ability to
              work effectively with cross-functional teams
            </p>
          </div>
          <div className="flex flex-row items-center gap-[5px]">
            <div className={`w-[4px] h-[4px] rounded-full ${bgColor}`}></div>
            <p>
              Experience conducting user research and gathering insights to
              inform design decisions
            </p>
          </div>
          <div className="flex flex-row items-center gap-[5px]">
            <div className={`w-[4px] h-[4px] rounded-full ${bgColor}`}></div>
            <p>Proficiency in HTML, CSS, and JavaScript</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[15px]">
        <h2 className="text-[20px] font-bold ">Experience:</h2>
        <div className="pl-[5px]">
          <div className="flex flex-row items-center gap-[5px]">
            <div className={`w-[4px] h-[4px] rounded-full ${bgColor}`}></div>
            <p>
              5 years of experience as a UI designer, working on a variety of
              projects for clients in the tech and retail industries
            </p>
          </div>
          <div className="flex flex-row items-center gap-[5px]">
            <div className={`w-[4px] h-[4px] rounded-full ${bgColor}`}></div>
            <p>
              Led the design of a successful e-commerce website, resulting in a
              25% increase in online sales
            </p>
          </div>
          <div className="flex flex-row items-center gap-[5px]">
            <div className={`w-[4px] h-[4px] rounded-full ${bgColor}`}></div>
            <p>
              Created wireframes and prototypes for a mobile banking app,
              leading to a 20% increase in app usage
            </p>
          </div>
          <div className="flex flex-row items-center gap-[5px]">
            <div className={`w-[4px] h-[4px] rounded-full ${bgColor}`}></div>
            <p>
              Conducted user research and usability testing to inform the
              redesign of a healthcare provider's website, resulting in a 15%
              increase in website traffic
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[15px]">
        <h2 className="text-[20px] font-bold ">Education:</h2>
        <div className="pl-[5px]">
          <div className="flex flex-row items-center gap-[5px]">
            <div className={`w-[4px] h-[4px] rounded-full ${bgColor}`}></div>
            <p>Bachelor's degree in Graphic Design</p>
          </div>
          <div className="flex flex-row items-center gap-[5px]">
            <div className={`w-[4px] h-[4px] rounded-full ${bgColor}`}></div>
            <p>Certified User Experience Designer (CUED)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
