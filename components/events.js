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
        <div className="flex flex-col justify-center w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <p className="text-2xl leading-normal ">{props.item.title}</p>
        </div>
      </div>
    </>
  );
}

const upcomingevents = [
  {
    title: "Tech Meetup with Local Colleges",
  },
  {
    title: "TopGear'23",
  },
];
const completedevents = [
  {
    title: "IITISoC'23",
  },
  {
    title: "Automathon'23",
  },
];

export default Events;
