import { React, useContext } from "react";
import WelcomeMessage from "../components/Homepage/welcomemessage";
import { Database } from "../context/index";

export default function Homepage(data) {
  const posts = useContext(Database)[3];
  return (
    <>
      
          <WelcomeMessage message="Hello World" data={data} />
          {posts.map(post => (
              <div key={post.id}>
                   <p>Post Number {post.id}</p>
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                  <hr />
              </div>
          ))}
    </>
  );
}
