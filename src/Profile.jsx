import { useDispatch } from "react-redux";
import { logoutAction } from "./rootAction";


const Profile = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <div>
      <h2>Profile</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
