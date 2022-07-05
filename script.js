const product = {
  id: 1,
  name: "TV",
  price: 40,
  addons: {
    decoder: 10,
    qled: 40,
    stereo: 20,
  },
};

const basicItemValue = product.price;
console.log(basicItemValue);

const allValues = Object.values(product.addons);
console.log(allValues);

const fullOptionalPrice = [product.price, ...allValues];
const sum = fullOptionalPrice.reduce((total, amount) => total + amount);
console.log(sum); //

let otherSum = 0;
let fullPrice = allValues.forEach((val) => (otherSum += val));
console.log(otherSum + product.price);

////////////////////////////////----------------------------------

const getProductHTML = (product) => {
  const { name, price } = product;
  return `<li>${name} - ${price}€</li>`;
};

const shop = {
  name: "Edgemonics",
  _products: [],
  _page: 1, // pagina corrente
  _per_page: 2, // numero di risultati per pagina

  get products() {
    /**
     * Qui dentro dovremmo riuscire a paginare i prodotti.
     * Possiamo procurarci un indice iniziale ed uno finale lavorando con this._page e this._per_page
     * */

    const indexOfLastPost = this._page * this._per_page;
    const indexOfFirstPost = indexOfLastPost - this._per_page;
    console.log("Stai leggendo i prodotti di ", this.name);
    // const startIndex = 0; // ...
    // const endIndex = 0; // ...
    const paginatedProducts = this._products.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    return paginatedProducts;
  },

  set products(newProducts) {
    /**
     * Il consiglio è quello di spostare la parte di renderHTML dentro una funzione indipendente,
     * così da rendere il metodo più snello
     * **/

    this._products = newProducts;

    const productsHTML = this.products.map(getProductHTML).join("");
    document.body.innerHTML = `
    <div class='shop'>
          <h2>Offerte lampo</h2>
          <ul>${productsHTML}</ul>
          </div>
          <div class='pagination'> 
            <button id=1 class="buttonOne">1</button>
            <button id=2 class="buttonTwo">2</button>
            <button id=3 class="buttonThree">3</button>
            </div>`;
  },

  set page(newPage) {
    /**
     * Aggiorniamo la pagina corrente.
     * Sarà che dobbiamo aggiornare il DOM anche qui?
     * */
    this._page = newPage;
    console.log(this._page);
  },

  renderHTML() {
    /**
     * Aggiorniamo il DOM stampando i risultati a schermo.
     * Avendo ora anche la paginazione, sarebbe il caso di mettere il nostro shop dentro un div specifico div.shop
     * con una struttura del genere
     * <body>
     *  div.shop -> aggiornato ad ogni chiamata della funzione
     *  div.pagination -> questo non si tocca mai
     * </body
     * e gestire la paginazione in modo separato, inserendo gli event listener una sola volta
     * **/
  },
};

shop.products = [
  {
    id: 0,
    name: "Iphone",
    price: 1200,
  },
  {
    id: 1,
    name: "TV",
    price: 370,
  },
  {
    id: 2,
    name: "Pc",
    price: 780,
  },
  {
    id: 3,
    name: "Soundbar",
    price: 630,
  },
  {
    id: 4,
    name: "Cuffie",
    price: 95,
  },
  {
    id: 5,
    name: "Monitor",
    price: 270,
  },
];
