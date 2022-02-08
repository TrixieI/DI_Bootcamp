import axios from "axios";

const Form = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:8080/products", {
          name: "fima",
          headers: {
            authorization: "abc123",
          },
        })
        .then((res) => console.log(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;
