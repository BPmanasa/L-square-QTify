import SearchBox from "../SearchBox";
import Button from "../Button";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src="logo.png" alt="logo" />
      <SearchBox />
      <Button>Give Feedback</Button>
    </div>
  );
};

export default Navbar;
