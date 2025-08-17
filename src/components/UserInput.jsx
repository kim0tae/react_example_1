export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Invesetment</label>
          <input type="number" required />
        </p>
        <p>
          <label>Annual Invesetment</label>
          <input type="number" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Invesetment</label>
          <input type="number" required />
        </p>
        <p>
          <label>Duration Invesetment</label>
          <input type="number" required />
        </p>
      </div>
    </section>
  );
}
