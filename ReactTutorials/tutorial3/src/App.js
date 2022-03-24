// import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";

export default function App() {
  
  // useEffect useState => react hooks
  const [posts, setPosts] = useState([])
  const [IndexNumber, setIndexNumber] = useState(1)
  const [title, setTitle] = useState("")
  const [SinglePost, setSinglePost] = useState([])
    useEffect(() => {
    // console.log('hello world')
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(res => res.json())
    // .then(data => {
    //   // console.log(data)
    //   setPosts(data)
    // })
    // .catch(err => console.log(err))
     
    fetch(`https://jsonplaceholder.typicode.com/posts/${IndexNumber}`)
    .then(res => res.json())
    .then(data => {
      setTitle(data.title)
    })    
  }, [])
  
  const nextPost = (e) => {
    e.preventDefault()
    setIndexNumber(IndexNumber+1)
   
    fetch(`https://jsonplaceholder.typicode.com/posts/${IndexNumber}`)
    .then(res => res.json())
    .then(data => {
    setTitle(data.title)
    }) 
    console.log(IndexNumber)

  }

  const prevPost = (e) => {
    e.preventDefault()
    if(IndexNumber == 0) {
      alert('This is the beginning')
    } else {
      
      setIndexNumber(IndexNumber-1)
      fetch(`https://jsonplaceholder.typicode.com/posts/${IndexNumber}`)
      .then(res => res.json())
      .then(data => {
      setTitle(data.title)
    })    
    
    }
    console.log(IndexNumber)
  }


  return(

    <div>
      <Container className="text-center mt-5 hello">
        <p>{title}</p>  
        <Button id="next" variant={"warning"} onClick={prevPost} className="mx-1">Previous Post</Button>
        <Button id="prev" variant={"warning"} onClick={nextPost}>Next Post</Button>
      </Container>
    </div>
  )
}
