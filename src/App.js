import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Blair Robinson",
      email: "abr@abrsolutions.com",
      position: "Web developer"
    }
  ]);

  const addNewTeamMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      position: member.position
    };
    setTeam([...team, newMember]);
  };

  return (
    <div className="App">
      <h1>My Team Members</h1>
      <Form addNewTeamMember={addNewTeamMember} />
      <Team team={team} />
    </div>
  );
}

export default App;
