import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [displayedData, setDisplayedData] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "" || age.trim() === "") {
      setError("Please enter both name and age.");
    } else if (parseInt(age) <= 0) {
      setError("Age should be greater than 0.");
    } else {
      setError("");
      setDisplayedData((prevData) => [...prevData, { name, age }]);
      setName("");
      setAge("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
      <div>
        <h2>Submitted Data:</h2>
        {displayedData.map((data, index) => (
          <p key={index}>
            Name: {data.name}, Age: {data.age}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
