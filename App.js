import { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
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
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
