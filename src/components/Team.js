import React from "react";

const Team = props => {
  return (
    <div className="team-list">
      {props.team.map(member => (
        <div className="team-member" key={member.id}>
          <h2>Name: {member.name}</h2>
          <p>Position: {member.position}</p>
          <p>ID: {member.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;
