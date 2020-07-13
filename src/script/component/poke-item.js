class PokeItem extends HTMLElement {

  constructor() {
       super();
       this.shadowDOM = this.attachShadow({mode: "open"});
   }

   set poke(poke) {
       this._poke = poke;
       this.render();
   }

   render() {
       this.shadowDOM.innerHTML = `
       <style>

       .wrap {
           margin: 0;
           padding: 0;
           box-sizing: border-box;
           margin-bottom: 18px;
           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           border-radius: 10px;
           overflow: hidden;
           background: #ffffff;
           display: block;
       }

       .wrap:hover{
         background: #f6efef;
       }

      .fan-art-poke {
           width: 30%;
           height: auto;
           margin-left: 5%;
           margin-right: auto;
           display: block;
           float: left;
       }

       .poke-info {
           padding: 24px;
           float: left;
           margin-left: 2%;
       }

       .poke-info > h2 {
           font-weight: lighter;
       }

       .poke-info > p {
           margin-top: 10px;
           overflow: hidden;
           text-overflow: ellipsis;
           display: -webkit-box;
           -webkit-box-orient: vertical;
           -webkit-line-clamp: 10; /* number of lines to show */
       }

       @media screen and (max-width: 550px){
         .fan-art-poke{
           margin-left: auto;
           width: 50%;
           float: none;
         }

         .poke-info{
           float: none;
           margin: 0;
         }
       }
       </style>
       <div class="wrap">
         <img class="fan-art-poke" src="${this._poke.sprite}" alt="Sprite">
         <div class="poke-info">
             <h2>${this._poke.name}</h2>
             <p>height: ${this._poke.height}</p>
             <p>weight: ${this._poke.weight}</p>
             <p>order: ${this._poke.order}</p>
             <p>types: ${this._poke.types}</p>
             <p>hp: ${this._poke.hp}</p>
             <p>attack: ${this._poke.attack}</p>
             <p>defense: ${this._poke.defense}</p>
             <p>speed: ${this._poke.speed}</p>
         </div>
       </div>`;
   }
}

customElements.define("poke-item", PokeItem);
