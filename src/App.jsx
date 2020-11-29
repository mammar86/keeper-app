import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import { Note } from "./components/Note";
import { Footer } from "./components/Footer";

//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/
//HINT: You will need to study the classes in teh styles.css file to apply styling.

export function App() {
  return (
    <>
      <Header />
      <Note />
      <Footer />
    </>
  );
}
