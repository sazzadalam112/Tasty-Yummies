import Header from "./components/Header";
import Featured from "./components/Featured"
import Delivery from "./components/Delivery";
import TopPicks from "./components/TopPicks";
import Meal from "./components/Food";
import Food from "./components/Food"
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <Header />
      <Featured />
      <Delivery />
      <TopPicks />
      <Food />
      <Category />

    </div>
  );
}

export default App;
