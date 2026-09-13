import React, { useEffect, useState } from "react";

function Registered_User() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    const getUsers = async () => {

      try {
        const response = await fetch(
           "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        setUsers(data);

      } catch (error) {
        console.log("Error:", error);
      }

    };

    getUsers();

  }, []);

  return (
    <div>

      <h1>Registered USERS</h1>

      {users.map((user) => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}

    </div>
  );
}

export default Registered_User;