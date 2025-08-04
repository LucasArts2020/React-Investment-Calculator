import { useState } from "react";

export default function UserInput() {
  const { result, setResult } = useState("");

  function handleChange(event) {
    setResult(event.target.value);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input
            type="number"
            required
            value={result}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Annual investment</label>
          <input type="number" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected investment</label>
          <input type="number" required />
        </p>
        <p>
          <label>Duation</label>
          <input type="number" required />
        </p>
      </div>
      <p>{result}</p>
    </section>
  );
}
