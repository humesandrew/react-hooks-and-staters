import "./app.css";
import Topbar from "./components/topbar/Topbar";
import Products from "./components/products/Products";
import Greeting from "./components/greeting/Greeting";

function App() {
  return (
    <div className="sections">
      <Topbar />
      <Greeting />
      <Products />
    </div>
  );
}

export default App;
