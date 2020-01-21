import React, { useState } from "react";

const Form = props => {
  console.log("props", props);
  const [member, setMember] = useState({
    name: "",
    email: "",
    position: ""
  });

  const makeChanges = e => {
    // Why does this work below
    setMember({
      ...member,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewTeamMember(member);
    setMember({ name: "", email: "", position: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <p>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          name="name"
          onChange={makeChanges}
          value={member.name}
        />
      </p>
      <p>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          name="email"
          onChange={makeChanges}
          value={member.email}
        />
      </p>
      <p>
        <label htmlFor="position">Position: </label>
        <input
          id="position"
          name="position"
          onChange={makeChanges}
          value={member.position}
        />
      </p>
      <button type="submit">Add Team Member</button>
    </form>
  );
};

export default Form;
