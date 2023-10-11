var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Trees_1 = new ol.format.GeoJSON();
var features_Trees_1 = format_Trees_1.readFeatures(json_Trees_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trees_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trees_1.addFeatures(features_Trees_1);
var lyr_Trees_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trees_1, 
                style: style_Trees_1,
                interactive: true,
                title: 'Trees'
            });
var format_treeshapefile_2 = new ol.format.GeoJSON();
var features_treeshapefile_2 = format_treeshapefile_2.readFeatures(json_treeshapefile_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_treeshapefile_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_treeshapefile_2.addFeatures(features_treeshapefile_2);
var lyr_treeshapefile_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_treeshapefile_2, 
                style: style_treeshapefile_2,
                interactive: true,
                title: '<img src="styles/legend/treeshapefile_2.png" /> treeshapefile'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Trees_1.setVisible(true);lyr_treeshapefile_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Trees_1,lyr_treeshapefile_2];
lyr_Trees_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_treeshapefile_2.set('fieldAliases', {'Name': 'Name', 'Type': 'Type', });
lyr_Trees_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_treeshapefile_2.set('fieldImages', {'Name': '', 'Type': '', });
lyr_Trees_1.set('fieldLabels', {'Name': 'inline label', 'description': 'header label', 'timestamp': 'header label', 'begin': 'header label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_treeshapefile_2.set('fieldLabels', {'Name': 'header label', 'Type': 'header label', });
lyr_treeshapefile_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});