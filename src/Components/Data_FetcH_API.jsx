import React, { useState, useEffect } from "react";

const Data_Fetch_API = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log("Fetched data:", data);
      setApiData(data);
    };

  
    fetchData();
  }, []);

  return (
    <div>
      <h2>User</h2>
      <div>
        {
          apiData.map((items)=><div key={items.id}>

<h3 >name = {items.name}</h3>
<h3>username = {items.username}</h3>
<h3>phone = {items.phone}</h3>
<h3>website = {items.website}</h3>
<h3>email = {items.email}</h3>
<h3>city = {items.address.city}</h3>
<h3>lat = {items.address.geo.lat}</h3>
<h3>lng = {items.address.geo.lng}</h3>
<h3>username = {items.username}</h3>


          </div>)
        }
      </div>
    
    </div>
  );
};

export default Data_Fetch_API;
