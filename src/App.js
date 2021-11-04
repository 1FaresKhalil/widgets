import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
const items = [
  {
    title: "What is react",
    content: "React is a js framework used by front-end developers",
  },
  {
    title: "why use react",
    content: "React is a js framework used by front-end developers",
  },
  {
    title: "How react works",
    content: "React is a js framework used by front-end developers",
  },
];
function App() {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
}

export default App;
