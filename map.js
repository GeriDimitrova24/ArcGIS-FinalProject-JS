require(["esri/config", "esri/WebMap", "esri/views/MapView"],
    function (esriConfig, WebMap, MapView) {

        esriConfig.apiKey = "AAPK49b393fb15d64d12a335aa81156091231gQgXEj-dfgLTlJbgYHK0-5DLfs7kKs-jorWwZJfp-yGiq9KtEVoXz04WAjeXXkS";
        const webmap = new WebMap({
            portalItem: {
                id: "232b4d297d054b2a831a3ce629ac8495"
            }
        });
        const view = new MapView ({
            container:"viewDiv",
            map: webmap
        })
    })