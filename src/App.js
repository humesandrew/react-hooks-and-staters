import "./app.css";
import Topbar from "./components/topbar/Topbar";
import Products from "./components/products/Products";
import Greeting from "./components/greeting/Greeting";
import Todo from "./components/todo/Todo";
import Grocery from "./components/grocery/Grocery";



function App() {
  return (
    <div className="sections">
      <Topbar />
      <Greeting />
      <Products />
      <Todo />
      <Grocery />
    </div>
  );
}

export default App;
