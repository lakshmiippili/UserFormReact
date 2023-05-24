import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const changeAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const changeNameHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const addNewUSerHAndler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    setEnteredAge('');
    setEnteredName('');
  };
  return (
    <Card>
      <form onSubmit={addNewUSerHAndler}>
        <label htmlFor="uname"> Enter UserName</label>
        <input
          type="text"
          id="uname"
          value={enteredName}
          onChange={changeNameHandler}
        ></input>
        <label htmlFor="age"> Enter Age</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={changeAgeHandler}
        ></input>
        <Button type="submit">Add New User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
