import Header from "./components/header";
import Navigation from "./components/navigation";
import Featured from "./components/featured";
import Categories from "./components/categories";
import { SportsCategory } from "./data/data";
import { SwedenCategory } from "./data/data";
import { CrimeCategory } from "./data/data";
import { WorldCategory } from "./data/data";
import { EntertainmentCategory } from "./data/data";

function App() {

  return (
    <>
      <Header />
      <Navigation />
      <Featured />
      <Categories title="SPORTS" categoryArray={SportsCategory} />
      <Categories title="SWEDEN" categoryArray={SwedenCategory} />
      <Categories title="WORLD" categoryArray={WorldCategory} />
      <Categories title="CRIME" categoryArray={CrimeCategory} />
      <Categories title="ENTERTAINMENT" categoryArray={EntertainmentCategory} />
    </>
  )


}

export default App
