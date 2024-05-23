require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/Home",
    "esri/widgets/LayerList",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Directions",
    "esri/layers/RouteLayer",
    "esri/widgets/ScaleBar",
    "esri/widgets/Search"
],
    function (
        esriConfig,
        WebMap,
        MapView,
        Home,
        LayerList,
        BasemapGallery,
        Directions,
        RouteLayer,
        ScaleBar,
        Search
    ) {

        esriConfig.apiKey = "AAPK49b393fb15d64d12a335aa81156091231gQgXEj-dfgLTlJbgYHK0-5DLfs7kKs-jorWwZJfp-yGiq9KtEVoXz04WAjeXXkS";

        const routeLayer = new RouteLayer();

        const webmap = new WebMap({
            portalItem: {
                id: "232b4d297d054b2a831a3ce629ac8495"
            },
        });

        webmap.layers.add(routeLayer);

        const view = new MapView({
            container: "viewDiv",
            map: webmap,
            zoom: 6,
        });

        const directionsWidget = new Directions({
            layer: routeLayer,
            apiKey: esriConfig.apiKey,
            view
        });
        view.ui.add("direction-btn", "bottom-left");
        view.ui.add(directionsWidget, { position: "bottom-left" });

        const homeBtn = new Home({
            view: view
        });
        view.ui.add(homeBtn, "top-left");

        const layerList = new LayerList({
            view: view
        });
        view.ui.add("layer-list-btn", "top-right");
        view.ui.add(layerList, "top-right");

        const basemapGallery = new BasemapGallery({
            view
        });
        view.ui.add("basemap-gallery-btn", "top-right");
        view.ui.add(basemapGallery, "top-right");

        const scaleBar = new ScaleBar({
            view: view,
            unit: "dual"
        });
        view.ui.add(scaleBar,"bottom-right");

        const searchWidget = new Search({
            view
        });
        view.ui.add(searchWidget,"bottom-right");

        document.getElementById("layer-list-btn").addEventListener("click", function () {
            toggleButton("layerList");
        });

        document.getElementById("basemap-gallery-btn").addEventListener("click", function () {
            toggleButton("gallery");
        });

        document.getElementById("direction-btn").addEventListener("click", function () {
            toggleButton("direction");
        });

        function toggleButton(element) {
            if (element == "layerList") {
                const layerListEl = document.getElementsByClassName("esri-layer-list")[0];
                const currentProp = layerListEl.style.getPropertyValue("display");
                layerListEl.style.setProperty("display", currentProp == "none" ? "block" : "none");
            } else if (element == "gallery") {
                const galleryEl = document.getElementsByClassName("esri-basemap-gallery")[0];
                const currentPropGallery = galleryEl.style.getPropertyValue("display");
                galleryEl.style.setProperty("display", currentPropGallery == "none" ? "block" : "none");
            } else if (element == "direction") {
                const directionEl = document.getElementsByClassName("esri-directions")[0];
                const currentPropDirection = directionEl.style.getPropertyValue("display");
                directionEl.style.setProperty("display", currentPropDirection == "none" ? "block" : "none");
            }
        }
    });
