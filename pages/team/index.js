import React from "react";
import Card from "../../components/card";
import { TeamMembers } from "../../components/TeamMembers";
import Navbar from "../../components/navbar";

const teamspage = () => {
  return (
    <>
      <Navbar />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 -z-1">
        {TeamMembers.map((ele, index) => {
          return (
            <React.Fragment key={ele.id}>
              <div>
                <Card
                  className="!ring-[10px] !ring-blue-500 !ring-opacity-70"
                  ele={ele}
                />
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default teamspage;
