//select elements
const productsEl = document.querySelector("#products");

//render the products

function renderProducts() {
    data.forEach( (data) => {
        productsEl.innerHTML += `
        <div class="content1">
        <div class="content1-img">
            <i class="far fa-heart fav"></i>
            <img class="data-image" src="${data.Image}" alt="">
            <div class="des1">
                <p>HOLIDAY HOLLY BUYS</p>
            </div>
            <div class="name">
                <p class="data-name"><strong>${data.Brand}</strong></p>
                <p class="subhead">${data.Title}</p>
            </div>
            <div class="amount">
                <p class="save">SAVE ${data.Discount}%</p>
                <p class="amt">${data.Price}</p>
            </div>
            <div id="addToCart">
                <button class="bag-btn">Add to bag</button>
                <p class="subhead-btn">Extra 8% off Everything</p>
            </div>
        </div>  
    </div>
        `
    })
}

renderProducts();