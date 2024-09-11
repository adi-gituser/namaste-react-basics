const h1 = React.createElement("h1", { id: "heading" }, [
  React.createElement(
    "h2",
    {
      id: "headinsider",
    },
    "hello"
  ),
  React.createElement(
    "h2",
    {
      id: "headinsider2",
    },
    "hello2"
  ),
  ,
]);
const div = ReactDOM.createRoot(document.getElementById("main"));
div.render(h1);
console.log(React);
console.log(h1); // it is an object
