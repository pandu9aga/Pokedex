//import pokes from './pokes.js';

class DataSource {
   static searchPoke(keyword) {
       return fetch(`https://pokeapi.co/api/v2/pokemon/${keyword}`)
       .then(response => {
         return response.json();
       })
       .then(responseJson => {
           if(responseJson.name) {
             var types = [];
             for (var i in responseJson.types) {
               var t = responseJson.types[i].type.name;
               types.push([t]);
             }
             var result = {"poke": [
               {
                 "sprite": responseJson.sprites.front_default,
                 "name": responseJson.name,
                 "weight":responseJson.weight,
                 "height":responseJson.height,
                 "order":responseJson.order,
                 "types":types,
                 "hp":responseJson.stats[0].base_stat,
                 "attack":responseJson.stats[1].base_stat,
                 "defense":responseJson.stats[2].base_stat,
                 "speed":responseJson.stats[5].base_stat
               }
             ]}
               return Promise.resolve(result.poke);
           } else {
             return Promise.reject(`${keyword} is not found`);
           }
       })
       .catch((error) => {
         return Promise.reject(`${keyword} is not found`);
        });
   }
}

export default DataSource;
