import { ReactComponent as SearchIcon } from "./searchIcon.svg";
import "./SearchBox.css";

const SearchBox = () => {
  return (
    <div style={{ position: "relative" }}>
      <form className="form">
        <input className="input" placeholder="Search an Album of your choice" />
        <button className="search">
          <SearchIcon />
        </button>
      </form>
      <div
        style={{
          position: "absolute",
          width: "570px",
          maxHeight: "500px",
          border: "5px solid red",
          overflowY: "auto",
          top: "60px",
          backgroundColor: "black",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
          <div
            style={{
              display: "flex",
              height: "150px",
              width: "100%",
              border: "2px solid blue",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "120px",
                border: "1px solid yellow",
              }}
            ></div>
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                border: "1px solid orange",
                color: "white",
              }}
            >
              <p>Album Name</p>
              <p style={{ fontSize: "8px" }}>Album Name manadds</p>
            </div>
            <div
              style={{
                height: "100%",
                width: "120px",
                border: "1px solid yellow",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              <p>100 Follows</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SearchBox;
