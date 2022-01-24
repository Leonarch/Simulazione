
const store = {

    id: 21,

    name: 'Negozio per animali',

    location: {

        city: 'Roma',

        address: 'Via boh 10',

        cap: '00100'

    },

    availability: {

        monday: {

            start: '2021-06-29T09:00:00',

            end: '2021-06-29T12:00:00'

        },

        tuesday: {

            start: '2021-06-29T10:00:00',

            end: '2021-06-29T15:00:00'

        },

        wednesday: null,

        thursday: null,

        friday: {

            start: '2021-06-29T09:00:00',

            end: '2021-06-29T18:00:00'

        },

        saturday: null,

        sunday: {

            start: '2021-06-29T09:00:00',

            end: '2021-06-29T12:00:00'

        }

    }

};

function hours(){

for (let date in store.availability){
  if (store.availability[date]){
store.availability[date].start = new Date(store.availability[date].start).getHours();
store.availability[date].end = new Date(store.availability[date].start).getHours();
}
else {
  delete store.availability[date];
}
}

//getHours può modificare la constante store?
 /* newStore = store;
  for (const iterator in store.availability) {
  
  console.log(Object.keys(iterator));
  }*/
    


/*newStore = store;
newStore.availability = Object.fromEntries (Object.entries(store.availability).filter(iterator => iterator[1]))*/

/*for (let date in store.availability){
return (date.getHours());
}*/

//console.log(newStore);


 
} 



hours()
console.log(store);