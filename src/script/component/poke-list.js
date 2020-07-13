import './poke-item.js';

class PokeList extends HTMLElement {

  constructor() {
       super();
       this.shadowDOM = this.attachShadow({mode: "open"});
   }

   set pokes(pokes) {
       this._pokes = pokes;
       this.render();
   }

   render() {
       this.shadowDOM.innerHTML = "";
       this._pokes.forEach(poke => {
           const pokeItemElement = document.createElement("poke-item");
           pokeItemElement.poke = poke
           this.shadowDOM.appendChild(pokeItemElement);
       })
   }

   renderError(message) {
       this.shadowDOM.innerHTML = `
       <style>
         .placeholder {
             background: #ffffff;
             padding:20px;
             font-weight: lighter;
             color: rgba(0,0,0,0.5);
             -webkit-user-select: none;
             -moz-user-select: none;
             -ms-user-select: none;
             user-select: none;
         }
       </style>
       `;
       this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
   }
}

customElements.define("poke-list", PokeList);
