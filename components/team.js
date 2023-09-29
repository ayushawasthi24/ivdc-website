import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <Card name="Ayush" designation="Member" img=""></Card>
      <Card
        name="Ayush"
        designation="Member"
        img="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
      ></Card>
    </div>
  );
};

function Avatar(props) {
  return (
    <div className="flex items-center my-auto space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-10 h-10">
        <Image src={props.image} width="40" height="40" alt="Avatar" />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}
function Card(props) {
  return (
    <>
      <div className="lg:col-span-2 xl:col-auto m-2 p-2">
        <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <Avatar
            image={props.img}
            name={props.name}
            title={props.designation}
          />
        </div>
      </div>
    </>
  );
}

const team = [
  {
    id : 1,
    name : "",
    img: "",
    linkedin: "",
    github: "",
    
  }
];

export default Team;
