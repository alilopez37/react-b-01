import Card from './Card'

function User(props) {
  return (
    <>
      {props.user.map((user) => {
        return (
            <Card user={user}/> 
        );
      })}
    </>
  );
}

export default User;