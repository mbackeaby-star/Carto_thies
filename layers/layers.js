var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_This_1 = new ol.format.GeoJSON();
var features_This_1 = format_This_1.readFeatures(json_This_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_This_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_This_1.addFeatures(features_This_1);
var lyr_This_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_This_1, 
                style: style_This_1,
                popuplayertitle: 'Thiés',
                interactive: true,
                title: '<img src="styles/legend/This_1.png" /> Thiés'
            });
var format_Dept_this_2 = new ol.format.GeoJSON();
var features_Dept_this_2 = format_Dept_this_2.readFeatures(json_Dept_this_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dept_this_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dept_this_2.addFeatures(features_Dept_this_2);
var lyr_Dept_this_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dept_this_2, 
                style: style_Dept_this_2,
                popuplayertitle: 'Dept_thiés',
                interactive: true,
                title: '<img src="styles/legend/Dept_this_2.png" /> Dept_thiés'
            });
var format_Localits_this_3 = new ol.format.GeoJSON();
var features_Localits_this_3 = format_Localits_this_3.readFeatures(json_Localits_this_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localits_this_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localits_this_3.addFeatures(features_Localits_this_3);
var lyr_Localits_this_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localits_this_3, 
                style: style_Localits_this_3,
                popuplayertitle: 'Localités_thiés',
                interactive: true,
                title: '<img src="styles/legend/Localits_this_3.png" /> Localités_thiés'
            });
var format_Arr_this_4 = new ol.format.GeoJSON();
var features_Arr_this_4 = format_Arr_this_4.readFeatures(json_Arr_this_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arr_this_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arr_this_4.addFeatures(features_Arr_this_4);
var lyr_Arr_this_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arr_this_4, 
                style: style_Arr_this_4,
                popuplayertitle: 'Arr_thiés',
                interactive: true,
                title: '<img src="styles/legend/Arr_this_4.png" /> Arr_thiés'
            });
var format_Ecole_this_5 = new ol.format.GeoJSON();
var features_Ecole_this_5 = format_Ecole_this_5.readFeatures(json_Ecole_this_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ecole_this_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ecole_this_5.addFeatures(features_Ecole_this_5);
var lyr_Ecole_this_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ecole_this_5, 
                style: style_Ecole_this_5,
                popuplayertitle: 'Ecole_thiés',
                interactive: true,
                title: '<img src="styles/legend/Ecole_this_5.png" /> Ecole_thiés'
            });
var format_Routes_this_6 = new ol.format.GeoJSON();
var features_Routes_this_6 = format_Routes_this_6.readFeatures(json_Routes_this_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routes_this_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routes_this_6.addFeatures(features_Routes_this_6);
var lyr_Routes_this_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Routes_this_6, 
                style: style_Routes_this_6,
                popuplayertitle: 'Routes_thiés',
                interactive: true,
                title: '<img src="styles/legend/Routes_this_6.png" /> Routes_thiés'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_This_1.setVisible(true);lyr_Dept_this_2.setVisible(true);lyr_Localits_this_3.setVisible(true);lyr_Arr_this_4.setVisible(true);lyr_Ecole_this_5.setVisible(true);lyr_Routes_this_6.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_This_1,lyr_Dept_this_2,lyr_Localits_this_3,lyr_Arr_this_4,lyr_Ecole_this_5,lyr_Routes_this_6];
lyr_This_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'ogr_fid': 'ogr_fid', 'objectid_2': 'objectid_2', 'objectid': 'objectid', 'Statut': 'Statut', 'Code': 'Code', 'Région': 'Région', 'shape_leng': 'shape_leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Dept_this_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'ogr_fid': 'ogr_fid', 'objectid_2': 'objectid_2', 'objectid': 'objectid', 'statut': 'statut', 'cod_reg': 'cod_reg', 'reg': 'reg', 'dept': 'dept', 'cod_dept': 'cod_dept', 'ccod_dept': 'ccod_dept', 'shape_leng': 'shape_leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Localits_this_3.set('fieldAliases', {'ENTITY': 'ENTITY', 'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'THICKNESS': 'THICKNESS', 'COLOR': 'COLOR', 'NOM': 'NOM', 'NUM_VILLAG': 'NUM_VILLAG', 'X_UTM': 'X_UTM', 'Y_UTM': 'Y_UTM', });
lyr_Arr_this_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'statut': 'statut', 'cod_reg': 'cod_reg', 'reg': 'reg', 'dept': 'dept', 'cod_dept': 'cod_dept', 'ccod_dept': 'ccod_dept', 'cav': 'cav', 'cod_cav': 'cod_cav', 'ccod_cav': 'ccod_cav', 'arr': 'arr', 'code_arr': 'code_arr', 'shape_leng': 'shape_leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Ecole_this_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'Type': 'Type', 'Nom': 'Nom', });
lyr_Routes_this_6.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LONGUEUR': 'LONGUEUR', 'ROUTESA3_': 'ROUTESA3_', 'ROUTESA3_I': 'ROUTESA3_I', 'CODE': 'CODE', 'FONCTION': 'FONCTION', });
lyr_This_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'ogr_fid': 'TextEdit', 'objectid_2': 'TextEdit', 'objectid': 'TextEdit', 'Statut': 'TextEdit', 'Code': 'TextEdit', 'Région': 'TextEdit', 'shape_leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Dept_this_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'ogr_fid': 'TextEdit', 'objectid_2': 'TextEdit', 'objectid': 'TextEdit', 'statut': 'TextEdit', 'cod_reg': 'TextEdit', 'reg': 'TextEdit', 'dept': 'TextEdit', 'cod_dept': 'TextEdit', 'ccod_dept': 'TextEdit', 'shape_leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Localits_this_3.set('fieldImages', {'ENTITY': '', 'LAYER': '', 'ELEVATION': '', 'THICKNESS': '', 'COLOR': '', 'NOM': '', 'NUM_VILLAG': '', 'X_UTM': '', 'Y_UTM': '', });
lyr_Arr_this_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'statut': 'TextEdit', 'cod_reg': 'TextEdit', 'reg': 'TextEdit', 'dept': 'TextEdit', 'cod_dept': 'TextEdit', 'ccod_dept': 'TextEdit', 'cav': 'TextEdit', 'cod_cav': 'TextEdit', 'ccod_cav': 'TextEdit', 'arr': 'TextEdit', 'code_arr': 'TextEdit', 'shape_leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Ecole_this_5.set('fieldImages', {'osm_id': '', 'code': '', 'Type': '', 'Nom': '', });
lyr_Routes_this_6.set('fieldImages', {'FNODE_': '', 'TNODE_': '', 'LPOLY_': '', 'RPOLY_': '', 'LONGUEUR': '', 'ROUTESA3_': '', 'ROUTESA3_I': '', 'CODE': '', 'FONCTION': '', });
lyr_This_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'ogr_fid': 'no label', 'objectid_2': 'no label', 'objectid': 'no label', 'Statut': 'no label', 'Code': 'no label', 'Région': 'no label', 'shape_leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Dept_this_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'ogr_fid': 'no label', 'objectid_2': 'no label', 'objectid': 'no label', 'statut': 'no label', 'cod_reg': 'no label', 'reg': 'no label', 'dept': 'no label', 'cod_dept': 'no label', 'ccod_dept': 'no label', 'shape_leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Localits_this_3.set('fieldLabels', {'ENTITY': 'no label', 'LAYER': 'no label', 'ELEVATION': 'no label', 'THICKNESS': 'no label', 'COLOR': 'no label', 'NOM': 'no label', 'NUM_VILLAG': 'no label', 'X_UTM': 'no label', 'Y_UTM': 'no label', });
lyr_Arr_this_4.set('fieldLabels', {'OBJECTID': 'no label', 'statut': 'no label', 'cod_reg': 'no label', 'reg': 'no label', 'dept': 'no label', 'cod_dept': 'no label', 'ccod_dept': 'no label', 'cav': 'no label', 'cod_cav': 'no label', 'ccod_cav': 'no label', 'arr': 'no label', 'code_arr': 'no label', 'shape_leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Ecole_this_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'Type': 'no label', 'Nom': 'no label', });
lyr_Routes_this_6.set('fieldLabels', {'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LONGUEUR': 'no label', 'ROUTESA3_': 'no label', 'ROUTESA3_I': 'no label', 'CODE': 'no label', 'FONCTION': 'no label', });
lyr_Routes_this_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});