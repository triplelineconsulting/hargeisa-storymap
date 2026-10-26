/* =============================================================================
   Hargeisa Flood Risk Story Map — config.js  (published version)
   ~9 chapters. Flood scenarios and building-fabric categories are reader
   toggles (see each chapter's `controls`). Basemap = key-free OpenFreeMap.
   ============================================================================= */

var depthKey =
    "<div class='row'><span class='swatch' style='background:#cfe8f0'></span>0.1&ndash;0.5 m</div>" +
    "<div class='row'><span class='swatch' style='background:#9ed3e2'></span>0.5&ndash;1 m</div>" +
    "<div class='row'><span class='swatch' style='background:#5fb0cf'></span>1&ndash;2 m</div>" +
    "<div class='row'><span class='swatch' style='background:#2b7bb0'></span>2&ndash;4 m</div>" +
    "<div class='row'><span class='swatch' style='background:#17547f'></span>&gt;4 m</div>";

var floodCam = { center:[44.0573, 9.5616], zoom:13.6, pitch:20, bearing:0 };

var config = {
    style: 'https://tiles.openfreemap.org/styles/liberty',
    accessToken: '',
    showMarkers: false,
    markerColor: '#00797E',
    theme: 'light',
    use3dTerrain: false,
    useCustomLayers: true,
    inset: false,
    legend: false,
    bookmarks: true,
    chapterReturn: false,
    title: 'Flood Risk in Hargeisa',
    subtitle: 'A World Bank flood risk diagnostic',
    byline: 'Prepared by Triple Line',
    footer: 'Source: World Bank Hargeisa Flood Risk Diagnostic (2025–26). ' +
        'Built with the <a href="https://github.com/digidem/maplibre-storymap" target="_blank">MapLibre Storytelling</a> template. ' +
        'Basemap © OpenFreeMap / OpenStreetMap contributors.',
    chapters: [
        {
            id:'why-flooding-matters', alignment:'left', hidden:false,
            title:'Building resilience in a city on the rise',
            description:`
                <p>Hargeisa is Somaliland's largest city and one of the Horn of Africa's fastest-growing urban centres. As it expands, it is attracting new businesses, creating jobs, and strengthening its role as a hub for trade and services. But rapid growth is also increasing exposure to flooding, placing people, livelihoods, businesses, and critical infrastructure at greater risk.</p>
                <p>Today, flooding is estimated to cost the city around <span class="stat">USD 23 million a year</span> in damage, roughly half of its annual municipal revenue, and the toll climbs steeply with severity: a single rare, severe event could cause some <span class="stat">USD 154 million</span> in damage, directly affecting more than 40,000 people, around 8,500 buildings, and 155 kilometres of road. The majority of these costs fall on private citizens and businesses whose homes and premises are damaged by floods; the Municipality of Hargeisa is making strategic investments to reduce that risk.</p>
                <p>Flood resilience is therefore not only an infrastructure challenge but an economic development priority. Protecting people, businesses, and public infrastructure from flooding can support investment, strengthen connectivity, and sustain the city's long-term growth. How Hargeisa manages this challenge will help determine whether it can keep growing as a competitive and resilient city for decades to come.</p>`,
            location:{ center:[44.0650, 9.5450], zoom:11.6, pitch:0, bearing:0 },
            mapAnimation:'flyTo', rotateAnimation:false, mapInteractive:false, callback:'',
            onChapterEnter:[], onChapterExit:[]
        },
        {
            id:'understanding-risk', alignment:'right', hidden:false,
            title:'Understanding the risk',
            description:`
                <p>Reducing flood risk starts with understanding it. In June 2025, the World Bank commissioned a diagnostic of flooding in Hargeisa, carried out by Triple Line with HKV and Raagsan, combining flood modelling, field surveys, and local expertise into a clear, prioritized set of actions.</p>
                <p>It draws on several strands of evidence: a <strong>flood hazard and risk assessment</strong> that models flood depth and extent across a range of return periods, from frequent events with a high chance in any given year to rare events with about a 1% annual chance; a <strong>risk assessment</strong> translating those depths into impacts on people, buildings, and roads; <strong>field surveys</strong> of households and businesses in flood-affected areas; and <strong>validation</strong> with local stakeholders at a workshop held in Hargeisa in April 2026.</p>
                <details class="deep-dive"><summary>How Hargeisa's flood risk was modelled</summary><div class="dd-body">
                    <p>Flood risk combines three things: the <strong>hazard</strong> (how deep and how often floodwater arrives), the <strong>exposure</strong> (the people, buildings, and roads in its path), and the <strong>vulnerability</strong> (how easily they are harmed and how quickly they recover). To map the hazard, a hydraulic model developed by Triple Line and HKV simulates how rainfall and river flows move across the shape of the land and through the city's drainage, producing flood depth and extent for a range of return periods under both today's climate and projected future conditions. Overlaying these flood layers with data on population, buildings, and roads yields the exposure and damage estimates.</p>
                </div></details>`,
            sidePanel:"<div class='row'><span class='swatch' style='background:#F78D2A'></span>Field survey target areas</div><div class='cap'>Neighbourhoods where household and business surveys were carried out, in areas with a known history of flooding.</div>",
            location:{ center:[44.0650, 9.5450], zoom:11.5, pitch:0, bearing:0 },
            mapAnimation:'flyTo', rotateAnimation:false, mapInteractive:false, callback:'',
            onChapterEnter:[
                { layer:'survey-targets-fill', opacity:0.35, duration:500 },
                { layer:'survey-targets-line', opacity:1, duration:500 }
            ],
            onChapterExit:[
                { layer:'survey-targets-fill', opacity:0 },
                { layer:'survey-targets-line', opacity:0 }
            ]
        },
        {
            id:'why-hargeisa-floods', alignment:'left', hidden:false,
            title:'Why Hargeisa floods',
            description:`
                <p>Hargeisa's flooding has two sources. It is <strong>fluvial</strong>, from the Hargeisa River which spills onto its floodplain during heavy rains, and <strong>pluvial</strong>, when intense rainfall runs off steep slopes and low-permeability ground faster than the city's limited drainage can manage. The two combine most dangerously where urban streams meet the river and cross the major roads.</p>
                <p>The picture differs across the city. North of the river, flooding is relatively contained, held back by dams and by drainage in central areas. South of the river it is far more extensive and largely uncontrolled, a rapidly expanding area where formal drainage is almost entirely absent.</p>
                <p>The risk is amplified by how the city grows. As open ground is built over and hard surfaces replace permeable land, water that once soaked away runs straight off, and new development is spreading onto the very floodplains and flow paths most prone to flooding. <em>Use the toggles to show the river network and the projected 2050 urban extent.</em></p>
                <details class="deep-dive"><summary>Fluvial and pluvial flooding</summary><div class="dd-body">
                    <p><strong>Fluvial (riverine)</strong> flooding happens when a river receives more water than its channel can hold and spills onto the floodplain; in Hargeisa, that means the Hargeisa River and its now-urbanized banks. <strong>Pluvial (surface-water)</strong> flooding happens when intense rainfall overwhelms the ground's ability to absorb it and the drainage's ability to carry it away. Riverine flooding tends to appear in more extreme events, while surface-water flooding can disrupt streets even in frequent storms. An effective response has to address both together.</p>
                </div></details>`,
            controls:[
                { type:'checkbox', title:'Show on map', items:[
                    { label:'River &amp; streams', color:'#2b7bb0', layers:['rivers-line'], opacity:1, on:true },
                    { label:'Projected 2050 extent', color:'#4F738E', layers:['harg2050-fill','harg2050-line'], opacity:0.4, on:false }
                ]}
            ],
            location:{ center:[44.0650, 9.5490], zoom:11.8, pitch:20, bearing:0 },
            mapAnimation:'flyTo', rotateAnimation:false, mapInteractive:false, callback:'',
            onChapterEnter:[
                { layer:'rivers-line', opacity:1, duration:500 },
                { layer:'harg2050-fill', opacity:0 }, { layer:'harg2050-line', opacity:0 }
            ],
            onChapterExit:[
                { layer:'rivers-line', opacity:0 },
                { layer:'harg2050-fill', opacity:0 }, { layer:'harg2050-line', opacity:0 }
            ]
        },
        {
            id:'how-hazard-grows', alignment:'right', hidden:false,
            title:'How the hazard grows',
            description:`
                <p>The flood hazard grows with the severity of the storm. A frequent event already causes meaningful disruption; a rare, severe one inundates far more of the city, and far more deeply. The most severe hazard concentrates along the downstream urban streams and the banks of the Hargeisa River, where former floodplains have been built over.</p>
                <p>This view zooms into the central river corridor, with key facilities labelled. <em>Use the scenario buttons to step through the flood from the common 1-in-2-year event to the severe 1-in-100-year event, and toggle the overlays on and off.</em></p>
                <figure><img src="./images/Flood_Hazard_Extent_by_return_period.jpg" alt="Flood hazard extent by return period"><figcaption>Flood hazard extent across Hargeisa by return period (T2–T100). Source: <a href="https://tripleline.com/" target="_blank">Triple Line</a>.</figcaption></figure>
                <details class="deep-dive"><summary>What is a return period?</summary><div class="dd-body">
                    <p>A return period describes how rare a flood is. It is a statement about likelihood, not a fixed schedule: a "1-in-25-year flood" (T25) is not one that arrives every 25 years, but one with a 4% chance of occurring in any given year, and two can fall in successive years. Larger return periods (T50, T100) describe rarer, more damaging events. The 1-in-100-year flood shown here is the most severe event modelled, not the worst physically possible. Return periods set the "design standard" for flood infrastructure: Hargeisa's strategy recommends protecting priority areas to a 1-in-25-year standard in the near term, rising over time. And as the climate and city change, a "1-in-25-year" event today may arrive more often in future.</p>
                </div></details>`,
            sidePanel:"<div class='cap'>Blue shading is flood depth. Darker is deeper.</div>"+depthKey,
            controls:[
                { type:'radio', title:'Flood scenario', active:0, items:[
                    { label:'1-in-2', layers:['flood-t2-fill'], opacity:0.85 },
                    { label:'1-in-5', layers:['flood-t5-fill'], opacity:0.85 },
                    { label:'1-in-10', layers:['flood-t10-fill'], opacity:0.85 },
                    { label:'1-in-25', layers:['flood-t25-fill'], opacity:0.85 },
                    { label:'1-in-50', layers:['flood-t50-fill'], opacity:0.85 },
                    { label:'1-in-100', layers:['flood-t100-fill'], opacity:0.85 }
                ]},
                { type:'checkbox', title:'Overlays', items:[
                    { label:'Key facilities', color:'#F78D2A', layers:['key-infra-fill','key-infra-label'], opacity:0.8, on:true }
                ]}
            ],
            location:floodCam, mapAnimation:'flyTo', rotateAnimation:false, mapInteractive:true, callback:'',
            onChapterEnter:[
                { layer:'flood-t2-fill', opacity:0.85, duration:500 },
                { layer:'flood-t5-fill', opacity:0 }, { layer:'flood-t10-fill', opacity:0 },
                { layer:'flood-t25-fill', opacity:0 }, { layer:'flood-t50-fill', opacity:0 }, { layer:'flood-t100-fill', opacity:0 },
                { layer:'key-infra-fill', opacity:0.8, duration:500 }, { layer:'key-infra-label', opacity:0.8, duration:500 }
            ],
            onChapterExit:[
                { layer:'flood-t2-fill', opacity:0 }, { layer:'flood-t5-fill', opacity:0 }, { layer:'flood-t10-fill', opacity:0 },
                { layer:'flood-t25-fill', opacity:0 }, { layer:'flood-t50-fill', opacity:0 }, { layer:'flood-t100-fill', opacity:0 },
                { layer:'key-infra-fill', opacity:0 }, { layer:'key-infra-label', opacity:0 }
            ]
        },
        {
            id:'who-is-exposed', alignment:'left', hidden:false,
            title:'Who and what is exposed',
            description:`
                <p>Under today's conditions a relatively modest share of the population is directly in harm's way, but it rises quickly with severity and is set to grow. A frequent flood exposes around 7,000 people (under 1%); a rare, severe one close to 45,000 (over 4%). Exposure is highest in the dense, planned central districts, where much of the city's higher-density development and asset value sits; Hargeisa remains a monocentric city, with most building value concentrated in the centre.</p>
                <figure><img src="./images/Hotspots_flood_risk.jpg" alt="Flood risk hotspots by expected annual damage"><figcaption>Flood-risk hotspots by expected annual damage (EAD). Source: <a href="https://tripleline.com/" target="_blank">Triple Line</a>.</figcaption></figure>
                <p>Non-residential buildings, shops, workshops, and commercial premises near the river and major roads, are the most exposed, and several critical facilities including health centres and schools are exposed even in frequent events. Only a few kilometres of primary road flood even in severe events, but because these roads are heavily depended on, the disruption is significant. And exposure is climbing: if no action is taken, by 2060 the number of people exposed to today's common flood is expected to rise by around half, from roughly 7,000 to 10,400, while expected annual damages grow by about 52%, from around USD 23 million to USD 35 million.</p>
                <figure><img src="./images/Damages_by_return_period_and_climate_scenario.jpg" alt="Damages by return period and climate scenario"><figcaption>Estimated damages by return period under 2025 and 2060 climate scenarios (USD million). Source: <a href="https://tripleline.com/" target="_blank">Triple Line</a>.</figcaption></figure>`,
            sidePanel:"<div class='cap'>Blue shading shows the severe (1-in-100-year) flood. Building value and exposure are highest in the dense central districts, near the river and major roads.</div>",
            location:{ center:[44.0650, 9.5450], zoom:11.6, pitch:15, bearing:0 },
            mapAnimation:'flyTo', rotateAnimation:false, mapInteractive:false, callback:'',
            onChapterEnter:[
                { layer:'flood-t100-fill', opacity:0.45, duration:500 },
                { layer:'morph-formal', opacity:0 }, { layer:'morph-informal', opacity:0 },
                { layer:'morph-idp', opacity:0 }, { layer:'morph-nonres', opacity:0 }
            ],
            onChapterExit:[ { layer:'flood-t100-fill', opacity:0 } ]
        },
        {
            id:'building-fabric', alignment:'right', hidden:false,
            title:'The city\u2019s building fabric',
            description:`
                <p>Who lives where shapes who is hurt most by flooding. Hargeisa's building fabric ranges from planned, higher-value housing to unplanned areas and displacement settlements. The most flood-exposed buildings, near the river and major roads, are often non-residential, tying flood risk directly to livelihoods, while unplanned and displacement areas hold the least capacity to absorb and recover from damage.</p>
                <p><em>Toggle the building types on and off to see where each sits in relation to the flood-prone corridor.</em></p>`,
            sidePanel:"<div class='cap'>Building types across the city, from the morphology assessment.</div>",
            controls:[
                { type:'checkbox', title:'Building type', items:[
                    { label:'Planned residential', color:'#00797E', layers:['morph-formal'], opacity:0.75, on:true },
                    { label:'Unplanned residential', color:'#F78D2A', layers:['morph-informal'], opacity:0.75, on:true },
                    { label:'IDP settlements', color:'#00BBD2', layers:['morph-idp'], opacity:0.9, on:true },
                    { label:'Non-residential &amp; mixed', color:'#4C5560', layers:['morph-nonres'], opacity:0.6, on:true }
                ]}
            ],
            location:{ center:[44.0640, 9.5520], zoom:12.2, pitch:15, bearing:0 },
            mapAnimation:'flyTo', rotateAnimation:false, mapInteractive:true, callback:'',
            onChapterEnter:[
                { layer:'morph-formal', opacity:0.75, duration:500 },
                { layer:'morph-informal', opacity:0.75, duration:500 },
                { layer:'morph-idp', opacity:0.9, duration:500 },
                { layer:'morph-nonres', opacity:0.6, duration:500 }
            ],
            onChapterExit:[
                { layer:'morph-formal', opacity:0 }, { layer:'morph-informal', opacity:0 },
                { layer:'morph-idp', opacity:0 }, { layer:'morph-nonres', opacity:0 }
            ]
        },
        {
            id:'vulnerability', alignment:'left', hidden:false,
            title:'Why the same flood impacts some far more',
            description:`
                <p>Flooding does not affect everyone equally, and its cost is more than what it destroys. In Hargeisa, high and compounding physical, social, and economic vulnerability means even moderate floods can have severe consequences: poor-quality housing is more easily damaged, limited savings make recovery slow, and weak early warning leaves little time to prepare.</p>
                <p>The surveys bear this out. Around a third of households in flood-affected areas lost income because of flooding, and those in the lowest income band lost income at up to five times the rate of the highest. Casual day labourers, about 30% of household earners, are especially exposed: even a short flood that blocks access to a worksite means immediate, uncompensated lost income. For businesses, mostly small retail and service firms, the dominant impact is staff unable to reach work when roads flood. And preparedness is weak: only about 31% of households and 26% of businesses received any warning before a flood, and even then only half took protective action.</p>
                <details class="deep-dive"><summary>About the field surveys</summary><div class="dd-body">
                    <p>The field surveys provide the on-the-ground evidence used to ground-truth the risk model. Structured household and business questionnaires were administered in areas with a known history of flooding, capturing direct property damage, displacement, days of work and school lost, income and business disruption, interruptions to water, sanitation and power, receipt of early warning, and the coping strategies people rely on. Responses are self-reported and based on recall of past events, and offer a vital window into how flooding is experienced, and how vulnerability, as much as hazard, shapes its impact.</p>
                </div></details>`,
            sidePanel:'<h4>Vulnerability in the surveyed areas</h4><img src="./images/Corrugatedgalvinzed_iron.jpg" alt="Corrugated-iron dwelling and shop"><img src="./images/Streetvendor.jpg" alt="Street vendor area"><div class="cap">Housing and small businesses are often built from lightweight materials such as corrugated iron, and cluster on flood-prone land, leaving them highly vulnerable. Source: <a href="https://tripleline.com/" target="_blank">Triple Line</a>; photos taken during field surveys.</div><div class="row" style="border-top:1px solid #CFD3D3;padding-top:8px"><span class="swatch" style="background:#F78D2A"></span>Survey target areas (on map)</div>',
            location:{ center:[44.0650, 9.5450], zoom:11.6, pitch:20, bearing:0 },
            mapAnimation:'flyTo', rotateAnimation:false, mapInteractive:false, callback:'',
            onChapterEnter:[
                { layer:'survey-targets-fill', opacity:0.35, duration:500 },
                { layer:'survey-targets-line', opacity:1, duration:500 }
            ],
            onChapterExit:[
                { layer:'survey-targets-fill', opacity:0 },
                { layer:'survey-targets-line', opacity:0 }
            ]
        },
        {
            id:'citywide-response', alignment:'right', hidden:false,
            title:'An integrated approach',
            description:`
                <p>The diagnostic sets out a strategy built on integrated urban stormwater management: managing rainfall and river flows across the whole city and catchment, rather than treating each problem in isolation. It treats stormwater as a resource to be retained, infiltrated, and reused; combines grey infrastructure, nature-based solutions, and non-structural measures in one framework; works across scales from buildings to the river catchment; and is coordinated with how the city plans and grows.</p>
                <p>This fits Hargeisa's context as a semi-arid city where too much water and too little water are both problems: measures that hold back flood peaks can also store water for drier times, contributing to water security even as they reduce flood risk.</p>
                <details class="deep-dive"><summary>The triple dividend of resilience</summary><div class="dd-body">
                    <p>The case for acting rests on more than avoided damage. The World Bank frames the wider return as the "triple dividend of resilience." The first dividend is avoided losses. The second is the economic activity generated by the investment itself, including local employment in building and maintaining flood infrastructure, with labour-intensive nature-based measures particularly well suited to creating jobs. The third is the development unlocked by reducing risk: greater confidence for households and businesses to invest, and conditions that attract private capital. In Hargeisa these are amplified by gains in water security, public health, and liveability.</p>
                </div></details>`,
            location:{ center:[44.0650, 9.5450], zoom:11.4, pitch:0, bearing:0 },
            mapAnimation:'flyTo', rotateAnimation:false, mapInteractive:false, callback:'',
            onChapterEnter:[], onChapterExit:[]
        },
        {
            id:'menu-of-options', alignment:'left', hidden:false,
            title:'Grey, green, and non-structural',
            description:`
                <p>No single measure solves flooding. Hargeisa's response draws on three kinds of solution together. <strong>Grey infrastructure</strong>, channels, culverts, dikes, and piped drainage, manages and conveys floodwater, and is the priority where formal drainage is missing, as across much of the south. <strong>Nature-based and hybrid solutions</strong>, retention basins, green corridors, vegetated buffers, floodplain restoration, and catchment measures such as terracing and berkads, slow, store, and soak up runoff, often at lower cost and with wider benefits. And <strong>non-structural measures</strong>, land-use planning, building and drainage codes, solid-waste management, early warning, and community preparedness, reduce exposure and help people cope, and can begin immediately.</p>
                <p>The best results come from combining all three. These measures also do more than reduce flood risk: building and maintaining them creates work, and by keeping roads, markets, and businesses open through the rainy season, flood protection safeguards the livelihoods the city already depends on.</p>
                <details class="deep-dive"><summary>Berkads and catchment measures</summary><div class="dd-body">
                    <p>In Hargeisa, flood risk and water scarcity coexist, which makes measures that do double duty especially valuable. Upstream, low-cost approaches can slow and store water before it reaches the city: terraced agriculture that holds runoff on the slopes, check dams that dampen the flood wave and trap sediment, and <strong>berkads</strong>, traditional walled reservoirs long used across Somaliland to capture and store rainwater. At scale, these catchment measures reduce the peak flows that drive downstream flooding while supporting agriculture and dry-season water supply, and many are labour-intensive to build and maintain, which also makes them well suited to creating local work.</p>
                </div></details>`,
            location:{ center:[44.0650, 9.5450], zoom:11.6, pitch:20, bearing:0 },
            mapAnimation:'flyTo', rotateAnimation:false, mapInteractive:false, callback:'',
            onChapterEnter:[], onChapterExit:[]
        },
        {
            id:'priorities', alignment:'right', hidden:false,
            title:'Priorities for a growing city',
            description:`
                <p>Hargeisa is growing fast, and the choices made now will shape how it grows for decades. Left unmanaged, flood risk will climb with every season of expansion. The diagnostic points to a clear, phased way forward: a strategy organised around four complementary pillars, each addressing a distinct dimension of the city's current and future flood risk.</p>
                <p><strong>Pillar 1: Flood preparedness and risk-informed planning</strong> — reducing exposure and vulnerability, through citywide non-structural measures with targeted support for high-risk and vulnerable communities: flood risk information and early warning, community preparedness, flood-resilient building standards, and better drainage maintenance and solid-waste management.</p>
                <p><strong>Pillar 2: Priority risk hotspots</strong> — reducing concentrated existing risk, through targeted structural investment (grey, nature-based, and hybrid) in the dense central areas and along the river corridor where damage concentrates.</p>
                <p><strong>Pillar 3: Beyond the hotspots</strong> — extending drainage coverage across the city, prioritised by flood risk, network connectivity, and project readiness, with particular attention to the fast-growing, largely undrained south of the river.</p>
                <p><strong>Pillar 4: Anticipating future urban growth</strong> — preventing new flood risk, by reserving and protecting the land needed for future drainage, conveyance, and retention in the expansion areas, and applying risk-sensitive planning, zoning, and development controls.</p>
                <p>Done well, this is also an investment in the city's economy: protecting the jobs and businesses Hargeisa has today, and creating new work in building the resilient city it needs tomorrow. Managing flood risk is not a single fix but a continuing commitment, one that protects lives, livelihoods, and the future of a city central to Somaliland's economy and urban growth.</p>`,
            location:{ center:[44.0650, 9.5450], zoom:11.2, pitch:25, bearing:0 },
            mapAnimation:'flyTo', rotateAnimation:false, mapInteractive:false, callback:'',
            onChapterEnter:[], onChapterExit:[]
        },
        {
            id:'about', alignment:'center', hidden:false,
            title:'About this story map',
            description:`
                <p style="color:#4C5560">This story map was prepared by Triple Line in partnership with HKV and Raagsan for the World Bank as part of Diagnostic Work for Climate Resilient Urban Development. It is designed to raise awareness and share key findings. The flood modelling, exposure and damage figures are indicative estimates drawn from the diagnostic. They are not a substitute for detailed engineering design or site-specific assessment. Maps are simplified for communication and should not be used for precise measurement. Please verify all figures before using them in decision-making.</p>
                <p style="color:#4C5560">The ACP-EU Disaster Risk Management Program, managed by the Global Facility for Disaster Reduction and Recovery (GFDRR), is funded by the European Union.</p>
                <p style="color:#4C5560">The findings, interpretations and conclusions expressed here are those of the authors and do not necessarily reflect the views of The World Bank, its Board of Executive Directors, or the governments they represent. The World Bank does not guarantee the accuracy of the data included in this work. The boundaries, colors, denominations and other information shown on any map do not imply any judgment on the part of The World Bank concerning the legal status of any territory or the endorsement or acceptance of such boundaries.</p>
                <p style="color:#4C5560">The sole responsibility of this publication lies with the author. The European Union is not responsible for any use that may be made of the information contained therein.</p>
                <div class="logo-strip"><img class="lg-crest" src="./images/logo-hargeisa.png" alt="Hargeisa Local Government"><span class="eu-block"><img class="lg-eu" src="./images/logo-eu.png" alt="European Union"><span class="eu-text">Funded by the<br>European Union</span></span><img class="lg-acp" src="./images/logo-acp.png" alt="OACPS"><img class="lg-gfdrr" src="./images/logo-gfdrr.png" alt="GFDRR, administered by the World Bank"><img class="lg-tl" src="./images/logo-tripleline.jpg" alt="Triple Line"><img class="lg-hkv" src="./images/logo-hkv.png" alt="HKV"><img class="lg-rg" src="./images/logo-raagsan.png" alt="Raagsan"></div>`,
            location:{ center:[44.065, 9.545], zoom:10.8, pitch:0, bearing:0 },
            mapAnimation:'flyTo', rotateAnimation:false, mapInteractive:false, callback:'',
            onChapterEnter:[], onChapterExit:[]
        }
    ]
};
