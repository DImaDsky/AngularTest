testApp.component('shop', {
    controller: function (productsService, localStorageService) {
        let inCart = localStorageService.get();
        productsService.query().then( products => {
            this.products = products;
        });

        this.add = function(item){
            inCart.push(item);
            localStorageService.add({id: item.id, name: item.name, price: item.price});
        };
        this.notInCart = function (item) {
            return -1 == inCart.findIndex( i => item.id == i.id)
        }
    },
    templateUrl: 'components/shop/shop.html'
});