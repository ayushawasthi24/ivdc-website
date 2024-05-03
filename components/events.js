import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import react from "react";

const Events = () => {
  return (
    <>
      <p className="text-xl text-center my-2">Upcoming Events</p>
      {/* <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 px-6"> */}
      <div className="flex justify-center items-center flex-wrap">
        {upcomingevents.map((item) => {
          return <Card item={item}></Card>;
        })}
      </div>
      <p className="text-xl text-center my-2">Completed Events</p>
      {/* <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 px-6"> */}
      <div className="flex justify-center items-center flex-wrap">
        {completedevents.map((item) => {
          return <Card item={item}></Card>;
        })}
      </div>
    </>
  );
};

function Card(props) {
  return (
    <>
      <div className="lg:col-span-2 xl:col-auto m-2 p-2">
        <div className="ml-4 flex flex-col justify-between max-h-60 max-w-96 overflow-x-auto bg-gray-100 px-10 rounded-2xl py-10 dark:bg-trueGray-800">
          <p className="text-2xl leading-normal ">
            <Mark>{props.item.title}</Mark>
          </p>
          <p>{props.item.desc}</p>
          {props.item.link != null && (
            <a href={props.item.link} target="_blank">
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
            </a>
          )}
          {props.item.link == "Ongoing" && <a href="#">Ongoing</a>}
          <p>{props.item.people}</p>
        </div>
      </div>
    </>
  );
}
function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-blue-800 bg-blue-100 rounded-md ring-indigo-100 ring-4 dark:ring-blue-900 dark:bg-blue-900 dark:text-blue-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

const upcomingevents = [
  {
    title: "Tech Meetup with Local Colleges",
  },
];
const completedevents = [
  {
    title: "IITISoC'23",
    desc: "Lane Detection using limited Computation Resources",
    link: "https://github.com/IVDC-Club-IIT-Indore/IITISoC-23-IVR1-LaneDetection-using-LimitedComputationPower",
    people:
      "Kshitij M. Bhat, Sairaj R. Loke, Bhawna Chaudhary, Arjun S Nair, AMPADY B R, Aditya Singh",
  },
  {
    title: "Automathon'23",
  },
  {
    title: "TopGear'23",
    desc: "Conducted Gesture Constrolled Car Competition, PS : Trace it Out",
  }
];

export default Events;
