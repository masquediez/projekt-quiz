import { useNavigate } from "react-router-dom";
import styles from "./NavBarLeft.module.css";
import { useContext } from "react";
import UserContext from "../../../../contexts/user-context/userContext";

function NavBarLeft() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  function onClickLogo() {
    navigate("/");
  }
  return (
    <div className={styles.mainContainer}>
      {user ? (
        <img
          onClick={onClickLogo}
          className={styles.logImg}
          src={user.profileImgUrl}
          alt="logo"
        />
      ) : (
        <div>My App</div>
      )}
    </div>
  );
}

export default NavBarLeft;
