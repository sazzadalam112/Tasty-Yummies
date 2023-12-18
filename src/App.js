import Header from "./components/Header";
import Featured from "./components/Featured"
import Delivery from "./components/Delivery";
import TopPicks from "./components/TopPicks";
import Meal from "./components/Food";
import Food from "./components/Food"
import Category from "./components/Category";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Featured />
      <Delivery />
      <TopPicks />
      <Food />
      <Category />
      <News />
      <Footer />

    </div>
  );
}

export default App;
