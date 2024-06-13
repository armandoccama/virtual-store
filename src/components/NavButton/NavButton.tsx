// import styles from "./NavButton.module.css";
import { Link } from "react-router-dom";

export default function NavButton({ title, link }) {
  return (
    <>
      <li className="list-none">
        <Link
          className="text-white font-bold text-center no-underline 
          w-[150px] py-[4px] 
          px-0 text-[14px] 
          sm:text-[14px] 
          md:text-[14px] 
          hover:underline"
          to={link}
        >
          {title}
        </Link>
      </li>
    </>
  );
}
