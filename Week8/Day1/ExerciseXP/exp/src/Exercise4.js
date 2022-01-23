import "./Exercise4.css";

const Exercise4 = () => {
  const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };
  return (
    <div>
      <h1 style={style_header}>Hello from Exercise4</h1>
      <p className="para">This is a paragraph!</p>
      <a href="www.google.com">This is a link to Google!</a>
      <form>
        This is a form
        <input type="text"></input>
      </form>
      <img
        src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200309202057/How-To-Learn-ReactJS-A-Complete-Guide-For-Beginners.jpg"
        alt="Learning react"
      ></img>
      <ul>
        <li>This</li>
        <li>is</li>
        <li>a</li>
        <li>list!</li>
      </ul>
    </div>
  );
};

export default Exercise4;
