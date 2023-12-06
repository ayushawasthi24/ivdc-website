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
import AutonomousEV from "../public/img/EV_Brain.jpg";
import Drone from "../public/img/plutoDrone.png"
import benefitOneImg from "../public/img/one.png";
import jlr from "../public/img/jlr.jpg";
import jackal from "../public/img/jackal.jpeg";
import car from "../public/img/car.gif";

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
    img: AutonomousEV,
  },
  {
    title: "Drona Aviation Pluto Swarm Challenge",
    desc: "Inter-IIT Tech Meet 11.0: Bronze medal winning solution to Drona Aviation's Pluto Drone Swarm Challenge",
    link: "https://github.com/DaemonLab/Drone-Swarm-InterIIT-2023",
    img: Drone,
    people:
      "Yeeshukant Singh, Kshitij Bhat, Harsh Bardhan, Rohan Jha, Sairaj Loke, Akshit Raizada, Omkar Shirgaonkar, Shivankar Sharma, Abhishek Nair and Karandevsinh Khuman",
  },
  {
    title: "JLR  Robotic Charging",
    desc: "To develop a robotic arm that can automatically detect the vehicle's charging port and plug the socket into the charging port.",
    link: "https://github.com/AdityaGuhagarkar/JLR_Robotic_Charging",
    people: "",
    img: jlr,
  },
  {
    title: "Autonomous Navigation for Vehicles in Rough Terrain",
    desc: "To demonstrate how to achieve robust and efficient navigation for mobile robots in challenging terrains using MATLAB toolboxes and co-simulation with Gazebo",
    link: "https://github.com/IVDC-Club-IIT-Indore/RoughTerrain-IVR2",
    people: "",
    img: jackal,
  },
  {
    title: "IVDC Car ",
    desc: "To Develop a robust lane detection pipeline that consumes meager computational resources (No GPU allowed, limited CPU and RAM usage) and could be deployed on NVIDIA Jetson Nano Board or even a Raspberry Pi board",
    link: "https://github.com/IVDC-Club-IIT-Indore/IITISoC-23-IVR1-LaneDetection-using-LimitedComputationPower",
    people: "",
    img: car,
  },
];

export { benefitOne, projects };
