import styles from "./NavButton.module.css";
import { Link } from "react-router-dom";

export default function NavButton({ title, link }) {
  return (
    <>
      <li className={styles["nav-li"]}>
        <Link className={styles["nav-a"]} to={link}>
          {title}
        </Link>
      </li>
    </>
  );
}
