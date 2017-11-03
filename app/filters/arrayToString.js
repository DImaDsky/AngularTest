testApp.filter('arrayToString', function () {
    return function (array) {
        return array.join(', ');
    };
});