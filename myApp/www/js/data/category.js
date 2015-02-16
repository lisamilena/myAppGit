var app = angular.module('starter');
app.factory("Category", function(RESOURCES,$resource) {
    console.log("factory/category");
    //return $resource("http://www.planificaciondeportiva.es/bmoll-app/api/web/v1/categories/:id");
    return $resource(RESOURCES.CATEGORIES + "/:id", null, {
            query: {method: 'GET', isArray: true},
            get: {method: 'GET'},
            add: {method: 'POST'},
            delete: {method: 'DELETE'},
            update: {method: 'PUT'} ,
            params:{id:'@code'}
        });
});

app.factory('Items', function(RESOURCES, $resource) {
    //return $resource("http://www.planificaciondeportiva.es/bmoll-app/api/web/v1/categories/:id");
    return $resource(RESOURCES.ITEMS + "/:category_id", null, {
            query: {method: 'GET', isArray: true},
            get: {method: 'GET'},
            add: {method: 'POST'},
            delete: {method: 'DELETE'},
            update: {method: 'PUT'} ,
            params:{id:'@code'}
        });
});

app.factory('Images', function(RESOURCES, $resource) {
    //return $resource("http://www.planificaciondeportiva.es/bmoll-app/api/web/v1/categories/:id");
    return $resource(RESOURCES.IMAGENES + "/:items_id", null, {
            query: {method: 'GET', isArray: true},
            get: {method: 'GET'},
            add: {method: 'POST'},
            delete: {method: 'DELETE'},
            update: {method: 'PUT'} ,
            params:{id:'@code'}
        });
});