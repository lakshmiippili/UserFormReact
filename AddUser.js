import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorBox from "../UI/ErrorBox";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const changeAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const changeNameHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  const addNewUSerHAndler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({ title: "Wrong Inputs", msg: "Enter valid Name and Age" });
      return;
    }
    if (+enteredAge < 1) {
      setError({ title: "Wrong Age", msg: "Enter valid Age" });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    setEnteredAge("");
    setEnteredName("");
  };
  return (
    <div>
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
      {error && (
        <ErrorBox title={error.title} msg={error.msg} onOkay={errorHandler} />
      )}
    </div>
  );
};

export default AddUser;
