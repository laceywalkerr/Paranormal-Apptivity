import React from "react"
import PostList from "../posts/PostList"
import "./Home.css"


const Home = () => {

    
    return (
        <>
          <div className="home">
              <h2>Welcome to the Home Page</h2>
              <h5>Search for Stories Here!</h5>
          </div>
          
            <PostList />
  
        </>
    )

}

export default Home;