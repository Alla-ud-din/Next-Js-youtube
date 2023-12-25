async function userList(){
  let res = await fetch("https://dummyjson.com/users");
  let data = await res.json();
  return data.users;
}

export default async function Page(){

  let users= await userList();
  console.log(users);
  return(<div>
      <h1>User Name List</h1>
      {
          users.map((item: any)=>(
              <div><h2>User Name: {item.firstName}</h2></div>
          ))
      }
  </div>)
}