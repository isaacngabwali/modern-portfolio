import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          FaWordpress,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
<div className="min-h-screen bg-primary/30 py-32 text-center xl:text-left overflow-y-auto">
<Circles />


      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-12">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Dr.Amanya Abdul Karim. <br/><span className="text-accent">Author and senior financial advisor at UAP old mutual.</span> 

          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
As a seasoned author, senior financial advisor, and trainer, I have dedicated my career to empowering individuals and organizations to achieve financial wellness and success. With extensive experience in capacity building programs and financial literacy training, I have helped numerous clients navigate complex financial landscapes and make informed decisions about their financial resources.<br/><br/>
Through my writing, I aim to share my expertise and insights with a wider audience, providing accessible and actionable advice on personal finance, wealth management, and entrepreneurship. My publications have been well-received by readers seeking practical guidance on achieving financial stability and prosperity.<br/><br/>
As a trainer, I have had the privilege of working with diverse groups, from small business owners to community organizations, delivering customized training programs that address specific financial literacy needs. My interactive and engaging approach has earned me a reputation as a dynamic and effective trainer, able to break down complex financial concepts into easily understandable language.<br/><br/>
Throughout my career, I have been driven by a passion for financial education and a commitment to helping others achieve their financial goals. I believe that financial literacy is a fundamental right, and I am dedicated to making a positive impact in the lives of those I serve.



          </motion.p>
          
         

        </div>
      </div>
    </div>
  );
};

export default About;
