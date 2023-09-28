import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  SignalIcon,
  CogIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "We majorly work on",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Self Driving Cars",
      desc: "Navigate and operate vehicles without human intervention, promising safer and more efficient transportation.",
      icon: <SignalIcon />,
    },
    {
      title: "AGVs",
      desc: "From transportation to logistics, revolutionizing industries with automation and efficiency.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "UGVs",
      desc: "Robotic machines capable of performing tasks on land, ranging from military operations and exploration to agriculture and logistics, with applications spanning multiple domains.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Robotic Arms",
      desc: "Perform precise tasks in industries like manufacturing, healthcare, and space exploration.",
      icon: <CogIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

const projects = [
  {
    title:"Project 1",
  },
  {
    title: "Project 2",
  }, 
];

export { benefitOne, benefitTwo, projects };
