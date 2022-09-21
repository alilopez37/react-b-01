import User from "./User";

function Saludar(props) {
  
  const user = [
    {
      name: "Juan",
      lastName: "Pérez",
    },
    { name: "Pedro", lasName: "Sánchez" },
    { name: "Luis", lastName: "Rodriguez" },
  ];

  return <User user={user} />;
}

export default Saludar;
