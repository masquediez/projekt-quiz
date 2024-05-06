import { useContext } from "react";
import UserContext from "../../contexts/user-context/userContext";

function ProfilePage() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div style={{ color: "white" }}>
        <h2>User Not defined. Login first</h2>
      </div>
    );
  return (
    <div style={{ color: "white" }}>
      <h2>{user.name}</h2>
      <div>{JSON.stringify(user)}</div>
    </div>
  );
}

export default ProfilePage;
