testApp.factory('productsService', function($timeout, $q) {
    let products = [
        {id: 1, name: 'Apple Pie', ingredients: ['apple','flour'], price: 12.22},
        {id: 2, name: 'Summer salad', ingredients: ['tomato','cucumber', 'green', 'oil'], price: 15.99},
        {id: 3, name: 'Sushi', ingredients: ['rice','fish'], price: 55.55},
        {id: 4, name: 'Pizza', ingredients: ['cheese','tomato','olive','pepper'], price: 33.22},
        {id: 5, name: 'Eclairs', ingredients: ['milk','eggs','butter', 'flour'], price: 12.22},
        {id: 6, name: 'Pancakes', ingredients: ['flour','milk', 'sugar'], price: 12},
    ];
    return {
        query: function () {
            return $q(resolve => {
                $timeout( () => {resolve(products)}, 500)
            });
        }
    };
});