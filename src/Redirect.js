import React, { useEffect } from "react"; //eslint-disable-line
import { useNavigate } from "react-router-dom";

//-----[ MAIN COMPONENT ]------\\
export default function Redirect() {
  //Will redirect the user back to the homepage if user tries to go to non-existant page.
  const navigate = useNavigate();

  useEffect(() => {
    //Once the page finishes loading.
    navigate("/"); //navigate back to homepage
  }, [navigate]);

  return null; //-.
}
//
//
//
