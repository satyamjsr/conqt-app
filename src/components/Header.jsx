import Logo from "../assets/logo.jpeg";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <img src={Logo} alt="logo" className={styles.logo}></img>
        <h2 className="sHeading">Inventory Management System</h2>
      </div>
      {/* <div className={styles.rightSection}>
        <p>Home</p>
      </div> */}
    </header>
  );
};

export default Header;
