import '../component/poke-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const pokeListElement = document.querySelector("poke-list");

  const onButtonSearchClicked = async () => {
    try{
        const result = await DataSource.searchPoke(searchElement.value);
        renderResult(result);
    } catch (message) {
        fallbackResult(message)
    }
  };

   const renderResult =  results => {
       pokeListElement.pokes = results;
   };

   const fallbackResult = message => {
      pokeListElement.renderError(message);
   };

   searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
