export default function GoalForm() {
  return (
    <form 
      id="goal-form" 
      hx-post="/goals" 
      hx-target="#goals" 
      hx-select="#goals">
      <div>
        <label htmlFor="goal">Goal</label>
        <input type="text" id="goal" name="goal" />
      </div>
      <button type="submit">Add goal</button>
    </form>
  );
}
