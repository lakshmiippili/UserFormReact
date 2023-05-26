import { useState,Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (userName, uAge) => {
    setUsersList((prevList) => {
      return [
        ...prevList,
        { name: userName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </Fragment>
  );
}

export default App;
