import { useState } from "react";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Featured from "./components/featured";
import Categories from "./components/categories";
import { sportsCategory, allArticlesArray } from "./data/data";
import { swedenCategory } from "./data/data";
import { crimeCategory } from "./data/data";
import { worldCategory } from "./data/data";
import { entertainmentCategory } from "./data/data";
import SelectedCategoryComponent from "./components/SelectedCategoryComponent";
import SelectedArticle from "./components/SelectedArticle";

function App() {

  const [selectedCategory, setSelectedCategory] = useState("HOME");
  const [selectedArticle, setSelecetedArticle] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    if (category === "HOME") {
      setSelecetedArticle(null); // Reset article when navigating home
    }
  };

  return (
    <>
      <Header />

      <Navigation selectedLink={handleSelectCategory} />

      {/* TO DISPLAY CATEGORY PAGES AND CLICKING ARTICLES */}
      {selectedCategory && selectedCategory !== "HOME" && !selectedArticle &&
       (
        <SelectedCategoryComponent
          title={selectedCategory}
          displayArray={allArticlesArray.filter((item) => item.category === selectedCategory)}
          chosenArticle={setSelecetedArticle} />
      )}


      {selectedArticle && !selectedCategory && <SelectedArticle article={selectedArticle} />}
      {selectedCategory && selectedArticle && <SelectedArticle article={selectedArticle} chosenArticle={setSelecetedArticle} />}


      {selectedCategory === "HOME" && !selectedArticle &&
        <>
          <Featured chosenArticle={setSelecetedArticle} />
          <Categories title="SPORTS" categoryArray={sportsCategory} chosenArticle={setSelecetedArticle} />
          <Categories title="SWEDEN" categoryArray={swedenCategory} chosenArticle={setSelecetedArticle} />
          <Categories title="WORLD" categoryArray={worldCategory} chosenArticle={setSelecetedArticle} />
          <Categories title="CRIME" categoryArray={crimeCategory} chosenArticle={setSelecetedArticle} />
          <Categories title="ENTERTAINMENT" categoryArray={entertainmentCategory} chosenArticle={setSelecetedArticle} />
        </>}

    </>
  )


}

export default App