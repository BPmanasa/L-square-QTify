import "./Button.css";
export default ({ children }) => {
  return (
    <div>
      <button className="button">{children}</button>
    </div>
  );
};
