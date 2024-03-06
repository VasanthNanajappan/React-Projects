import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/sidebar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductDetails from "./productdetails/productdetails";
import "./index.css";

//Importing Database
import data from "./DB/data";
import Card from "./components/card";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //-------------Input Filter---------

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filtereditems = data.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  //-------------Radio Filter---------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //-------------Button Filter---------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(data, selected, query) {
    let filteredProducts = data;

    //Filtering input items
    if (query) {
      filteredProducts = filtereditems;
    }

    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevprice={prevPrice}
        />
      )
    );
  }

  const result = filteredData(data, selectedCategory, query);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Sidebar handleChange={handleChange} />
            <Nav query={query} handleInputChange={handleInputChange} />
            <Recommended handleClick={handleClick} />
            <Products result={result} />
          </Route>
          <Route path="/productdet">
            <ProductDetails data={data} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
