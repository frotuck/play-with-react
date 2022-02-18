import React from "react";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
  return(
    <div>
     <h1>This is about page</h1> 
      <Button onClick={() => navigate(-1)}>Lets go back</Button>
    </div>
  )
}
export default About