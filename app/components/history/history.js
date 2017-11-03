testApp.component('history', {
    controller: function (localStorageService) {
        this.orders = localStorageService.get('history');
    },
    templateUrl: 'components/history/history.html'
});