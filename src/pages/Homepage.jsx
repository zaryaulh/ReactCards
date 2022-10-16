import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Card } from "../components/Card";

export const Homepage = () => {

    const [users, setUsers] = useState([]);
    

  useEffect(() => {
    (async () => {
      const {data} = await  axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      
      setUsers(data);
    })();
  }, []);

  return (
    <div className="flex flex-auto gap-10 flex-col flex-wrap   justify-center  py-10 px-5 md:flex-row lg:flex-row">
    {users.map((user) => (
    
 <Card key={user.id} user={user} />
          ))}
  </div>
  )
}

