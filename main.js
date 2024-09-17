

const Main = {

    
    init: function() {
        this.buildCards()
        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors: function() {
        this.$everyoneContainer = document.querySelector('.everyone')
    },

    bindEvents: function() {

    },
    
    buildCards: function () {

        fetch('./data.json').then(response => {
            response.json().then(data => {
                let everyone = ''

                data.forEach(item => {
                    everyone += 
                    `
                        <div class="product">
                            <img src="${item.image.desktop}" alt="">
                            <div class="button">
                
                            <img src="assets/images/icon-add-to-cart.svg" alt="">
                            <h4>Add to cart</h4>
                
                            </div>
                
                            <span>${item.category}</span>
                            <h3>${item.name}</h3>
                            <span>R$${item.price}</span>
                        </div>
                    `
                })

                this.$everyoneContainer.innerHTML = everyone
            })
        })
    },

    Events: {
        
    }
}


Main.init()