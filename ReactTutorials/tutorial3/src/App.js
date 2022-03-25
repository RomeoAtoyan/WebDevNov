// import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";

export default function App() {
  // useEffect useState => react hooks
  const [posts, setPosts] = useState([]);
  const [IndexNumber, setIndexNumber] = useState(1);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${IndexNumber}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [IndexNumber]);

  const nextPost = (e) => {
    e.preventDefault();
    setIndexNumber(IndexNumber + 1);
  };

  const prevPost = (e) => {
    e.preventDefault();
    if (IndexNumber == 1) {
      alert("This is the beginning");
    } else {
      setIndexNumber(IndexNumber - 1);
    }
    console.log(IndexNumber);
  };

  return (
    <div>
      <Container className="text-center mt-5 hello">
        <p>{posts.title}</p>
        <p>{posts.id}</p>
        <Button
          id="next"
          variant={"warning"}
          onClick={prevPost}
          className="mx-1"
        >
          Previous Post
        </Button>
        <Button id="prev" variant={"warning"} onClick={nextPost}>
          Next Post
        </Button>
      </Container>
    </div>
  );
}
