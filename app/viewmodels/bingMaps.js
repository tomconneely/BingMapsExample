define(['durandal/app', 'https://www.bing.com/api/maps/mapcontrol?callback=loadMap&setMkt=en-US&setLang=en-US'], function (app) {
    
    return {
        displayName: 'Bing Maps Example',        
        activate: function () {
            window.globalBingMapsDfd = $.Deferred();
            if(window.globalBingMapsCheck === true) {
                window.globalBingMapsDfd.resolve()
            }
            return window.globalBingMapsDfd.promise();
        },
        compositionComplete: function() {
            map = new Microsoft.Maps.Map(document.getElementById("map-container"), {
                //credentials: bingMapsKey,                 
            });
        }
    };
});