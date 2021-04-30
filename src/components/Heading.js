import colors from "../utils/colors";

function Heading({ day }) {
  return (
    <>
      <h1 className="welcome">
        Welcome
        <br /> CS4A{" "}
        <span role="img" aria-label="accessible-emoji">
          👋
        </span>
      </h1>
      <a href="/home.html">
        <div className="home">
          <svg
            width="40"
            height="34"
            viewBox="0 0 40 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 34V22H24V34H34V18H40L20 0L0 18H6V34H16Z"
              fill={colors[day]}
            />
          </svg>
        </div>
      </a>
    </>
  );
}
export default Heading;
