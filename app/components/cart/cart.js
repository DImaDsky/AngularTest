testApp.component('cart', {
    controller: function (localStorageService, $state) {
        this.$onInit = function () {
            this.products = localStorageService.get();
            this.calcTotalPrice();
        };

        this.remove = function (item) {
            let index = this.products.findIndex(i => i.id === item.id);
            this.products.splice(index, 1);
            this.calcTotalPrice();
            localStorageService.remove(item);
        };
        this.calcTotalPrice = function () {
            this.totalPrice = this.products.reduce(
                (accum, item) => accum += item.price,
                0
            );
        };
        this.confirmBuy = function () {
            let history = {
                totalPrice: this.totalPrice,
                time: Date.now(),
                products: this.products.reduce( (accumulator, item, i, arr) => {
                    accumulator += item.name;
                    if(i + 1 != arr.length) {
                        accumulator += ', ';
                    }
                    return accumulator;
                }, '')
            };
            localStorageService.add(history, 'history');
            localStorageService.clear('cart');
            this.products = [];
            this.totalPrice = 0;
            $state.go('history');
        }
    },
    templateUrl: 'components/cart/cart.html'
});