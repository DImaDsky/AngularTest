testApp.factory('localStorageService', function() {
    return {
        get: function (saveAs = 'cart') {
            return JSON.parse(localStorage.getItem(saveAs)) || [];
        },
        add: function (item, saveAs = 'cart') {
            let items = this.get(saveAs);
            items.push(item);
            localStorage.setItem(saveAs, JSON.stringify(items));
        },
        remove: function (item, saveAs = 'cart') {
            let products = this.get(saveAs);
            let i = products.findIndex(i => i.id === item.id);
            products.splice(i, 1);
            localStorage.setItem(saveAs, JSON.stringify(products));
        },
        clear: function (saveAs) {
            localStorage.removeItem(saveAs);
        }
    };
});