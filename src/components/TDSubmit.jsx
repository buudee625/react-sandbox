function TDSubmit() {
  return (
    <form action="">
      <label htmlFor="new-td">New To-Do: </label>
      <input type="text" placeholder="Enter new to-dos"></input>
      <label htmlFor="td-priority">Priority: </label>
      <select name="td-priority" id="td-priority">
        <option value="urgent">Do it right NAAAAOW</option>
        <option value="mid">Kinda important</option>
        <option value="backlog">I'll get to it</option>
      </select>
      <button type="submit">ADD TO-DO</button>
    </form>
  );
}

export default TDSubmit;
