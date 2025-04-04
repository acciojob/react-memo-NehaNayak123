import React, { useState } from 'react';

const Skill = React.memo(({ name }) => <li>{name}</li>);

function ReactMemo() {
  const [input, setInput] = useState('');
  const [skills, setSkills] = useState([]);

  const addSkill = () => {
    if (input.trim().length > 5) {
      setSkills([...skills, input]);
      setInput('');
    }
  };

  return (
    <div>
      <h2>React.memo</h2>
      <input
        type="text"
        placeholder="Enter a skill"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addSkill}>Add Skill</button>
      <ul>
        {skills.map((skill, i) => (
          <Skill key={i} name={skill} />
        ))}
      </ul>
    </div>
  );
}

export default ReactMemo;
