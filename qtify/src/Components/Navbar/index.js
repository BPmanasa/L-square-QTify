import SearchBox from "../SearchBox";
import Button from "../Button";
import "./Navbar.css";
export default () => {
  return (
    <div className="navbar">
      <img src="logo.png" />
      <SearchBox />
      <Button>Give Feedback</Button>
    </div>
  );
};
