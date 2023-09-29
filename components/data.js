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

const projects = [
  {
    title: "Autonomous EV",
    desc: "Autonomous Electric Campus Vehicle - IIT Indore.",
    link: "Ongoing",
    people: "",
  },
  {
    title: "Drona Aviation Pluto Swarm Challenge",
    desc: "Inter-IIT Tech Meet 11.0: Bronze medal winning solution to Drona Aviation's Pluto Drone Swarm Challenge",
    link: "https://github.com/DaemonLab/Drone-Swarm-InterIIT-2023",
    people:
      "Yeeshukant Singh, Kshitij Bhat, Harsh Bardhan, Rohan Jha, Sairaj Loke, Akshit Raizada, Omkar Shirgaonkar, Shivankar Sharma, Abhishek Nair and Karandevsinh Khuman",
  },
];

export { benefitOne, projects };
