import React from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PostList from "../posts/PostList"
import "./Home.css"


const Home = () => {

    
    return (
        <>
          <div className="home">
              <h2>Welcome to the Home Page!</h2>
              <h2>More coming soon!</h2>
          </div>
          
            <PostList />
  
        </>
    )

}

export default Home;