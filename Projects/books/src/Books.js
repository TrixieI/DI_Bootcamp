import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Books.css";

class Books extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      text: "",
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleClick = async () => {
    const grab =
      await fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.text}
    `);
    const data = await grab.json();

    this.setState({ books: data.items });
  };

  render() {
    console.log(this.state.books);
    return (
      <>
        <div>
          <button onClick={this.handleClick}>Search</button>
          <input
            onChange={this.handleChange}
            name="search"
            type="text"
            placeholder="Search books..."
          ></input>

          {this.state.books.map((item, i) => {
            return (
              <div className="card" key={i}>
                <Card className="card" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={item.volumeInfo.imageLinks.thumbnail}
                  />
                  <Card.Body>
                    <Card.Title>{item.volumeInfo.title}</Card.Title>
                    <Card.Text>
                      {item.volumeInfo.description}
                      <br></br>
                      <b>Page count:</b> {item.volumeInfo.pageCount}
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Books;
