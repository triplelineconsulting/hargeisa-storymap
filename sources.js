/* =============================================================================
   Hargeisa Flood Risk Story Map — sources.js
   Flood "band": 1:0.1-0.5m 2:0.5-1m 3:1-2m 4:2-4m 5:>4m
   ============================================================================= */

var floodPaint = {
    'fill-color': ['match', ['get','band'],
        1,'#cfe8f0', 2,'#9ed3e2', 3,'#5fb0cf', 4,'#2b7bb0', 5,'#17547f', '#9ed3e2'],
    'fill-opacity': 0
};
var infraColor = ['match', ['get','type_disp'],
    'Health','#F78D2A', 'Education','#00BBD2', 'Utilities','#4C5560', '#8FA3B0'];

var externalData = {
    sources: [
        { name:'flood-t2',   source:{ type:'geojson', data:'./map/flood_t2.geojson' } },
        { name:'flood-t5',   source:{ type:'geojson', data:'./map/flood_t5.geojson' } },
        { name:'flood-t10',  source:{ type:'geojson', data:'./map/flood_t10.geojson' } },
        { name:'flood-t25',  source:{ type:'geojson', data:'./map/flood_t25.geojson' } },
        { name:'flood-t50',  source:{ type:'geojson', data:'./map/flood_t50.geojson' } },
        { name:'flood-t100', source:{ type:'geojson', data:'./map/flood_t100.geojson' } },
        { name:'rivers',     source:{ type:'geojson', data:'./map/harg_rivers.geojson' } },
        { name:'harg2050',   source:{ type:'geojson', data:'./map/Harg2050.geojson' } },
        { name:'morphology', source:{ type:'geojson', data:'./map/HousingTypeSM.geojson' } },
        { name:'survey-targets', source:{ type:'geojson', data:'./map/SurveylocationsSM.geojson' } },
        { name:'hotspots',   source:{ type:'geojson', data:'./map/HotspotSM.geojson' } },
        { name:'key-infra',  source:{ type:'geojson', data:'./map/KeyinfraSM.geojson' } }
    ],

    layers: [
        /* ---- FLOOD DEPTH BANDS (bottom) ---- */
        { id:'flood-t2-fill',   type:'fill', source:'flood-t2',   paint:JSON.parse(JSON.stringify(floodPaint)) },
        { id:'flood-t5-fill',   type:'fill', source:'flood-t5',   paint:JSON.parse(JSON.stringify(floodPaint)) },
        { id:'flood-t10-fill',  type:'fill', source:'flood-t10',  paint:JSON.parse(JSON.stringify(floodPaint)) },
        { id:'flood-t25-fill',  type:'fill', source:'flood-t25',  paint:JSON.parse(JSON.stringify(floodPaint)) },
        { id:'flood-t50-fill',  type:'fill', source:'flood-t50',  paint:JSON.parse(JSON.stringify(floodPaint)) },
        { id:'flood-t100-fill', type:'fill', source:'flood-t100', paint:JSON.parse(JSON.stringify(floodPaint)) },

        /* ---- BUILDING MORPHOLOGY (grouped from "Type") ---- */
        { id:'morph-formal', type:'fill', source:'morphology',
          filter:['in', ['get','Type'], ['literal',['High Income','Middle income']]],
          paint:{ 'fill-color':'#00797E', 'fill-opacity':0 } },
        { id:'morph-informal', type:'fill', source:'morphology',
          filter:['in', ['get','Type'], ['literal',['Informally-built','Informally-built regularised']]],
          paint:{ 'fill-color':'#F78D2A', 'fill-opacity':0 } },
        { id:'morph-idp', type:'fill', source:'morphology',
          filter:['==', ['get','Type'], 'IDP'],
          paint:{ 'fill-color':'#00BBD2', 'fill-opacity':0 } },
        { id:'morph-nonres', type:'fill', source:'morphology',
          filter:['in', ['get','Type'], ['literal',['Non Residential','Mixed Use']]],
          paint:{ 'fill-color':'#4C5560', 'fill-opacity':0 } },

        /* ---- 2050 URBAN EXPANSION ---- */
        { id:'harg2050-fill', type:'fill', source:'harg2050',
          paint:{ 'fill-color':'#4F738E', 'fill-opacity':0 } },
        { id:'harg2050-line', type:'line', source:'harg2050',
          paint:{ 'line-color':'#33506b', 'line-width':1.5, 'line-dasharray':[3,2], 'line-opacity':0 } },

        /* ---- HARGEISA RIVER NETWORK ---- */
        { id:'rivers-line', type:'line', source:'rivers',
          paint:{ 'line-color':'#2b7bb0', 'line-width':['interpolate',['linear'],['zoom'],10,1.2,14,3], 'line-opacity':0 } },

        /* ---- SURVEY TARGET AREAS ---- */
        { id:'survey-targets-fill', type:'fill', source:'survey-targets',
          paint:{ 'fill-color':'#F78D2A', 'fill-opacity':0 } },
        { id:'survey-targets-line', type:'line', source:'survey-targets',
          paint:{ 'line-color':'#B4611A', 'line-width':1.5, 'line-opacity':0 } },

        /* ---- FLOOD HOTSPOTS (points) ---- */
        { id:'hotspots', type:'circle', source:'hotspots',
          paint:{ 'circle-radius':7, 'circle-color':'#C0392B', 'circle-stroke-color':'#ffffff',
                  'circle-stroke-width':2, 'circle-opacity':0, 'circle-stroke-opacity':0 } },

        /* ---- KEY INFRASTRUCTURE (labelled polygons) ---- */
        { id:'key-infra-fill', type:'fill', source:'key-infra',
          paint:{ 'fill-color':infraColor, 'fill-opacity':0, 'fill-outline-color':'#ffffff' } },
        { id:'key-infra-label', type:'symbol', source:'key-infra',
          layout:{ 'text-field':['coalesce',['get','Name'],''], 'text-size':11,
                   'text-anchor':'top', 'text-offset':[0,0.4], 'text-max-width':8,
                   'text-font':['Noto Sans Regular'] },
          paint:{ 'text-color':'#313E48', 'text-halo-color':'#ffffff', 'text-halo-width':1.4, 'text-opacity':0 } }
    ]
};
