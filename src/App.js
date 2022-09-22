import "./app.css";
import Topbar from "./components/topbar/Topbar";
import Products from "./components/products/Products";
import Greeting from "./components/greeting/Greeting";
import Todo from "./components/todo/Todo";




function App() {
  return (
    <div className="sections">
      <Topbar />
      <Greeting />
      <Products />
      <Todo />
    </div>
  );
}

export default App;
