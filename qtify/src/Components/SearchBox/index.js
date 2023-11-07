import { ReactComponent as SearchIcon } from "./searchIcon.svg";
import "./SearchBox.css";
export default () => {
  return (
    <form className="form">
      <input className="input" placeholder="Search an Album of your choice" />
      <button className="search">
        <SearchIcon />
      </button>
    </form>
  );
};
