const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [
    {
        "name": "Jeruk Medan",
        "harga": "$4/Kg",
        "image": "http://oranjee.netlify.app/frontend/images/theme-inn-yi1YB_FubH8-unsplash.jpg"
    },
    {
        "name": "Jeruk Malang",
        "harga": "$4/Kg",
        "image": "http://oranjee.netlify.app/frontend/images/stiven-bravo-z0qltBaghg4-unsplash.jpg"
    },
    {
        "name": "Jeruk Shantang",
        "harga": "$4/Kg",
        "image": "http://oranjee.netlify.app/frontend/images/orlando-sant-anna-CdUf2RHwojw-unsplash.jpg"
    },
    {
        "name": "Jeruk Bali",
        "harga": "$4/Kg",
        "image": "http://oranjee.netlify.app/frontend/images/kobby-mendez-blwtWUcMVf8-unsplash.jpg"
    },
    {
        "name": "Jeruk Limau",
        "harga": "$4/Kg",
        "image": "http://oranjee.netlify.app/frontend/images/alex-ruggieri-WAavgbSP1_k-unsplash.jpg"
    },
    {
        "name": "Jeruk Sunkist",
        "harga": "$4/Kg",
        "image": "http://oranjee.netlify.app/frontend/images/erol-ahmed-_MYcIi9DgYQ-unsplash.jpg"
    } 
];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.harga.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters =()=> {
hpCharacters.forEach(displayCharacters(hpCharacters));
}


const displayCharacters  = (characters) =>  {
    const htmlString = characters
        .map((character) => {
            return `
            <div class="card col-md-4 col-12 m-2 text-center"  >
                    <img class="image-fluid" style="height: 15rem; width: auto;" src="${character.image}"></img>
                    <div class="card-body">
                        <h5 class="card-title">${character.name} <span class="badge badge-primary">New</span></h5>
                        <p>${character.harga}</p>
                        <a href="#" class="btn btn-primary"><i class="fas fa-shopping-cart"></i>add to cart</a>                             
                    </div>
            </div>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();
