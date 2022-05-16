import React, {useState, Fragment} from 'react';
import AddUser from './components/Users/addUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  
  const addUserHandler = (userName, userAge) => {
    setUsersList((prevList) => {
      return [
        ...prevList,
        { name: userName, age: userAge, id: Math.random().toString },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
