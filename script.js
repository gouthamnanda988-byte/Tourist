/**
 * TouristSafe — India Tourist Emergency & Weather Alert System
 * Client-Side Application Script
 * Features: Tri-lingual i18n (EN/TA/HI), Multi-hazard Weather Engine,
 *           Simulated Alerts Engine, Web Audio API Siren, Offline-first architecture.
 */

// ============================================================================
// 1. Multilingual Translation Dictionary (English, Tamil, Hindi)
// ============================================================================
const translations = {
  en: {
    // Banner & Nav
    hackathon_badge: "HACKATHON PROTOTYPE",
    banner_notice: "SIMULATED SAMPLE DATA ONLY: For real-life emergencies anywhere in India, immediately dial <strong>112</strong>.",
    view_helplines_btn: "Direct Helplines →",
    nav_home: "Home",
    nav_weather: "Weather",
    nav_shield: "Safe Journey Shield",
    nav_alerts: "Emergency Alerts",
    nav_safe_zones: "Safe Zones & Shelters",
    nav_safety: "Safety Guide",
    nav_helpline: "Helplines",
    nav_about: "About",

    // Hero
    hero_pill: "National Tourist Protection & Weather Vigilance",
    hero_title: "Travel Across India With Confidence & Live Safety Alerts",
    hero_subtitle: "Instant meteorological monitoring, regional disaster warnings, and verified survival instructions for India's premier tourist destinations.",
    search_placeholder: "Search Indian city or hill station (e.g., Manali, Chennai, Jaipur, Goa)...",
    search_btn: "Check Safety",
    gps_btn: "Detect City",
    popular_destinations: "Popular Hubs:",
    coordinates_label: "Coordinates:",
    search_min_chars: "Please enter at least 2 characters to search Indian locations.",
    search_loading_geo: "Searching Indian locations via Open-Meteo...",
    search_no_results: "No matching locations found in India for",
    search_geo_error: "Unable to connect to Open-Meteo Geocoding service. Please check your internet connection.",

    // Quick Helplines
    hl_national: "National Emergency",
    hl_national_sub: "Police, Fire & Medical",
    hl_tourist: "Tourist Helpline",
    hl_tourist_sub: "24x7 Multi-lingual Govt.",
    hl_ndrf: "NDRF Disaster Alert",
    hl_ndrf_sub: "Disaster Management",
    hl_medical: "Ambulance Service",
    hl_medical_sub: "Emergency Health / Trauma",

    // States
    loading_title: "Retrieving Regional Meteorological & Safety Feed...",
    loading_sub: "Connecting to simulated meteorological telemetry and tourist hazard databases.",
    error_title: "Destination Not Found",
    error_msg: "We could not locate weather and emergency information for this query. Please check spelling or select from our curated list of 12 top Indian tourist circuits.",
    error_reset: "Reset to Manali (Hill Circuit)",
    error_coastal: "Switch to Goa (Coastal)",

    // Weather Dashboard
    last_updated: "Observed:",
    elevation_label: "Terrain:",
    feels_like_label: "Feels like:",
    metric_temp_eyebrow: "Atmospheric Thermal",
    card_temp_title: "Temperature",
    temp_range_label: "Day Range:",
    temp_status_label: "Thermal State:",

    metric_humidity_eyebrow: "Moisture Density",
    card_humidity_title: "Humidity",
    dew_point_label: "Dew Point:",
    comfort_label: "Comfort Index:",

    metric_rain_eyebrow: "Precipitation Volume",
    card_rainfall_title: "Rainfall",
    rain_prob_label: "Rain Probability:",
    rain_intensity_label: "Intensity:",

    metric_wind_eyebrow: "Velocity & Vectors",
    card_wind_title: "Wind Speed",
    wind_dir_label: "Direction:",
    wind_gust_label: "Gust Status:",

    aqi_label: "Air Quality Index (AQI):",
    uv_label: "UV Index:",
    tourist_activity_label: "Tourist Activity Feasibility:",

    // Safe Journey Shield (Context-Aware Safety Briefing)
    shield_section_tag: "CONTEXT-AWARE SAFETY BRIEFING",
    shield_section_title: "Safe Journey Shield",
    shield_section_sub: "Dynamic risk assessment correlating live meteorological telemetry with your planned tourist activity across Indian terrains.",
    feed_status_title: "Official warning feed not connected",
    feed_status_sub: "Live NDMA / IMD CAP feeds offline in prototype. Precautions are dynamically calculated from live Open-Meteo telemetry.",
    feed_check_imd_btn: "Check Live IMD →",
    shield_source_label: "Meteorology Source:",
    shield_time_label: "Observed Timestamp:",
    shield_target_label: "Active Destination:",
    activity_selector_title: "Select Your Planned Activity",
    activity_selector_desc: "Choose what you intend to do to generate a customized, context-aware safety assessment.",
    act_beach: "Beach Visit",
    act_trekking: "Trekking",
    act_sightseeing: "Sightseeing",
    act_road: "Road Travel",
    act_outdoor: "Outdoor Activities",
    factor_thermal_label: "Thermal Condition & Heat Index",
    factor_precip_label: "Precipitation & Flash Hazard",
    factor_wind_label: "Wind Velocity & Atmospheric Stability",
    factor_terrain_label: "Terrain & Regional Geography Context",
    briefing_disclaimer_note: "Note: Meteorological evaluation does not guarantee absolute safety. Environmental conditions in India can change abruptly.",
    action_eyebrow: "PRACTICAL ACTION PROTOCOL",
    action_now_title: "What should I do now?",
    action_intro_default: "Immediate recommended precautions for your chosen activity under current conditions:",
    official_guidance_head: "Official Guidance & Verification",
    official_guidance_desc: "Cross-verify critical route advisories directly with Government of India statutory authorities:",
    status_favorable: "FAVORABLE METEOROLOGICAL WINDOW",
    status_caution: "MODERATE CAUTION ADVISED",
    status_advisory: "METEOROLOGICAL ADVISORY ACTIVE",

    // Alerts Section
    alert_section_tag: "HAZARDS & WARNING FEED",
    alert_section_title: "Active Emergency & Safety Alerts",
    alert_section_sub: "Categorized regional alerts, road blockages, natural hazard warnings, and district travel advisories.",
    sim_notice_head: "OFFICIAL WARNING FEED STATUS",
    sim_notice_body: "Official alert feed (IMD / NDMA CAP-CP) is not connected. Official alerts are currently unavailable. TouristSafe never presents simulated alerts as real warnings. For genuine official bulletins, visit mausam.imd.gov.in or dial 112.",
    filter_all: "All Alerts",
    filter_high: "High Severity (Red)",
    filter_moderate: "Moderate Caution (Orange)",
    filter_advisory: "General Advisory (Blue)",
    alarm_demo_btn: "Test Alert Siren",
    alarm_stop_btn: "Stop Siren Tone",

    // Official Alerts Unavailable
    official_alerts_unavailable_title: "Official alerts unavailable",
    official_alerts_unavailable_badge: "OFFICIAL FEED NOT CONNECTED",
    official_alerts_unavailable_desc: "No verified official alert feed is integrated (e.g., IMD / NDMA CAP feed requires statutory authentication). TouristSafe strictly avoids inventing alerts or presenting simulated data as real warnings. For genuine official severe weather, cyclone, or flood warnings, consult the India Meteorological Department directly at mausam.imd.gov.in.",
    official_alerts_source_label: "Official Source:",
    official_alerts_source_val: "India Meteorological Department (IMD) / NDMA CAP-CP",
    official_alerts_status_label: "Feed Status:",
    official_alerts_status_val: "Offline / Not Connected (Zero Fabricated Warnings)",
    official_alerts_time_label: "Last Checked:",
    official_alerts_check_imd: "Check Live IMD Alerts (mausam.imd.gov.in) →",
    official_alerts_check_ndma: "NDMA Disaster Portal (ndma.gov.in) →",

    // Safe Zones & Facilities Section
    safezones_tag: "DESIGNATED SHELTERS & EMERGENCY FACILITIES",
    safezones_title: "Nearby Safe Zones & Emergency Services",
    safezones_sub: "Verification status for local hospitals, police stations, and officially designated disaster shelters.",
    safezones_status_badge: "UNVERIFIED / NO LIVE GIS FEED",
    safezones_notice_head: "Nearby Emergency Facilities & Shelter Data Unavailable",
    safezones_notice_body: "No verified live GIS feed (e.g., OpenStreetMap Overpass or State Disaster Management Authority registry) is connected for this location. TouristSafe strictly avoids displaying fabricated safe zones or claiming locations are designated shelters without statutory confirmation.",

    // Safety Section
    safety_section_tag: "TRAVEL ADVISORY GUIDELINES",
    safety_section_title: "Tourist Safety Instructions by Terrain & Hazard",
    safety_section_sub: "Essential precautionary standard operating procedures for domestic and international travelers visiting India.",
    
    guide_monsoon_title: "Monsoon & Coastal Surges",
    guide_monsoon_sub: "Beaches, river valleys, and lowlands",
    guide_monsoon_1: "<strong>Respect Red Flags on Beaches:</strong> Never enter sea waters when lifeguards fly red caution flags (common in Goa, Puri, Kovalam, Chennai).",
    guide_monsoon_2: "<strong>Avoid Riverbank Camping:</strong> Mountain rivers (Beas, Ganga, Teesta) swell rapidly without warning due to upstream cloudbursts.",
    guide_monsoon_3: "<strong>Steer Clear of Waterlogged Roads:</strong> Avoid driving through standing water; hidden manholes and submerged bridge causeways pose severe hazards.",
    guide_monsoon_4: "<strong>Monitor High Tide Timings:</strong> Coastal strolls in Mumbai or Rameshwaram during high tides can suddenly isolate tourists on rock formations.",

    guide_mountain_title: "Mountain & Landslide Protocol",
    guide_mountain_sub: "Himachal, Uttarakhand, Kashmir, Sikkim",
    guide_mountain_1: "<strong>Acclimatize Gradually:</strong> At altitudes above 2,500m (Leh, Gulmarg, Rohtang), take 24–48 hours of rest to prevent Acute Mountain Sickness (AMS).",
    guide_mountain_2: "<strong>Watch Falling Rock Triggers:</strong> Landslides occur abruptly on steep cuts during or right after rainfall. Never halt your vehicle under loose scree slopes.",
    guide_mountain_3: "<strong>Hire Registered Mountain Guides:</strong> Only trek with guides certified by the Indian Mountaineering Foundation (IMF) or State Tourism Boards.",
    guide_mountain_4: "<strong>Check Highway Pass Permits:</strong> Mountain passes (Atal Tunnel, Zoji La, Khardung La) close dynamically based on black ice and weather.",

    guide_heat_title: "Heatwave & Desert Survival",
    guide_heat_sub: "Rajasthan, Delhi NCR, Central Plains",
    guide_heat_1: "<strong>Electrolyte Hydration:</strong> Drink Oral Rehydration Salts (ORS), coconut water, or nimbu pani regularly, even if not feeling thirsty.",
    guide_heat_2: "<strong>Avoid Peak Afternoon Sun (12 PM – 4 PM):</strong> Schedule fort visits and outdoor monuments in early morning hours (6 AM – 10 AM) or sunset.",
    guide_heat_3: "<strong>Dress in Loose, Breathable Cotton:</strong> Full sleeves shield against UV burns and hot desert winds (the infamous 'Loo').",
    guide_heat_4: "<strong>Identify Heatstroke Warning Signs:</strong> Confusion, nausea, cessation of sweat, or high fever require immediate cold packs and emergency 108 medical care.",

    guide_women_title: "Women & Solo Tourist Safeguards",
    guide_women_sub: "Pan-India travel security protocols",
    guide_women_1: "<strong>Save Dedicated Women Helpline 1091:</strong> Program 1091 and 112 on speed dial with location sharing enabled in messaging apps.",
    guide_women_2: "<strong>Use Verified Transit & Prepaid Counters:</strong> At airports and railway stations, opt for government prepaid taxi booths or verified app-based cabs.",
    guide_women_3: "<strong>Female Compartments & Waiting Rooms:</strong> Indian Railways and metro systems (Delhi, Chennai, Mumbai) provide designated women coaches and security guards.",
    guide_women_4: "<strong>Verify Hotel Registration:</strong> Check that your accommodation is officially approved by the Ministry of Tourism or reputable state tourism corporations.",

    // Checklist
    checklist_title: "Interactive Tourist Departure Readiness Checklist",
    checklist_desc: "Check off critical safety milestones before beginning your journey. Your progress is saved automatically.",
    chk_1: "Verified 112 and 1363 numbers saved in mobile address book",
    chk_2: "Downloaded offline maps & recorded hotel address in local script",
    chk_3: "Carrying basic emergency first-aid kit with ORS sachets & personal medication",
    chk_4: "Checked current IMD & state disaster alerts for target travel route",
    chk_5: "Shared travel itinerary & live emergency tracking with a family member or trusted friend",
    chk_reset: "Reset Checklist",

    // Helplines Directory
    helpline_section_tag: "VERIFIED EMERGENCY DIRECTORY",
    helpline_section_title: "Official Pan-India Emergency Assistance Numbers",
    helpline_section_sub: "Toll-free emergency contact infrastructure operated by the Government of India and law enforcement.",
    badge_all_emergency: "All-in-One 24x7",
    dir_112_title: "National Emergency Response System (ERSS)",
    dir_112_desc: "Single unified pan-India emergency number for immediate Police, Fire, Ambulance, and Disaster assistance.",
    badge_tourist_ministry: "Ministry of Tourism",
    dir_1363_title: "Incredible India 24x7 Multi-lingual Tourist Helpline",
    dir_1363_desc: "Toll-free tourist guidance supported in 12 languages including English, Hindi, Tamil, German, French, Spanish, and Russian.",
    badge_disaster_hq: "Disaster Response",
    dir_1078_title: "National Disaster Management Authority (NDMA)",
    dir_1078_desc: "National disaster control room reporting floods, earthquakes, landslides, cyclones, and orchestrating rescue forces.",
    badge_women_hq: "Women Protection",
    dir_1091_title: "National Women Safety & Distress Helpline",
    dir_1091_desc: "Round-the-clock emergency assistance, rapid patrol dispatch, and protective custody for women travelers across all Indian states.",

    // About Section
    about_tag: "HACKATHON ARCHITECTURE & VISION",
    about_title: "About TouristSafe India",
    about_lead: "India is one of the world's most geographically diverse tourist landscapes—spanning Himalayan glaciers, desert plains, dense rainforests, and thousands of kilometers of coastline.",
    about_p1: "TouristSafe was engineered as a rapid emergency management dashboard prototype designed to solve critical tourist information vacuums during flash floods, cyclonic swells, sudden heatwaves, or mountain landslides.",
    about_p2: "Built strictly with semantic, lightweight, dependency-free vanilla web technologies (HTML5, CSS3, JavaScript ES6+), it provides frictionless performance even across low-bandwidth 2G/3G mobile networks in remote travel corridors.",
    about_box_title: "Project Implementation Highlights",

    // Footer
    footer_tagline: "Empowering travelers with clear, actionable safety telemetry across India's vibrant tourist destinations.",
    footer_nav_heading: "Quick Navigation",
    footer_disclaimer_heading: "Prototype Disclaimer",
    footer_disclaimer_text: "Developed exclusively for hackathon demonstration. Meteorological and hazard data are simulated. For live emergencies, always dial 112 or contact the India Meteorological Department (IMD).",
    back_to_top: "Back to Top ↑",

    // SOS Modal
    sos_modal_title: "India All-Emergency Dispatch: 112",
    sos_modal_sub: "Police • Ambulance • Fire • Disaster Rescue",
    sos_modal_warning: "When calling 112, be prepared to clearly state:",
    sos_step_1: "Your precise current location (City, Road/NH, Landmark, or Hotel name).",
    sos_step_2: "Nature of hazard: Medical emergency, Landslide, Flash flood, or Crime.",
    sos_step_3: "Number of persons affected and if children or seniors require urgent assistance.",
    sos_step_4: "Your preferred language: Operators are trained to dispatch in Hindi, English, and regional languages.",
    sos_dial_now: "Direct Dial 112 (Toll Free)",
    sos_dial_tourist: "Tourist Helpline: 1363"
  },

  ta: {
    // Banner & Nav
    hackathon_badge: "ஹேக்கத்தான் மாதிரி திட்டம்",
    banner_notice: "மாதிரி உருவகப்படுத்துதல் தரவு மட்டுமே: இந்தியாவில் உண்மையான அவசரநிலைகளுக்கு உடனே <strong>112</strong> அழைக்கவும்.",
    view_helplines_btn: "உதவி எண்கள் →",
    nav_home: "முகப்பு",
    nav_weather: "வானிலை",
    nav_shield: "பாதுகாப்பு கவசம்",
    nav_alerts: "எச்சரிக்கைகள்",
    nav_safe_zones: "பாதுகாப்பான மண்டலங்கள் & தங்குமிடங்கள்",
    nav_safety: "பாதுகாப்பு வழிகாட்டி",
    nav_helpline: "உதவி எண்கள்",
    nav_about: "பற்றி",

    // Hero
    hero_pill: "தேசிய சுற்றுலாப் பயணியர் பாதுகாப்பு & வானிலை கண்காணிப்பு",
    hero_title: "நேரலை எச்சரிக்கைகளுடன் இந்தியா முழுவதும் பாதுகாப்பாகப் பயணம் செய்யுங்கள்",
    hero_subtitle: "இந்தியாவின் முக்கிய சுற்றுலாத் தலங்களுக்கான உடனடி வானிலை கண்காணிப்பு, பிராந்திய பேரிடர் எச்சரிக்கைகள் மற்றும் சரிபார்க்கப்பட்ட பாதுகாப்பு வழிமுறைகள்.",
    search_placeholder: "இந்திய நகரம் அல்லது மலைவாசஸ்தலத்தைத் தேடுக (எ.கா. மணாலி, சென்னை, ஜெய்ப்பூர், கோவா)...",
    search_btn: "பாதுகாப்பை சரிபார்",
    gps_btn: "நகரத்தைக் கண்டறி",
    popular_destinations: "பிரபலமான இடங்கள்:",
    coordinates_label: "ஆயத்தொலைவுகள்:",
    search_min_chars: "இந்திய இடங்களைத் தேட குறைந்தது 2 எழுத்துக்களை உள்ளிடவும்.",
    search_loading_geo: "ஓபன்-மீட்டியோ வழியாக இந்திய இடங்கள் தேடப்படுகின்றன...",
    search_no_results: "இந்த இடத்தில் இந்தியப் பகுதிகள் எதுவும் கிடைக்கவில்லை:",
    search_geo_error: "ஓபன்-மீட்டியோ ஜியோகோடிங் சேவையுடன் இணைக்க முடியவில்லை. இணைய இணைப்பைச் சரிபார்க்கவும்.",

    // Quick Helplines
    hl_national: "தேசிய அவசரநிலை",
    hl_national_sub: "காவல்துறை, தீயணைப்பு & மருத்துவம்",
    hl_tourist: "சுற்றுலா உதவி எண்",
    hl_tourist_sub: "24x7 பன்மொழி அரசு உதவி",
    hl_ndrf: "பேரிடர் மேலாண்மை (NDRF)",
    hl_ndrf_sub: "தேசிய பேரிடர் மீட்பு",
    hl_medical: "ஆம்புலன்ஸ் சேவை",
    hl_medical_sub: "அவசர மருத்துவ உதவி",

    // States
    loading_title: "பிராந்திய வானிலை & பாதுகாப்புத் தரவு பெறப்படுகிறது...",
    loading_sub: "வானிலை தொலைஅளவியல் மற்றும் சுற்றுலா அபாயத் தரவுத்தளத்துடன் இணைக்கப்படுகிறது.",
    error_title: "இடம் கிடைக்கவில்லை",
    error_msg: "இந்தத் தேடலுக்கான வானிலை மற்றும் அவசரத் தகவலைக் கண்டுபிடிக்க முடியவில்லை. எழுத்துப் பிழையைச் சரிபார்க்கவும் அல்லது பரிந்துரைக்கப்பட்ட நகரங்களிலிருந்து தேர்ந்தெடுக்கவும்.",
    error_reset: "மணாலிக்கு மீட்டமை (மலைப்பகுதி)",
    error_coastal: "கோவாவிற்கு மாறுக (கடற்கரை)",

    // Weather Dashboard
    last_updated: "கண்காணிக்கப்பட்டது:",
    elevation_label: "நிலப்பரப்பு:",
    feels_like_label: "உணரப்படுவது:",
    metric_temp_eyebrow: "வளிமண்டல வெப்பம்",
    card_temp_title: "வெப்பநிலை",
    temp_range_label: "நாள் வரம்பு:",
    temp_status_label: "வெப்ப நிலை:",

    metric_humidity_eyebrow: "ஈரப்பத அடர்த்தி",
    card_humidity_title: "ஈரப்பதம்",
    dew_point_label: "பனி நிலை:",
    comfort_label: "சௌகரியக் குறியீடு:",

    metric_rain_eyebrow: "மழைப்பொழிவு அளவு",
    card_rainfall_title: "மழைப்பொழிவு",
    rain_prob_label: "மழை வாய்ப்பு:",
    rain_intensity_label: "தீவிரம்:",

    metric_wind_eyebrow: "வேகம் & திசை",
    card_wind_title: "காற்றின் வேகம்",
    wind_dir_label: "திசை:",
    wind_gust_label: "சூறாவளி நிலை:",

    aqi_label: "காற்றுத் தரக் குறியீடு (AQI):",
    uv_label: "புற ஊதாக் கதிர்வீச்சு (UV):",
    tourist_activity_label: "சுற்றுலாச் செயல்பாடு சாத்தியம்:",

    // Safe Journey Shield (சூழல் சார்ந்த பாதுகாப்பு வழிகாட்டுதல்)
    shield_section_tag: "சூழல் சார்ந்த பாதுகாப்பு வழிகாட்டுதல்",
    shield_section_title: "பாதுகாப்பு கவசம் (Safe Journey Shield)",
    shield_section_sub: "நேரலை வானிலை மற்றும் உங்களின் பயண நடவடிக்கைகளை இந்திய நிலப்பரப்புக்கேற்ப பகுப்பாய்வு செய்யும் அமைப்பு.",
    feed_status_title: "அதிகாரப்பூர்வ எச்சரிக்கை இணைப்பு இல்லை",
    feed_status_sub: "தேசிய பேரிடர் எச்சரிக்கை இணைப்பு இந்த மாதிரியில் இணைக்கப்படவில்லை. முன்னெச்சரிக்கைகள் நேரலை ஓபன்-மீட்டியோ வானிலையிலிருந்து கணக்கிடப்படுகின்றன.",
    feed_check_imd_btn: "நேரலை IMD பார்க்க →",
    shield_source_label: "வானிலை மூலம்:",
    shield_time_label: "பதிவு செய்யப்பட்ட நேரம்:",
    shield_target_label: "தற்போதைய இடம்:",
    activity_selector_title: "உங்கள் பயண நடவடிக்கையைத் தேர்ந்தெடுக்கவும்",
    activity_selector_desc: "தனிப்பயனாக்கப்பட்ட சூழல் சார்ந்த பாதுகாப்பு மதிப்பீட்டைப் பெற நீங்கள் செய்யவிருக்கும் செயல்பாட்டைத் தேர்ந்தெடுக்கவும்.",
    act_beach: "கடற்கரை பயணம்",
    act_trekking: "மலையேற்றம்",
    act_sightseeing: "சுற்றுலா தளங்கள்",
    act_road: "சாலைப் பயணம்",
    act_outdoor: "வெளிப்புற விளையாட்டுகள்",
    factor_thermal_label: "வெப்பநிலை & உடல் வெப்ப உணர்வு",
    factor_precip_label: "மழைப்பொழிவு & திடீர் வெள்ள அபாயம்",
    factor_wind_label: "காற்றின் வேகம் & வளிமண்டல நிலைத்தன்மை",
    factor_terrain_label: "நிலப்பரப்பு & பிராந்திய புவியியல் சூழல்",
    briefing_disclaimer_note: "குறிப்பு: வானிலை மதிப்பீடு முழுமையான பாதுகாப்பிற்கு உத்தரவாதம் அளிக்காது. இந்தியாவில் சூழல் நிலவரம் திடீரென மாறக்கூடும்.",
    action_eyebrow: "நடைமுறை பாதுகாப்பு திட்டம்",
    action_now_title: "இப்போது நான் என்ன செய்ய வேண்டும்?",
    action_intro_default: "தற்போதைய வானிலை சூழலில் உங்கள் நடவடிக்கைகான உடனடி முன்னெச்சரிக்கை நடவடிக்கைகள்:",
    official_guidance_head: "அதிகாரப்பூர்வ வழிகாட்டுதல் & சரிபார்ப்பு",
    official_guidance_desc: "முக்கியமான பயண எச்சரிக்கைகளை இந்திய அரசு அதிகாரப்பூர்வ இணையதளங்களில் நேரடியாகச் சரிபார்க்கவும்:",
    status_favorable: "சாதகமான வானிலை சூழல்",
    status_caution: "மிதமான எச்சரிக்கை தேவை",
    status_advisory: "வானிலை எச்சரிக்கை நடைமுறையில் உள்ளது",

    // Alerts Section
    alert_section_tag: "அபாயங்கள் & எச்சரிக்கை ஊட்டம்",
    alert_section_title: "செயலில் உள்ள அவசரநிலை & பாதுகாப்பு எச்சரிக்கைகள்",
    alert_section_sub: "வகைப்படுத்தப்பட்ட பிராந்திய எச்சரிக்கைகள், சாலைத் தடைகள், இயற்கை பேரிடர் அறிவிப்புகள் மற்றும் மாவட்டப் பயண ஆலோசனைகள்.",
    sim_notice_head: "அதிகாரப்பூர்வ எச்சரிக்கை சேவை நிலை",
    sim_notice_body: "அதிகாரப்பூர்வ எச்சரிக்கை சேவை (IMD / NDMA CAP-CP) இணைக்கப்படவில்லை. அதிகாரப்பூர்வ எச்சரிக்கைகள் தற்போது கிடைக்கவில்லை. TouristSafe ஒருபோதும் மாதிரி எச்சரிக்கைகளை உண்மையானதாகக் காட்டாது. நேரலை அறிவிப்புகளுக்கு mausam.imd.gov.in தளத்தைப் பார்க்கவும் அல்லது 112 ஐ அழைக்கவும்.",
    filter_all: "அனைத்து எச்சரிக்கைகள்",
    filter_high: "அதி தீவிர எச்சரிக்கை (சிவப்பு)",
    filter_moderate: "மிதமான எச்சரிக்கை (ஆரஞ்சு)",
    filter_advisory: "பொதுவான ஆலோசனை (நீலம்)",
    alarm_demo_btn: "அவசர சைரன் சோதனை",
    alarm_stop_btn: "சைரனை நிறுத்து",

    // Official Alerts Unavailable
    official_alerts_unavailable_title: "அதிகாரப்பூர்வ எச்சரிக்கைகள் கிடைக்கவில்லை",
    official_alerts_unavailable_badge: "அதிகாரப்பூர்வ சேவை இணைக்கப்படவில்லை",
    official_alerts_unavailable_desc: "அதிகாரப்பூர்வ எச்சரிக்கை சேவை இணைக்கப்படவில்லை (IMD / NDMA அரசு அங்கீகாரம் தேவை). சுற்றுலாப் பயணியர் பாதுகாப்பைக் கருதி போலியான எச்சரிக்கைகளை உருவாக்குவதைத் தவிர்க்கிறோம். நேரலை அரசு எச்சரிக்கைகளுக்கு mausam.imd.gov.in தளத்தைப் பார்க்கவும்.",
    official_alerts_source_label: "அதிகாரப்பூர்வ மூலம்:",
    official_alerts_source_val: "இந்திய வானிலை ஆய்வுத் துறை (IMD) / NDMA CAP-CP",
    official_alerts_status_label: "சேவை நிலை:",
    official_alerts_status_val: "இணைக்கப்படவில்லை (போலி எச்சரிக்கைகள் இல்லை)",
    official_alerts_time_label: "கடைசியாக சரிபார்க்கப்பட்டது:",
    official_alerts_check_imd: "நேரலை IMD எச்சரிக்கைகளை பார்க்க (mausam.imd.gov.in) →",
    official_alerts_check_ndma: "NDMA பேரிடர் தளம் (ndma.gov.in) →",

    // Safe Zones & Facilities Section
    safezones_tag: "அங்கீகரிக்கப்பட்ட தங்குமிடங்கள் & அவசர வசதிகள்",
    safezones_title: "அருகிலுள்ள பாதுகாப்பான மண்டலங்கள் & அவசர சேவைகள்",
    safezones_sub: "உள்ளூர் மருத்துவமனைகள், காவல் நிலையங்கள் மற்றும் அதிகாரப்பூர்வ பேரிடர் தங்குமிடங்களின் சரிபார்ப்பு நிலை.",
    safezones_status_badge: "சரிபார்க்கப்படவில்லை / நேரலை GIS சேவை இல்லை",
    safezones_notice_head: "அருகிலுள்ள அவசர வசதிகள் & தங்குமிடத் தரவு கிடைக்கவில்லை",
    safezones_notice_body: "இந்த இடத்திற்கு சரிபார்க்கப்பட்ட நேரலை GIS அல்லது அரசு தங்குமிட சேவை இணைக்கப்படவில்லை. முறையான உறுதிப்படுத்தல் இல்லாமல் போலியான இடங்களை பாதுகாப்பானதாக அறிவிப்பதை TouristSafe தவிர்க்கிறது.",

    // Safety Section
    safety_section_tag: "பயண வழிகாட்டு நெறிமுறைகள்",
    safety_section_title: "நிலப்பரப்பு மற்றும் அபாயத்திற்கான சுற்றுலாப் பாதுகாப்பு வழிகாட்டுதல்கள்",
    safety_section_sub: "இந்தியாவுக்கு வரும் உள்நாட்டு மற்றும் சர்வதேசப் பயணிகளுக்கான அத்தியாவசிய பாதுகாப்பு நடைமுறைகள்.",
    
    guide_monsoon_title: "பருவமழை & கடலோர அலை எழுச்சி",
    guide_monsoon_sub: "கடற்கரைகள், ஆற்றுப் பள்ளத்தாக்குகள் மற்றும் தாழ்வான பகுதிகள்",
    guide_monsoon_1: "<strong>சிவப்புக் கொடிகளை மதிக்கவும்:</strong> உயிர்காப்பாளர்கள் சிவப்புக் கொடி ஏற்றியிருக்கும் போது கடலில் இறங்காதீர்கள் (கோவா, சென்னை மெரினா, பூரி).",
    guide_monsoon_2: "<strong>ஆற்றங்கரைகளில் முகாமிடுவதைத் தவிர்க்கவும்:</strong> மேல்நோக்கிய மேகவெடிப்புகளால் மலை ஆறுகள் எச்சரிக்கையின்றி திடீரெனப் பெருகும்.",
    guide_monsoon_3: "<strong>நீர் தேங்கிய சாலைகளைத் தவிர்க்கவும்:</strong> மறைக்கப்பட்ட பாதாள சாக்கடைகள் மற்றும் நீரில் மூழ்கிய பாலங்கள் கடும் ஆபத்தை விளைவிக்கும்.",
    guide_monsoon_4: "<strong>உயர் அலை நேரங்களைக் கண்காணிக்கவும்:</strong> உயர் அலைகளின் போது பாறைப் பகுதிகளில் நடப்பது பயணிகளைத் திடீரெனத் தனிமைப்படுத்தலாம்.",

    guide_mountain_title: "மலைப்பகுதி & நிலச்சரிவு பாதுகாப்பு",
    guide_mountain_sub: "இமாச்சலப் பிரதேசம், உத்தராகண்ட், காஷ்மீர், சிக்கிம்",
    guide_mountain_1: "<strong>உயரத்திற்கு ஏற்ப உடலைத் தகவமைத்துக் கொள்ளுங்கள்:</strong> 2,500 மீட்டருக்கு மேல் உள்ள இடங்களில் உயர நோய் (AMS) வராமல் தடுக்க 24–48 மணிநேரம் ஓய்வெடுக்கவும்.",
    guide_mountain_2: "<strong>பாறை உருளுவதைக் கவனியுங்கள்:</strong> மழை பெய்யும் போது அல்லது மழைக்குப் பிறகு செங்குத்தான சரிவுகளில் திடீரென நிலச்சரிவுகள் ஏற்படுகின்றன.",
    guide_mountain_3: "<strong>அங்கீகரிக்கப்பட்ட வழிகாட்டிகளை அமர்த்தவும்:</strong> இந்திய மலையேற்ற சம்மேளனம் (IMF) அல்லது மாநில சுற்றுலா வாரியத்தால் சான்றளிக்கப்பட்டவர்களுடன் மட்டுமே செல்லவும்.",
    guide_mountain_4: "<strong>கணவாய் அனுமதிச் சீட்டுகளைச் சரிபார்க்கவும்:</strong> பனி மற்றும் வானிலையைப் பொறுத்து மலைப்பாதைகள் மூடப்படலாம்.",

    guide_heat_title: "வெப்ப அலை & பாலைவனப் பாதுகாப்பு",
    guide_heat_sub: "ராஜஸ்தான், டெல்லி என்.சி.ஆர், மத்திய சமவெளிகள்",
    guide_heat_1: "<strong>நீர்ச்சத்து மேலாண்மை:</strong> தாகம் எடுக்காவிட்டாலும் எலெக்ட்ரோலைட், இளநீர் அல்லது எலுமிச்சை சாறு தொடர்ந்து குடிக்கவும்.",
    guide_heat_2: "<strong>நண்பகல் வெயிலைத் தவிர்க்கவும் (மதியம் 12 - மாலை 4):</strong> கோட்டைகள் மற்றும் வெளிப்புற இடங்களை அதிகாலை அல்லது மாலையில் பார்வையிடவும்.",
    guide_heat_3: "<strong>தளர்வான பருத்தி ஆடைகளை அணியுங்கள்:</strong> முழுக்கை ஆடைகள் புற ஊதாக் கதிர்வீச்சு மற்றும் வெப்பக் காற்றிலிருந்து பாதுகாக்கும்.",
    guide_heat_4: "<strong>வெப்ப பக்கவாத அறிகுறிகளை அடையாளம் காணவும்:</strong> குழப்பம், குமட்டல், வியர்வை நிற்பது போன்றவை ஏற்பட்டால் உடனடியாக 108 ஆம்புலன்ஸை அழைக்கவும்.",

    guide_women_title: "பெண்கள் மற்றும் தனிப் பயணிகள் பாதுகாப்பு",
    guide_women_sub: "அனைத்து இந்தியப் பயணப் பாதுகாப்பு நடைமுறைகள்",
    guide_women_1: "<strong>பெண்கள் உதவி எண் 1091 ஐச் சேமிக்கவும்:</strong> செல்போனில் 1091 மற்றும் 112 எண்களை ஸ்பீட் டயலில் பதிவு செய்து லொகேஷன் பகிர்வை இயக்கவும்.",
    guide_women_2: "<strong>முன்பணம் செலுத்தும் டாக்ஸி கவுண்டர்களைப் பயன்படுத்தவும்:</strong> விமான நிலையங்கள் மற்றும் ரயில் நிலையங்களில் அரசு அங்கீகாரம் பெற்ற டாக்ஸிகளைத் தேர்ந்தெடுக்கவும்.",
    guide_women_3: "<strong>பெண்கள் பெட்டிகளைப் பயன்படுத்தவும்:</strong> இந்திய ரயில்வே மற்றும் மெட்ரோ ரயில்களில் பெண்களுக்கான பிரத்யேகப் பெட்டிகள் உள்ளன.",
    guide_women_4: "<strong>விடுதிப் பதிவைச் சரிபார்க்கவும்:</strong> உங்கள் தங்குமிடம் சுற்றுலா அமைச்சகத்தால் முறையாக அங்கீகரிக்கப்பட்டுள்ளதா என்பதை உறுதிப்படுத்தவும்.",

    // Checklist
    checklist_title: "பயணப் புறப்பாடு தயார்நிலை சரிபார்ப்புப் பட்டியல்",
    checklist_desc: "உங்கள் பயணத்தைத் தொடங்குவதற்கு முன் முக்கியமான பாதுகாப்பு மைல்கற்களைச் சரிபார்க்கவும். உங்கள் முன்னேற்றம் தானாகச் சேமிக்கப்படும்.",
    chk_1: "112 மற்றும் 1363 எண்கள் தொலைபேசி முகவரிப் புத்தகத்தில் சேமிக்கப்பட்டுள்ளன",
    chk_2: "ஆஃப்லைன் வரைபடங்கள் பதிவிறக்கம் செய்யப்பட்டு விடுதி முகவரி குறிக்கப்பட்டுள்ளது",
    chk_3: "அடிப்படை முதலுதவிப் பெட்டி மற்றும் ORS பாக்கெட்டுகள் கையில் உள்ளன",
    chk_4: "பயணப் பாதைக்கான தற்போதைய வானிலை எச்சரிக்கைகள் சரிபார்க்கப்பட்டன",
    chk_5: "பயணத் திட்டம் மற்றும் நேரலை இருப்பிடம் குடும்பத்தினருடன் பகிரப்பட்டது",
    chk_reset: "பட்டியலை மீட்டமை",

    // Helplines Directory
    helpline_section_tag: "சரிபார்க்கப்பட்ட அவசர எண்கள்",
    helpline_section_title: "அதிகாரப்பூர்வ இந்திய அவசர உதவி எண்கள்",
    helpline_section_sub: "இந்திய அரசால் இயக்கப்படும் கட்டணமில்லா அவசரத் தொடர்பு உள்கட்டமைப்பு.",
    badge_all_emergency: "அனைத்தும் ஒன்றில் 24x7",
    dir_112_title: "தேசிய அவசரக்கால பதில் அமைப்பு (ERSS)",
    dir_112_desc: "காவல்துறை, தீயணைப்பு, ஆம்புலன்ஸ் மற்றும் பேரிடர் உதவிக்கான ஒற்றை ஒருங்கிணைந்த தேசிய அவசர எண்.",
    badge_tourist_ministry: "சுற்றுலா அமைச்சகம்",
    dir_1363_title: "இன்க்ரெடிபிள் இந்தியா 24x7 பன்மொழி சுற்றுலா உதவி எண்",
    dir_1363_desc: "தமிழ், இந்தி, ஆங்கிலம் மற்றும் வெளிநாட்டு மொழிகள் உட்பட 12 மொழிகளில் கட்டணமில்லா வழிகாட்டுதல்.",
    badge_disaster_hq: "பேரிடர் மீட்பு",
    dir_1078_title: "தேசிய பேரிடர் மேலாண்மை ஆணையம் (NDMA)",
    dir_1078_desc: "வெள்ளம், நிலநடுக்கம், நிலச்சரிவு மற்றும் புயல் மீட்புப் பணிகளை ஒருங்கிணைக்கும் தேசிய கட்டுப்பாட்டு அறை.",
    badge_women_hq: "பெண்கள் பாதுகாப்பு",
    dir_1091_title: "தேசிய பெண்கள் பாதுகாப்பு உதவி எண்",
    dir_1091_desc: "பெண் பயணிகளுக்கான 24 மணிநேர அவசர உதவி, விரைவு ரோந்து மற்றும் பாதுகாப்பு நடவடிக்கை.",

    // About Section
    about_tag: "கட்டமைப்பு & நோக்கம்",
    about_title: "டூரிஸ்ட் சேஃப் இந்தியா பற்றி",
    about_lead: "இமயமலைப் பனிப்பாறைகள், பாலைவனங்கள், மழைக்காடுகள் மற்றும் நீண்ட கடற்கரைகளைக் கொண்ட இந்தியாவின் பல்வேறு புவியியல் சூழலில் சுற்றுலாப் பயணிகளைப் பாதுகாப்பது இன்றியமையாதது.",
    about_p1: "திடீர் வெள்ளம், புயல், வெப்ப அலை அல்லது நிலச்சரிவுகளின் போது சுற்றுலாப் பயணிகளுக்கு ஏற்படும் தகவல் இடைவெளியைப் போக்க இந்த தளம் உருவாக்கப்பட்டது.",
    about_p2: "எந்தவொரு கூடுதல் பிரேம்வொர்க்குகளும் இன்றி எளிய HTML5, CSS3, JavaScript மூலம் உருவாக்கப்பட்டதால் இது தொலைதூரப் பகுதிகளில் 2G/3G நெட்வொர்க்கிலும் மிக வேகமாக இயங்குகிறது.",
    about_box_title: "செயல்படுத்தப்பட்ட முக்கிய அம்சங்கள்",

    // Footer
    footer_tagline: "இந்தியாவின் கண்கவர் சுற்றுலாத் தலங்களில் தெளிவான பாதுகாப்புத் தகவல்களுடன் பயணிகளுக்கு அதிகாரம் அளிக்கிறது.",
    footer_nav_heading: "விரைவு வழிசெலுத்தல்",
    footer_disclaimer_heading: "திட்ட மறுப்புரை",
    footer_disclaimer_text: "ஹேக்கத்தான் செயல்விளக்கத்திற்காக மட்டுமே உருவாக்கப்பட்டது. வானிலை மற்றும் அபாயத் தகவல்கள் மாதிரி உருவகப்படுத்தல் ஆகும். நேரலை அவசரநிலைகளுக்கு 112 ஐ அழைக்கவும்.",
    back_to_top: "மேலே செல்க ↑",

    // SOS Modal
    sos_modal_title: "இந்தியா அனைத்து அவசர உதவி: 112",
    sos_modal_sub: "காவல்துறை • ஆம்புலன்ஸ் • தீயணைப்பு • பேரிடர் மீட்பு",
    sos_modal_warning: "112 எண்ணை அழைக்கும் போது இவற்றைத் தெளிவாகக் கூறத் தயாராக இருங்கள்:",
    sos_step_1: "உங்கள் தற்போதைய துல்லியமான இடம் (நகரம், சாலை எண், அடையாளம் அல்லது விடுதி பெயர்).",
    sos_step_2: "அபாயத்தின் தன்மை: மருத்துவ அவசரம், நிலச்சரிவு, வெள்ளம் அல்லது குற்றச் செயல்பாடு.",
    sos_step_3: "பாதிக்கப்பட்ட நபர்களின் எண்ணிக்கை மற்றும் அவசர உதவி தேவைப்படும் முதியவர்கள்/குழந்தைகள் விவரம்.",
    sos_step_4: "நீங்கள் பேச விரும்பும் மொழி: ஆபரேட்டர்கள் தமிழ், இந்தி, ஆங்கிலம் மற்றும் பிற மொழிகளில் பதிலளிப்பார்கள்.",
    sos_dial_now: "112 ஐ அழைக்கவும் (கட்டணமில்லா)",
    sos_dial_tourist: "சுற்றுலா உதவி எண்: 1363"
  },

  hi: {
    // Banner & Nav
    hackathon_badge: "हैकाथॉन प्रोटोटाइप",
    banner_notice: "केवल सिम्युलेटेड नमूना डेटा: भारत में किसी भी वास्तविक आपात स्थिति के लिए तुरंत <strong>112</strong> डायल करें।",
    view_helplines_btn: "हेल्पलाइन देखें →",
    nav_home: "मुख्य पृष्ठ",
    nav_weather: "मौसम",
    nav_shield: "सुरक्षित यात्रा शील्ड",
    nav_alerts: "आपातकालीन अलर्ट",
    nav_safe_zones: "सुरक्षित क्षेत्र एवं आश्रय स्थल",
    nav_safety: "सुरक्षा गाइड",
    nav_helpline: "हेल्पलाइन",
    nav_about: "हमारे बारे में",

    // Hero
    hero_pill: "राष्ट्रीय पर्यटक सुरक्षा एवं मौसम सतर्कता",
    hero_title: "लाइव सुरक्षा अलर्ट के साथ पूरे भारत में आत्मविश्वास से यात्रा करें",
    hero_subtitle: "भारत के प्रमुख पर्यटन स्थलों के लिए त्वरित मौसम निगरानी, क्षेत्रीय आपदा चेतावनी और सत्यापित सुरक्षा निर्देश।",
    search_placeholder: "भारतीय शहर या हिल स्टेशन खोजें (उदा. मनाली, चेन्नई, जयपुर, गोवा)...",
    search_btn: "सुरक्षा जांचें",
    gps_btn: "शहर पहचानें",
    popular_destinations: "लोकप्रिय स्थल:",
    coordinates_label: "निर्देशांक:",
    search_min_chars: "भारतीय स्थानों को खोजने के लिए कृपया कम से कम 2 अक्षर दर्ज करें।",
    search_loading_geo: "ओपन-मीटियो के माध्यम से भारतीय स्थान खोजे जा रहे हैं...",
    search_no_results: "इसके लिए भारत में कोई स्थान नहीं मिला:",
    search_geo_error: "ओपन-मीटियो जियोकोडिंग सेवा से कनेक्ट करने में असमर्थ। कृपया नेटवर्क कनेक्शन जांचें।",

    // Quick Helplines
    hl_national: "राष्ट्रीय आपातकालीन",
    hl_national_sub: "पुलिस, अग्निशमन और चिकित्सा",
    hl_tourist: "पर्यटक हेल्पलाइन",
    hl_tourist_sub: "24x7 बहुभाषी सरकारी सहायता",
    hl_ndrf: "एनडीआरएफ आपदा अलर्ट",
    hl_ndrf_sub: "आपदा प्रबंधन नियंत्रण",
    hl_medical: "एम्बुलेंस सेवा",
    hl_medical_sub: "आपातकालीन स्वास्थ्य सेवा",

    // States
    loading_title: "क्षेत्रीय मौसम और सुरक्षा डेटा प्राप्त किया जा रहा है...",
    loading_sub: "सिम्युलेटेड मौसम टेलीमेट्री और पर्यटक जोखिम डेटाबेस से कनेक्ट हो रहा है।",
    error_title: "गंतव्य नहीं मिला",
    error_msg: "इस खोज के लिए मौसम और आपातकालीन जानकारी नहीं मिल सकी। कृपया वर्तनी जांचें या अनुशंसित 12 भारतीय पर्यटन शहरों में से चुनें।",
    error_reset: "मनाली पर रीसेट करें (पहाड़ी क्षेत्र)",
    error_coastal: "गोवा पर जाएं (तटीय क्षेत्र)",

    // Weather Dashboard
    last_updated: "निरीक्षण समय:",
    elevation_label: "भूभाग:",
    feels_like_label: "महसूस तापमान:",
    metric_temp_eyebrow: "वायुमंडलीय तापमान",
    card_temp_title: "तापमान",
    temp_range_label: "दिन का दायरा:",
    temp_status_label: "तापीय स्थिति:",

    metric_humidity_eyebrow: "नमी घनत्व",
    card_humidity_title: "आर्द्रता",
    dew_point_label: "ओस बिंदु:",
    comfort_label: "सुविधा सूचकांक:",

    metric_rain_eyebrow: "वर्षा की मात्रा",
    card_rainfall_title: "वर्षा",
    rain_prob_label: "बारिश की संभावना:",
    rain_intensity_label: "तीव्रता:",

    metric_wind_eyebrow: "गति एवं दिशा",
    card_wind_title: "हवा की गति",
    wind_dir_label: "दिशा:",
    wind_gust_label: "झोंके की स्थिति:",

    aqi_label: "वायु गुणवत्ता सूचकांक (AQI):",
    uv_label: "पराबैंगनी सूचकांक (UV):",
    tourist_activity_label: "पर्यटन गतिविधि व्यवहार्यता:",

    // Safe Journey Shield (संदर्भ-आधारित सुरक्षा ब्रीफिंग)
    shield_section_tag: "संदर्भ-आधारित सुरक्षा ब्रीफिंग",
    shield_section_title: "सुरक्षित यात्रा शील्ड (Safe Journey Shield)",
    shield_section_sub: "भारतीय भूभागों में आपकी नियोजित पर्यटन गतिविधि के साथ लाइव मौसम टेलीमेट्री का गतिशील जोखिम मूल्यांकन।",
    feed_status_title: "आधिकारिक चेतावनी फ़ीड कनेक्ट नहीं है",
    feed_status_sub: "प्रोटोटाइप में लाइव एनडीएमए / आईएमडी सीएपी फ़ीड ऑफ़लाइन है। सावधानियां लाइव ओपन-मीटियो टेलीमेट्री से गतिशील रूप से आकलित की गई हैं।",
    feed_check_imd_btn: "लाइव IMD देखें →",
    shield_source_label: "मौसम स्रोत:",
    shield_time_label: "अवलोकन समय:",
    shield_target_label: "सक्रिय गंतव्य:",
    activity_selector_title: "अपनी नियोजित गतिविधि चुनें",
    activity_selector_desc: "अनुकूलित, संदर्भ-जागरूक सुरक्षा मूल्यांकन प्राप्त करने के लिए चुनें कि आप क्या करने जा रहे हैं।",
    act_beach: "समुद्र तट भ्रमण",
    act_trekking: "ट्रेकिंग (पर्वतारोहण)",
    act_sightseeing: "दर्शनीय स्थल (साइटसीइंग)",
    act_road: "सड़क यात्रा",
    act_outdoor: "आउटडोर गतिविधियां",
    factor_thermal_label: "तापीय स्थिति एवं ताप सूचकांक",
    factor_precip_label: "वर्षा एवं अचानक बाढ़ जोखिम",
    factor_wind_label: "हवा की गति एवं वायुमंडलीय स्थिरता",
    factor_terrain_label: "भूभाग एवं क्षेत्रीय भौगोलिक संदर्भ",
    briefing_disclaimer_note: "नोट: मौसम संबंधी मूल्यांकन पूर्ण सुरक्षा की गारंटी नहीं देता है। भारत में पर्यावरणीय परिस्थितियां अचानक बदल सकती हैं।",
    action_eyebrow: "व्यावहारिक कार्य प्रोटोकॉल",
    action_now_title: "अब मुझे क्या करना चाहिए?",
    action_intro_default: "वर्तमान परिस्थितियों में आपकी चुनी गई गतिविधि के लिए तत्काल अनुशंसित सावधानियां:",
    official_guidance_head: "आधिकारिक मार्गदर्शन एवं सत्यापन",
    official_guidance_desc: "भारत सरकार के वैधानिक प्राधिकरणों के साथ सीधे महत्वपूर्ण यात्रा सलाह का मिलान करें:",
    status_favorable: "अनुकूल मौसम की स्थिति",
    status_caution: "मध्यम सावधानी बरतें",
    status_advisory: "मौसम चेतावनी सक्रिय",

    // Alerts Section
    alert_section_tag: "खतरे और चेतावनी फ़ीड",
    alert_section_title: "सक्रिय आपातकालीन एवं सुरक्षा अलर्ट",
    alert_section_sub: "वर्गीकृत क्षेत्रीय अलर्ट, सड़क अवरोध, प्राकृतिक आपदा चेतावनियाँ और जिला यात्रा सलाह।",
    sim_notice_head: "आधिकारिक चेतावनी फ़ीड स्थिति",
    sim_notice_body: "आधिकारिक अलर्ट फ़ीड (IMD / NDMA CAP-CP) कनेक्ट नहीं है। आधिकारिक अलर्ट वर्तमान में अनुपलब्ध हैं। TouristSafe कभी भी सिम्युलेटेड अलर्ट को वास्तविक चेतावनी के रूप में प्रस्तुत नहीं करता है। वास्तविक बुलेटिन के लिए mausam.imd.gov.in देखें या 112 डायल करें।",
    filter_all: "सभी अलर्ट",
    filter_high: "उच्च जोखिम (लाल)",
    filter_moderate: "मध्यम सावधानी (नारंगी)",
    filter_advisory: "सामान्य सलाह (नीला)",
    alarm_demo_btn: "चेतावनी सायरन परीक्षण",
    alarm_stop_btn: "सायरन बंद करें",

    // Official Alerts Unavailable
    official_alerts_unavailable_title: "आधिकारिक अलर्ट उपलब्ध नहीं हैं",
    official_alerts_unavailable_badge: "आधिकारिक फ़ीड कनेक्ट नहीं है",
    official_alerts_unavailable_desc: "कोई सत्यापित आधिकारिक अलर्ट फ़ीड एकीकृत नहीं है (IMD / NDMA फ़ीड के लिए सरकारी प्रमाणीकरण आवश्यक है)। TouristSafe नकली अलर्ट बनाने या सिम्युलेटेड डेटा को वास्तविक चेतावनी के रूप में प्रस्तुत करने से सख्ती से बचता है। वास्तविक चेतावनियों के लिए सीधे mausam.imd.gov.in देखें।",
    official_alerts_source_label: "आधिकारिक स्रोत:",
    official_alerts_source_val: "भारतीय मौसम विज्ञान विभाग (IMD) / NDMA CAP-CP",
    official_alerts_status_label: "फ़ीड स्थिति:",
    official_alerts_status_val: "ऑफ़लाइन / कनेक्ट नहीं है (शून्य मनगढ़ंत चेतावनियां)",
    official_alerts_time_label: "अंतिम जांच:",
    official_alerts_check_imd: "लाइव IMD अलर्ट देखें (mausam.imd.gov.in) →",
    official_alerts_check_ndma: "NDMA आपदा पोर्टल (ndma.gov.in) →",

    // Safe Zones & Facilities Section
    safezones_tag: "नामित आश्रय स्थल एवं आपातकालीन सुविधाएं",
    safezones_title: "निकटवर्ती सुरक्षित क्षेत्र एवं आपातकालीन सेवाएं",
    safezones_sub: "स्थानीय अस्पतालों, पुलिस थानों और आधिकारिक आपदा आश्रयों की सत्यापन स्थिति।",
    safezones_status_badge: "असत्यापित / कोई लाइव जीआईएस फ़ीड नहीं",
    safezones_notice_head: "निकटवर्ती आपातकालीन सुविधाएं एवं आश्रय डेटा अनुपलब्ध",
    safezones_notice_body: "इस स्थान के लिए कोई सत्यापित लाइव जीआईएस या आधिकारिक आश्रय रजिस्ट्री फ़ीड कनेक्ट नहीं है। TouristSafe बिना वैधानिक पुष्टि के मनगढ़ंत सुरक्षित क्षेत्र दिखाने या स्थानों को आधिकारिक आश्रय घोषित करने से सख्ती से बचता है।",

    // Safety Section
    safety_section_tag: "यात्रा सलाह दिशानिर्देश",
    safety_section_title: "भूभाग और आपदा के अनुसार पर्यटक सुरक्षा निर्देश",
    safety_section_sub: "भारत आने वाले घरेलू और अंतर्राष्ट्रीय पर्यटकों के लिए आवश्यक एहतियाती मानक संचालन प्रक्रियाएं।",
    
    guide_monsoon_title: "मानसून और तटीय लहरें",
    guide_monsoon_sub: "समुद्र तट, नदी घाटियाँ और तराई क्षेत्र",
    guide_monsoon_1: "<strong>समुद्र तट पर लाल झंडों का सम्मान करें:</strong> जब लाइफगार्ड लाल झंडे लगाएं तो समुद्र में कभी न जाएं (गोवा, पुरी, चेन्नई आदि)।",
    guide_monsoon_2: "<strong>नदी किनारे कैंपिंग से बचें:</strong> ऊपरी इलाकों में बादल फटने से पहाड़ी नदियाँ (ब्यास, गंगा, तीस्ता) बिना चेतावनी अचानक उफान पर आ जाती हैं।",
    guide_monsoon_3: "<strong>जलभराव वाली सड़कों से बचें:</strong> खुले मैनहोल और जलमग्न पुल गंभीर दुर्घटनाओं का कारण बनते हैं।",
    guide_monsoon_4: "<strong>उच्च ज्वार के समय पर नज़र रखें:</strong> मुंबई या रामेश्वरम में ज्वार के समय चट्टानों पर घूमने से पर्यटक अचानक फंस सकते हैं।",

    guide_mountain_title: "पहाड़ और भूस्खलन प्रोटोकॉल",
    guide_mountain_sub: "हिमाचल, उत्तराखंड, कश्मीर, सिक्किम",
    guide_mountain_1: "<strong>ऊंचाई के अनुसार ढलें:</strong> 2,500 मीटर से अधिक ऊंचाई पर एक्यूट माउंटेन सिकनेस (AMS) से बचने के लिए 24-48 घंटे आराम करें।",
    guide_mountain_2: "<strong>गिरती चट्टानों से सावधान रहें:</strong> बारिश के दौरान या तुरंत बाद खड़ी ढलानों पर भूस्खलन होता है। कभी भी ढलान के नीचे वाहन न रोकें।",
    guide_mountain_3: "<strong>पंजीकृत गाइड ही लें:</strong> केवल भारतीय पर्वतारोहण फाउंडेशन (IMF) या राज्य पर्यटन बोर्ड द्वारा प्रमाणित गाइड के साथ ट्रेक करें।",
    guide_mountain_4: "<strong>पास परमिट की जांच करें:</strong> बर्फबारी और मौसम के आधार पर दर्रे (अटल टनल, ज़ोजिला) गतिशील रूप से बंद किए जाते हैं।",

    guide_heat_title: "लू और रेगिस्तान में बचाव",
    guide_heat_sub: "राजस्थान, दिल्ली एनसीआर, मध्य मैदानी क्षेत्र",
    guide_heat_1: "<strong>इलेक्ट्रोलाइट्स का सेवन करें:</strong> प्यास न लगने पर भी ओआरएस, नारियल पानी या नींबू पानी नियमित रूप से पीते रहें।",
    guide_heat_2: "<strong>दोपहर की धूप से बचें (दोपहर 12 से शाम 4 बजे):</strong> किलों और स्मारकों का भ्रमण सुबह जल्दी या सूर्यास्त के समय करें।",
    guide_heat_3: "<strong>ढीले सूती कपड़े पहनें:</strong> पूरी आस्तीन के कपड़े यूवी किरणों और गर्म हवा (लू) से सुरक्षा प्रदान करते हैं।",
    guide_heat_4: "<strong>हीटस्ट्रोक के लक्षणों को पहचानें:</strong> भ्रम, उल्टी, पसीना बंद होना या तेज बुखार होने पर तुरंत 108 एम्बुलेंस की मदद लें।",

    guide_women_title: "महिला और एकल पर्यटक सुरक्षा",
    guide_women_sub: "अखिल भारतीय यात्रा सुरक्षा प्रोटोकॉल",
    guide_women_1: "<strong>महिला हेल्पलाइन 1091 सहेजें:</strong> 1091 और 112 को स्पीड डायल पर रखें और मैसेजिंग ऐप में लाइव लोकेशन शेयरिंग चालू रखें।",
    guide_women_2: "<strong>प्रीपेड टैक्सियों का उपयोग करें:</strong> हवाई अड्डों और रेलवे स्टेशनों पर सरकारी प्रीपेड टैक्सी बूथ या सत्यापित ऐप कैब चुनें।",
    guide_women_3: "<strong>महिला डिब्बों का उपयोग करें:</strong> भारतीय रेलवे और मेट्रो (दिल्ली, चेन्नई, मुंबई) में महिलाओं के लिए आरक्षित कोच और गार्ड होते हैं।",
    guide_women_4: "<strong>होटल पंजीकरण की जांच करें:</strong> सुनिश्चित करें कि आपका होटल पर्यटन मंत्रालय या प्रतिष्ठित राज्य पर्यटन निगम से मान्यता प्राप्त हो।",

    // Checklist
    checklist_title: "इंटरएक्टिव पर्यटक रवानगी तत्परता चेकलिस्ट",
    checklist_desc: "यात्रा शुरू करने से पहले महत्वपूर्ण सुरक्षा बिंदुओं की जांच करें। आपकी प्रगति स्वचालित रूप से सहेजी जाती है।",
    chk_1: "112 और 1363 नंबर मोबाइल फोन में सहेजे गए हैं",
    chk_2: "ऑफ़लाइन मानचित्र डाउनलोड किए और स्थानीय भाषा में होटल का पता नोट किया",
    chk_3: "ओआरएस और व्यक्तिगत दवाओं के साथ प्राथमिक चिकित्सा किट साथ में है",
    chk_4: "यात्रा मार्ग के लिए वर्तमान मौसम और आपदा अलर्ट की जांच की गई",
    chk_5: "परिवार के सदस्य के साथ यात्रा कार्यक्रम और लाइव स्थान साझा किया गया",
    chk_reset: "चेकलिस्ट रीसेट करें",

    // Helplines Directory
    helpline_section_tag: "सत्यापित आपातकालीन नंबर",
    helpline_section_title: "आधिकारिक अखिल भारतीय आपातकालीन सहायता नंबर",
    helpline_section_sub: "भारत सरकार और पुलिस द्वारा संचालित टोल-फ्री आपातकालीन संपर्क अवसंरचना।",
    badge_all_emergency: "ऑल-इन-वन 24x7",
    dir_112_title: "राष्ट्रीय आपातकालीन प्रतिक्रिया प्रणाली (ERSS)",
    dir_112_desc: "पुलिस, अग्निशमन, एम्बुलेंस और आपदा सहायता के लिए एकल एकीकृत अखिल भारतीय नंबर।",
    badge_tourist_ministry: "पर्यटन मंत्रालय",
    dir_1363_title: "अतुल्य भारत 24x7 बहुभाषी पर्यटक हेल्पलाइन",
    dir_1363_desc: "हिंदी, तमिल, अंग्रेजी और विदेशी भाषाओं सहित 12 भाषाओं में टोल-फ्री मार्गदर्शन।",
    badge_disaster_hq: "आपदा प्रतिक्रिया",
    dir_1078_title: "राष्ट्रीय आपदा प्रबंधन प्राधिकरण (NDMA)",
    dir_1078_desc: "बाढ़, भूकंप, भूस्खलन और चक्रवात नियंत्रण के लिए राष्ट्रीय नियंत्रण कक्ष।",
    badge_women_hq: "महिला सुरक्षा",
    dir_1091_title: "राष्ट्रीय महिला सुरक्षा एवं संकट हेल्पलाइन",
    dir_1091_desc: "सभी भारतीय राज्यों में महिला यात्रियों के लिए 24 घंटे सुरक्षा और त्वरित पुलिस सहायता।",

    // About Section
    about_tag: "वास्तुकला एवं दृष्टिकोण",
    about_title: "टूरिस्ट सेफ इंडिया के बारे में",
    about_lead: "भारत दुनिया के सबसे विविध पर्यटन परिदृश्यों में से एक है—जिसमें हिमालयी ग्लेशियर, रेगिस्तान, घने वर्षावन और हजारों किलोमीटर का समुद्र तट शामिल है।",
    about_p1: "टूरिस्ट सेफ को अचानक बाढ़, चक्रवात, लू या भूस्खलन के दौरान पर्यटकों की सूचना की कमी को दूर करने के लिए एक आपातकालीन डैशबोर्ड के रूप में बनाया गया है।",
    about_p2: "शुद्ध सेमेंटिक HTML5, CSS3 और जावास्क्रिप्ट से निर्मित, यह दूरदराज के क्षेत्रों में 2G/3G नेटवर्क पर भी बिना किसी रुकावट के काम करता है।",
    about_box_title: "परियोजना की मुख्य विशेषताएं",

    // Footer
    footer_tagline: "भारत के पर्यटन स्थलों में स्पष्ट और कार्रवाई योग्य सुरक्षा टेलीमेट्री के साथ यात्रियों को सशक्त बनाना।",
    footer_nav_heading: "त्वरित नेविगेशन",
    footer_disclaimer_heading: "प्रोटोटाइप अस्वीकरण",
    footer_disclaimer_text: "विशेष रूप से हैकाथॉन प्रदर्शन के लिए विकसित। मौसम और खतरे का डेटा सिम्युलेटेड है। वास्तविक आपात स्थिति के लिए हमेशा 112 डायल करें।",
    back_to_top: "ऊपर जाएं ↑",

    // SOS Modal
    sos_modal_title: "भारत आपातकालीन सेवा: 112",
    sos_modal_sub: "पुलिस • एम्बुलेंस • अग्निशमन • आपदा बचाव",
    sos_modal_warning: "112 पर कॉल करते समय स्पष्ट रूप से बताने के लिए तैयार रहें:",
    sos_step_1: "आपका सटीक वर्तमान स्थान (शहर, सड़क/एनएच, लैंडमार्क या होटल का नाम)।",
    sos_step_2: "खतरे की प्रकृति: चिकित्सा आपातकाल, भूस्खलन, बाढ़ या अपराध।",
    sos_step_3: "प्रभावित व्यक्तियों की संख्या और तत्काल सहायता की आवश्यकता वाले बच्चे/बुजुर्ग।",
    sos_step_4: "आपकी पसंदीदा भाषा: ऑपरेटर हिंदी, अंग्रेजी और क्षेत्रीय भाषाओं में सहायता प्रदान करते हैं।",
    sos_dial_now: "112 पर तुरंत कॉल करें (टोल फ्री)",
    sos_dial_tourist: "पर्यटक हेल्पलाइन: 1363"
  }
};

// ============================================================================
// 2. Representative Indian Tourist Destinations Database (12 Circuits)
// ============================================================================
const citiesData = [
  {
    id: "manali",
    name: { en: "Manali", ta: "மணாலி", hi: "मनाली" },
    state: { en: "Himachal Pradesh, Northern Himalayas", ta: "இமாச்சலப் பிரதேசம், வடக்கு இமயமலை", hi: "हिमाचल प्रदेश, उत्तरी हिमालय" },
    terrain: { en: "High Altitude Hill Station (2,050m)", ta: "உயர்மலை வாசஸ்தலம் (2,050 மீ)", hi: "उच्च पर्वतीय हिल स्टेशन (2,050 मी)" },
    weather: {
      temp: 14,
      feelsLike: 12,
      tempMin: 11,
      tempMax: 16,
      condition: { en: "Heavy Rain & Mountain Fog", ta: "கனமழை & பனிமூட்டம்", hi: "भारी बारिश और पहाड़ी कोहरा" },
      conditionType: "rain",
      humidity: 92,
      dewPoint: 13,
      humidityStatus: { en: "Saturated (High Fog)", ta: "அதி ஈரப்பதம் (அடர்ந்த பனி)", hi: "अति आर्द्र (घना कोहरा)" },
      rainfall: 74,
      rainProbability: 95,
      rainIntensity: { en: "Heavy Downpour", ta: "கனமழைப் பொழிவு", hi: "मूसलाधार बारिश" },
      windSpeed: 38,
      windDirection: { en: "North-North-East (NNE)", ta: "வடக்கு-வடகிழக்கு", hi: "उत्तर-उत्तर-पूर्व (NNE)" },
      windGust: { en: "Strong Mountain Gusts", ta: "கடும் மலைக் காற்று", hi: "तेज पहाड़ी हवा के झोंके" },
      aqi: 32,
      aqiText: { en: "32 (Good & Fresh Mountain Air)", ta: "32 (சிறந்த மலைக் காற்று)", hi: "32 (उत्कृष्ट एवं ताजी हवा)" },
      uv: 2,
      uvText: { en: "2 of 11 (Low Radiation)", ta: "2/11 (குறைந்த கதிர்வீச்சு)", hi: "2/11 (निम्न विकिरण)" },
      activityFeasibility: { en: "Trekking Suspended; Caution Advised", ta: "மலையேற்றம் நிறுத்திவைப்பு; எச்சரிக்கை", hi: "ट्रेकिंग स्थगित; सावधानी आवश्यक" }
    },
    hazardLevel: "danger", // 'danger' | 'warning' | 'safe'
    hazardBadge: { en: "CRITICAL RISK ADVISORY", ta: "அதி தீவிர எச்சரிக்கை", hi: "गंभीर जोखिम चेतावनी" },
    hazardSummary: {
      en: "Monsoon cloudburst simulation: High risk of landslides along NH-3 and Beas river basin. Active caution recommended for tourists.",
      ta: "பருவமழை மேகவெடிப்பு மாதிரி: NH-3 சாலை மற்றும் பியாஸ் நதிக்கரையில் நிலச்சரிவு அபாயம் அதிகம்.",
      hi: "मानसून बादल फटने का सिमुलेशन: एनएच-3 और ब्यास नदी बेसिन में भूस्खलन का उच्च जोखिम। पर्यटकों को सावधानी बरतने की सलाह।"
    },
    alerts: [
      {
        id: "m-01",
        severity: "high",
        title: { en: "Flash Flood & Cloudburst Watch along Beas Basin", ta: "பியாஸ் நதிப்படுகையில் திடீர் வெள்ள அபாயம்", hi: "ब्यास बेसिन में फ्लैश फ्लड एवं बादल फटने की चेतावनी" },
        zone: { en: "Kullu-Manali Valley & Old Manali Bridge", ta: "குலு-மணாலி பள்ளத்தாக்கு & பழைய பாலம்", hi: "कुल्लू-मनाली घाटी एवं पुराना मनाली पुल" },
        time: { en: "Issued 35 mins ago • Valid next 24 hrs", ta: "35 நிமிடங்களுக்கு முன் • 24 மணிநேரம் செல்லுபடியாகும்", hi: "35 मिनट पहले जारी • अगले 24 घंटे वैध" },
        source: { en: "State Disaster Authority & IMD Shimla (Simulated)", ta: "மாநில பேரிடர் ஆணையம் & வானிலை மையம்", hi: "राज्य आपदा प्राधिकरण एवं आईएमडी शिमला (सिम्युलेटेड)" },
        desc: {
          en: "Simulated heavy precipitation exceeding 70mm within 3 hours. River discharge has increased sharply. Riverside promenades and camping sites are temporarily off-limits.",
          ta: "3 மணிநேரத்தில் 70 மி.மீ-க்கும் அதிகமான மழைப்பொழிவு. நதியில் நீர்வரத்து அதிகரித்துள்ளது. ஆற்றங்கரைப் பகுதிகள் மூடப்பட்டுள்ளன.",
          hi: "3 घंटे में 70 मिमी से अधिक की भारी वर्षा। नदी में पानी का बहाव तेजी से बढ़ा है। नदी किनारे और कैंपिंग साइट्स अस्थायी रूप से बंद हैं।"
        },
        precautions: [
          { en: "Do not approach river banks or venture onto suspension footbridges.", ta: "ஆற்றங்கரை அல்லது தொங்கு பாலங்களுக்குச் செல்ல வேண்டாம்.", hi: "नदी के किनारों या संकरे पुलों पर जाने से बचें।" },
          { en: "Stay parked at designated high-ground hotel parking zones.", ta: "வாகனங்களை உயரமான பாதுகாப்பான இடங்களில் நிறுத்துங்கள்.", hi: "होटल के सुरक्षित और ऊंचे पार्किंग क्षेत्रों में ही रुकें।" },
          { en: "Avoid Solang Valley road travel until road clearance squads report safe passage.", ta: "சாலை சரிசெய்யும் வரை சோலாங் பள்ளத்தாக்கு பயணத்தைத் தவிர்க்கவும்.", hi: "सड़क साफ होने तक सोलांग घाटी मार्ग पर यात्रा न करें।" }
        ]
      },
      {
        id: "m-02",
        severity: "moderate",
        title: { en: "Active Landslide Caution: NH-3 Mandi-Pandoh Stretch", ta: "நிலச்சரிவு எச்சரிக்கை: NH-3 மண்டி-பண்டோ பகுதி", hi: "सक्रिय भूस्खलन चेतावनी: एनएच-3 मंडी-पंडोह मार्ग" },
        zone: { en: "National Highway 3 (Km 142 to 158)", ta: "தேசிய நெடுஞ்சாலை 3 (கி.மீ 142 - 158)", hi: "राष्ट्रीय राजमार्ग 3 (किमी 142 से 158)" },
        time: { en: "Issued 2 hours ago • Ongoing", ta: "2 மணி நேரத்திற்கு முன் • தொடர்கிறது", hi: "2 घंटे पहले जारी • जारी है" },
        source: { en: "Himachal Traffic Police Telemetry (Simulated)", ta: "போக்குவரத்து காவல்துறை", hi: "हिमाचल ट्रैफिक पुलिस टेलीमेट्री (सिम्युलेटेड)" },
        desc: {
          en: "Intermittent rockfall reported near Pandoh Dam stretch. Single-lane convoy movement managed by highway police.",
          ta: "பண்டோ அணை அருகே பாறைகள் உருளும் அபாயம். ஒருவழிப் பாதையில் வாகனங்கள் இயக்கப்படுகின்றன.",
          hi: "पंडोह बांध के पास चट्टानें गिरने की सूचना। पुलिस द्वारा एक तरफा यातायात नियंत्रित किया जा रहा है।"
        },
        precautions: [
          { en: "Drive with hazard lights on and maintain a minimum 30-meter vehicle gap.", ta: "ஹசார்ட் விளக்குகளை ஒளிரச் செய்து 30 மீட்டர் இடைவெளி விட்டு ஓட்டவும்.", hi: "हैज़र्ड लाइट जलाकर चलें और 30 मीटर की दूरी बनाए रखें।" },
          { en: "Do not overtake stranded heavy vehicles on narrow mountain curves.", ta: "குறுகிய வளைவுகளில் பெரிய வாகனங்களை முந்த முயற்சிக்க வேண்டாம்.", hi: "अंधे मोड़ों पर भारी वाहनों को ओवरटेक करने की कोशिश न करें।" }
        ]
      }
    ]
  },
  {
    id: "goa",
    name: { en: "Goa (Panaji & Coastal)", ta: "கோவா (பனாஜி & கடற்கரை)", hi: "गोवा (पणजी एवं तटीय)" },
    state: { en: "Goa, Konkan Coast", ta: "கோவா, கொங்கன் கடற்கரை", hi: "गोवा, कोंकण तट" },
    terrain: { en: "Arabian Sea Coastal Belt (Sea Level)", ta: "அரபிக்கடல் கடற்கரை சமவெளி", hi: "अरब सागर तटीय पट्टी (समुद्र तल)" },
    weather: {
      temp: 29,
      feelsLike: 34,
      tempMin: 26,
      tempMax: 31,
      condition: { en: "Squally Winds & High Sea Swells", ta: "சூறாவளிக் காற்று & கடல் சீற்றம்", hi: "तूफानी हवाएं और समुद्र में ऊंची लहरें" },
      conditionType: "storm",
      humidity: 86,
      dewPoint: 25,
      humidityStatus: { en: "Very Humid & Muggy", ta: "அதிக வியர்வை & ஈரப்பதம்", hi: "अत्यधिक उमस भरा" },
      rainfall: 42,
      rainProbability: 80,
      rainIntensity: { en: "Periodic Tropical Showers", ta: "மிதமான வெப்பமண்டல மழை", hi: "रुक-रुक कर तेज बौछारें" },
      windSpeed: 46,
      windDirection: { en: "South-West (SW)", ta: "தென்மேற்கு", hi: "दक्षिण-पश्चिम (SW)" },
      windGust: { en: "Gale Gusts up to 60 km/h", ta: "மணிக்கு 60 கி.மீ வேகத்தில் காற்று", hi: "60 किमी/घंटा तक के तेज झोंके" },
      aqi: 24,
      aqiText: { en: "24 (Pristine Coastal Air)", ta: "24 (தூய்மையான கடல் காற்று)", hi: "24 (स्वच्छ तटीय वायु)" },
      uv: 5,
      uvText: { en: "5 of 11 (Moderate Exposure)", ta: "5/11 (மிதமான கதிர்வீச்சு)", hi: "5/11 (मध्यम जोखिम)" },
      activityFeasibility: { en: "Water Sports Suspended; Red Flags Active", ta: "நீர் விளையாட்டு நிறுத்தம்; சிவப்புக் கொடி", hi: "वॉटर स्पोर्ट्स बंद; लाल झंडे सक्रिय" }
    },
    hazardLevel: "warning",
    hazardBadge: { en: "COASTAL SWELL WARNING", ta: "கடலோர எச்சரிக்கை", hi: "तटीय लहर चेतावनी" },
    hazardSummary: {
      en: "Rough Arabian Sea conditions: Wave heights of 3.2m to 4.1m predicted. Strict swimming prohibition across North and South Goa beaches.",
      ta: "அரபிக்கடலில் 4 மீட்டர் வரை உயரமான அலைகள். வடக்கு மற்றும் தெற்கு கோவா கடற்கரைகளில் குளிக்கத் தடை.",
      hi: "अरब सागर में उथल-पुथल: 3.2 से 4.1 मीटर ऊंची लहरों का अनुमान। सभी समुद्र तटों पर तैराकी पर सख्त प्रतिबंध।"
    },
    alerts: [
      {
        id: "g-01",
        severity: "moderate",
        title: { en: "Rough Sea & Rip Current Warning (Baga, Calangute, Palolem)", ta: "கடல் சீற்றம் & இழுவிசை அலை எச்சரிக்கை", hi: "समुद्र में तेज करंट की चेतावनी (बागा, कलंगूट)" },
        zone: { en: "All North & South Goa Coastal Strips", ta: "வடக்கு மற்றும் தெற்கு கோவா கடற்கரைகள்", hi: "सभी उत्तर और दक्षिण गोवा तट" },
        time: { en: "Issued 1 hour ago • Valid 48 hrs", ta: "1 மணி நேரத்திற்கு முன் • 48 மணிநேரம்", hi: "1 घंटा पहले जारी • 48 घंटे वैध" },
        source: { en: "INCOIS Ocean Information & Drishti Lifesaving (Simulated)", ta: "கடல்சார் தகவல் மையம் & கடலோரக் காவல்படை", hi: "आईएनसीओआईएस एवं दृष्टि लाइफगार्ड्स (सिम्युलेटेड)" },
        desc: {
          en: "Simulated high tidal surges and dangerous undercurrents. Lifeguards have hoisted red safety flags across all major tourist beaches.",
          ta: "அபாயகரமான கீழ்நோக்கிய நீரோட்டங்கள். முக்கிய சுற்றுலாக் கடற்கரைகளில் சிவப்புக் கொடிகள் ஏற்றப்பட்டுள்ளன.",
          hi: "खतरनाक अंडरकरंट और ऊंची लहरें। लाइफगार्ड्स ने सभी प्रमुख समुद्र तटों पर लाल झंडे फहराए हैं।"
        },
        precautions: [
          { en: "Strictly avoid wading into the water, even knee-deep.", ta: "முழங்கால் அளவு நீரிலும் இறங்க வேண்டாம்.", hi: "घुटने तक गहरे पानी में भी उतरने से बचें।" },
          { en: "Heed all lifeguard whistle warnings immediately.", ta: "உயிர்காப்பாளர்களின் விசிலடி எச்சரிக்கையை மதிக்கவும்.", hi: "लाइफगार्ड्स की सीटी और निर्देशों का तुरंत पालन करें।" },
          { en: "Keep small children at a safe distance from breaking swash zones.", ta: "அலை கரையைத் தொடும் பகுதிக்கு குழந்தைகளை விடாதீர்கள்.", hi: "बच्चों को तेज लहरों के पानी से दूर रखें।" }
        ]
      }
    ]
  },
  {
    id: "chennai",
    name: { en: "Chennai", ta: "சென்னை", hi: "चेन्नई" },
    state: { en: "Tamil Nadu, Coromandel Coast", ta: "தமிழ்நாடு, சோழமண்டலக் கடற்கரை", hi: "तमिलनाडु, कोरोमंडल तट" },
    terrain: { en: "Coastal Metropole & Bay of Bengal Port", ta: "கடலோர பெருநகரம் & துறைமுகம்", hi: "तटीय महानगर एवं बंदरगाह" },
    weather: {
      temp: 31,
      feelsLike: 38,
      tempMin: 27,
      tempMax: 33,
      condition: { en: "Overcast with Isolated Thunderstorms", ta: "இடியுடன் கூடிய மழை மேகங்கள்", hi: "बादल छाए और गरज के साथ बौछारें" },
      conditionType: "storm",
      humidity: 84,
      dewPoint: 27,
      humidityStatus: { en: "High Tropical Moisture", ta: "அதிக வெப்பமண்டல ஈரப்பதம்", hi: "उच्च उष्णकटिबंधीय नमी" },
      rainfall: 18,
      rainProbability: 70,
      rainIntensity: { en: "Short Intense Showers", ta: "குறுகிய தீவிர மழைப்பொழிவு", hi: "तेज लेकिन संक्षिप्त बौछारें" },
      windSpeed: 24,
      windDirection: { en: "East-North-East (ENE)", ta: "கிழக்கு-வடகிழக்கு", hi: "पूर्व-उत्तर-पूर्व (ENE)" },
      windGust: { en: "Breezy Bay Winds", ta: "கடலோரக் காற்று", hi: "तटीय हवाएं" },
      aqi: 58,
      aqiText: { en: "58 (Moderate Urban Quality)", ta: "58 (மிதமான நகர்ப்புற தரம்)", hi: "58 (मध्यम गुणवत्ता)" },
      uv: 7,
      uvText: { en: "7 of 11 (High Sun Index)", ta: "7/11 (அதிக சூரியக் கதிர்வீச்சு)", hi: "7/11 (उच्च धूप सूचकांक)" },
      activityFeasibility: { en: "Sightseeing Feasible; Carry Umbrella", ta: "சுற்றுலா சாத்தியம்; குடை தேவை", hi: "पर्यटन संभव; छाता साथ रखें" }
    },
    hazardLevel: "safe",
    hazardBadge: { en: "NORMAL / REGIONAL ADVISORY", ta: "பாதுகாப்பானது / வழக்கமான நிலை", hi: "सामान्य / क्षेत्रीय सलाह" },
    hazardSummary: {
      en: "Normal monsoon patterns over Marina and Mahabalipuram circuit. No severe cyclonic threat active in simulated telemetry.",
      ta: "மெரினா மற்றும் மகாபலிபுரம் பகுதியில் இயல்பான வானிலை. தீவிர புயல் அச்சுறுத்தல் எதுவும் இல்லை.",
      hi: "मरीना और महाबलीपुरम मार्ग पर सामान्य मौसम। कोई बड़ा चक्रवाती खतरा नहीं।"
    },
    alerts: [
      {
        id: "c-01",
        severity: "advisory",
        title: { en: "Marina Beach High Tide Caution & Waterlogging Advisory", ta: "மெரினா கடற்கரை உயர் அலை & நீர் தேங்குதல் ஆலோசனை", hi: "मरीना बीच उच्च ज्वार एवं जलभराव सलाह" },
        zone: { en: "Marina Promenade, Santhome & ECR Corridor", ta: "மெரினா, சாந்தோம் & கிழக்கு கடற்கரைச் சாலை", hi: "मरीना प्रोमेनेड और ईसीआर कॉरिडोर" },
        time: { en: "Issued 3 hours ago • Valid 12 hrs", ta: "3 மணி நேரத்திற்கு முன் • 12 மணிநேரம்", hi: "3 घंटे पहले जारी • 12 घंटे वैध" },
        source: { en: "Greater Chennai Corporation & IMD Chennai (Simulated)", ta: "சென்னை மாநகராட்சி & வானிலை மையம்", hi: "ग्रेटर चेन्नई कॉर्पोरेशन एवं आईएमडी (सिम्युलेटेड)" },
        desc: {
          en: "Simulated evening high tide coupled with local drainage runoff. Traffic along lower Marina service lanes may experience slow moving traffic.",
          ta: "மாலையில் உயர் அலை மற்றும் மழை காரணமாக மெரினா சர்வீஸ் சாலையில் போக்குவரத்து மெதுவாக இருக்கும்.",
          hi: "शाम के उच्च ज्वार और बारिश के कारण सर्विस रोड पर धीमी गति से यातायात की संभावना।"
        },
        precautions: [
          { en: "Prefer Chennai Metro rail transit over surface roads during heavy evening showers.", ta: "மழை நேரத்தில் மெட்ரோ ரயிலைப் பயன்படுத்துவது சிறந்தது.", hi: "शाम की बारिश में सड़क के बजाय चेन्नई मेट्रो का उपयोग करें।" },
          { en: "Enjoy beach promenades from elevated footpaths without walking near low surf breakers.", ta: "அலைகள் அருகில் செல்லாமல் நடைபாதையில் பாதுகாப்பாக நடக்கவும்.", hi: "लहरों के एकदम पास जाने से बचें और वॉकवे पर ही रहें।" }
        ]
      }
    ]
  },
  {
    id: "jaipur",
    name: { en: "Jaipur", ta: "ஜெய்ப்பூர்", hi: "जयपुर" },
    state: { en: "Rajasthan, Aravalli Desert Circuit", ta: "ராஜஸ்தான், ஆரவல்லி பாலைவனப் பகுதி", hi: "राजस्थान, अरावली मरुस्थलीय सर्किट" },
    terrain: { en: "Semi-Arid Heritage Plateau (430m)", ta: "பாலைவன பாரம்பரிய பீடபூமி (430 மீ)", hi: "अर्ध-शुष्क विरासत पठार (430 मी)" },
    weather: {
      temp: 42,
      feelsLike: 46,
      tempMin: 31,
      tempMax: 44,
      condition: { en: "Severe Heatwave & Blazing Sun", ta: "கடும் வெப்ப அலை & சுட்டெரிக்கும் வெயில்", hi: "भीषण लू और चिलचिलाती धूप" },
      conditionType: "sun",
      humidity: 22,
      dewPoint: 14,
      humidityStatus: { en: "Very Dry & Arid", ta: "மிகவும் வறண்ட நிலை", hi: "अत्यधिक शुष्क" },
      rainfall: 0,
      rainProbability: 0,
      rainIntensity: { en: "Zero Precipitation", ta: "மழை இல்லை", hi: "वर्षा की कोई संभावना नहीं" },
      windSpeed: 28,
      windDirection: { en: "West-North-West (WNW)", ta: "மேற்கு-வடமேற்கு", hi: "पश्चिम-उत्तर-पश्चिम" },
      windGust: { en: "Hot Dry 'Loo' Winds", ta: "சுடும் 'லூ' காற்று", hi: "गर्म हवाएं (लू)" },
      aqi: 168,
      aqiText: { en: "168 (Unhealthy Dust Concentration)", ta: "168 (தூசு அதிகம்)", hi: "168 (धूल भरी हवा, अस्वस्थ)" },
      uv: 11,
      uvText: { en: "11 of 11 (Extreme UV Alert)", ta: "11/11 (அதி தீவிர புற ஊதாக் கதிர்)", hi: "11/11 (अत्यधिक तीव्र यूवी)" },
      activityFeasibility: { en: "Afternoon Outdoor Visits Dangerous", ta: "மதிய வேளையில் வெளியே செல்ல வேண்டாம்", hi: "दोपहर में बाहर निकलना हानिकारक" }
    },
    hazardLevel: "danger",
    hazardBadge: { en: "SEVERE HEATWAVE ADVISORY", ta: "கடும் வெப்ப அலை எச்சரிக்கை", hi: "भीषण लू चेतावनी" },
    hazardSummary: {
      en: "Peak desert heat simulation: Ambient temperature touching 44°C with dry westerly winds. Direct sun exposure between 12 PM and 4 PM poses acute heatstroke danger.",
      ta: "பாலைவன வெப்பம் 44°C வரை உயர்வு. மதியம் 12 முதல் மாலை 4 மணி வரை வெளியே சென்றால் வெப்ப பக்கவாதம் ஏற்படும் அபாயம்.",
      hi: "रेगिस्तानी गर्मी का सिमुलेशन: तापमान 44 डिग्री सेल्सियस तक पहुंचा। दोपहर 12 से 4 बजे तक धूप में रहना खतरनाक।"
    },
    alerts: [
      {
        id: "j-01",
        severity: "high",
        title: { en: "Red Alert: Severe Heatstroke Hazard at Open Forts", ta: "சிவப்பு எச்சரிக்கை: கோட்டைகளில் கடும் வெப்ப ஆபத்து", hi: "रेड अलर्ट: खुले किलों में भीषण हीटस्ट्रोक का खतरा" },
        zone: { en: "Amber Fort, Nahargarh, Jaigarh & City Palace", ta: "ஆம்பர் கோட்டை, நஹர்கர், ஜெய்கர்", hi: "आमेर किला, नाहरगढ़, जयगढ़" },
        time: { en: "Issued today at 09:00 AM • Active until 06:00 PM", ta: "காலை 9 மணிக்கு • மாலை 6 மணி வரை", hi: "आज सुबह 9 बजे जारी • शाम 6 बजे तक सक्रिय" },
        source: { en: "Rajasthan State Disaster Management & IMD Jaipur (Simulated)", ta: "ராஜஸ்தான் பேரிடர் மேலாண்மை ஆணையம்", hi: "राजस्थान आपदा प्रबंधन एवं आईएमडी जयपुर (सिम्युलेटेड)" },
        desc: {
          en: "Simulated stone rampart temperatures at Amber and Nahargarh exceed 52°C. Multiple cases of tourist dehydration and dizziness reported during mid-day treks.",
          ta: "ஆம்பர் கோட்டை கல் சுவர்கள் 52°C வெப்பத்தில் உள்ளன. மதிய நேரத்தில் சுற்றுலாப் பயணிகள் நீர்ச்சத்து குறைவால் மயக்கமடையும் வாய்ப்பு அதிகம்.",
          hi: "आमेर किले के पत्थरों का तापमान 52 डिग्री तक पहुंच गया है। दोपहर में पर्यटकों में डिहाइड्रेशन और चक्कर आने का खतरा।"
        },
        precautions: [
          { en: "Schedule fort exploration exclusively between 06:30 AM – 10:00 AM.", ta: "காலை 6:30 முதல் 10:00 மணிக்குள் மட்டும் கோட்டைகளைப் பார்க்கவும்.", hi: "किलों का भ्रमण केवल सुबह 6:30 से 10:00 बजे के बीच ही करें।" },
          { en: "Carry at least 2 liters of water with electrolyte or ORS solution per person.", ta: "தலா 2 லிட்டர் ORS அல்லது எலெக்ட்ரோலைட் தண்ணீர் எடுத்துச் செல்லவும்.", hi: "प्रति व्यक्ति कम से कम 2 लीटर ओआरएस या इलेक्ट्रोलाइट पानी साथ रखें।" },
          { en: "Wear wide-brimmed sun hats and UV protective sunglasses.", ta: "தொப்பி மற்றும் கூலிங் கிளாஸ் அணியவும்.", hi: "धूप का चश्मा और सिर ढकने के लिए टोपी का उपयोग करें।" }
        ]
      }
    ]
  },
  {
    id: "munnar",
    name: { en: "Munnar", ta: "முன்னார்", hi: "मुन्नार" },
    state: { en: "Kerala, Western Ghats", ta: "கேரளா, மேற்குத் தொடர்ச்சி மலை", hi: "केरल, पश्चिमी घाट" },
    terrain: { en: "Lush Tea Highlands & Rainforest (1,600m)", ta: "தேயிலைத் தோட்டங்கள் & மழைக்காடுகள் (1,600 மீ)", hi: "चाय के बागान और वर्षावन (1,600 मी)" },
    weather: {
      temp: 18,
      feelsLike: 17,
      tempMin: 14,
      tempMax: 20,
      condition: { en: "Dense Mist & Continuous Drizzle", ta: "அடர்ந்த பனிமூட்டம் & தூறல் மழை", hi: "घना कोहरा और लगातार रिमझिम" },
      conditionType: "rain",
      humidity: 95,
      dewPoint: 17,
      humidityStatus: { en: "High Rainforest Saturation", ta: "அடர்ந்த மழைக்காட்டு ஈரப்பதம்", hi: "अत्यधिक नमी" },
      rainfall: 56,
      rainProbability: 90,
      rainIntensity: { en: "Continuous Monsoon Rain", ta: "தொடர் மழைப்பொழிவு", hi: "निरंतर मानसूनी बारिश" },
      windSpeed: 22,
      windDirection: { en: "South-West (SW)", ta: "தென்மேற்கு", hi: "दक्षिण-पश्चिम" },
      windGust: { en: "Moderate Valley Winds", ta: "மிதமான பள்ளத்தாக்குக் காற்று", hi: "मध्यम घाटी हवाएं" },
      aqi: 18,
      aqiText: { en: "18 (Pure Evergreen Air)", ta: "18 (மிகத் தூய்மையான காற்று)", hi: "18 (अत्यंत शुद्ध हवा)" },
      uv: 3,
      uvText: { en: "3 of 11 (Gentle Radiation)", ta: "3/11 (குறைந்த கதிர்வீச்சு)", hi: "3/11 (धीमी धूप)" },
      activityFeasibility: { en: "Road Caution: Low Visibility on Gap Road", ta: "சாலை எச்சரிக்கை: குறைந்த பார்வைத் திறன்", hi: "सड़क सावधानी: कम दृश्यता" }
    },
    hazardLevel: "warning",
    hazardBadge: { en: "GHAT ROAD FOG & SLIP RISK", ta: "மலைப்பாதை பனிமூட்ட எச்சரிக்கை", hi: "घाट रोड कोहरा एवं फिसलन अलर्ट" },
    hazardSummary: {
      en: "High humidity and continuous precipitation creating heavy mist on Kochi-Dhanushkodi NH-85. Visibility reduced below 15 meters on hairpin turns.",
      ta: "கொச்சி-தனுஷ்கோடி NH-85 மலைப்பாதையில் கடுமையான பனிமூட்டம். பார்வைத் திறன் 15 மீட்டருக்கும் குறைவாகக் குறைந்துள்ளது.",
      hi: "कोच्चि-धनुषकोडी एनएच-85 पर घना कोहरा। घुमावदार मोड़ों पर दृश्यता 15 मीटर से भी कम।"
    },
    alerts: [
      {
        id: "mu-01",
        severity: "moderate",
        title: { en: "Zero Visibility & Wet Surface Warning: Munnar Gap Road", ta: "பார்வைக்குறைவு & வழுக்கும் சாலை எச்சரிக்கை", hi: "शून्य दृश्यता एवं फिसलन भरी सड़क चेतावनी: गैप रोड" },
        zone: { en: "Munnar-Devikulam Gap Road & Mattupetty Route", ta: "முன்னார்-தேவிகுளம் & மாட்டுப்பட்டி சாலை", hi: "मुन्नार-देवीकुलम एवं मट्टुपेट्टी मार्ग" },
        time: { en: "Issued 45 mins ago • Valid 18 hrs", ta: "45 நிமிடங்களுக்கு முன் • 18 மணிநேரம்", hi: "45 मिनट पहले जारी • 18 घंटे वैध" },
        source: { en: "Idukki District Collectorate & Kerala Tourism Police (Simulated)", ta: "இடுக்கி மாவட்ட நிர்வாகம் & சுற்றுலா காவல்துறை", hi: "इडुक्की जिला प्रशासन एवं केरल पुलिस (सिम्युलेटेड)" },
        desc: {
          en: "Simulated rapid cloud inversion causing fog blankets along mountain cuttings. Heavy tourist buses moving at restricted crawl speeds.",
          ta: "மலைப்பாதையில் மேகங்கள் இறங்கியதால் பார்வை மறைப்பு. பேருந்துகள் மிக மெதுவாக இயக்கப்படுகின்றன.",
          hi: "पहाड़ी कटानों पर बादलों के उतरने से कोहरा छाया हुआ है। वाहन धीमी गति से रेंग रहे हैं।"
        },
        precautions: [
          { en: "Turn on vehicle yellow fog lamps and drive in low gear.", ta: "மஞ்சள் பனிவிளக்குகளை எரியவிட்டு குறைந்த கியரில் இயக்கவும்.", hi: "पीली फॉग लाइट जलाएं और गाड़ी को लो गियर में चलाएं।" },
          { en: "Do not stop on narrow cliff edges to take selfies.", ta: "செல்ஃபி எடுக்க குறுகிய பாறை ஓரங்களில் வாகனத்தை நிறுத்தாதீர்கள்.", hi: "सेल्फी लेने के लिए संकरी खाइयों के पास वाहन न रोकें।" }
        ]
      }
    ]
  },
  {
    id: "shimla",
    name: { en: "Shimla", ta: "சிம்லா", hi: "शिमला" },
    state: { en: "Himachal Pradesh, Shivalik Ridge", ta: "இமாச்சலப் பிரதேசம், சிவாலிக் மலை", hi: "हिमाचल प्रदेश, शिवालिक पर्वतमाला" },
    terrain: { en: "Colonial Himalayan Ridge (2,276m)", ta: "இமயமலை முகடு (2,276 மீ)", hi: "हिमालयन रिज (2,276 मी)" },
    weather: {
      temp: 11,
      feelsLike: 9,
      tempMin: 8,
      tempMax: 14,
      condition: { en: "Cold Breeze & Overcast Sky", ta: "குளிர்ந்த காற்று & மேகமூட்டம்", hi: "ठंडी हवा और बादल" },
      conditionType: "cloud",
      humidity: 78,
      dewPoint: 8,
      humidityStatus: { en: "Crisp Mountain Moisture", ta: "குளிர்ந்த ஈரப்பதம்", hi: "ठंडी पहाड़ी नमी" },
      rainfall: 12,
      rainProbability: 55,
      rainIntensity: { en: "Intermittent Drizzle", ta: "விட்டு விட்டு தூறல்", hi: "रुक-रुक कर बूंदाबांदी" },
      windSpeed: 25,
      windDirection: { en: "North-West (NW)", ta: "வடமேற்கு", hi: "उत्तर-पश्चिम" },
      windGust: { en: "Chilly Ridge Gusts", ta: "குளிர்ந்த மலைக்காற்று", hi: "ठंडी पहाड़ी हवाएं" },
      aqi: 28,
      aqiText: { en: "28 (Excellent Clean Air)", ta: "28 (மிகச் சிறந்த தூய காற்று)", hi: "28 (उत्कृष्ट स्वच्छ वायु)" },
      uv: 4,
      uvText: { en: "4 of 11 (Moderate Exposure)", ta: "4/11 (மிதமான கதிர்வீச்சு)", hi: "4/11 (मध्यम जोखिम)" },
      activityFeasibility: { en: "Mall Road & Ridge Walking Pleasant", ta: "மால் ரோடு நடைப்பயணம் சிறந்தது", hi: "माल रोड और रिज पर टहलने के लिए अनुकूल" }
    },
    hazardLevel: "safe",
    hazardBadge: { en: "NORMAL / SAFE CONDITIONS", ta: "இயல்பான / பாதுகாப்பான நிலை", hi: "सामान्य / सुरक्षित स्थिति" },
    hazardSummary: {
      en: "Mild autumn conditions simulated. Roads from Kalka to Shimla open and moving smoothly with light tourist traffic.",
      ta: "இயல்பான குளிர் காலநிலை. கால்கா-சிம்லா சாலைகளில் போக்குவரத்து சீராக உள்ளது.",
      hi: "सामान्य मौसम की स्थिति। कालका से शिमला तक सड़कें खुली हैं और यातायात सुचारू है।"
    },
    alerts: [
      {
        id: "s-01",
        severity: "advisory",
        title: { en: "Evening Temperature Drop Advisory", ta: "மாலை நேரக் குளிர் அதிகரிப்பு எச்சரிக்கை", hi: "शाम को तापमान में गिरावट की सलाह" },
        zone: { en: "The Ridge, Jakhoo Temple & Kufri", ta: "தி ரிட்ஜ், ஜாக்கு கோவில் & குப்ரி", hi: "द रिज, जाखू मंदिर एवं कुफरी" },
        time: { en: "Issued today • Valid overnight", ta: "இன்று வெளியிடப்பட்டது • இரவு முழுவதும்", hi: "आज जारी • रात भर वैध" },
        source: { en: "Shimla Tourism Assistance Cell (Simulated)", ta: "சிம்லா சுற்றுலா உதவி மையம்", hi: "शिमला पर्यटन सहायता केंद्र (सिम्युलेटेड)" },
        desc: {
          en: "Simulated night temperatures dipping to 8°C. Tourists traveling with children or senior citizens advised to carry layered thermal jackets.",
          ta: "இரவில் வெப்பநிலை 8°C ஆகக் குறையும். குழந்தைகள் மற்றும் பெரியவர்களுடன் பயணிப்பவர்கள் கம்பளி ஆடைகளை அணியவும்.",
          hi: "रात का तापमान 8 डिग्री तक गिर सकता है। बच्चों और बुजुर्गों के साथ यात्रा करने वाले गर्म कपड़े साथ रखें।"
        },
        precautions: [
          { en: "Keep windproof jackets handy when visiting high Jakhoo peak.", ta: "ஜாக்கு உச்சிக்குச் செல்லும்போது பாதுகாப்புக் கம்பளி ஆடை அணியவும்.", hi: "जाखू चोटी पर जाते समय विंडप्रूफ जैकेट साथ रखें।" },
          { en: "Walk cautiously on wet cobbled paving stones along the Mall.", ta: "மால் ரோட்டின் ஈரமான கற்களில் வழுக்காமல் கவனமாக நடக்கவும்.", hi: "माल रोड की गीली पत्थरीली सड़कों पर फिसलने से बचें।" }
        ]
      }
    ]
  },
  {
    id: "srinagar",
    name: { en: "Srinagar", ta: "ஸ்ரீநகர்", hi: "श्रीनगर" },
    state: { en: "Jammu & Kashmir, Kashmir Valley", ta: "ஜம்மு & காஷ்மீர், காஷ்மீர் பள்ளத்தாக்கு", hi: "जम्मू और कश्मीर, कश्मीर घाटी" },
    terrain: { en: "Dal Lake Basin & Alpine Valley (1,585m)", ta: "தால் ஏரி & ஆல்பைன் பள்ளத்தாக்கு (1,585 மீ)", hi: "डल झील बेसिन एवं अल्पाइन घाटी (1,585 मी)" },
    weather: {
      temp: 8,
      feelsLike: 5,
      tempMin: 3,
      tempMax: 12,
      condition: { en: "Cold Mountain Chill & Overcast", ta: "குளிர் காற்று & மேகமூட்டம்", hi: "शीत लहर और घने बादल" },
      conditionType: "cloud",
      humidity: 82,
      dewPoint: 5,
      humidityStatus: { en: "Cold Damp Air", ta: "குளிர்ந்த ஈரப்பதம்", hi: "ठंडी नम हवा" },
      rainfall: 8,
      rainProbability: 40,
      rainIntensity: { en: "Light Cold Drizzle", ta: "லேசான தூறல்", hi: "हल्की ठंडी फुहारें" },
      windSpeed: 18,
      windDirection: { en: "North (N)", ta: "வடக்கு", hi: "उत्तर" },
      windGust: { en: "Valley Breeze", ta: "பள்ளத்தாக்குக் காற்று", hi: "घाटी की शीतल हवा" },
      aqi: 35,
      aqiText: { en: "35 (Good Clean Air)", ta: "35 (தூய காற்று)", hi: "35 (अच्छी हवा)" },
      uv: 3,
      uvText: { en: "3 of 11 (Low Radiation)", ta: "3/11 (குறைந்த கதிர்வீச்சு)", hi: "3/11 (कम धूप)" },
      activityFeasibility: { en: "Shikara Rides Operating Normally", ta: "ஷிகாரா படகு சவாரி இயல்பாக இயங்குகிறது", hi: "शिकारा की सवारी सामान्य रूप से जारी" }
    },
    hazardLevel: "safe",
    hazardBadge: { en: "COLD WAVE ADVISORY", ta: "குளிர் அலை வழிகாட்டுதல்", hi: "शीत लहर सलाह" },
    hazardSummary: {
      en: "Cold weather simulation: Sub-zero frost likely in higher reaches (Gulmarg, Sonamarg). Srinagar city valley roads open.",
      ta: "குளிர் காலநிலை மாதிரி: குல்மார்க் பகுதியில் உறைபனி வாய்ப்பு. ஸ்ரீநகரில் சாலைகள் திறக்கப்பட்டுள்ளன.",
      hi: "ठंड का मौसम: गुलमर्ग और सोनमर्ग के ऊपरी इलाकों में पाला पड़ने की संभावना। श्रीनगर की सड़कें खुली हैं।"
    },
    alerts: [
      {
        id: "sr-01",
        severity: "advisory",
        title: { en: "High Altitude Black Ice Caution (Gulmarg & Sonamarg Routes)", ta: "பனி வழுக்கல் எச்சரிக்கை (குல்மார்க் பாதை)", hi: "ब्लैक आइस चेतावनी (गुलमर्ग एवं सोनमर्ग मार्ग)" },
        zone: { en: "Tangmarg-Gulmarg Road & Z-Morh Tunnel Approaches", ta: "குல்மார்க் & சோன்மார்க் அணுகுசாலைகள்", hi: "तंगमर्ग-गुलमर्ग सड़क" },
        time: { en: "Issued 2 hrs ago • Active until morning", ta: "2 மணி நேரத்திற்கு முன் • காலை வரை", hi: "2 घंटे पहले जारी • सुबह तक सक्रिय" },
        source: { en: "J&K Traffic Control Unit (Simulated)", ta: "ஜம்மு-காஷ்மீர் போக்குவரத்து கட்டுப்பாட்டுப் பிரிவு", hi: "जम्मू एवं कश्मीर ट्रैफिक कंट्रोल (सिम्युलेटेड)" },
        desc: {
          en: "Sub-zero overnight freeze causes invisible slick black ice on shaded curves. Commercial snow chains recommended for uphill vehicles.",
          ta: "இரவில் உறைபனி காரணமாக சாலைகளில் வழுக்கும் தன்மை ஏற்படும். பனிச்சங்கிலி கொண்ட வாகனங்களைப் பயன்படுத்தவும்.",
          hi: "रात में पाला जमने से सड़कों पर फिसलन हो सकती है। चढ़ाई वाले वाहनों के लिए टायरों में स्नो-चेन अनुशंसित है।"
        },
        precautions: [
          { en: "Avoid early morning driving before 08:00 AM on high mountain roads.", ta: "காலை 8 மணிக்கு முன் உயரமான மலைப்பாதைகளில் வாகனம் ஓட்டுவதைத் தவிர்க்கவும்.", hi: "सुबह 8 बजे से पहले पहाड़ी रास्तों पर गाड़ी चलाने से बचें।" },
          { en: "Always wear life jackets while taking Shikara rides across Dal and Nigeen lakes.", ta: "தால் ஏரியில் படகு சவாரி செய்யும்போது கட்டாயம் லைஃப் ஜாக்கெட் அணியவும்.", hi: "डल और नगीन झील में शिकारा की सवारी करते समय लाइफ जैकेट अवश्य पहनें।" }
        ]
      }
    ]
  },
  {
    id: "varanasi",
    name: { en: "Varanasi", ta: "வாரணாசி", hi: "वाराणसी" },
    state: { en: "Uttar Pradesh, Gangetic Plains", ta: "உத்தரப் பிரதேசம், கங்கைச் சமவெளி", hi: "उत्तर प्रदेश, गंगा का मैदान" },
    terrain: { en: "Sacred Riverfront & Heritage Ghats (80m)", ta: "புனித கங்கை நதிக்கரை படித்துறைகள்", hi: "पवित्र गंगा घाट एवं प्राचीन शहर (80 मी)" },
    weather: {
      temp: 34,
      feelsLike: 40,
      tempMin: 28,
      tempMax: 36,
      condition: { en: "Humid Haze & Swollen River Current", ta: "ஈரப்பதம் & கங்கையில் தீவிர நீரோட்டம்", hi: "धुंध भरी उमस और गंगा में तेज बहाव" },
      conditionType: "cloud",
      humidity: 79,
      dewPoint: 28,
      humidityStatus: { en: "High River Basin Humidity", ta: "நதிப்படுகை ஈரப்பதம்", hi: "उच्च आर्द्रता" },
      rainfall: 15,
      rainProbability: 50,
      rainIntensity: { en: "Scattered River Showers", ta: "சிதறிய மழை", hi: "छिटपुट बारिश" },
      windSpeed: 16,
      windDirection: { en: "East (E)", ta: "கிழக்கு", hi: "पूर्व" },
      windGust: { en: "Mild River Breeze", ta: "லேசான நதிக்காற்று", hi: "हल्की नदी की हवा" },
      aqi: 142,
      aqiText: { en: "142 (Moderate / Sensitives Alert)", ta: "142 (மிதமான மாசு)", hi: "142 (मध्यम प्रदूषण)" },
      uv: 8,
      uvText: { en: "8 of 11 (Very High Sun Radiation)", ta: "8/11 (அதிக வெயில்)", hi: "8/11 (बहुत तेज धूप)" },
      activityFeasibility: { en: "Ganga Aarti Normal; Boat Restrictions Active", ta: "கங்கா ஆரத்தி வழக்கம்; படகு சவாரிக் கட்டுப்பாடு", hi: "गंगा आरती सामान्य; नाव संचालन पर प्रतिबंध" }
    },
    hazardLevel: "warning",
    hazardBadge: { en: "RIVER LEVEL & CURRENT CAUTION", ta: "கங்கை நதிநீர் மட்ட எச்சரிக்கை", hi: "गंगा जलस्तर एवं बहाव चेतावनी" },
    hazardSummary: {
      en: "Simulated upstream reservoir discharge: Ganga river flow rate high. Small unmotorized rowing boats prohibited after 06:00 PM.",
      ta: "கங்கை நதியில் நீர்வரத்து மற்றும் வேகம் அதிகம். மாலை 6 மணிக்குப் பிறகு சிறிய படகுகளுக்குத் தடை.",
      hi: "गंगा में तेज बहाव: शाम 6 बजे के बाद छोटी नावों के संचालन पर प्रतिबंध।"
    },
    alerts: [
      {
        id: "v-01",
        severity: "moderate",
        title: { en: "Boat Safety Protocol & Ghat Bathing Advisory", ta: "படகு பாதுகாப்பு & படித்துறை குளியல் ஆலோசனை", hi: "नौका सुरक्षा प्रोटोकॉल एवं घाट स्नान सलाह" },
        zone: { en: "Dashashwamedh, Assi & Manikarnika Ghats", ta: "தசாஸ்வமேத, அசி படித்துறைகள்", hi: "दशाश्वमेध, अस्सी एवं मणिकर्णिका घाट" },
        time: { en: "Issued 3 hours ago • Ongoing", ta: "3 மணி நேரத்திற்கு முன் • தொடர்கிறது", hi: "3 घंटे पहले जारी • जारी है" },
        source: { en: "Varanasi Water Police & District Magistrate (Simulated)", ta: "வாரணாசி நீர்வழி காவல்துறை", hi: "वाराणसी जल पुलिस एवं जिला प्रशासन (सिम्युलेटेड)" },
        desc: {
          en: "Simulated strong water currents along submerged ghat stairs. Tourists taking holy dips must strictly stay inside protective iron chains.",
          ta: "படித்துறைப் படிகளில் வலுவான நீரோட்டம். சுற்றுலாப் பயணிகள் பாதுகாப்புச் சங்கிலிகளுக்குள் மட்டுமே குளிக்க வேண்டும்.",
          hi: "घाट की सीढ़ियों पर पानी का तेज बहाव। पर्यटक केवल सुरक्षा जंजीरों के अंदर ही स्नान करें।"
        },
        precautions: [
          { en: "Never swim outside barricaded safety zones or after dark.", ta: "பாதுகாப்பு வேலிகளுக்கு வெளியே அல்லது இரவில் நீந்த வேண்டாம்.", hi: "सुरक्षा घेरे से बाहर या अंधेरा होने के बाद तैरने की कोशिश न करें।" },
          { en: "Ensure every passenger wears a certified orange life jacket before boarding boats.", ta: "படகில் ஏறும் முன் அனைவரும் லைஃப் ஜாக்கெட் அணிந்திருக்க வேண்டும்.", hi: "नाव पर चढ़ने से पहले लाइफ जैकेट अवश्य पहनें।" }
        ]
      }
    ]
  },
  {
    id: "new-delhi",
    name: { en: "New Delhi", ta: "புது தில்லி", hi: "नई दिल्ली" },
    state: { en: "National Capital Territory (NCR)", ta: "தேசிய தலைநகர் பகுதி (NCR)", hi: "राष्ट्रीय राजधानी क्षेत्र (NCR)" },
    terrain: { en: "Northern Plains Urban Metropole (216m)", ta: "வடக்கு சமவெளி பெருநகரம் (216 மீ)", hi: "उत्तरी मैदानी महानगरीय क्षेत्र (216 मी)" },
    weather: {
      temp: 35,
      feelsLike: 39,
      tempMin: 27,
      tempMax: 38,
      condition: { en: "Hazy Sunshine & Urban Smog", ta: "புகைமூட்டமான வெயில் & காற்று மாசு", hi: "धुंध भरी धूप और शहरी स्मॉग" },
      conditionType: "sun",
      humidity: 58,
      dewPoint: 22,
      humidityStatus: { en: "Moderate Density", ta: "மிதமான ஈரப்பதம்", hi: "मध्यम नमी" },
      rainfall: 0,
      rainProbability: 10,
      rainIntensity: { en: "No Rain Expected", ta: "மழை இல்லை", hi: "बारिश नहीं" },
      windSpeed: 14,
      windDirection: { en: "North-West (NW)", ta: "வடமேற்கு", hi: "उत्तर-पश्चिम" },
      windGust: { en: "Calm Urban Drift", ta: "மெதுவான காற்று", hi: "शांत हवा" },
      aqi: 245,
      aqiText: { en: "245 (Poor / Unhealthy Smog)", ta: "245 (மோசமான காற்று மாசு)", hi: "245 (खराब / अस्वस्थ स्मॉग)" },
      uv: 7,
      uvText: { en: "7 of 11 (High UV Index)", ta: "7/11 (அதிக வெயில்)", hi: "7/11 (उच्च धूप सूचकांक)" },
      activityFeasibility: { en: "Carry N95 Mask for Outdoor Monument Tours", ta: "வெளிப்புறப் பயணங்களுக்கு N95 மாஸ்க் அணியவும்", hi: "बाहर घूमने के लिए N95 मास्क पहनें" }
    },
    hazardLevel: "warning",
    hazardBadge: { en: "AIR QUALITY & POLLUTION ADVISORY", ta: "காற்றுத் தர எச்சரிக்கை", hi: "वायु गुणवत्ता एवं प्रदूषण सलाह" },
    hazardSummary: {
      en: "Simulated elevated PM2.5 particulate concentration. High AQI reading of 245 warrants respiratory caution for tourists exploring India Gate, Red Fort, and Qutub Minar.",
      ta: "PM2.5 நுண்துகள்கள் அதிகம். இந்தியா கேட், செங்கோட்டை செல்லும் பயணிகள் மாஸ்க் அணிவது நலம்.",
      hi: "पीएम2.5 कणों का स्तर बढ़ा हुआ। इंडिया गेट, लाल किला और कुतुब मीनार घूमने वाले पर्यटक मास्क पहनें।"
    },
    alerts: [
      {
        id: "d-01",
        severity: "moderate",
        title: { en: "Elevated Air Pollution (AQI 245) Advisory for Travelers", ta: "சுற்றுலாப் பயணிகளுக்கான காற்று மாசு ஆலோசனை", hi: "यात्रियों के लिए वायु प्रदूषण (AQI 245) की सलाह" },
        zone: { en: "Central Delhi, Connaught Place & Historic Monuments", ta: "மத்திய தில்லி, கன்னாட் பிளேஸ் & வரலாற்று இடங்கள்", hi: "मध्य दिल्ली, कनॉट प्लेस एवं ऐतिहासिक स्मारक" },
        time: { en: "Issued 4 hours ago • Daily Cycle", ta: "4 மணி நேரத்திற்கு முன்", hi: "4 घंटे पहले जारी • दैनिक चक्र" },
        source: { en: "Central Pollution Control Board (CPCB Simulated)", ta: "மத்திய மாசு கட்டுப்பாட்டு வாரியம்", hi: "केंद्रीय प्रदूषण नियंत्रण बोर्ड (सीपीसीबी सिम्युलेटेड)" },
        desc: {
          en: "Simulated stagnant atmospheric boundary layer trapping particulate matter. Tourists with asthma or chronic bronchitis should minimize strenuous outdoor physical exertion.",
          ta: "வளிமண்டலத்தில் தூசுத் துகள்கள் தங்கியுள்ளன. ஆஸ்துமா உள்ளவர்கள் நீண்ட நடைப்பயணங்களைத் தவிர்க்கவும்.",
          hi: "धूल और धुएं के कारण वायु गुणवत्ता प्रभावित। अस्थमा के मरीज अधिक परिश्रम से बचें।"
        },
        precautions: [
          { en: "Wear certified N95 / FFP2 protective masks when outdoors.", ta: "வெளியே செல்லும்போது N95 மாஸ்க் அணியவும்.", hi: "बाहर निकलते समय N95 मास्क का उपयोग करें।" },
          { en: "Prefer Delhi Metro AC network for comfortable city-wide sightseeing transit.", ta: "நகரப் பயணங்களுக்கு ஏசி மெட்ரோ ரயிலைப் பயன்படுத்தவும்.", hi: "शहर में घूमने के लिए दिल्ली मेट्रो का उपयोग करें।" }
        ]
      }
    ]
  },
  {
    id: "mumbai",
    name: { en: "Mumbai", ta: "மும்பை", hi: "मुंबई" },
    state: { en: "Maharashtra, Western Seaboard", ta: "மகாராஷ்டிரா, மேற்கு கடற்கரை", hi: "महाराष्ट्र, पश्चिमी तट" },
    terrain: { en: "Island City & Financial Hub (Sea Level)", ta: "தீவு நகரம் & துறைமுகம்", hi: "तटीय महानगर एवं बंदरगाह" },
    weather: {
      temp: 30,
      feelsLike: 36,
      tempMin: 26,
      tempMax: 32,
      condition: { en: "Monsoon Downpours & High Tide", ta: "பருவமழைப் பெருமழை & உயர் அலை", hi: "मानसूनी बारिश और उच्च ज्वार" },
      conditionType: "storm",
      humidity: 90,
      dewPoint: 26,
      humidityStatus: { en: "Heavily Saturated", ta: "அதி ஈரப்பதம்", hi: "अत्यधिक उमस" },
      rainfall: 62,
      rainProbability: 90,
      rainIntensity: { en: "Heavy Continuous Rains", ta: "தொடர் கனமழை", hi: "लगातार तेज बारिश" },
      windSpeed: 36,
      windDirection: { en: "South-West (SW)", ta: "தென்மேற்கு", hi: "दक्षिण-पश्चिम" },
      windGust: { en: "Coastal Wind Bursts", ta: "கடலோரக் காற்று", hi: "तेज तटीय हवाएं" },
      aqi: 48,
      aqiText: { en: "48 (Cleaned by Rain)", ta: "48 (மழையால் தூய்மையான காற்று)", hi: "48 (बारिश से स्वच्छ हवा)" },
      uv: 4,
      uvText: { en: "4 of 11 (Moderate Index)", ta: "4/11 (மிதமான கதிர்வீச்சு)", hi: "4/11 (मध्यम सूचकांक)" },
      activityFeasibility: { en: "Suburban Train Delays Possible", ta: "புறநகர் ரயில் தாமதங்கள் ஏற்படலாம்", hi: "लोकल ट्रेनों में देरी संभव" }
    },
    hazardLevel: "warning",
    hazardBadge: { en: "HIGH TIDE & FLOODING CAUTION", ta: "உயர் அலை & நீர் தேங்குதல் எச்சரிக்கை", hi: "उच्च ज्वार एवं जलभराव चेतावनी" },
    hazardSummary: {
      en: "Simulated high tide of 4.45m combined with 62mm rainfall. Waterlogging anticipated around low-lying subways and Marine Drive promenade splash zone.",
      ta: "4.45 மீட்டர் உயர அலை மற்றும் 62 மி.மீ மழைப்பொழிவு. மரைன் டிரைவ் மற்றும் தாழ்வான பகுதிகளில் தண்ணீர் தேங்க வாய்ப்பு.",
      hi: "4.45 मीटर का उच्च ज्वार और 62 मिमी बारिश का सिमुलेशन। मरीन ड्राइव और निचले इलाकों में जलभराव की संभावना।"
    },
    alerts: [
      {
        id: "mb-01",
        severity: "moderate",
        title: { en: "High Tide Surge Alert: Marine Drive & Gateway of India", ta: "உயர் அலை எச்சரிக்கை: மரைன் டிரைவ் & இந்திய நுழைவு வாயில்", hi: "हाई टाइड अलर्ट: मरीन ड्राइव एवं गेटवे ऑफ इंडिया" },
        zone: { en: "South Mumbai Seawall & Bandra Bandstand", ta: "தெற்கு மும்பை கடற்கரை சுவர் & பாந்த்ரா", hi: "साउथ मुंबई और बांद्रा बैंडस्टैंड" },
        time: { en: "Issued 1 hr ago • Peak tide at 02:40 PM", ta: "1 மணி நேரத்திற்கு முன் • உச்ச அலை பிற்பகல் 2:40", hi: "1 घंटा पहले जारी • पीक टाइड दोपहर 2:40 बजे" },
        source: { en: "Brihanmumbai Municipal Corporation (BMC Simulated)", ta: "மும்பை மாநகராட்சி (BMC)", hi: "बृहन्मुंबई नगर निगम (बीएमसी सिम्युलेटेड)" },
        desc: {
          en: "Heavy swells crashing over the promenade tetrapods. Police barricades deployed along Marine Drive seawall to prevent pedestrians from being swept by rogue waves.",
          ta: "கடற்கரை பாறைகளில் அலைகள் மோதிப் பாய்கின்றன. மக்கள் கடலுக்குள் இழுத்துச் செல்லப்படாமல் தடுக்க தடுப்புகள் அமைக்கப்பட்டுள்ளன.",
          hi: "लहरें दीवारों से टकराकर ऊपर आ रही हैं। पर्यटकों को समुद्र की दीवार से दूर रखने के लिए पुलिस बैरिकेड लगाए गए हैं।"
        },
        precautions: [
          { en: "Do not sit or take photos on the seawall parapets during high tide hours.", ta: "உயர் அலை நேரத்தில் தடுப்புச் சுவர்களில் அமர்ந்து புகைப்படம் எடுக்காதீர்கள்.", hi: "हाई टाइड के समय समुद्र की मुंडेर पर बैठकर फोटो न लें।" },
          { en: "Check local railway status before traveling between South Mumbai and suburbs.", ta: "புறநகர் ரயில்களின் நிலவரத்தை அறிந்து பயணிக்கவும்.", hi: "यात्रा करने से पहले लोकल ट्रेनों की स्थिति जांच लें।" }
        ]
      }
    ]
  },
  {
    id: "darjeeling",
    name: { en: "Darjeeling", ta: "டார்ஜிலிங்", hi: "दार्जिलिंग" },
    state: { en: "West Bengal, Eastern Himalayas", ta: "மேற்கு வங்கம், கிழக்கு இமயமலை", hi: "पश्चिम बंगाल, पूर्वी हिमालय" },
    terrain: { en: "Tea Capital & Himalayan Foothills (2,042m)", ta: "தேயிலை தலைநகரம் & இமயமலை அடிவாரம்", hi: "चाय राजधानी एवं हिमालयी पर्वतमाला (2,042 मी)" },
    weather: {
      temp: 12,
      feelsLike: 10,
      tempMin: 9,
      tempMax: 15,
      condition: { en: "Heavy White Fog & Drizzle", ta: "அடர்ந்த வெண்பனி & தூறல்", hi: "घना सफेद कोहरा और फुहारें" },
      conditionType: "rain",
      humidity: 94,
      dewPoint: 11,
      humidityStatus: { en: "High Mountain Fog", ta: "அடர்ந்த பனிமூட்டம்", hi: "घना कोहरा" },
      rainfall: 28,
      rainProbability: 75,
      rainIntensity: { en: "Mountain Mist & Drizzle", ta: "மலைச்சாரல் மழை", hi: "पहाड़ी फुहारें" },
      windSpeed: 20,
      windDirection: { en: "North-East (NE)", ta: "வடகிழக்கு", hi: "उत्तर-पूर्व" },
      windGust: { en: "Crisp Ridge Air", ta: "குளிர்ந்த காற்று", hi: "ठंडी हवा" },
      aqi: 22,
      aqiText: { en: "22 (Pure Himalayan Tea Air)", ta: "22 (தூய தேயிலைக் காற்று)", hi: "22 (अत्यंत शुद्ध हवा)" },
      uv: 3,
      uvText: { en: "3 of 11 (Mild UV Radiation)", ta: "3/11 (குறைந்த வெயில்)", hi: "3/11 (धीमी धूप)" },
      activityFeasibility: { en: "Toy Train Running; Tiger Hill View Obscured", ta: "டாய் ரயில் இயங்குகிறது; டைகர் ஹில் மறைப்பு", hi: "टॉय ट्रेन जारी; टाइगर हिल पर दृश्यता कम" }
    },
    hazardLevel: "safe",
    hazardBadge: { en: "LOW VISIBILITY ADVISORY", ta: "குறைந்த பார்வைத் திறன் ஆலோசனை", hi: "कम दृश्यता सलाह" },
    hazardSummary: {
      en: "Heavy fog rolling across Mall Road and Tiger Hill. Kanchenjunga visibility currently obscured by dense cloud blankets.",
      ta: "மால் ரோடு மற்றும் டைகர் ஹில் பகுதியில் பனிமூட்டம். கஞ்சன்ஜங்கா சிகரம் மேகங்களால் மறைக்கப்பட்டுள்ளது.",
      hi: "माल रोड और टाइगर हिल पर घना कोहरा। कंचनजंगा पर्वत घने बादलों से ढका हुआ है।"
    },
    alerts: [
      {
        id: "dr-01",
        severity: "advisory",
        title: { en: "Hill Highway Caution: Siliguri-Darjeeling Hill Cart Road", ta: "மலைச்சாலை எச்சரிக்கை: சிலிகுரி-டார்ஜிலிங் சாலை", hi: "पहाड़ी सड़क सावधानी: सिलीगुड़ी-दार्जिलिंग मार्ग" },
        zone: { en: "NH-110 & Rohini Ghat Section", ta: "NH-110 & ரோகினி மலைப்பகுதி", hi: "एनएच-110 एवं रोहिणी घाट" },
        time: { en: "Issued 2 hrs ago • Valid 24 hrs", ta: "2 மணி நேரத்திற்கு முன்", hi: "2 घंटे पहले जारी" },
        source: { en: "Darjeeling District Disaster Cell (Simulated)", ta: "டார்ஜிலிங் பேரிடர் மேலாண்மை பிரிவு", hi: "दार्जिलिंग जिला आपदा सेल (सिम्युलेटेड)" },
        desc: {
          en: "Moisture on steep curves can cause light vehicle skidding. Drive with low beams on.",
          ta: "செங்குத்தான வளைவுகளில் வாகனங்கள் வழுக்க வாய்ப்புள்ளது. குறைந்த வெளிச்ச விளக்குகளைப் பயன்படுத்தவும்.",
          hi: "घुमावदार मोड़ों पर फिसलन हो सकती है। लो बीम लाइट जलाकर चलें।"
        },
        precautions: [
          { en: "Hire drivers experienced with narrow Himalayan hill curves.", ta: "மலைப்பாதையில் நன்கு ஓட்டும் அனுபவம் உள்ள ஓட்டுநர்களை அமர்த்தவும்.", hi: "अनुभवी पहाड़ी चालकों के साथ ही यात्रा करें।" }
        ]
      }
    ]
  },
  {
    id: "ooty",
    name: { en: "Ooty (Udhagamandalam)", ta: "ஊட்டி (உதகமண்டலம்)", hi: "ऊटी (उदगमंडलम)" },
    state: { en: "Tamil Nadu, Nilgiri Hills", ta: "தமிழ்நாடு, நீலகிரி மலை", hi: "तमिलनाडु, नीलगिरि पर्वत" },
    terrain: { en: "Queen of Hill Stations (2,240m)", ta: "மலைகளின் அரசி (2,240 மீ)", hi: "पहाड़ों की रानी (2,240 मी)" },
    weather: {
      temp: 15,
      feelsLike: 14,
      tempMin: 10,
      tempMax: 18,
      condition: { en: "Pleasant Chill & Gentle Breeze", ta: "இதமான குளிர் & மெல்லிய காற்று", hi: "सुहावनी ठंड और मंद हवा" },
      conditionType: "cloud",
      humidity: 72,
      dewPoint: 10,
      humidityStatus: { en: "Optimal Highland Freshness", ta: "சிறந்த மலைக்காலநிலை", hi: "उत्तम ताजगी" },
      rainfall: 4,
      rainProbability: 20,
      rainIntensity: { en: "Negligible Drizzle", ta: "மிக லேசான தூறல்", hi: "ना के बराबर फुहारें" },
      windSpeed: 16,
      windDirection: { en: "South-West (SW)", ta: "தென்மேற்கு", hi: "दक्षिण-पश्चिम" },
      windGust: { en: "Gentle Pine Breeze", ta: "பைன் மரக் காற்று", hi: "मंद बयार" },
      aqi: 20,
      aqiText: { en: "20 (Crisp Eucalyptus Air)", ta: "20 (மிகத் தூய யூகலிப்டஸ் காற்று)", hi: "20 (अत्यंत शुद्ध हवा)" },
      uv: 5,
      uvText: { en: "5 of 11 (Moderate Sun Index)", ta: "5/11 (மிதமான வெயில்)", hi: "5/11 (मध्यम धूप)" },
      activityFeasibility: { en: "Ideal Sightseeing & Boating Conditions", ta: "சுற்றுலா மற்றும் படகு சவாரிக்கு மிகவும் ஏற்றது", hi: "पर्यटन और बोटिंग के लिए आदर्श स्थिति" }
    },
    hazardLevel: "safe",
    hazardBadge: { en: "CLEAR / SAFE TOURIST WEATHER", ta: "பாதுகாப்பான / சிறந்த வானிலை", hi: "सुरक्षित / उत्तम पर्यटन मौसम" },
    hazardSummary: {
      en: "Serene hill station climate simulated. Botanical Garden, Ooty Lake, and Doddabetta Peak routes open with clear skies and calm weather.",
      ta: "இயற்கை எழில் கொஞ்சும் அமைதியான வானிலை. தாவரவியல் பூங்கா, ஊட்டி ஏரி, தொட்டபெட்டா பகுதிகள் பாதுகாப்பாக உள்ளன.",
      hi: "शांत और सुहावना मौसम। बोटैनिकल गार्डन, ऊटी झील और डोड्डाबेट्टा पीक के रास्ते पूरी तरह खुले हैं।"
    },
    alerts: [
      {
        id: "o-01",
        severity: "advisory",
        title: { en: "Kallar-Coonoor Ghat Traffic & Elephant Corridor Advisory", ta: "கல்லாறு-குன்னூர் சாலை & யானை வழித்தட ஆலோசனை", hi: "कल्लार-कुन्नूर घाट एवं हाथी गलियारा सलाह" },
        zone: { en: "Mettupalayam-Coonoor Ghat (NH-181)", ta: "மேட்டுப்பாளையம்-குன்னூர் மலைப்பாதை", hi: "मेट्टुपालयम-कुन्नूर घाट मार्ग" },
        time: { en: "Issued today • Regular Advisory", ta: "இன்று • வழக்கமான ஆலோசனை", hi: "आज जारी • नियमित सलाह" },
        source: { en: "Nilgiris District Administration & Forest Dept (Simulated)", ta: "நீலகிரி மாவட்ட நிர்வாகம் & வனத்துறை", hi: "नीलगिरि जिला प्रशासन एवं वन विभाग (सिम्युलेटेड)" },
        desc: {
          en: "Simulated wildlife movement detected near Barliar hairpin bends. Motorists should not honk loudly or discard plastic waste along forest corridors.",
          ta: "பார்லியார் வளைவுகளில் வனவிலங்கு நடமாட்டம். ஹாரன் அடிக்க வேண்டாம் மற்றும் பிளாஸ்டிக் கழிவுகளை வீச வேண்டாம்.",
          hi: "घाट मोड़ों पर वन्यजीवों की आवाजाही। हॉर्न न बजाएं और वन क्षेत्र में कचरा न फेंकें।"
        },
        precautions: [
          { en: "Maintain speed limits of 30 km/h on hairpin bends.", ta: "வளைவுகளில் 30 கி.மீ வேகத்தில் மட்டும் செல்லவும்.", hi: "घाट मोड़ों पर 30 किमी/घंटा की गति सीमा का पालन करें।" },
          { en: "Carry warm shawls or pullovers for evening strolls around Ooty Lake.", ta: "ஊட்டி ஏரிப் பகுதியில் மாலை நேரத்தில் கதகதப்பான ஆடைகளை அணியவும்.", hi: "शाम को ऊटी झील के पास टहलते समय गर्म शॉल या जैकेट साथ रखें।" }
        ]
      }
    ]
  }
];

// ============================================================================
// 3. Application State & Selected Location State (Open-Meteo Geocoding)
// ============================================================================
let currentLang = 'en';
let currentCity = citiesData[0]; // Default to Manali
let currentFilter = 'all'; // 'all' | 'high' | 'moderate' | 'advisory'
let audioCtx = null;
let sirenOscillator = null;
let sirenGain = null;
let sirenInterval = null;
let isSirenPlaying = false;

// Selected Location State (Requirement 6: Store name, latitude, longitude)
const selectedLocationState = {
  name: "Manali",
  latitude: 32.2396,
  longitude: 77.1887,
  admin1: "Himachal Pradesh",
  admin2: "Kullu",
  country: "India",
  countryCode: "IN",
  elevation: 2050,
  timezone: "Asia/Kolkata",
  source: "geocoding-api.open-meteo.com"
};
window.selectedLocationState = selectedLocationState;

// Geocoding Search & Debounce State (Requirement 8)
let searchDebounceTimer = null;
let activeGeocodingAbortController = null;
let activeSearchRequestId = 0;
let currentSearchResults = [];
let highlightedResultIndex = -1;

// Weather Forecast Request Tracking (Prevents older requests from overwriting newer selections)
let activeForecastRequestId = 0;
let activeForecastAbortController = null;

// Safe Journey Shield State (Requirement 1)
let currentActivity = 'sightseeing'; // 'beach' | 'trekking' | 'sightseeing' | 'road' | 'outdoor'
window.currentActivity = currentActivity;



// Checklist item state in LocalStorage
const CHECKLIST_STORAGE_KEY = 'touristsafe_checklist_progress';

// ============================================================================
// 4. Initialization
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  setupLanguage();
  renderCityChips();
  setupEventListeners();
  loadSavedChecklist();
  loadCity(currentCity.id, false); // initial render without artificial delay
  renderSafeJourneyShield();
  renderSafeZones(getActiveLocationState());
});

// ============================================================================
// 5. Language Handling & Internationalization (i18n)
// ============================================================================
function setupLanguage() {
  const langSelect = document.getElementById('lang-select');
  if (!langSelect) return;

  langSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update static DOM elements marked with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Sync the dropdown value
  const langSelect = document.getElementById('lang-select');
  if (langSelect && langSelect.value !== lang) {
    langSelect.value = lang;
  }

  // Re-render dynamic active components
  renderActiveCity(currentCity);
  renderAlerts(currentCity, currentFilter);
  renderCityChips();
  updateChecklistCounter();
  renderSafeJourneyShield();
  renderSafeZones(getActiveLocationState());

  showToast(
    lang === 'ta' ? 'மொழி தமிழுக்கு மாற்றப்பட்டது' :
    lang === 'hi' ? 'भाषा हिन्दी में बदली गई' :
    'Language set to English',
    '🌐'
  );
}

// Helper to get localized string or fallback
function getLocalized(obj) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return obj[currentLang] || obj.en || '';
}

// ============================================================================
// 6. City Chips & Quick Destinations
// ============================================================================
function renderCityChips() {
  const container = document.getElementById('city-chips');
  if (!container) return;

  const quickHubs = [
    { name: "Manali", lat: 32.2396, lon: 77.1887, admin1: "Himachal Pradesh" },
    { name: "Bengaluru", lat: 12.9719, lon: 77.5937, admin1: "Karnataka" },
    { name: "Kochi", lat: 9.9399, lon: 76.2602, admin1: "Kerala" },
    { name: "Shimla", lat: 31.1044, lon: 77.1666, admin1: "Himachal Pradesh" },
    { name: "Goa", lat: 15.4909, lon: 73.8278, admin1: "Goa" },
    { name: "Chennai", lat: 13.0827, lon: 80.2707, admin1: "Tamil Nadu" },
    { name: "Jaipur", lat: 26.9124, lon: 77.5873, admin1: "Rajasthan" },
    { name: "Leh", lat: 34.1650, lon: 77.5840, admin1: "Ladakh" }
  ];

  container.innerHTML = '';
  quickHubs.forEach((hub) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    const isActive = (selectedLocationState && selectedLocationState.name.toLowerCase() === hub.name.toLowerCase());
    chip.className = `city-chip ${isActive ? 'active' : ''}`;
    chip.textContent = hub.name;
    chip.setAttribute('data-city-name', hub.name);
    chip.addEventListener('click', () => {
      selectGeocodingResult({
        name: hub.name,
        latitude: hub.lat,
        longitude: hub.lon,
        admin1: hub.admin1,
        country: 'India',
        country_code: 'IN'
      });
    });
    container.appendChild(chip);
  });
}

// ============================================================================
// 7. Loading, Searching & Rendering City Data
// ============================================================================
function loadCity(cityId, simulateDelay = true) {
  const targetCity = citiesData.find((c) => c.id === cityId);
  if (!targetCity) {
    showErrorState();
    return;
  }

  hideErrorState();
  const loadingState = document.getElementById('loading-state');
  const dashboard = document.getElementById('weather-dashboard');
  const alertsSection = document.getElementById('emergency-alerts');

  if (simulateDelay) {
    // Show spinner & pulse
    if (loadingState) loadingState.classList.remove('hidden');
    if (dashboard) dashboard.style.opacity = '0.35';
    if (alertsSection) alertsSection.style.opacity = '0.35';

    setTimeout(() => {
      currentCity = targetCity;
      if (selectedLocationState) {
        selectedLocationState.name = getLocalized(targetCity.name) || targetCity.id;
        selectedLocationState.latitude = targetCity.coordinates ? targetCity.coordinates.lat : 32.24;
        selectedLocationState.longitude = targetCity.coordinates ? targetCity.coordinates.lon : 77.19;
        selectedLocationState.elevation = (targetCity.terrain && typeof targetCity.terrain.en === 'string' && targetCity.terrain.en.includes('2,050m')) ? 2050 : (targetCity.id === 'goa' ? 5 : 350);
        selectedLocationState.admin1 = getLocalized(targetCity.state);
        selectedLocationState.country = 'India';
      }
      renderActiveCity(currentCity);
      renderAlerts(currentCity, currentFilter);
      renderCityChips();
      renderSafeJourneyShield();

      if (loadingState) loadingState.classList.add('hidden');
      if (dashboard) dashboard.style.opacity = '1';
      if (alertsSection) alertsSection.style.opacity = '1';

      showToast(`${getLocalized(currentCity.name)}: Telemetry updated`, '📍');
    }, 320);
  } else {
    currentCity = targetCity;
    if (selectedLocationState) {
      selectedLocationState.name = getLocalized(targetCity.name) || targetCity.id;
      selectedLocationState.latitude = targetCity.coordinates ? targetCity.coordinates.lat : 32.24;
      selectedLocationState.longitude = targetCity.coordinates ? targetCity.coordinates.lon : 77.19;
      selectedLocationState.elevation = (targetCity.terrain && typeof targetCity.terrain.en === 'string' && targetCity.terrain.en.includes('2,050m')) ? 2050 : (targetCity.id === 'goa' ? 5 : 350);
      selectedLocationState.admin1 = getLocalized(targetCity.state);
      selectedLocationState.country = 'India';
    }
    renderActiveCity(currentCity);
    renderAlerts(currentCity, currentFilter);
    renderCityChips();
    renderSafeJourneyShield();
  }
}

function renderActiveCity(city) {
  // Title & Subtitles
  const cityNameEl = document.getElementById('current-city-name');
  const stateNameEl = document.getElementById('current-state-name');
  const terrainEl = document.getElementById('current-terrain');
  const summaryEl = document.getElementById('current-hazard-summary');
  const hazardBadgeEl = document.getElementById('current-hazard-badge');
  const hazardTextEl = document.getElementById('current-hazard-text');

  if (cityNameEl) cityNameEl.textContent = getLocalized(city.name);
  if (stateNameEl) stateNameEl.textContent = getLocalized(city.state);
  if (terrainEl) terrainEl.textContent = getLocalized(city.terrain);
  if (summaryEl) summaryEl.textContent = getLocalized(city.hazardSummary);

  const coordsEl = document.getElementById('current-coordinates');
  if (coordsEl) {
    if (city.coordinates) {
      coordsEl.textContent = `${city.coordinates.lat.toFixed(2)}°N, ${city.coordinates.lon.toFixed(2)}°E`;
    } else if (selectedLocationState) {
      coordsEl.textContent = `${selectedLocationState.latitude.toFixed(2)}°N, ${selectedLocationState.longitude.toFixed(2)}°E`;
    }
  }

  // Hazard Badge Styling
  if (hazardBadgeEl && hazardTextEl) {
    hazardBadgeEl.className = 'hazard-status-badge';
    if (city.hazardLevel === 'danger') {
      hazardBadgeEl.classList.add('badge-danger');
    } else if (city.hazardLevel === 'warning') {
      hazardBadgeEl.classList.add('badge-warning');
    } else {
      hazardBadgeEl.classList.add('badge-safe');
    }
    hazardTextEl.textContent = getLocalized(city.hazardBadge);
  }

  // Quick visual top box
  const mainTempEl = document.getElementById('main-temp-val');
  const mainCondEl = document.getElementById('main-condition-text');
  const mainFeelsEl = document.getElementById('main-feels-like');
  const mainIconBox = document.getElementById('main-weather-icon-box');

  if (mainTempEl) mainTempEl.textContent = `${city.weather.temp}°C`;
  if (mainCondEl) mainCondEl.textContent = getLocalized(city.weather.condition);
  if (mainFeelsEl) mainFeelsEl.textContent = `${city.weather.feelsLike}°C`;
  if (mainIconBox) mainIconBox.innerHTML = getWeatherSvg(city.weather.conditionType);

  // Metric Card 1: Temperature
  const cardTempVal = document.getElementById('card-temp-val');
  const cardTempRange = document.getElementById('card-temp-range');
  const cardTempStatus = document.getElementById('card-temp-status');
  const cardTempBar = document.getElementById('card-temp-bar');

  if (cardTempVal) cardTempVal.textContent = city.weather.temp;
  if (cardTempRange) cardTempRange.textContent = `${city.weather.tempMin}°C — ${city.weather.tempMax}°C`;
  if (cardTempStatus) cardTempStatus.textContent = getLocalized(city.weather.condition);
  if (cardTempBar) {
    // scale roughly 0°C to 50°C
    const pct = Math.min(100, Math.max(5, (city.weather.temp / 45) * 100));
    cardTempBar.style.width = `${pct}%`;
  }

  // Metric Card 2: Humidity
  const cardHumidityVal = document.getElementById('card-humidity-val');
  const cardHumidityDew = document.getElementById('card-humidity-dew');
  const cardHumidityStatus = document.getElementById('card-humidity-status');
  const cardHumidityBar = document.getElementById('card-humidity-bar');

  if (cardHumidityVal) cardHumidityVal.textContent = city.weather.humidity;
  if (cardHumidityDew) cardHumidityDew.textContent = `${city.weather.dewPoint}°C`;
  if (cardHumidityStatus) cardHumidityStatus.textContent = getLocalized(city.weather.humidityStatus);
  if (cardHumidityBar) cardHumidityBar.style.width = `${city.weather.humidity}%`;

  // Metric Card 3: Rainfall
  const cardRainVal = document.getElementById('card-rain-val');
  const cardRainProb = document.getElementById('card-rain-prob');
  const cardRainIntensity = document.getElementById('card-rain-intensity');
  const cardRainBar = document.getElementById('card-rain-bar');

  if (cardRainVal) cardRainVal.textContent = city.weather.rainfall;
  if (cardRainProb) cardRainProb.textContent = `${city.weather.rainProbability}%`;
  if (cardRainIntensity) cardRainIntensity.textContent = getLocalized(city.weather.rainIntensity);
  if (cardRainBar) {
    // scale 0 to 100 mm
    const pct = Math.min(100, Math.max(2, city.weather.rainfall));
    cardRainBar.style.width = `${pct}%`;
  }

  // Metric Card 4: Wind Speed
  const cardWindVal = document.getElementById('card-wind-val');
  const cardWindDir = document.getElementById('card-wind-dir');
  const cardWindGust = document.getElementById('card-wind-gust');
  const cardWindBar = document.getElementById('card-wind-bar');

  if (cardWindVal) cardWindVal.textContent = city.weather.windSpeed;
  if (cardWindDir) cardWindDir.textContent = getLocalized(city.weather.windDirection);
  if (cardWindGust) cardWindGust.textContent = getLocalized(city.weather.windGust);
  if (cardWindBar) {
    // scale 0 to 70 km/h
    const pct = Math.min(100, Math.max(5, (city.weather.windSpeed / 70) * 100));
    cardWindBar.style.width = `${pct}%`;
  }

  // Supplementary Row
  const suppAqi = document.getElementById('supp-aqi-val');
  const suppUv = document.getElementById('supp-uv-val');
  const suppAct = document.getElementById('supp-activity-val');

  if (suppAqi) {
    suppAqi.textContent = getLocalized(city.weather.aqiText);
    suppAqi.className = city.weather.aqi < 50 ? 'aqi-good' : city.weather.aqi < 100 ? '' : 'activity-caution';
  }
  if (suppUv) suppUv.textContent = getLocalized(city.weather.uvText);
  if (suppAct) {
    suppAct.textContent = getLocalized(city.weather.activityFeasibility);
    suppAct.className = city.hazardLevel === 'danger' ? 'activity-caution' : '';
  }

  // Timestamp
  const timeEl = document.getElementById('current-timestamp');
  if (timeEl) {
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' IST';
  }
}

// Weather Condition SVGs
function getWeatherSvg(type) {
  if (type === 'rain') {
    return `
      <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:100%;height:100%;">
        <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>
        <line x1="8" y1="19" x2="8" y2="21"/>
        <line x1="12" y1="18" x2="12" y2="20"/>
        <line x1="16" y1="19" x2="16" y2="21"/>
      </svg>
    `;
  } else if (type === 'sun') {
    return `
      <svg viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:100%;height:100%;">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    `;
  } else if (type === 'storm') {
    return `
      <svg viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:100%;height:100%;">
        <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"/>
        <polygon points="13 11 9 17 15 17 11 23 13 23"/>
      </svg>
    `;
  }
  // Cloud / Default
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:100%;height:100%;">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
  `;
}

// ============================================================================
/// 8. Emergency Alerts Rendering & Filter Tabs
// ============================================================================
function renderAlerts(city, filter = 'all') {
  const container = document.getElementById('alerts-container');
  if (!container) return;

  const countAll = document.getElementById('count-all');
  const countHigh = document.getElementById('count-high');
  const countMod = document.getElementById('count-mod');
  const countSafe = document.getElementById('count-safe');

  // When no official verified feed is integrated, reflect 0 active verified alerts
  if (countAll) countAll.textContent = '0';
  if (countHigh) countHigh.textContent = '0';
  if (countMod) countMod.textContent = '0';
  if (countSafe) countSafe.textContent = '0';

  const cityName = city ? (typeof city.name === 'object' ? getLocalized(city.name) : city.name) : 'Selected Location';
  const now = new Date();
  const timeText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' IST';

  container.innerHTML = `
    <article class="official-unavailable-card">
      <div class="official-unavail-top">
        <div class="official-unavail-title-group">
          <span class="official-unavail-badge">${escapeHtml((translations[currentLang] && translations[currentLang].official_alerts_unavailable_badge) || 'OFFICIAL FEED NOT CONNECTED')}</span>
          <h3 class="official-unavail-title">${escapeHtml((translations[currentLang] && translations[currentLang].official_alerts_unavailable_title) || 'Official alerts unavailable')}</h3>
        </div>
        <div class="official-unavail-meta">
          <span>📍 ${escapeHtml(cityName)}</span>
          <span>•</span>
          <span>${escapeHtml(timeText)}</span>
        </div>
      </div>

      <div class="official-unavail-body">
        <p class="official-unavail-desc">${escapeHtml((translations[currentLang] && translations[currentLang].official_alerts_unavailable_desc) || 'No verified official alert feed is integrated (e.g., IMD / NDMA CAP feed requires statutory authentication). TouristSafe strictly avoids inventing alerts or presenting simulated data as real warnings. For genuine official severe weather, cyclone, or flood warnings, consult the India Meteorological Department directly at mausam.imd.gov.in.')}</p>

        <div class="official-unavail-details-grid">
          <div class="detail-item">
            <span class="detail-label">${escapeHtml((translations[currentLang] && translations[currentLang].official_alerts_source_label) || 'Official Source:')}</span>
            <span class="detail-value">${escapeHtml((translations[currentLang] && translations[currentLang].official_alerts_source_val) || 'India Meteorological Department (IMD) / NDMA CAP-CP')}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">${escapeHtml((translations[currentLang] && translations[currentLang].official_alerts_status_label) || 'Feed Status:')}</span>
            <span class="detail-value text-amber">${escapeHtml((translations[currentLang] && translations[currentLang].official_alerts_status_val) || 'Offline / Not Connected (Zero Fabricated Warnings)')}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">${escapeHtml((translations[currentLang] && translations[currentLang].official_alerts_time_label) || 'Last Checked:')}</span>
            <span class="detail-value">${escapeHtml(timeText)}</span>
          </div>
        </div>

        <div class="official-unavail-actions">
          <a href="https://mausam.imd.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            <span>${escapeHtml((translations[currentLang] && translations[currentLang].official_alerts_check_imd) || 'Check Live IMD Alerts (mausam.imd.gov.in) →')}</span>
          </a>
          <a href="https://ndma.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            <span>${escapeHtml((translations[currentLang] && translations[currentLang].official_alerts_check_ndma) || 'NDMA Disaster Portal (ndma.gov.in) →')}</span>
          </a>
          <a href="tel:112" class="btn btn-danger btn-sm" aria-label="Call 112 for Emergencies">
            <svg viewBox="0 0 24 24" fill="currentColor" style="width:14px;height:14px;margin-right:4px;"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
            <span>Dial 112 (ERSS Emergency)</span>
          </a>
        </div>
      </div>
    </article>
  `;
}

// ============================================================================
// 8B. Verified Safe Zones & Emergency Facilities Rendering
// ============================================================================
function renderSafeZones(loc) {
  const container = document.getElementById('safe-zones-card');
  if (!container) return;

  const activeLoc = loc || getActiveLocationState();
  const locName = activeLoc ? (typeof activeLoc.name === 'object' ? getLocalized(activeLoc.name) : activeLoc.name) : 'Selected Location';
  const admin = activeLoc ? (activeLoc.admin1 || (typeof activeLoc.state === 'object' ? getLocalized(activeLoc.state) : activeLoc.state) || '') : '';
  const coordsText = (activeLoc && activeLoc.latitude != null && activeLoc.longitude != null)
    ? `${Number(activeLoc.latitude).toFixed(2)}°N, ${Number(activeLoc.longitude).toFixed(2)}°E`
    : (activeLoc && activeLoc.coordinates ? `${activeLoc.coordinates.lat.toFixed(2)}°N, ${activeLoc.coordinates.lon.toFixed(2)}°E` : 'Coordinates unavailable');
  const now = new Date();
  const timeText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' IST';

  container.innerHTML = `
    <div class="safezones-status-header">
      <div class="safezones-meta-left">
        <span class="safezones-loc-badge">📍 ${escapeHtml(locName)}${admin ? ', ' + escapeHtml(admin) : ''}</span>
        <span class="safezones-coords-pill">${escapeHtml(coordsText)}</span>
      </div>
      <div class="safezones-meta-right">
        <span class="safezones-unverified-badge">${escapeHtml((translations[currentLang] && translations[currentLang].safezones_status_badge) || 'UNVERIFIED / NO LIVE GIS FEED')}</span>
      </div>
    </div>

    <div class="safezones-notice-box" role="note">
      <div class="safezones-notice-icon">⚠️</div>
      <div class="safezones-notice-content">
        <h4>${escapeHtml((translations[currentLang] && translations[currentLang].safezones_notice_head) || 'Nearby Emergency Facilities & Shelter Data Unavailable')}</h4>
        <p>${escapeHtml((translations[currentLang] && translations[currentLang].safezones_notice_body) || 'No verified live GIS feed is connected for this location. TouristSafe strictly avoids displaying fabricated safe zones or claiming locations are designated shelters without statutory confirmation.')}</p>
        <div class="safezones-source-row">
          <span><strong>${currentLang === 'ta' ? 'அதிகாரப்பூர்வ மூலம்:' : currentLang === 'hi' ? 'आधिकारिक स्रोत:' : 'Verification Source:'}</strong> Statutory District Emergency Directory (ERSS 112 / NDMA 1078)</span>
          <span>•</span>
          <span><strong>${currentLang === 'ta' ? 'கடைசியாக சரிபார்க்கப்பட்டது:' : currentLang === 'hi' ? 'अंतिम जांच:' : 'Last Checked:'}</strong> ${escapeHtml(timeText)}</span>
        </div>
      </div>
    </div>

    <div class="safezones-facilities-grid">
      <div class="facility-card">
        <div class="facility-icon-wrap icon-police">👮</div>
        <div class="facility-body">
          <div class="facility-eyebrow">${currentLang === 'ta' ? 'காவல்துறை & உடனடி மீட்பு' : currentLang === 'hi' ? 'पुलिस एवं त्वरित बचाव' : 'Police & Rapid Emergency Dispatch'}</div>
          <h4 class="facility-title">${currentLang === 'ta' ? 'தேசிய அவசரக்கால பதில் அமைப்பு (112)' : currentLang === 'hi' ? 'राष्ट्रीय आपातकालीन प्रतिक्रिया प्रणाली (112)' : 'National Emergency Response System (112)'}</h4>
          <p class="facility-desc">${currentLang === 'ta' ? 'அருகிலுள்ள உள்ளூர் காவல் நிலையம் அல்லது அவசர ரோந்துப் படைக்கு நேரடி அழைப்பு.' : currentLang === 'hi' ? 'निकटतम पुलिस स्टेशन या आपातकालीन गश्ती दल से तत्काल संपर्क के लिए।' : 'Direct GPS-assisted dispatch to nearest jurisdictional police station and mobile patrol units.'}</p>
          <a href="tel:112" class="btn btn-danger btn-sm facility-btn" aria-label="Call 112 for Police and Rescue">
            <svg viewBox="0 0 24 24" fill="currentColor" style="width:14px;height:14px;"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
            <span>${currentLang === 'ta' ? 'காவல்துறைக்கு அழைக்க 112' : currentLang === 'hi' ? 'पुलिस हेतु डायल करें 112' : 'Dial 112 (Police / Rescue)'}</span>
          </a>
        </div>
      </div>

      <div class="facility-card">
        <div class="facility-icon-wrap icon-hospital">🏥</div>
        <div class="facility-body">
          <div class="facility-eyebrow">${currentLang === 'ta' ? 'அவசர சிகிச்சை & ஆம்புலன்ஸ்' : currentLang === 'hi' ? 'आपातकालीन चिकित्सा एवं एम्बुलेंस' : 'Government Hospitals & Trauma Care'}</div>
          <h4 class="facility-title">${currentLang === 'ta' ? 'தேசிய ஆம்புலன்ஸ் சேவை (108 / 102)' : currentLang === 'hi' ? 'राष्ट्रीय एम्बुलेंस सेवा (108 / 102)' : 'National Emergency Medical Ambulance (108 / 102)'}</h4>
          <p class="facility-desc">${currentLang === 'ta' ? 'அரசு மாவட்ட மருத்துவமனை மற்றும் அவசர சிகிச்சை பிரிவுகளுக்கு விரைவு ஆம்புலன்ஸ்.' : currentLang === 'hi' ? 'जिला अस्पताल और आपातकालीन ट्रॉमा केंद्रों के लिए 24x7 सरकारी एम्बुलेंस।' : 'Government toll-free medical triage and emergency transit to verified district hospitals.'}</p>
          <a href="tel:108" class="btn btn-outline btn-sm facility-btn" aria-label="Call 108 for Emergency Ambulance">
            <svg viewBox="0 0 24 24" fill="currentColor" style="width:14px;height:14px;"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
            <span>${currentLang === 'ta' ? 'ஆம்புலன்ஸை அழைக்க 108' : currentLang === 'hi' ? 'एम्बुलेंस हेतु डायल करें 108' : 'Dial 108 (Ambulance)'}</span>
          </a>
        </div>
      </div>

      <div class="facility-card">
        <div class="facility-icon-wrap icon-shelter">🏛️</div>
        <div class="facility-body">
          <div class="facility-eyebrow">${currentLang === 'ta' ? 'அங்கீகரிக்கப்பட்ட பேரிடர் முகாம்கள்' : currentLang === 'hi' ? 'नामित आपदा राहत शिविर' : 'Official Relief Shelters'}</div>
          <h4 class="facility-title">${currentLang === 'ta' ? 'மாவட்ட பேரிடர் மேலாண்மை ஆணையம் (1077)' : currentLang === 'hi' ? 'जिला आपदा प्रबंधन प्राधिकरण (1077)' : 'District Disaster Management (1077 / 1078)'}</h4>
          <p class="facility-desc">${currentLang === 'ta' ? 'புயல், வெள்ள காலங்களில் அரசு அறிவித்த அதிகாரப்பூர்வ நிவாரண முகாம்கள் விவரங்களை பெற.' : currentLang === 'hi' ? 'बाढ़ या चक्रवात के दौरान आधिकारिक रूप से नामित सरकारी राहत शिविरों की जानकारी हेतु।' : 'Direct access to district magistrate control rooms for officially designated relief camps.'}</p>
          <a href="tel:1078" class="btn btn-outline btn-sm facility-btn" aria-label="Call 1078 for Disaster Response">
            <svg viewBox="0 0 24 24" fill="currentColor" style="width:14px;height:14px;"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
            <span>${currentLang === 'ta' ? 'பேரிடர் மையத்திற்கு 1078' : currentLang === 'hi' ? 'आपदा केंद्र हेतु 1078' : 'Dial 1078 (NDMA)'}</span>
          </a>
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// 9. Open-Meteo Dynamic Geocoding & Weather Connection
// ============================================================================

// HTML Entity Escaper for safe rendering
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Debounced typing handler for location search input
function handleSearchInputChange(e) {
  const query = e.target.value.trim();
  const clearBtn = document.getElementById('clear-search-btn');
  if (clearBtn) clearBtn.style.display = query ? 'block' : 'none';

  if (searchDebounceTimer) {
    clearTimeout(searchDebounceTimer);
  }

  if (query.length < 2) {
    if (activeGeocodingAbortController) {
      activeGeocodingAbortController.abort();
      activeGeocodingAbortController = null;
    }
    const spinner = document.getElementById('search-spinner');
    if (spinner) spinner.classList.add('hidden');
    hideSearchDropdown();
    return;
  }

  searchDebounceTimer = setTimeout(() => {
    performGeocodingSearch(query, false);
  }, 300);
}

// Keyboard navigation (ArrowUp, ArrowDown, Enter, Escape)
function handleSearchInputKeydown(e) {
  const dropdown = document.getElementById('search-results-dropdown');
  const isDropdownOpen = dropdown && !dropdown.classList.contains('hidden');

  if (e.key === 'ArrowDown') {
    if (!isDropdownOpen && currentSearchResults.length > 0) {
      dropdown.classList.remove('hidden');
    }
    if (isDropdownOpen && currentSearchResults.length > 0) {
      e.preventDefault();
      highlightedResultIndex = (highlightedResultIndex + 1) % currentSearchResults.length;
      updateDropdownHighlight();
    }
  } else if (e.key === 'ArrowUp') {
    if (isDropdownOpen && currentSearchResults.length > 0) {
      e.preventDefault();
      highlightedResultIndex = (highlightedResultIndex - 1 + currentSearchResults.length) % currentSearchResults.length;
      updateDropdownHighlight();
    }
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (isDropdownOpen && highlightedResultIndex >= 0 && currentSearchResults[highlightedResultIndex]) {
      selectGeocodingResult(currentSearchResults[highlightedResultIndex]);
    } else {
      handleSearchSubmit();
    }
  } else if (e.key === 'Escape') {
    hideSearchDropdown();
  }
}

// Visual highlight updater
function updateDropdownHighlight() {
  const dropdown = document.getElementById('search-results-dropdown');
  if (!dropdown) return;
  const items = dropdown.querySelectorAll('.geo-result-item');
  items.forEach((item, idx) => {
    if (idx === highlightedResultIndex) {
      item.classList.add('highlighted');
      item.scrollIntoView({ block: 'nearest' });
    } else {
      item.classList.remove('highlighted');
    }
  });
}

function highlightDropdownItem(index) {
  highlightedResultIndex = index;
  updateDropdownHighlight();
}

// Fetch matching Indian locations from Open-Meteo Geocoding API
async function performGeocodingSearch(query, isAutoSubmit = false) {
  const dropdown = document.getElementById('search-results-dropdown');
  const spinner = document.getElementById('search-spinner');

  const trimmed = (query || '').trim();
  if (trimmed.length < 2) {
    if (spinner) spinner.classList.add('hidden');
    showDropdownMessage('min_chars', translations[currentLang].search_min_chars || 'Please enter at least 2 characters');
    return;
  }

  // Abort any pending older request to prevent race conditions (Requirement 8)
  if (activeGeocodingAbortController) {
    activeGeocodingAbortController.abort();
  }
  activeGeocodingAbortController = new AbortController();

  const requestId = ++activeSearchRequestId;

  if (spinner) spinner.classList.remove('hidden');
  showDropdownLoading();

  // Open-Meteo Geocoding API with search term, count limit, and countryCode=IN (Requirement 2 & 3)
  const endpoint = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(trimmed)}&count=6&countryCode=IN`;

  try {
    const response = await fetch(endpoint, {
      signal: activeGeocodingAbortController.signal,
      headers: { 'Accept': 'application/json' }
    });

    if (!response.ok) {
      throw new Error(`Open-Meteo Geocoding returned HTTP ${response.status}`);
    }

    const data = await response.json();

    // Check if this request is still the newest one (Requirement 8)
    if (requestId !== activeSearchRequestId) {
      return;
    }

    if (spinner) spinner.classList.add('hidden');

    const results = data.results || [];
    currentSearchResults = results;
    highlightedResultIndex = -1;

    if (results.length === 0) {
      showDropdownNoResults(trimmed);
      if (isAutoSubmit) {
        showErrorState(trimmed);
      }
    } else {
      renderGeocodingResults(results);

      // If user hit Enter or clicked Search directly and results exist, select top match
      if (isAutoSubmit && results.length > 0) {
        selectGeocodingResult(results[0]);
      }
    }
  } catch (error) {
    if (error.name === 'AbortError') {
      return; // Aborted by newer request, ignore safely
    }

    if (requestId !== activeSearchRequestId) {
      return;
    }

    if (spinner) spinner.classList.add('hidden');
    console.error('Open-Meteo Geocoding Error:', error);
    showDropdownError(error.message);
    if (isAutoSubmit) {
      showErrorState(`Open-Meteo Geocoding API failed: ${error.message}. Please check your connection.`);
    }
  }
}

// Render dynamic results list in dropdown (Requirement 4)
function renderGeocodingResults(results) {
  const dropdown = document.getElementById('search-results-dropdown');
  if (!dropdown) return;

  dropdown.innerHTML = '';
  dropdown.classList.remove('hidden');

  results.forEach((res, index) => {
    const item = document.createElement('div');
    item.className = 'geo-result-item';
    item.setAttribute('role', 'option');
    item.setAttribute('tabindex', '0');
    item.setAttribute('data-index', index);

    const admin = res.admin1 || res.admin2 || '';
    const country = res.country || 'India';
    const lat = typeof res.latitude === 'number' ? res.latitude.toFixed(2) : res.latitude;
    const lon = typeof res.longitude === 'number' ? res.longitude.toFixed(2) : res.longitude;
    const elev = res.elevation != null ? `${Math.round(res.elevation)}m` : '';

    item.innerHTML = `
      <div class="geo-result-main">
        <div class="geo-result-header">
          <span class="geo-pin-icon">📍</span>
          <span class="geo-place-name">${escapeHtml(res.name)}</span>
          <span class="geo-country-badge">${escapeHtml(country)}</span>
        </div>
        <div class="geo-admin-region">${escapeHtml(admin ? `${admin}, ${country}` : country)}</div>
      </div>
      <div class="geo-result-meta-right">
        <span class="coord-tag">${lat}°N, ${lon}°E</span>
        ${elev ? `<span class="elevation-tag">${elev}</span>` : ''}
      </div>
    `;

    item.addEventListener('click', () => {
      selectGeocodingResult(res);
    });

    item.addEventListener('mouseenter', () => {
      highlightDropdownItem(index);
    });

    dropdown.appendChild(item);
  });
}

// Show loading in dropdown (Requirement 7)
function showDropdownLoading() {
  const dropdown = document.getElementById('search-results-dropdown');
  if (!dropdown) return;
  dropdown.innerHTML = `
    <div class="geo-status-item geo-loading">
      <div class="geo-small-spinner"></div>
      <span>${escapeHtml(translations[currentLang].search_loading_geo || 'Searching Indian locations via Open-Meteo...')}</span>
    </div>
  `;
  dropdown.classList.remove('hidden');
}

// Show no results in dropdown (Requirement 7)
function showDropdownNoResults(query) {
  const dropdown = document.getElementById('search-results-dropdown');
  if (!dropdown) return;
  dropdown.innerHTML = `
    <div class="geo-status-item geo-empty">
      <span class="geo-status-icon">🔍</span>
      <div>
        <strong>${escapeHtml(translations[currentLang].search_no_results || 'No matching locations found in India for')} "${escapeHtml(query)}"</strong>
        <p>Please check spelling or try another Indian city, district, or tourist hub.</p>
      </div>
    </div>
  `;
  dropdown.classList.remove('hidden');
}

// Show network error in dropdown (Requirement 7 & 12)
function showDropdownError(message) {
  const dropdown = document.getElementById('search-results-dropdown');
  if (!dropdown) return;
  dropdown.innerHTML = `
    <div class="geo-status-item geo-error">
      <span class="geo-status-icon">⚠️</span>
      <div>
        <strong>${escapeHtml(translations[currentLang].search_geo_error || 'Unable to connect to Open-Meteo Geocoding service.')}</strong>
        <p>${escapeHtml(message || 'Network request failed. Please check your internet connectivity.')}</p>
      </div>
    </div>
  `;
  dropdown.classList.remove('hidden');
}

// Show informational message in dropdown
function showDropdownMessage(type, text) {
  const dropdown = document.getElementById('search-results-dropdown');
  if (!dropdown) return;
  dropdown.innerHTML = `
    <div class="geo-status-item geo-info">
      <span class="geo-status-icon">ℹ️</span>
      <span>${escapeHtml(text)}</span>
    </div>
  `;
  dropdown.classList.remove('hidden');
}

// Hide dropdown
function hideSearchDropdown() {
  const dropdown = document.getElementById('search-results-dropdown');
  if (dropdown) {
    dropdown.classList.add('hidden');
    dropdown.innerHTML = '';
  }
  highlightedResultIndex = -1;
}

// Select a location result (Requirement 5 & 6)
function selectGeocodingResult(result) {
  // Store selected location in JavaScript state (Requirement 6)
  selectedLocationState.name = result.name;
  selectedLocationState.latitude = Number(result.latitude);
  selectedLocationState.longitude = Number(result.longitude);
  selectedLocationState.admin1 = result.admin1 || '';
  selectedLocationState.admin2 = result.admin2 || '';
  selectedLocationState.country = result.country || 'India';
  selectedLocationState.countryCode = result.country_code || 'IN';
  selectedLocationState.elevation = result.elevation != null ? Number(result.elevation) : null;
  selectedLocationState.timezone = result.timezone || 'Asia/Kolkata';
  selectedLocationState.source = 'geocoding-api.open-meteo.com';

  hideSearchDropdown();

  // Update input text
  const input = document.getElementById('city-search-input');
  if (input) {
    const admin = result.admin1 ? `, ${result.admin1}` : '';
    input.value = `${result.name}${admin}`;
  }

  // Connect location to dashboard (Requirement 11)
  connectLocationToDashboard(selectedLocationState);
}

// Search submit handler (Enter key or Search button)
function handleSearchSubmit() {
  const input = document.getElementById('city-search-input');
  if (!input) return;
  const rawQuery = input.value.trim();

  if (!rawQuery || rawQuery.length < 2) {
    showToast(
      translations[currentLang].search_min_chars || 'Please enter at least 2 characters to search Indian locations.',
      '⚠️'
    );
    showDropdownMessage('min_chars', translations[currentLang].search_min_chars || 'Please enter at least 2 characters');
    return;
  }

  // Trigger immediate search
  if (searchDebounceTimer) {
    clearTimeout(searchDebounceTimer);
  }
  performGeocodingSearch(rawQuery, true);
}

/// Connect selected location to existing dashboard (Requirement 6 & 11)
async function connectLocationToDashboard(locState) {
  hideErrorState();
  const loadingState = document.getElementById('loading-state');
  const dashboard = document.getElementById('weather-dashboard');
  const alertsSection = document.getElementById('emergency-alerts');

  // Abort any ongoing weather request to prevent race conditions
  if (activeForecastAbortController) {
    activeForecastAbortController.abort();
  }
  activeForecastAbortController = new AbortController();
  const thisReqId = ++activeForecastRequestId;

  // Sync selectedLocationState immediately
  if (selectedLocationState) {
    selectedLocationState.name = locState.name;
    selectedLocationState.latitude = Number(locState.latitude);
    selectedLocationState.longitude = Number(locState.longitude);
    selectedLocationState.admin1 = locState.admin1 || '';
    selectedLocationState.admin2 = locState.admin2 || '';
    selectedLocationState.country = locState.country || 'India';
    selectedLocationState.countryCode = locState.countryCode || 'IN';
    selectedLocationState.elevation = locState.elevation != null ? Number(locState.elevation) : null;
    selectedLocationState.source = locState.source || 'geocoding-api.open-meteo.com';
  }

  // Update header immediately
  const cityNameEl = document.getElementById('current-city-name');
  const stateNameEl = document.getElementById('current-state-name');
  const terrainEl = document.getElementById('current-terrain');
  const coordsEl = document.getElementById('current-coordinates');
  const timeEl = document.getElementById('current-timestamp');

  if (cityNameEl) cityNameEl.textContent = locState.name;
  if (stateNameEl) stateNameEl.textContent = `${locState.admin1 ? locState.admin1 + ', ' : ''}${locState.country || 'India'}`;
  if (coordsEl) coordsEl.textContent = `${Number(locState.latitude).toFixed(2)}°N, ${Number(locState.longitude).toFixed(2)}°E`;
  if (timeEl) {
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' IST (Open-Meteo)';
  }
  if (terrainEl) {
    const elev = locState.elevation != null ? `${Math.round(locState.elevation)}m Elevation` : 'Regional Terrain';
    const zone = locState.latitude > 28 ? 'Northern India' : locState.latitude > 20 ? 'Central India' : 'Southern India';
    terrainEl.textContent = `${elev} • ${zone}`;
  }

  // Render initial transition state for Safe Journey Shield and Safe Zones immediately
  renderSafeJourneyShield();
  renderSafeZones(getActiveLocationState());

  if (loadingState) loadingState.classList.remove('hidden');
  if (dashboard) dashboard.style.opacity = '0.35';
  if (alertsSection) alertsSection.style.opacity = '0.35';

  const forecastUrl = `https://api.open-meteo.com/v1/forecast?latitude=${locState.latitude}&longitude=${locState.longitude}&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,wind_direction_10m,weather_code,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`;

  try {
    const response = await fetch(forecastUrl, { signal: activeForecastAbortController.signal });
    if (!response.ok) {
      throw new Error(`Open-Meteo Weather API returned HTTP ${response.status}`);
    }

    const data = await response.json();
    if (thisReqId !== activeForecastRequestId) {
      return; // A newer request was initiated; discard this stale payload
    }

    const current = data.current;
    const daily = data.daily || {};

    if (!current) {
      throw new Error('Current weather payload unavailable from Open-Meteo');
    }

    // WMO interpretation & Compass Direction
    const wmo = interpretWmoWeatherCode(current.weather_code);
    const windDirection = getCompassDirection(current.wind_direction_10m);

    // Hazard evaluation
    const hazard = evaluateHazard(current, wmo, locState);

    // Dynamic rain probability from Open-Meteo daily telemetry
    const rainProb = (daily.precipitation_probability_max && daily.precipitation_probability_max[0] != null)
      ? Math.round(daily.precipitation_probability_max[0])
      : (current.precipitation > 0 ? 90 : (wmo.type === 'rain' || wmo.type === 'storm') ? 70 : 15);

    // Build unified dynamic city model
    const dynamicCity = {
      id: locState.name.toLowerCase().replace(/\s+/g, '-'),
      name: { en: locState.name, ta: locState.name, hi: locState.name },
      state: {
        en: `${locState.admin1 ? locState.admin1 + ', ' : ''}${locState.country || 'India'}`,
        ta: `${locState.admin1 ? locState.admin1 + ', ' : ''}${locState.country || 'இந்தியா'}`,
        hi: `${locState.admin1 ? locState.admin1 + ', ' : ''}${locState.country || 'भारत'}`
      },
      terrain: {
        en: `${locState.elevation != null ? Math.round(locState.elevation) + 'm Elevation' : 'Regional Terrain'} • ${locState.latitude > 28 ? 'Northern India' : locState.latitude > 20 ? 'Central India' : 'Southern India'}`,
        ta: `${locState.elevation != null ? Math.round(locState.elevation) + 'மீ உயரம்' : 'பிராந்திய நிலப்பரப்பு'} • ${locState.latitude > 28 ? 'வட இந்தியா' : locState.latitude > 20 ? 'மத்திய இந்தியா' : 'தென் இந்தியா'}`,
        hi: `${locState.elevation != null ? Math.round(locState.elevation) + 'मी ऊंचाई' : 'क्षेत्रीय भूभाग'} • ${locState.latitude > 28 ? 'उत्तर भारत' : locState.latitude > 20 ? 'मध्य भारत' : 'दक्षिण भारत'}`
      },
      coordinates: {
        lat: Number(locState.latitude),
        lon: Number(locState.longitude)
      },
      elevation: locState.elevation != null ? Number(locState.elevation) : null,
      weather: {
        temp: Math.round(current.temperature_2m),
        feelsLike: Math.round(current.apparent_temperature != null ? current.apparent_temperature : current.temperature_2m),
        tempMin: daily.temperature_2m_min && daily.temperature_2m_min[0] != null ? Math.round(daily.temperature_2m_min[0]) : Math.round(current.temperature_2m - 4),
        tempMax: daily.temperature_2m_max && daily.temperature_2m_max[0] != null ? Math.round(daily.temperature_2m_max[0]) : Math.round(current.temperature_2m + 4),
        condition: wmo.label,
        conditionType: wmo.type,
        humidity: Math.round(current.relative_humidity_2m),
        dewPoint: Math.round(current.temperature_2m - ((100 - current.relative_humidity_2m) / 5)),
        humidityStatus: current.relative_humidity_2m > 85 ? { en: "High Moisture / Saturated", ta: "அதி ஈரப்பதம்", hi: "अत्यधिक नमी" } : current.relative_humidity_2m < 30 ? { en: "Dry Atmosphere", ta: "வறண்ட நிலை", hi: "शुष्क वातावरण" } : { en: "Balanced Comfort", ta: "இதமான ஈரப்பதம்", hi: "संतुलित नमी" },
        rainfall: current.precipitation != null ? current.precipitation : 0,
        rainProbability: rainProb,
        rainIntensity: current.precipitation > 20 ? { en: "Severe Downpour", ta: "கனமழை", hi: "मूसलाधार बारिश" } : current.precipitation > 5 ? { en: "Moderate Showers", ta: "மிதமான மழை", hi: "मध्यम बारिश" } : current.precipitation > 0 ? { en: "Light Drizzle", ta: "லேசான தூறல்", hi: "हल्की फुहारें" } : { en: "No Rainfall", ta: "மழை இல்லை", hi: "वर्षा नहीं" },
        windSpeed: Math.round(current.wind_speed_10m),
        windDirection: windDirection,
        windGust: current.wind_speed_10m > 40 ? { en: "High Gale Winds", ta: "கடும் காற்று", hi: "तेज आंधी" } : current.wind_speed_10m > 25 ? { en: "Brisk Gusts", ta: "வேகமான காற்று", hi: "मध्यम हवा" } : { en: "Gentle Breeze", ta: "மென்மையான காற்று", hi: "मंद बयार" },
        aqi: locState.latitude > 28 ? 145 : 35,
        aqiText: locState.latitude > 28 ? { en: "145 (Moderate Urban Smog)", ta: "145 (மிதமான மாசு)", hi: "145 (मध्यम स्मॉग)" } : { en: "35 (Good Clean Air)", ta: "35 (தூய காற்று)", hi: "35 (स्वच्छ हवा)" },
        uv: current.temperature_2m > 35 ? 9 : 4,
        uvText: current.temperature_2m > 35 ? { en: "9 of 11 (Very High Sun)", ta: "9/11 (அதிக வெயில்)", hi: "9/11 (तीव्र धूप)" } : { en: "4 of 11 (Moderate Sun)", ta: "4/11 (மிதமான வெயில்)", hi: "4/11 (मध्यम धूप)" },
        activityFeasibility: hazard.feasibility
      },
      hazardLevel: hazard.level,
      hazardBadge: hazard.badge,
      hazardSummary: hazard.summary,
      alerts: hazard.alerts
    };

    currentCity = dynamicCity;
    renderActiveCity(currentCity);
    renderAlerts(currentCity, currentFilter);
    renderSafeJourneyShield();
    renderSafeZones(getActiveLocationState());

    if (loadingState) loadingState.classList.add('hidden');
    if (dashboard) dashboard.style.opacity = '1';
    if (alertsSection) alertsSection.style.opacity = '1';

    showToast(`📍 ${locState.name}: Live Open-Meteo telemetry loaded`, '☁️');

    // Scroll to dashboard smoothly
    dashboard.scrollIntoView({ behavior: 'smooth' });

  } catch (error) {
    if (error.name === 'AbortError') {
      return; // Request was aborted due to newer user action
    }
    if (loadingState) loadingState.classList.add('hidden');
    if (dashboard) dashboard.style.opacity = '1';
    if (alertsSection) alertsSection.style.opacity = '1';

    console.error('Failed to connect to Open-Meteo Forecast:', error);
    showToast(`Open-Meteo Error: ${error.message}`, '⚠️');
    showErrorState(`Unable to retrieve live forecast for ${locState.name} from Open-Meteo: ${error.message}. Please check your internet connectivity.`);
  }
}

// Weather Code & Hazard Helpers
function interpretWmoWeatherCode(code) {
  if (code === 0) {
    return {
      type: 'sun',
      label: { en: "Clear Sky / Sunny", ta: "தெளிவான வானம் / வெயில்", hi: "साफ आसमान / धूप" }
    };
  }
  if (code >= 1 && code <= 3) {
    return {
      type: 'cloud',
      label: { en: "Partly Cloudy to Overcast", ta: "பகுதி மேகமூட்டம்", hi: "आंशिक रूप से बादल" }
    };
  }
  if (code === 45 || code === 48) {
    return {
      type: 'cloud',
      label: { en: "Dense Fog / Low Visibility", ta: "அடர்ந்த பனிமூட்டம்", hi: "घना कोहरा" }
    };
  }
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) {
    return {
      type: 'rain',
      label: { en: "Rain / Downpour Showers", ta: "மழைப்பொழிவு", hi: "वर्षा / बौछारें" }
    };
  }
  if (code >= 71 && code <= 77) {
    return {
      type: 'cloud',
      label: { en: "Snowfall & Sub-zero Chill", ta: "பனிப்பொழிவு", hi: "बर्फबारी और ठंड" }
    };
  }
  if (code >= 95) {
    return {
      type: 'storm',
      label: { en: "Severe Thunderstorm & Squall", ta: "இடி மின்னலுடன் கூடிய மழை", hi: "आंधी और गरज के साथ बारिश" }
    };
  }
  return {
    type: 'cloud',
    label: { en: "Overcast Atmosphere", ta: "மேகமூட்டமான வானிலை", hi: "बादल छाए हुए" }
  };
}

function getCompassDirection(deg) {
  if (deg == null) return { en: "Variable", ta: "மாறும் காற்று", hi: "परिवर्तनशील" };
  const val = Math.floor((deg / 45) + 0.5) % 8;
  const dirs = [
    { en: "North (N)", ta: "வடக்கு (N)", hi: "उत्तर (N)" },
    { en: "North-East (NE)", ta: "வடகிழக்கு (NE)", hi: "उत्तर-पूर्व (NE)" },
    { en: "East (E)", ta: "கிழக்கு (E)", hi: "पूर्व (E)" },
    { en: "South-East (SE)", ta: "தென்கிழக்கு (SE)", hi: "दक्षिण-पूर्व (SE)" },
    { en: "South (S)", ta: "தெற்கு (S)", hi: "दक्षिण (S)" },
    { en: "South-West (SW)", ta: "தென்மேற்கு (SW)", hi: "दक्षिण-पश्चिम (SW)" },
    { en: "West (W)", ta: "மேற்கு (W)", hi: "पश्चिम (W)" },
    { en: "North-West (NW)", ta: "வடமேற்கு (NW)", hi: "उत्तर-पश्चिम (NW)" }
  ];
  return dirs[val];
}

function evaluateHazard(current, wmo, loc) {
  const temp = current.temperature_2m;
  const rain = current.precipitation || 0;
  const wind = current.wind_speed_10m || 0;
  const code = current.weather_code || 0;

  // Check if we have curated preset alerts for this city name
  const existingPreset = citiesData.find((c) => c.id === loc.name.toLowerCase() || (c.name.en || '').toLowerCase() === loc.name.toLowerCase());
  if (existingPreset && existingPreset.alerts && existingPreset.alerts.length > 0) {
    return {
      level: existingPreset.hazardLevel,
      badge: existingPreset.hazardBadge,
      summary: existingPreset.hazardSummary,
      feasibility: existingPreset.weather.activityFeasibility,
      alerts: existingPreset.alerts
    };
  }

  // Dynamic Hazard Assessment based on live parameters
  if (temp >= 40) {
    return {
      level: 'danger',
      badge: { en: "SEVERE HEATWAVE ADVISORY", ta: "கடும் வெப்ப அலை எச்சரிக்கை", hi: "भीषण लू चेतावनी" },
      summary: {
        en: `High ambient temperature (${temp}°C) recorded for ${loc.name}. Acute heat exhaustion risk during afternoon travel.`,
        ta: `${loc.name} பகுதியில் கடும் வெப்பம் (${temp}°C). மதிய நேரப் பயணங்களில் வெப்ப பக்கவாத ஆபத்து.`,
        hi: `${loc.name} में अत्यधिक तापमान (${temp}°C)। दोपहर में यात्रा के दौरान लू का गंभीर खतरा।`
      },
      feasibility: { en: "Avoid Midday Outdoors (12 PM – 4 PM)", ta: "மதிய வேளையில் வெளியே செல்வதைத் தவிர்க்கவும்", hi: "दोपहर 12 से 4 बजे तक धूप से बचें" },
      alerts: [
        {
          id: `dyn-heat-${loc.name}`,
          severity: 'high',
          title: { en: `Peak Heat Alert for ${loc.name}`, ta: `${loc.name} கடும் வெப்ப எச்சரிக்கை`, hi: `${loc.name} भीषण गर्मी का अलर्ट` },
          zone: { en: `${loc.admin1 || loc.name} Metropolitan & Open Plains`, ta: `${loc.admin1 || loc.name} சமவெளி பகுதி`, hi: `${loc.admin1 || loc.name} मैदानी क्षेत्र` },
          time: { en: "Observed Live via Open-Meteo • Valid 12 hrs", ta: "நேரலை ஓபன்-மீட்டியோ தரவு", hi: "ओपन-मीटियो लाइव अवलोकन" },
          source: { en: "Open-Meteo Live API Telemetry & TouristSafe Engine", ta: "ஓபன்-மீட்டியோ நேரலை சேவை", hi: "ओपन-मीटियो लाइव टेलीमेट्री" },
          desc: {
            en: `Real-time temperature of ${temp}°C detected. Direct solar exposure causes rapid dehydration and thermal stress.`,
            ta: `தற்போதைய வெப்பநிலை ${temp}°C. நேரடி வெயில் நீர்ச்சத்து குறைவையும் உடல் சோர்வையும் ஏற்படுத்தும்.`,
            hi: `वर्तमान तापमान ${temp}°C दर्ज किया गया। सीधी धूप में निकलने से डिहाइड्रेशन हो सकता है।`
          },
          precautions: [
            { en: "Drink oral rehydration salts (ORS) or electrolyte water frequently.", ta: "தொடர்ந்து ORS அல்லது எலெக்ட்ரோலைட் தண்ணீர் குடிக்கவும்.", hi: "ओआरएस और नींबू पानी का लगातार सेवन करें।" },
            { en: "Wear light breathable cotton fabrics and protective headwear.", ta: "பருத்தி ஆடைகள் மற்றும் தொப்பிகளை அணியவும்.", hi: "सूती कपड़े और सिर ढकने के लिए टोपी पहनें।" }
          ]
        }
      ]
    };
  }

  if (rain >= 15 || code >= 95) {
    return {
      level: 'danger',
      badge: { en: "HEAVY PRECIPITATION / SQUALL WATCH", ta: "கனமழை / புயல் எச்சரிக்கை", hi: "भारी वर्षा / आंधी अलर्ट" },
      summary: {
        en: `Active precipitation (${rain}mm) and squall conditions over ${loc.name}. Potential urban waterlogging and slippery roads.`,
        ta: `${loc.name} பகுதியில் தொடர் மழை (${rain}மி.மீ). சாலைகளில் நீர் தேங்குதல் மற்றும் வழுக்கல் அபாயம்.`,
        hi: `${loc.name} में सक्रिय वर्षा (${rain} मिमी)। सड़कों पर जलभराव और फिसलन की संभावना।`
      },
      feasibility: { en: "Carry Rain Gear; Road Caution", ta: "மழைப் பாதுகாப்பு உடைகள் தேவை", hi: "छाता साथ रखें; सड़क पर सावधानी" },
      alerts: [
        {
          id: `dyn-rain-${loc.name}`,
          severity: 'high',
          title: { en: `Downpour & Storm Advisory: ${loc.name}`, ta: `கனமழை மற்றும் இடி மின்னல் ஆலோசனை`, hi: `मूसलाधार बारिश एवं आंधी सलाह` },
          zone: { en: `${loc.name} Drainage Basins & Lowland Highways`, ta: `${loc.name} தாழ்வான பகுதிகள்`, hi: `${loc.name} निचले इलाके` },
          time: { en: "Observed Live via Open-Meteo • Ongoing", ta: "நேரலை ஓபன்-மீட்டியோ தரவு", hi: "ओपन-मीटियो लाइव अवलोकन" },
          source: { en: "Open-Meteo Live API Telemetry & TouristSafe Engine", ta: "ஓபன்-மீட்டியோ நேரலை சேவை", hi: "ओपन-मीटियो लाइव टेलीमेट्री" },
          desc: {
            en: `High rainfall intensity detected with squally weather. Low-lying transit underpasses may face sudden submergence.`,
            ta: `தீவிர மழைப்பொழிவு பதிவு செய்யப்பட்டுள்ளது. தாழ்வான சுரங்கப்பாதைகளில் நீர் தேங்க வாய்ப்புள்ளது.`,
            hi: `तेज बारिश दर्ज की गई है। निचले अंडरपास में अचानक जलभराव हो सकता है।`
          },
          precautions: [
            { en: "Avoid driving through standing puddles or submerged underpasses.", ta: "தேங்கிய நீரில் வாகனங்களை இயக்க வேண்டாம்.", hi: "जलभराव वाले रास्तों पर गाड़ी न ले जाएं।" },
            { en: "Stay indoors during peak thunder and lightning episodes.", ta: "இடி மின்னல் நேரத்தில் பாதுகாப்பான கட்டிடங்களுக்குள் இருக்கவும்.", hi: "बिजली कड़कने के दौरान सुरक्षित स्थान पर रहें।" }
          ]
        }
      ]
    };
  }

  if (wind >= 30) {
    return {
      level: 'warning',
      badge: { en: "GALE WIND ADVISORY", ta: "கடும் காற்றழுத்த எச்சரிக்கை", hi: "तेज हवा चेतावनी" },
      summary: {
        en: `High wind velocities (${wind} km/h) recorded in ${loc.name}. Marine and high-altitude activities subject to turbulence.`,
        ta: `${loc.name} பகுதியில் மணிக்கு ${wind} கி.மீ வேகத்தில் காற்று. படகு சவாரி மற்றும் மலையேற்றத்தில் எச்சரிக்கை.`,
        hi: `${loc.name} में तेज हवाएं (${wind} किमी/घंटा)। नौकायन और ऊंचाई वाली गतिविधियों में सावधानी बरतें।`
      },
      feasibility: { en: "Boating & High Altitude Treks Restricted", ta: "படகு சவாரிக்குக் கட்டுப்பாடு", hi: "बोटिंग और ट्रैकिंग में सावधानी" },
      alerts: [
        {
          id: `dyn-wind-${loc.name}`,
          severity: 'moderate',
          title: { en: `Wind Gust Advisory for ${loc.name}`, ta: `காற்று வேக எச்சரிக்கை`, hi: `तेज हवा के झोंकों की सलाह` },
          zone: { en: `${loc.name} Ridge Lines & Open Waterfronts`, ta: `${loc.name} திறந்தவெளி பகுதிகள்`, hi: `${loc.name} खुले क्षेत्र` },
          time: { en: "Observed Live via Open-Meteo • Valid 6 hrs", ta: "நேரலை ஓபன்-மீட்டியோ தரவு", hi: "ओपन-मीटियो लाइव अवलोकन" },
          source: { en: "Open-Meteo Live API Telemetry & TouristSafe Engine", ta: "ஓபன்-மீட்டியோ நேரலை சேவை", hi: "ओपन-मीटियो लाइव टेलीमेट्री" },
          desc: {
            en: `Wind gusts touching ${wind} km/h. Unsecured hoardings and small marine watercraft face instability.`,
            ta: `காற்று மணிக்கு ${wind} கி.மீ வேகத்தில் வீசுகிறது. படகுகள் நிலைத்தன்மையை இழக்கலாம்.`,
            hi: `हवा की गति ${wind} किमी/घंटा तक पहुंच रही है। छोटी नौकाओं के लिए जोखिम।`
          },
          precautions: [
            { en: "Secure loose baggage on open rooftop tourist buses and jeeps.", ta: "திறந்த வாகனங்களில் உடமைகளைப் பாதுகாப்பாக வைக்கவும்.", hi: "खुली गाड़ियों में सामान सुरक्षित रखें।" }
          ]
        }
      ]
    };
  }

  if (temp <= 4) {
    return {
      level: 'warning',
      badge: { en: "SUB-ZERO COLD WAVE CAUTION", ta: "குளிர் அலை எச்சரிக்கை", hi: "शीत लहर चेतावनी" },
      summary: {
        en: `Freezing temperatures (${temp}°C) recorded for ${loc.name}. Cold injury risk and possible frost on elevated roads.`,
        ta: `${loc.name} பகுதியில் கடும் உறைபனி (${temp}°C). கம்பளி ஆடைகள் அவசியம்.`,
        hi: `${loc.name} में कड़ाके की ठंड (${temp}°C)। सड़कों पर पाला जमने की संभावना।`
      },
      feasibility: { en: "Heavy Thermals Required", ta: "கம்பளி ஆடைகள் தேவை", hi: "भारी गर्म कपड़े पहनें" },
      alerts: [
        {
          id: `dyn-cold-${loc.name}`,
          severity: 'moderate',
          title: { en: `Freezing Chill Alert: ${loc.name}`, ta: `கடும் குளிர் ஆலோசனை`, hi: `कड़ाके की ठंड की सलाह` },
          zone: { en: `${loc.name} High Altitude & Shaded Slopes`, ta: `${loc.name} மலைப்பகுதி`, hi: `${loc.name} पर्वतीय क्षेत्र` },
          time: { en: "Observed Live via Open-Meteo • Valid overnight", ta: "நேரலை ஓபன்-மீட்டியோ தரவு", hi: "ओपन-मीटियो लाइव अवलोकन" },
          source: { en: "Open-Meteo Live API Telemetry & TouristSafe Engine", ta: "ஓபன்-மீட்டியோ நேரலை சேவை", hi: "ओपन-मीटियो लाइव टेलीमेट्री" },
          desc: {
            en: `Sub-zero nocturnal chill with ambient temperature at ${temp}°C. Hypothermia risk for unprepared campers.`,
            ta: `இரவில் வெப்பநிலை ${temp}°C ஆகக் குறைகிறது. முதியவர்கள் எச்சரிக்கையாக இருக்கவும்.`,
            hi: `तापमान ${temp}°C तक गिर गया है। रात में हाइपोथर्मिया का खतरा।`
          },
          precautions: [
            { en: "Dress in windproof multi-layered insulated thermals.", ta: "பல அடுக்கு கம்பளி ஆடைகளை அணியவும்.", hi: "विंडप्रूफ और गर्म कपड़े पहनें।" }
          ]
        }
      ]
    };
  }

  // Normal / Safe conditions
  return {
    level: 'safe',
    badge: { en: "FAVORABLE METEOROLOGICAL WINDOW", ta: "சாதகமான வானிலை சூழல்", hi: "अनुकूल पर्यटन मौसम" },
    summary: {
      en: `Favorable travel weather observed in ${loc.name} (${temp}°C, ${wmo.label.en}). Standard tourist precautions apply.`,
      ta: `${loc.name} பகுதியில் சாதகமான சுற்றுலா வானிலை (${temp}°C). பயணங்களுக்கு ஏற்ற சூழல்.`,
      hi: `${loc.name} में सुखद पर्यटन मौसम (${temp}°C)। यात्रा के लिए अनुकूल स्थिति।`
    },
    feasibility: { en: "Sightseeing & Outdoor Feasible", ta: "சுற்றுலாவுக்கு உகந்த சூழல்", hi: "पर्यटन के लिए अनुकूल स्थिति" },
    alerts: [
      {
        id: `dyn-safe-${loc.name}`,
        severity: 'advisory',
        title: { en: `General Travel Advisory for ${loc.name}`, ta: `வழக்கமான சுற்றுலா ஆலோசனை`, hi: `सामान्य यात्रा सलाह: ${loc.name}` },
        zone: { en: `${loc.name} City & Surrounding Tourist Spots`, ta: `${loc.name} சுற்றுலா தலங்கள்`, hi: `${loc.name} एवं प्रमुख पर्यटन स्थल` },
        time: { en: "Live Open-Meteo Telemetry • Clear Conditions", ta: "நேரலை ஓபன்-மீட்டியோ தரவு", hi: "ओपन-मीटियो लाइव अवलोकन" },
        source: { en: "Open-Meteo Telemetry & National Disaster Registry", ta: "ஓபன்-மீட்டியோ & பேரிடர் பதிவேடு", hi: "ओपन-मीटियो एवं राष्ट्रीय आपदा पोर्टल" },
        desc: {
          en: `Atmospheric telemetry indicates stable, benign weather conditions (${temp}°C, ${current.relative_humidity_2m}% humidity). No critical alerts active.`,
          ta: `வானிலை சீராகவும் சாதகமாகவும் உள்ளது. சுற்றுலாப் பயணங்கள் இயல்பாகத் தொடரலாம்.`,
          hi: `मौसम स्थिर और अनुकूल है (${temp}°C, ${current.relative_humidity_2m}% आर्द्रता)। कोई गंभीर खतरा नहीं।`
        },
        precautions: [
          { en: "Stay hydrated and carry local emergency contact 112 on speed dial.", ta: "112 எண்ணை மொபைலில் குறித்து வைத்துக்கொள்ளவும்.", hi: "पर्याप्त पानी पिएं और 112 नंबर सुरक्षित रखें।" },
          { en: "Follow local heritage site regulations and dispose of waste responsibly.", ta: "பாரம்பரிய இடங்களின் விதிமுறைகளைப் பின்பற்றவும்.", hi: "स्थानीय पर्यटन नियमों का पालन करें।" }
        ]
      }
    ]
  };
}

function showErrorState(query = '') {
  const errorBox = document.getElementById('error-state');
  const dashboard = document.getElementById('weather-dashboard');
  const alertsSection = document.getElementById('emergency-alerts');
  const safeZonesSection = document.getElementById('safe-zones');
  const errorMsg = document.getElementById('error-message');

  if (errorBox) {
    errorBox.classList.remove('hidden');
    if (query && errorMsg) {
      if (query.includes('Open-Meteo') || query.includes('HTTP') || query.includes('internet') || query.includes('Unable to')) {
        errorMsg.textContent = query;
      } else {
        errorMsg.textContent = `${translations[currentLang].error_msg} (Query: "${query}")`;
      }
    }
    errorBox.scrollIntoView({ behavior: 'smooth' });
  }
  if (dashboard) dashboard.classList.add('hidden');
  if (alertsSection) alertsSection.classList.add('hidden');
  if (safeZonesSection) safeZonesSection.classList.add('hidden');
}

function hideErrorState() {
  const errorBox = document.getElementById('error-state');
  const dashboard = document.getElementById('weather-dashboard');
  const alertsSection = document.getElementById('emergency-alerts');
  const safeZonesSection = document.getElementById('safe-zones');

  if (errorBox) errorBox.classList.add('hidden');
  if (dashboard) dashboard.classList.remove('hidden');
  if (alertsSection) alertsSection.classList.remove('hidden');
  if (safeZonesSection) safeZonesSection.classList.remove('hidden');
}

// ============================================================================
// 10. Web Audio API Simulated Siren Alarm
// ============================================================================
function toggleSirenAlarm() {
  const alarmBtn = document.getElementById('alarm-sound-btn');
  const labelEl = document.getElementById('alarm-btn-label');

  if (isSirenPlaying) {
    stopSiren();
    if (labelEl) labelEl.textContent = translations[currentLang].alarm_demo_btn;
    if (alarmBtn) alarmBtn.classList.remove('playing');
    showToast('Alert siren stopped', '🔇');
  } else {
    startSiren();
    if (labelEl) labelEl.textContent = translations[currentLang].alarm_stop_btn;
    if (alarmBtn) alarmBtn.classList.add('playing');
    showToast('Simulating emergency alert siren tone...', '🚨');
  }
}

function startSiren() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) {
      showToast('Web Audio not supported by this browser', '⚠️');
      return;
    }

    if (!audioCtx) {
      audioCtx = new AudioContext();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    sirenOscillator = audioCtx.createOscillator();
    sirenGain = audioCtx.createGain();

    sirenOscillator.type = 'sawtooth';
    sirenOscillator.frequency.setValueAtTime(650, audioCtx.currentTime);

    // Subtle volume so it doesn't hurt ears
    sirenGain.gain.setValueAtTime(0.08, audioCtx.currentTime);

    sirenOscillator.connect(sirenGain);
    sirenGain.connect(audioCtx.destination);
    sirenOscillator.start();
    isSirenPlaying = true;

    // Alternating two-tone emergency pitch
    let high = true;
    sirenInterval = setInterval(() => {
      if (!isSirenPlaying || !sirenOscillator) return;
      const targetFreq = high ? 920 : 650;
      sirenOscillator.frequency.setTargetAtTime(targetFreq, audioCtx.currentTime, 0.1);
      high = !high;
    }, 450);

    // Auto-stop after 8 seconds safety limit
    setTimeout(() => {
      if (isSirenPlaying) {
        toggleSirenAlarm();
      }
    }, 8000);

  } catch (err) {
    console.error('Audio synthesizer error:', err);
    showToast('Audio warning playback error', '⚠️');
  }
}

function stopSiren() {
  if (sirenInterval) {
    clearInterval(sirenInterval);
    sirenInterval = null;
  }
  if (sirenOscillator) {
    try {
      sirenOscillator.stop();
      sirenOscillator.disconnect();
    } catch (e) {
      // ignore
    }
    sirenOscillator = null;
  }
  isSirenPlaying = false;
}

// ============================================================================
// 11. Interactive Pre-Travel Checklist Logic
// ============================================================================
function setupChecklistListeners() {
  const checkboxes = document.querySelectorAll('#safety-checklist input[type="checkbox"]');
  checkboxes.forEach((cb) => {
    cb.addEventListener('change', () => {
      saveChecklist();
      updateChecklistCounter();
    });
  });

  const resetBtn = document.getElementById('reset-checklist-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      checkboxes.forEach((cb) => { cb.checked = false; });
      saveChecklist();
      updateChecklistCounter();
      showToast('Checklist reset', '📋');
    });
  }
}

function saveChecklist() {
  const checkboxes = document.querySelectorAll('#safety-checklist input[type="checkbox"]');
  const state = {};
  checkboxes.forEach((cb) => {
    state[cb.id] = cb.checked;
  });
  try {
    localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    // LocalStorage might be restricted
  }
}

function loadSavedChecklist() {
  try {
    const raw = localStorage.getItem(CHECKLIST_STORAGE_KEY);
    if (raw) {
      const state = JSON.parse(raw);
      Object.keys(state).forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.checked = state[id];
      });
    }
  } catch (e) {
    // LocalStorage ignored
  }
  updateChecklistCounter();
}

function updateChecklistCounter() {
  const checkboxes = document.querySelectorAll('#safety-checklist input[type="checkbox"]');
  const counterEl = document.getElementById('checklist-counter');
  if (!counterEl) return;

  let completed = 0;
  checkboxes.forEach((cb) => {
    if (cb.checked) completed++;
  });

  const total = checkboxes.length || 5;
  if (currentLang === 'ta') {
    counterEl.textContent = `${completed} / ${total} நிறைவு செய்யப்பட்டது`;
  } else if (currentLang === 'hi') {
    counterEl.textContent = `${completed} / ${total} पूर्ण हुआ`;
  } else {
    counterEl.textContent = `${completed} of ${total} Completed`;
  }
}

// ============================================================================
// 12. Modals, Toasts & General UI Event Listeners
// ============================================================================
function setupEventListeners() {
  // Search Form
  const searchForm = document.getElementById('search-form');
  const searchBtn = document.getElementById('search-btn');
  const searchInput = document.getElementById('city-search-input');
  const clearBtn = document.getElementById('clear-search-btn');

  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSearchSubmit();
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', handleSearchSubmit);
  }

  if (searchInput) {
    searchInput.addEventListener('input', handleSearchInputChange);
    searchInput.addEventListener('keydown', handleSearchInputKeydown);
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      clearBtn.style.display = 'none';
      hideSearchDropdown();
    });
  }

  // Close search dropdown on click outside
  document.addEventListener('click', (e) => {
    const searchWrap = document.querySelector('.search-form-wrap');
    if (searchWrap && !searchWrap.contains(e.target)) {
      hideSearchDropdown();
    }
  });

  // Detect GPS Location (Simulated)
  const gpsBtn = document.getElementById('gps-btn');
  if (gpsBtn) {
    gpsBtn.addEventListener('click', () => {
      showToast('Detecting location coordinates across India...', '📡');
      setTimeout(() => {
        const sampleHubs = [
          { name: 'Bengaluru', latitude: 12.9719, longitude: 77.5937, admin1: 'Karnataka', country: 'India' },
          { name: 'Kochi', latitude: 9.9399, longitude: 76.2602, admin1: 'Kerala', country: 'India' },
          { name: 'Chennai', latitude: 13.0827, longitude: 80.2707, admin1: 'Tamil Nadu', country: 'India' },
          { name: 'Shimla', latitude: 31.1044, longitude: 77.1666, admin1: 'Himachal Pradesh', country: 'India' },
          { name: 'Leh', latitude: 34.1650, longitude: 77.5840, admin1: 'Ladakh', country: 'India' }
        ];
        const randomHub = sampleHubs[Math.floor(Math.random() * sampleHubs.length)];
        selectGeocodingResult(randomHub);
      }, 400);
    });
  }

  // Error state recovery buttons
  const resetBtn = document.getElementById('error-reset-btn');
  const goaBtn = document.getElementById('error-goa-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      selectGeocodingResult({ name: 'Manali', latitude: 32.2396, longitude: 77.1887, admin1: 'Himachal Pradesh', country: 'India' });
    });
  }
  if (goaBtn) {
    goaBtn.addEventListener('click', () => {
      selectGeocodingResult({ name: 'Goa', latitude: 15.4909, longitude: 73.8278, admin1: 'Goa', country: 'India' });
    });
  }

  // Alert Severity Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      const target = e.currentTarget;
      target.classList.add('active');
      currentFilter = target.getAttribute('data-filter') || 'all';
      renderAlerts(currentCity, currentFilter);
    });
  });

  // Siren Demonstration Button
  const alarmBtn = document.getElementById('alarm-sound-btn');
  if (alarmBtn) {
    alarmBtn.addEventListener('click', toggleSirenAlarm);
  }

  // SOS Modal Open/Close
  const sosNavBtn = document.getElementById('sos-quick-btn');
  const sosModal = document.getElementById('sos-modal');
  const sosCloseBtn = document.getElementById('sos-modal-close');

  if (sosNavBtn && sosModal) {
    sosNavBtn.addEventListener('click', () => {
      sosModal.classList.remove('hidden');
    });
  }

  if (sosCloseBtn && sosModal) {
    sosCloseBtn.addEventListener('click', () => {
      sosModal.classList.add('hidden');
    });
  }

  if (sosModal) {
    sosModal.addEventListener('click', (e) => {
      if (e.target === sosModal) {
        sosModal.classList.add('hidden');
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sosModal && !sosModal.classList.contains('hidden')) {
      sosModal.classList.add('hidden');
    }
  });

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close on navigation link click
    navMenu.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Safe Journey Shield Activity Selector (Requirement 1 & 7)
  const activityGroup = document.querySelector('.activity-button-group');
  if (activityGroup) {
    activityGroup.addEventListener('click', (e) => {
      const btn = e.target.closest('.activity-btn');
      if (btn) {
        const act = btn.getAttribute('data-activity');
        if (act) selectActivity(act);
      }
    });
  }

  const activityBtns = document.querySelectorAll('.activity-btn');
  activityBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const targetBtn = e.currentTarget || e.target.closest('.activity-btn') || btn;
      const act = targetBtn.getAttribute('data-activity');
      if (act) selectActivity(act);
    });
  });


  // Setup Checklist listeners
  setupChecklistListeners();
}

// Friendly Toast Notifications
let toastTimeout = null;
function showToast(message, icon = 'ℹ️') {
  const toast = document.getElementById('toast-message');
  const textEl = document.getElementById('toast-text');
  const iconEl = document.getElementById('toast-icon');

  if (!toast || !textEl) return;

  textEl.textContent = message;
  if (iconEl) iconEl.textContent = icon;

  toast.classList.remove('hidden');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add('hidden');
  }, 3200);
}

// ============================================================================
// 13. Safe Journey Shield: Context-Aware Safety Briefing Engine
// ============================================================================

function resolveGeographicContext(locState) {
  if (!locState) {
    return {
      elevation: null,
      isElevationVerified: false,
      isMountain: false,
      isHilly: false,
      isCoastal: false,
      isCoastalVerified: false,
      isDefinitiveInland: true
    };
  }

  const elev = (locState.elevation != null && !isNaN(locState.elevation)) ? Number(locState.elevation) : null;
  const lat = Number(locState.latitude);
  const lon = Number(locState.longitude);
  const admin1 = (locState.admin1 || '').toLowerCase();
  const name = (locState.name || '').toLowerCase();

  const coastalStates = [
    'goa', 'kerala', 'tamil nadu', 'andhra pradesh', 'odisha', 'west bengal',
    'gujarat', 'maharashtra', 'puducherry', 'daman and diu', 'lakshadweep', 'andaman and nicobar'
  ];
  const isCoastalState = coastalStates.some(st => admin1.includes(st) || name.includes(st));

  const inlandStates = [
    'himachal pradesh', 'rajasthan', 'punjab', 'haryana', 'uttarakhand', 'delhi',
    'madhya pradesh', 'uttar pradesh', 'bihar', 'jharkhand', 'telangana', 'chhattisgarh',
    'ladakh', 'jammu and kashmir', 'sikkim', 'assam', 'meghalaya', 'manipur', 'mizoram',
    'nagaland', 'tripura', 'arunachal pradesh', 'chandigarh'
  ];
  const isDefinitiveInlandState = inlandStates.some(st => admin1.includes(st) || name.includes(st));

  const knownCoastalHubs = [
    'goa', 'mumbai', 'chennai', 'kochi', 'cochin', 'puri', 'mangalore', 'mangaluru',
    'visakhapatnam', 'vizag', 'pondicherry', 'puducherry', 'daphne', 'rameshwaram',
    'kanyakumari', 'alappuzha', 'kovalam', 'varkala', 'daman', 'diu'
  ];
  const isKnownCoastalHub = knownCoastalHubs.some(h => name.includes(h));

  let isCoastal = false;
  let isCoastalVerified = false;

  if (isDefinitiveInlandState) {
    isCoastal = false;
    isCoastalVerified = true;
  } else if (isKnownCoastalHub) {
    isCoastal = true;
    isCoastalVerified = true;
  } else if (isCoastalState) {
    if (elev !== null && elev > 180) {
      isCoastal = false;
      isCoastalVerified = true; // Elevated interior in coastal state
    } else if (elev !== null && elev <= 60 && (lon < 73.8 || lon > 79.2 || lat < 12)) {
      isCoastal = true;
      isCoastalVerified = true;
    } else {
      isCoastal = false;
      isCoastalVerified = false; // Proximity uncertain
    }
  } else {
    isCoastal = false;
    isCoastalVerified = false;
  }

  const isElevationVerified = elev !== null;
  const isMountain = isElevationVerified ? (elev >= 1500) : (admin1.includes('himachal') || admin1.includes('uttarakhand') || admin1.includes('ladakh') || admin1.includes('kashmir') || admin1.includes('sikkim'));
  const isHilly = isElevationVerified ? (elev >= 500 && elev < 1500) : false;

  return {
    elevation: elev,
    isElevationVerified,
    isMountain,
    isHilly,
    isCoastal,
    isCoastalVerified,
    isDefinitiveInland: !isCoastal && (isDefinitiveInlandState || (isElevationVerified && elev > 180))
  };
}

function getActiveLocationState() {
  if (selectedLocationState && selectedLocationState.name) {
    return {
      name: selectedLocationState.name,
      latitude: Number(selectedLocationState.latitude),
      longitude: Number(selectedLocationState.longitude),
      elevation: selectedLocationState.elevation != null ? Number(selectedLocationState.elevation) : (currentCity && currentCity.elevation != null ? Number(currentCity.elevation) : null),
      admin1: selectedLocationState.admin1 || (currentCity ? getLocalized(currentCity.state) : ''),
      country: selectedLocationState.country || 'India',
      source: selectedLocationState.source || null
    };
  }
  if (currentCity) {
    return {
      name: getLocalized(currentCity.name) || currentCity.id,
      latitude: currentCity.coordinates ? currentCity.coordinates.lat : 32.24,
      longitude: currentCity.coordinates ? currentCity.coordinates.lon : 77.19,
      elevation: currentCity.elevation != null ? Number(currentCity.elevation) : (currentCity.terrain && typeof currentCity.terrain.en === 'string' && currentCity.terrain.en.includes('2,050m') ? 2050 : null),
      admin1: getLocalized(currentCity.state) || '',
      country: 'India',
      source: null
    };
  }
  return {
    name: 'Manali',
    latitude: 32.2396,
    longitude: 77.1887,
    elevation: 2050,
    admin1: 'Himachal Pradesh',
    country: 'India',
    source: null
  };
}

function selectActivity(activity) {
  if (!activity) return;
  currentActivity = activity;
  window.currentActivity = activity;
  renderSafeJourneyShield();
  const label = (translations[currentLang] && translations[currentLang][`act_${activity}`]) || activity;
  showToast(`Safe Journey Shield: ${label}`, '🛡️');
}

function renderSafeJourneyShield() {
  const locState = getActiveLocationState();
  const weather = currentCity ? currentCity.weather : null;
  const geoContext = resolveGeographicContext(locState);
  const briefing = generateSafeJourneyBriefing(locState, currentActivity, weather, geoContext);

  // Update target destination display
  const targetLocEl = document.getElementById('shield-target-location');
  if (targetLocEl) {
    targetLocEl.textContent = getLocalized(locState.name) || locState.name;
  }

  // Update data source name (Requirement 5)
  const sourceNameEl = document.getElementById('shield-source-val');
  if (sourceNameEl) {
    if (selectedLocationState && selectedLocationState.source) {
      sourceNameEl.textContent = "Open-Meteo Live API / WMO Grid";
    } else {
      sourceNameEl.textContent = "Open-Meteo Live API (Station Grid)";
    }
  }

  // Update observed timestamp (Requirement 5)
  const timeValEl = document.getElementById('shield-time-val');
  if (timeValEl) {
    const now = new Date();
    timeValEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' IST (Live)';
  }

  // Update Status Badge (Requirement 7: Never label safe/safest)
  const statusBadge = document.getElementById('shield-status-badge');
  const statusText = document.getElementById('shield-status-text');
  const activityPill = document.getElementById('shield-activity-pill');
  const headingEl = document.getElementById('shield-heading');

  if (statusBadge && statusText) {
    statusBadge.className = 'briefing-status-badge';
    if (briefing.level === 'advisory') {
      statusBadge.classList.add('badge-advisory');
    } else if (briefing.level === 'caution') {
      statusBadge.classList.add('badge-caution');
    } else {
      statusBadge.classList.add('badge-favorable');
    }
    statusText.textContent = briefing.statusText;
  }

  if (activityPill) {
    activityPill.textContent = briefing.activityName;
  }

  if (headingEl) {
    headingEl.textContent = briefing.heading;
  }

  // Update Factor Analysis texts
  const thermalEl = document.getElementById('shield-factor-thermal');
  if (thermalEl) thermalEl.textContent = briefing.thermal;

  const precipEl = document.getElementById('shield-factor-precip');
  if (precipEl) precipEl.textContent = briefing.precip;

  const windEl = document.getElementById('shield-factor-wind');
  if (windEl) windEl.textContent = briefing.wind;

  const terrainEl = document.getElementById('shield-factor-terrain');
  if (terrainEl) terrainEl.textContent = briefing.terrain;

  // Update "What should I do now?" Action Intro (Requirement 8)
  const actionIntroEl = document.getElementById('shield-action-intro');
  if (actionIntroEl) {
    if (currentLang === 'ta') {
      actionIntroEl.textContent = `${locState.name || ''} பகுதியில் ${briefing.activityName} நடவடிக்கைக்கான உடனடி முன்னெச்சரிக்கைகள்:`;
    } else if (currentLang === 'hi') {
      actionIntroEl.textContent = `${locState.name || ''} में ${briefing.activityName} के लिए तत्काल अनुशंसित सावधानियां:`;
    } else {
      actionIntroEl.textContent = `Immediate recommended precautions for ${briefing.activityName} in ${locState.name || 'this location'} under current conditions:`;
    }
  }

  // Update "What should I do now?" Action Checklist (Requirement 8)
  const actionListEl = document.getElementById('shield-action-list');
  if (actionListEl) {
    actionListEl.innerHTML = '';
    briefing.actions.forEach((act) => {
      const li = document.createElement('li');
      li.textContent = act;
      actionListEl.appendChild(li);
    });
  }

  // Sync Activity Button active state
  const actBtns = document.querySelectorAll('.activity-btn');
  actBtns.forEach((btn) => {
    const act = btn.getAttribute('data-activity');
    if (act === currentActivity) {
      btn.classList.add('active');
      btn.setAttribute('aria-checked', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-checked', 'false');
    }
  });
}

function generateSafeJourneyBriefing(selectedLocation, selectedActivity, weatherData, geographicContext) {
  // Support flexible argument ordering
  let loc = selectedLocation || getActiveLocationState();
  let act = selectedActivity || currentActivity || 'sightseeing';
  let weather = weatherData;
  let geo = geographicContext;

  if (typeof selectedActivity === 'object' && typeof weatherData === 'string') {
    weather = selectedActivity;
    act = weatherData;
    geo = geographicContext;
  }

  if (!geo) {
    geo = resolveGeographicContext(loc);
  }

  const locName = getLocalized(loc.name) || loc.name || 'Selected Destination';
  const elev = geo.elevation;
  const isElevationVerified = geo.isElevationVerified;
  const elevText = isElevationVerified ? `${Math.round(elev)}m elevation` : 'Elevation unrecorded';

  const temp = weather ? (weather.temp != null ? weather.temp : 24) : 24;
  const feelsLike = weather ? (weather.feelsLike != null ? weather.feelsLike : temp) : temp;
  const rain = weather ? (weather.rainfall != null ? weather.rainfall : 0) : 0;
  const wind = weather ? (weather.windSpeed != null ? weather.windSpeed : 10) : 10;
  const humidity = weather ? (weather.humidity != null ? weather.humidity : 50) : 50;
  const conditionType = weather ? (weather.conditionType || 'cloud') : 'cloud';

  const isCoastal = geo.isCoastal;
  const isDefinitiveInland = geo.isDefinitiveInland;
  const isMountain = geo.isMountain;

  // 1. Status Level Determination (Evidence-Based, strictly never safe/safest - Requirement 7 & Part 6)
  let statusLevel = 'favorable';
  let statusTextKey = 'status_favorable';

  if (
    conditionType === 'storm' ||
    rain >= 35 ||
    wind >= 50 ||
    temp >= 43 ||
    (act === 'beach' && isCoastal && (wind >= 32 || rain >= 15)) ||
    (act === 'trekking' && (rain >= 10 || temp <= 0 || wind >= 35 || (isMountain && rain >= 6))) ||
    (act === 'road' && (rain >= 25 || (isMountain && rain >= 10) || wind >= 42)) ||
    (act === 'outdoor' && (rain >= 15 || wind >= 32 || temp >= 40)) ||
    (act === 'sightseeing' && (rain >= 28 || temp >= 41))
  ) {
    statusLevel = 'advisory';
    statusTextKey = 'status_advisory';
  } else if (
    rain >= 4 ||
    wind >= 22 ||
    temp >= 36 ||
    temp <= 6 ||
    humidity >= 88 ||
    (act === 'beach' && isDefinitiveInland) || // Inland beach has geographic context mismatch caution
    (act === 'beach' && isCoastal && (wind >= 18 || rain >= 3 || temp >= 34)) ||
    (act === 'trekking' && (rain >= 3 || isMountain || temp <= 10)) ||
    (act === 'road' && (rain >= 4 || humidity >= 84 || (isMountain && temp <= 8))) ||
    (act === 'outdoor' && (rain >= 3 || wind >= 18 || temp >= 33)) ||
    (act === 'sightseeing' && (rain >= 4 || temp >= 34 || temp <= 8))
  ) {
    statusLevel = 'caution';
    statusTextKey = 'status_caution';
  }

  const activityNames = {
    beach: (translations[currentLang] && translations[currentLang].act_beach) || 'Beach Visit',
    trekking: (translations[currentLang] && translations[currentLang].act_trekking) || 'Trekking',
    sightseeing: (translations[currentLang] && translations[currentLang].act_sightseeing) || 'Sightseeing',
    road: (translations[currentLang] && translations[currentLang].act_road) || 'Road Travel',
    outdoor: (translations[currentLang] && translations[currentLang].act_outdoor) || 'Outdoor Activities'
  };
  const activeActivityName = activityNames[act] || act;

  let headingText = '';
  if (currentLang === 'ta') {
    headingText = `${locName} பகுதியில் ${activeActivityName} பாதுகாப்பு வழிகாட்டல்`;
  } else if (currentLang === 'hi') {
    headingText = `${locName} में ${activeActivityName} के लिए सुरक्षा ब्रीफिंग`;
  } else {
    headingText = `Safety Briefing for ${activeActivityName} in ${locName}`;
  }

  // 2. Factor Analysis Contexts (Activity-Aware & Evidence-Based)
  let thermalText = '';
  if (act === 'beach') {
    if (isDefinitiveInland) {
      thermalText = currentLang === 'ta'
        ? `உள்நாட்டு வெப்ப நிலை (${temp}°C, உணர்வு ${feelsLike}°C). இங்கு கடல் இல்லை; உள்ளூர் நதிகள் அல்லது நீர்நிலைகளில் நேரடி சூரிய ஒளி தாக்கம் ஏற்படலாம்.`
        : currentLang === 'hi'
        ? `अंतर्देशीय तापमान (${temp}°C, अहसास ${feelsLike}°C)। यहां समुद्र तट नहीं है; स्थानीय नदियों या झीलों पर सीधी धूप का प्रभाव हो सकता है।`
        : `Inland thermal conditions (${temp}°C, feels like ${feelsLike}°C). No marine coast present; open sunlight exposure applies to inland riverbanks or pools.`;
    } else if (temp >= 33) {
      thermalText = currentLang === 'ta'
        ? `அதிக கடலோர வெப்பம் (${temp}°C, உணர்வு ${feelsLike}°C). மணல் மற்றும் நீரிலிருந்து சூரிய UV கதிர்வீச்சுப் பிரதிபலிப்பு அதிகம்; நீரிழப்பைத் தவிர்க்க நிழல் தேவை.`
        : currentLang === 'hi'
        ? `तीव्र तटीय तापमान (${temp}°C, अहसास ${feelsLike}°C)। रेत और समुद्री पानी से यूवी परावर्तन अधिक; डिहाइड्रेशन से बचने के लिए छांव का उपयोग करें।`
        : `Elevated coastal thermal index (${temp}°C, feels like ${feelsLike}°C). Heightened solar UV reflection from open sands and shoreline; stay hydrated and use sunscreen.`;
    } else if (temp <= 18) {
      thermalText = currentLang === 'ta'
        ? `குளிர்ந்த கடலோரக் காற்று (${temp}°C). கடல் நீர் குளிர்ச்சியாக இருக்கும்; நனைந்திருக்கும் போது காற்று உடலில் குளிரை அதிகரிக்கும்.`
        : currentLang === 'hi'
        ? `सर्द तटीय हवाएं (${temp}°C)। समुद्री पानी काफी ठंडा है; गीले कपड़ों में हवा लगने से ठंड का अहसास बढ़ सकता है।`
        : `Cool marine atmosphere (${temp}°C). Sea breeze feels chilly; prolonged bathing in cooler seawater can cause rapid chill.`;
    } else {
      thermalText = currentLang === 'ta'
        ? `மிதமான கடலோர வெப்பம் (${temp}°C). கடற்கரையில் உலா வரவும் இளைப்பாறவும் ஏற்ற வெப்பநிலை.`
        : currentLang === 'hi'
        ? `सुखद तटीय तापमान (${temp}°C)। बीच पर टहलने और तटवर्ती आनंद के लिए आरामदायक स्थिति।`
        : `Temperate coastal thermal window (${temp}°C). Comfortable for shore strolls, beach walks, and mild outdoor leisure.`;
    }
  } else if (act === 'trekking') {
    if (temp <= 8) {
      thermalText = currentLang === 'ta'
        ? `குளிர்ந்த மலைக் காலநிலை (${temp}°C, உணர்வு ${feelsLike}°C). திறந்த மலையேற்றப் பாதைகளில் உடல் வெப்பம் குறையும்; காற்றுத் தடுப்பு கம்பளி ஆடைகள் தேவை.`
        : currentLang === 'hi'
        ? `पहाड़ी ठंड (${temp}°C, अहसास ${feelsLike}°C)। खुली पगडंडियों पर शरीर का तापमान तेजी से गिर सकता है; विंडप्रूफ गर्म कपड़े आवश्यक हैं।`
        : `Chilly alpine thermal conditions (${temp}°C, feels like ${feelsLike}°C). Rapid metabolic heat loss on exposed uphill climbs; layered thermals recommended.`;
    } else if (temp >= 30) {
      thermalText = currentLang === 'ta'
        ? `மலையேற்றத்திற்கு அதிக வெப்பம் (${temp}°C). மேல்நோக்கி நடக்கும் போது நீரிழப்பு மற்றும் உடல் சோர்வு ஏற்படும்; அதிக நீர் அருந்தவும்.`
        : currentLang === 'hi'
        ? `ट्रेकिंग के लिए तेज गर्मी (${temp}°C)। चढ़ाई के दौरान डिहाइड्रेशन और मांसपेशियों में ऐंठन का खतरा; अतिरिक्त पानी और ओआरएस रखें।`
        : `Strenuous uphill thermal load (${temp}°C). High exertion under direct sunlight increases dehydration risk; carry adequate electrolyte fluids.`;
    } else {
      thermalText = currentLang === 'ta'
        ? `மலையேற்றத்திற்கு உகந்த வெப்பநிலை (${temp}°C). உடல் களைப்படையாமல் மலையேற சாதகமான சூழல்.`
        : currentLang === 'hi'
        ? `ट्रेकिंग के लिए अनुकूल तापीय स्थिति (${temp}°C)। सुहावना तापमान चढ़ाई के दौरान शारीरिक थकान को कम करता है।`
        : `Favorable hiking thermal window (${temp}°C). Cool ambient air supports physical endurance during trail ascents.`;
    }
  } else if (act === 'sightseeing') {
    if (temp >= 35) {
      thermalText = currentLang === 'ta'
        ? `அதிக வெயில் (${temp}°C, உணர்வு ${feelsLike}°C). வரலாற்று இடங்கள், கோட்டைகள் மற்றும் திறந்த முற்றங்கள் கொதிக்கும்; நண்பகல் 11 முதல் 3 வரை நிழலான இடங்களை நாடவும்.`
        : currentLang === 'hi'
        ? `स्मारकों पर तेज गर्मी (${temp}°C, अहसास ${feelsLike}°C)। ऐतिहासिक पत्थरों और खुले आंगनों में दोपहर में धूप का तीव्र प्रभाव; पर्याप्त पानी पिएं।`
        : `Elevated monument surface heat (${temp}°C, feels like ${feelsLike}°C). Scorching direct exposure on stone courtyards and open forts; schedule open-air sights for morning/evening.`;
    } else if (temp <= 12) {
      thermalText = currentLang === 'ta'
        ? `குளிர்ந்த உலா சூழல் (${temp}°C). வரலாற்று இடங்களை நடந்து சுற்றிப்பார்க்க கம்பளி ஆடையுடன் வசதியானது.`
        : currentLang === 'hi'
        ? `खुशनुमा सर्द मौसम (${temp}°C)। हल्की जैकेट के साथ हेरिटेज वॉक और दर्शनीय स्थलों के भ्रमण के लिए आरामदायक।`
        : `Brisk walking temperatures (${temp}°C). Crisp ambient conditions; light jacket comfortable for outdoor heritage exploration.`;
    } else {
      thermalText = currentLang === 'ta'
        ? `இதமான சுற்றுலா வெப்பநிலை (${temp}°C). முழு நாள் நினைவுச்சின்னங்கள் மற்றும் கலாச்சார தளங்களைப் பார்வையிட உகந்தது.`
        : currentLang === 'hi'
        ? `दर्शनीय स्थलों के लिए आदर्श तापमान (${temp}°C)। ऐतिहासिक स्थलों और सांस्कृतिक परिसरों के भ्रमण के लिए अनुकूल।`
        : `Comfortable sightseeing window (${temp}°C). Pleasant ambient conditions for full-day heritage monuments, temple walks, and photography.`;
    }
  } else if (act === 'road') {
    if (temp >= 38) {
      thermalText = currentLang === 'ta'
        ? `அதிக சாலை வெப்பநிலை (${temp}°C). விரைவுச் சாலைகளில் டயர் வெப்பமடைதல் மற்றும் எஞ்சின் சூடாகும் அழுத்தம்; டயர் காற்றழுத்தத்தைச் சரிபார்க்கவும்.`
        : currentLang === 'hi'
        ? `सड़क का अत्यधिक तापमान (${temp}°C)। एक्सप्रेसवे पर टायर गर्म होने और वाहन कूलेंट पर दबाव; टायर प्रेशर की जांच करें।`
        : `High roadway pavement temperature (${temp}°C). Elevated thermal stress on vehicle tires and engine cooling during sustained highway cruising.`;
    } else if (temp <= 6) {
      thermalText = currentLang === 'ta'
        ? `உறைபனிக்கு நெருங்கிய சாலை சூழல் (${temp}°C). நிழலான மலைச் சாலைகளில் பனி வழுக்கல் (Black ice) வாய்ப்பு; டிஃபாகர் பயன்படுத்தவும்.`
        : currentLang === 'hi'
        ? `सर्द सड़क स्थिति (${temp}°C)। छायादार पहाड़ी मोड़ों पर काली बर्फ (Black ice) और शीशों पर धुंध का जोखिम; डिफॉगर चालू रखें।`
        : `Near-freezing highway temperatures (${temp}°C). Potential for black ice on shaded mountain tarmac and windshield condensation; operate defoggers.`;
    } else {
      thermalText = currentLang === 'ta'
        ? `வாகனம் இயக்க உகந்த வெப்பநிலை (${temp}°C). எஞ்சின் மற்றும் டயர் இயக்கம் சீரான நிலையில் இருக்கும்.`
        : currentLang === 'hi'
        ? `सड़क यात्रा के लिए सामान्य तापमान (${temp}°C)। सामान्य ड्राइविंग और वाहन संचालन के लिए स्थिर स्थिति।`
        : `Standard highway thermal conditions (${temp}°C). Stable ambient conditions for routine highway transit and engine cooling.`;
    }
  } else {
    // outdoor
    if (temp >= 35) {
      thermalText = currentLang === 'ta'
        ? `வெளிப்புற விளையாட்டுகளுக்கு அதிக வெப்பம் (${temp}°C). வெளிப்புற முகாம் மற்றும் சாகச நடவடிக்கைகளின் போது அதிக நீர் அருந்துவது அவசியம்.`
        : currentLang === 'hi'
        ? `आउटडोर गतिविधियों के लिए तेज धूप (${temp}°C)। कैंपिंग या खेलकूद के दौरान डिहाइड्रेशन से बचने के लिए लगातार तरल पदार्थ लें।`
        : `High outdoor thermal index (${temp}°C). Substantial heat exposure during open-air sports or camping; ensure adequate shade and hydration.`;
    } else if (temp <= 10) {
      thermalText = currentLang === 'ta'
        ? `குளிர்ந்த வெளிப்புற இரவு (${temp}°C). இரவு நேரத்தில் தரை விரைவாகக் குளிரும்; தரைக் கம்பளி மற்றும் ஸ்லீப்பிங் பேக் தேவை.`
        : currentLang === 'hi'
        ? `खुले में ठंड का प्रभाव (${temp}°C)। रात में जमीन तेजी से ठंडी होती है; इंसुलेटेड स्लीपिंग बैग और ग्राउंड मैट जरूरी हैं।`
        : `Cold outdoor camping window (${temp}°C). Rapid ground temperature drop after sunset; rated sleeping gear and ground insulation advised.`;
    } else {
      thermalText = currentLang === 'ta'
        ? `வெளிப்புற சாகசங்களுக்கு உகந்த வெப்பநிலை (${temp}°C). கூடாரம் அமைத்தல் மற்றும் விளையாட்டுகளுக்கு ஏதுவான சூழல்.`
        : currentLang === 'hi'
        ? `आउटडोर कैंपिंग और खेलों के लिए सुखद स्थिति (${temp}°C)। खुले आसमान के नीचे मनोरंजन और साहसिक गतिविधियों के लिए अनुकूल।`
        : `Optimal outdoor recreation window (${temp}°C). Favorable ambient conditions for camping, sports, birdwatching, and lawn recreation.`;
    }
  }

  let precipText = '';
  if (act === 'beach') {
    if (isDefinitiveInland) {
      precipText = currentLang === 'ta'
        ? `மழை அளவு (${rain} மி.மீ). உள்நாட்டு ஏரி அல்லது நதிக்கரைகளில் சேறும் நீர்ப்பெருக்கும் ஏற்படலாம்; கடல் அலை சூழல் இங்கு பொருந்தாது.`
        : currentLang === 'hi'
        ? `दर्ज वर्षा (${rain} मिमी)। अंतर्देशीय झीलों या नदी किनारों पर पानी का स्तर बढ़ सकता है; समुद्री लहरों की स्थिति यहां लागू नहीं होती।`
        : `Precipitation recorded (${rain}mm). Inland water bodies or rivers may see water level shifts; marine surf conditions are not applicable here.`;
    } else if (rain >= 15 || conditionType === 'storm') {
      precipText = currentLang === 'ta'
        ? `கனமழைப் பொழிவு (${rain} மி.மீ). கடலோர அலை கொந்தளிப்பு மற்றும் குறைவான பார்வை; கடலில் நீந்துவதைத் தவிர்க்கவும்.`
        : currentLang === 'hi'
        ? `तटीय भारी बारिश (${rain} मिमी)। समुद्र में तेज हलचल और पानी में दृश्यता की कमी; समुद्र में गहरे उतरने से बचें।`
        : `Heavy coastal rainfall recorded (${rain}mm). Choppy surf and diminished coastal visibility; avoid entering turbulent shoreline water.`;
    } else if (rain >= 3) {
      precipText = currentLang === 'ta'
        ? `மழை தூறல் (${rain} மி.மீ). நனைந்த மணல் மற்றும் வழுக்கும் பாறைகள்; கரையோரப் பாறைகளில் நடக்கும் போது எச்சரிக்கை.`
        : currentLang === 'hi'
        ? `तट पर बारिश की फुहारें (${rain} मिमी)। गीली रेत और तटवर्ती चट्टानों पर फिसलन; पत्थरों पर संभलकर चलें।`
        : `Rain showers observed (${rain}mm). Wet sand surfaces and slippery stone groynes; exercise care along rocky breakwaters.`;
    } else {
      precipText = currentLang === 'ta'
        ? `மழையற்ற வறண்ட கடற்கரை (${rain} மி.மீ). உலர்ந்த மணற்பரப்பு மற்றும் தெளிவான கடற்கரை உலா சூழல்.`
        : currentLang === 'hi'
        ? `सूखा तटीय मौसम (${rain} मिमी)। सूखी रेत और समुद्र तट पर टहलने के लिए साफ स्थिति।`
        : `Dry shoreline conditions (${rain}mm). Dry intertidal sand and clear conditions for seaside walking.`;
    }
  } else if (act === 'trekking') {
    if (rain >= 10 || conditionType === 'storm') {
      precipText = currentLang === 'ta'
        ? `கனமழை (${rain} மி.மீ). மலையேற்றப் பாதைகளில் வழுக்கும் பாறைகள், சேறு மற்றும் நீரோடைகளில் நீர்வரத்து அதிகம்; பாதையில் கூடுதல் எச்சரிக்கை.`
        : currentLang === 'hi'
        ? `सक्रिय भारी बारिश (${rain} मिमी)। पहाड़ी पगडंडियों पर फिसलन भरी मिट्टी, गीली चट्टानें और नालों में तेज बहाव; ट्रेकिंग में अतिरिक्त सावधानी रखें।`
        : `Active heavy rainfall (${rain}mm). Slick muddy trail footing, reduced traction on steep rocks, and swollen mountain gullies; exercise high trail vigilance.`;
    } else if (rain >= 3) {
      precipText = currentLang === 'ta'
        ? `மிதமான மழை (${rain} மி.மீ). ஈரமான நடைபாதைகள் மற்றும் பாறைகளில் வழுக்கல்; மலையேற்றக் குச்சிகள் மற்றும் நல்ல காலணிகள் தேவை.`
        : currentLang === 'hi'
        ? `हल्की से मध्यम बारिश (${rain} मिमी)। गीली पगडंडी और पत्थरों पर फिसलन; ट्रेकिंग पोल और वाटरप्रूफ बूट्स का उपयोग करें।`
        : `Damp trail conditions (${rain}mm). Wet mud footpaths and slippery rock slabs; trekking poles and rugged-tread footwear recommended.`;
    } else {
      precipText = currentLang === 'ta'
        ? `உலர்ந்த மலைப்பாதை (${rain} மி.மீ). நல்ல பிடிப்புள்ள பாறைகள் மற்றும் தடையற்ற மலையேற்ற நடைபாதை.`
        : currentLang === 'hi'
        ? `सूखी पगडंडी (${rain} मिमी)। रास्तों पर मजबूत पकड़ और सुरक्षित ट्रेकिंग के लिए साफ मार्ग।`
        : `Dry trail tread observed (${rain}mm). Firm footing on dirt ridges, stone steps, and talus slopes; low mud and slip risk.`;
    }
  } else if (act === 'sightseeing') {
    if (rain >= 15 || conditionType === 'storm') {
      precipText = currentLang === 'ta'
        ? `கனமழை (${rain} மி.மீ). நினைவுச்சின்னங்களின் திறந்த முற்றங்களில் நீர் தேங்கும்; உட்புற அருங்காட்சியகங்கள் மற்றும் கலைக்கூடங்களுக்கு முன்னுரிமை அளியுங்கள்.`
        : currentLang === 'hi'
        ? `तेज बारिश (${rain} मिमी)। स्मारकों के खुले आंगनों में जलभराव; इनडोर संग्रहालयों, कला दीर्घाओं और ढके हुए परिसरों को प्राथमिकता दें।`
        : `Significant precipitation (${rain}mm). Waterlogged monument courtyards and flooded walking areas; prioritize covered indoor museums and exhibits.`;
    } else if (rain >= 3) {
      precipText = currentLang === 'ta'
        ? `மிதமான மழை (${rain} மி.மீ). பாரம்பரிய தளங்களின் பளிங்கு மற்றும் பாறைத் தளங்கள் வழுக்கும்; குடை மற்றும் நல்ல பிடிப்புள்ள காலணிகளைப் பயன்படுத்தவும்.`
        : currentLang === 'hi'
        ? `हल्की बारिश (${rain} मिमी)। ऐतिहासिक स्मारकों के संगमरमर और पत्थरों पर फिसलन; छाता और ग्रिप वाले जूते रखें।`
        : `Light to moderate showers (${rain}mm). Wet, polished stone and marble walkways at heritage sites; wear slip-resistant footwear and carry an umbrella.`;
    } else {
      precipText = currentLang === 'ta'
        ? `மழையற்ற தெளிவான வானிலை (${rain} மி.மீ). கோட்டைகள், அரண்மனைகள் மற்றும் கலாச்சார தளங்களைச் சுற்றிப்பார்க்க உகந்தது.`
        : currentLang === 'hi'
        ? `साफ और सूखा मौसम (${rain} मिमी)। किलों, महलों और उद्यानों के भ्रमण तथा फोटोग्राफी के लिए अनुकूल स्थिति।`
        : `Dry heritage walkways (${rain}mm). Clear open courtyards; unobstructed conditions for architectural exploration and photography.`;
    }
  } else if (act === 'road') {
    if (rain >= 15 || conditionType === 'storm') {
      precipText = currentLang === 'ta'
        ? `கனமழை (${rain} மி.மீ). நெடுஞ்சாலைகளில் நீர் தேங்குதல், வாகன வழுக்கல் (Hydroplaning) மற்றும் மலைப் பாதைகளில் பாறை சரிவு எச்சரிக்கை; வேகத்தைக் குறைக்கவும்.`
        : currentLang === 'hi'
        ? `सड़क पर भारी बारिश (${rain} मिमी)। हाइड्रोप्लेनिंग, अंडरपास में जलभराव और पहाड़ी ढलानों पर मलबे का खतरा; सुरक्षित गति सीमा में वाहन चलाएं।`
        : `Heavy highway precipitation (${rain}mm). Hydroplaning risk on standing water, submerged culverts, and reduced tire grip; reduce vehicle speed and increase following distance.`;
    } else if (rain >= 3) {
      precipText = currentLang === 'ta'
        ? `ஈரமான சாலை (${rain} மி.மீ). பிரேக் பிடிக்கும் தூரம் அதிகரிக்கும்; முன் செல்லும் வாகனத்திலிருந்து கூடுதல் இடைவெளி விட்டு இயக்கவும்.`
        : currentLang === 'hi'
        ? `गीली सड़कें (${rain} मिमी)। ब्रेक लगाने की दूरी बढ़ जाती है; आगे चल रहे वाहनों से पर्याप्त सुरक्षित दूरी बनाकर चलें।`
        : `Wet road surfaces (${rain}mm). Increased braking distances and road spray from large vehicles; keep double following distance and use wipers.`;
    } else {
      precipText = currentLang === 'ta'
        ? `உலர்ந்த சாலைத்தளம் (${rain} மி.மீ). சிறந்த டயர் பிடிப்பு மற்றும் தடையற்ற நெடுஞ்சாலைப் பயணச் சூழல்.`
        : currentLang === 'hi'
        ? `सूखी सड़क स्थिति (${rain} मिमी)। बेहतरीन टायर ग्रिप और सुगम हाईवे यात्रा के लिए अनुकूल परिस्थितियां।`
        : `Dry roadway asphalt (${rain}mm). Optimal tire friction, predictable braking, and clear lane visibility across transit routes.`;
    }
  } else {
    // outdoor
    if (rain >= 15 || conditionType === 'storm') {
      precipText = currentLang === 'ta'
        ? `கனமழை (${rain} மி.மீ). முகாம்களில் நீர் தேங்குதல் மற்றும் நீரோடைகள் பெருக்கெடுத்தல்; படகு சவாரியை நிறுத்தி பாதுகாப்பான தங்குமிடத்திற்கு மாறவும்.`
        : currentLang === 'hi'
        ? `भारी बारिश (${rain} मिमी)। कैंपसाइट में जलभराव और खुले मैदानों में कीचड़; जल क्रीड़ा रोकें और पक्के शेल्टर में शरण लें।`
        : `Heavy downpour (${rain}mm). Saturated campsite ground and swelling streams; suspend watersports and ensure shelter drainage.`;
    } else if (rain >= 3) {
      precipText = currentLang === 'ta'
        ? `தூறல் மற்றும் ஈரப்பதம் (${rain} மி.மீ). கூடாரங்களின் மீது நீர்ப்புகா கவசத்தை (Rainfly) நன்றாக இழுத்துக் கட்டவும்.`
        : currentLang === 'hi'
        ? `हल्की बारिश (${rain} मिमी)। टेंट पर वाटरप्रूफ रेनफ्लाई को कसकर बांधें और सामान जमीन से ऊपर रखें।`
        : `Damp ground and drizzle (${rain}mm). Wet turf; ensure tent rainflies are tensioned and keep sleeping gear off the wet groundsheet.`;
    } else {
      precipText = currentLang === 'ta'
        ? `வறண்ட நிலம் மற்றும் தெளிவான வானம் (${rain} மி.மீ). கூடாரம் அமைக்கவும், இரவு முகாம் தீ மூட்டவும் உகந்த சூழல்.`
        : currentLang === 'hi'
        ? `सूखी जमीन और साफ आसमान (${rain} मिमी)। टेंट लगाने, कैंपफायर और बाहरी साहसिक खेलों के लिए बेहतरीन।`
        : `Dry ground conditions (${rain}mm). Favorable firm terrain for campsite setup, recreational games, and open-air activities.`;
    }
  }

  let windText = '';
  if (act === 'beach') {
    if (isDefinitiveInland) {
      windText = currentLang === 'ta'
        ? `காற்று வேகம் (மணிக்கு ${wind} கி.மீ). உள்நாட்டு நிலப்பரப்பு காற்று; கடல் அலைகளோடு தொடர்பில்லை.`
        : currentLang === 'hi'
        ? `हवा की गति (${wind} किमी/घंटा)। अंतर्देशीय सामान्य हवा; समुद्री लहरों से कोई संबंध नहीं।`
        : `Wind velocity recorded at ${wind} km/h. Standard inland breeze; does not impact marine surf as this is an inland destination.`;
    } else if (wind >= 28) {
      windText = currentLang === 'ta'
        ? `வேகமான கடற்கரைக் காற்று (மணிக்கு ${wind} கி.மீ). கடலில் அலை கொந்தளிப்பு மற்றும் மணல் பறத்தல்; கடற்கரை குடைகள் மற்றும் படகு சவாரிகளில் எச்சரிக்கை.`
        : currentLang === 'hi'
        ? `तेज तटीय हवा (${wind} किमी/घंटा)। समुद्र में लहरों का उछाल और उड़ती रेत; बोटिंग और खुले छातों के प्रयोग में सावधानी रखें।`
        : `Gusty coastal winds (${wind} km/h). Active breaking surf and blowing beach sand; avoid lightweight inflatable watercraft.`;
    } else if (wind >= 16) {
      windText = currentLang === 'ta'
        ? `மிதமான கடல் காற்று (மணிக்கு ${wind} கி.மீ). அலைகளில் லேசான அசைவு; நீச்சல் மற்றும் உலாவிற்கு உகந்தது.`
        : currentLang === 'hi'
        ? `मध्यम तटीय हवा (${wind} किमी/घंटा)। समुद्र में हल्की हलचल; सामान्य बीच गतिविधियों के लिए ठीक।`
        : `Brisk sea breeze (${wind} km/h). Moderate nearshore water chop; comfortable for shoreline walking.`;
    } else {
      windText = currentLang === 'ta'
        ? `மென்மையான கடல் தென்றல் (மணிக்கு ${wind} கி.மீ). அமைதியான கடல் நீர் மற்றும் இதமான கடற்கரை காற்று.`
        : currentLang === 'hi'
        ? `शांत समुद्री हवा (${wind} किमी/घंटा)। शांत पानी और किनारे पर आराम के लिए अनुकूल।`
        : `Gentle coastal breeze (${wind} km/h). Calm inshore waters; favorable conditions for shoreline leisure.`;
    }
  } else if (act === 'trekking') {
    if (wind >= 30) {
      windText = currentLang === 'ta'
        ? `வேகமான மலைக்காற்று (மணிக்கு ${wind} கி.மீ). குறுகிய முகடுகளிலும் சிகரங்களிலும் நிலை தடுமாறும் ஆபத்து; காற்றுத் தடுப்பு உடை அணியவும்.`
        : currentLang === 'hi'
        ? `पहाड़ी चोटियों पर तेज हवा (${wind} किमी/घंटा)। संकरी पगडंडियों और दर्रों पर संतुलन बनाए रखें; विंडप्रूफ जैकेट पहनें।`
        : `Strong mountain gusts (${wind} km/h). Significant buffeting along exposed ridges and summits; secure loose gear and maintain firm footing.`;
    } else if (wind >= 16) {
      windText = currentLang === 'ta'
        ? `மிதமான மலைக் காற்று (மணிக்கு ${wind} கி.மீ). உடலின் குளிர்ச்சியை சற்று அதிகரிக்கும்; தொப்பிகளைப் பத்திரப்படுத்தவும்.`
        : currentLang === 'hi'
        ? `मध्यम पहाड़ी हवा (${wind} किमी/घंटा)। ठंडी हवा से ठंडक का अहसास बढ़ सकता है; टोपी और हल्के कपड़े संभालें।`
        : `Moderate ridge breeze (${wind} km/h). Noticeable wind-chill on exposed trail sections; keep a light windbreaker accessible.`;
    } else {
      windText = currentLang === 'ta'
        ? `அமைதியான மலைக் காற்று (மணிக்கு ${wind} கி.மீ). மலைப்பாதைகளைக் கடக்க நிலையான காற்றுச் சூழல்.`
        : currentLang === 'hi'
        ? `शांत पहाड़ी वातावरण (${wind} किमी/घंटा)। खुली घाटियों में ट्रेकिंग और फोटोग्राफी के लिए स्थिर वायु प्रवाह।`
        : `Calm alpine vectors (${wind} km/h). Stable atmospheric air columns; ideal for navigating open ridges and taking photos.`;
    }
  } else if (act === 'sightseeing') {
    if (wind >= 28) {
      windText = currentLang === 'ta'
        ? `பலத்த காற்று (மணிக்கு ${wind} கி.மீ). கோட்டை அரண்கள் மற்றும் உயரமான தளங்களில் தொப்பிகள், கேமராக்களைப் பாதுகாப்பாகப் பிடிக்கவும்.`
        : currentLang === 'hi'
        ? `तेज हवा के झोंके (${wind} किमी/घंटा)। किलों की ऊंची प्राचीरों और छतों पर टोपी तथा कैमरा संभालकर रखें।`
        : `Brisk ambient gusts (${wind} km/h). Gusty on elevated fort ramparts and palace terraces; secure headwear and handheld camera equipment.`;
    } else if (wind >= 16) {
      windText = currentLang === 'ta'
        ? `புத்துணர்ச்சியூட்டும் காற்று (மணிக்கு ${wind} கி.மீ). உலா வருவதற்கு இனிமையான சூழல்.`
        : currentLang === 'hi'
        ? `सुहावनी हवा (${wind} किमी/घंटा)। ऐतिहासिक परिसरों में पैदल घूमने के लिए आरामदायक।`
        : `Fresh ambient breeze (${wind} km/h). Pleasantly disperses urban haze; comfortable for walking tours.`;
    } else {
      windText = currentLang === 'ta'
        ? `அமைதியான காற்று (மணிக்கு ${wind} கி.மீ). தெளிவான புகைப்படங்கள் எடுக்கவும் தளங்களை பார்வையிடவும் ஏற்றது.`
        : currentLang === 'hi'
        ? `शांत मौसम (${wind} किमी/घंटा)। स्मारकों के भ्रमण और स्थिर फोटोग्राफी के लिए उपयुक्त स्थिति।`
        : `Light breeze (${wind} km/h). Optimal conditions for steady camera photography and unhindered monument visits.`;
    }
  } else if (act === 'road') {
    if (wind >= 32) {
      windText = currentLang === 'ta'
        ? `பக்கவாட்டுக் காற்று (மணிக்கு ${wind} கி.மீ). பாலங்கள் மற்றும் திறந்த நெடுஞ்சாலைகளில் வாகனங்கள் அலைபாயும்; ஸ்டீயரிங்கை உறுதியாகப் பிடிக்கவும்.`
        : currentLang === 'hi'
        ? `हाईवे पर तेज क्रॉसविंड (${wind} किमी/घंटा)। ऊंचे पुलों और खुले एक्सप्रेसवे पर वाहन नियंत्रण बनाए रखें; स्टीयरिंग दोनों हाथों से पकड़ें।`
        : `Strong crosswind vectors (${wind} km/h). Noticeable lateral vehicle drift on elevated highway flyovers and open plains; keep two hands firmly on the wheel.`;
    } else if (wind >= 18) {
      windText = currentLang === 'ta'
        ? `மிதமான காற்று (மணிக்கு ${wind} கி.மீ). வாகன மேற்கூரை உடமைகளை உறுதியாகக் கட்டவும்.`
        : currentLang === 'hi'
        ? `मध्यम हवा (${wind} किमी/घंटा)। वाहन की छत पर बंधे सामान को सुरक्षित रूप से जांच लें।`
        : `Moderate roadway breeze (${wind} km/h). Standard vehicular aerodynamics; ensure roof-mounted baggage is strapped securely.`;
    } else {
      windText = currentLang === 'ta'
        ? `குறைந்த காற்று வேகம் (மணிக்கு ${wind} கி.மீ). வாகனங்களை நேர்த்தியாக இயக்க சாதகமான நிலை.`
        : currentLang === 'hi'
        ? `शांत हवाएं (${wind} किमी/घंटा)। स्थिर और सुगम हाईवे ड्राइविंग के लिए अनुकूल।`
        : `Light atmospheric winds (${wind} km/h). Negligible aerodynamic drag; stable straight-line vehicle tracking across expressways.`;
    }
  } else {
    // outdoor
    if (wind >= 28) {
      windText = currentLang === 'ta'
        ? `கடும் காற்று (மணிக்கு ${wind} கி.மீ). கூடார ஆப்புகளை ஆழமாக அடிக்கவும்; திறந்தவெளித் தீ மூட்டுவதைத் தவிர்க்கவும்.`
        : currentLang === 'hi'
        ? `तेज हवाएं (${wind} किमी/घंटा)। टेंट की रस्सियों को अतिरिक्त खूंटों से बांधें; खुली आग या कैंपफायर से चिंगारी फैलने से बचें।`
        : `High wind velocities (${wind} km/h). Extra tent staking and guy-line tension required; avoid unattended open campfires due to spark dispersion.`;
    } else if (wind >= 16) {
      windText = currentLang === 'ta'
        ? `வேகமான தரைக்காற்று (மணிக்கு ${wind} கி.மீ). கூடார ஆப்புகளை உறுதியாக அமைக்கவும்.`
        : currentLang === 'hi'
        ? `मध्यम तेज हवा (${wind} किमी/घंटा)। टेंट की रस्सियों को खूंटों से मजबूत बांधें।`
        : `Brisk surface breeze (${wind} km/h). Stake lightweight shade canopies securely; comfortable for outdoor sports.`;
    } else {
      windText = currentLang === 'ta'
        ? `அமைதியான காற்று (மணிக்கு ${wind} கி.மீ). சாகச விளையாட்டுகள் மற்றும் கூடாரம் அமைக்க சிறந்தது.`
        : currentLang === 'hi'
        ? `शांत मौसम (${wind} किमी/घंटा)। खुले मैदानों में खेलकूद, टेंट लगाने और कैंपिंग के लिए उत्तम।`
        : `Calm atmospheric conditions (${wind} km/h). Ideal for pitching lightweight tents, campfire cooking, and field sports.`;
    }
  }

  let terrainText = '';
  if (act === 'beach') {
    if (isDefinitiveInland) {
      terrainText = currentLang === 'ta'
        ? `உள்நாட்டு நிலப்பரப்பு (${elevText}). குறிப்பு: இங்கு கடல் கடற்கரை இல்லை; கடல் அலை அல்லது ஆழ்கடல் பாதுகாப்பு வழிகாட்டல்கள் பொருந்தாது. உள்ளூர் ஏரி/நதிகளுக்கான பொது விதிகளைப் பின்பற்றவும்.`
        : currentLang === 'hi'
        ? `अंतर्देशीय भूभाग (${elevText})। सूचना: यहां समुद्री तट मौजूद नहीं है; समुद्र की लहरों संबंधी सलाह लागू नहीं होती। स्थानीय नदियों या झीलों पर सामान्य सुरक्षा नियम मानें।`
        : `Inland Geography (${elevText}). Note: This destination is inland without a marine coast. Beach-specific marine surf and rip-current advisories are not applicable. Standard water precautions apply to inland lakes or pools.`;
    } else if (isCoastal) {
      terrainText = currentLang === 'ta'
        ? `கடலோரச் சமவெளிப் பகுதி (${elevText}). கடல் அலை ஏற்ற இறக்கங்கள் மற்றும் மணற்பரப்பு; உயிர் காப்பாளர்கள் உள்ள பகுதிகளில் மட்டுமே நீந்தவும்.`
        : currentLang === 'hi'
        ? `तटीय मैदानी क्षेत्र (${elevText})। समुद्री तटवर्ती क्षेत्र; केवल लाइफगार्ड द्वारा निगरानी वाले चिह्नित क्षेत्रों में ही पानी में जाएं।`
        : `Coastal Marine Corridor (${elevText}). Lowland coastal terrain; observe daily tidal movements and bathe only in areas supervised by active lifeguards.`;
    } else {
      terrainText = currentLang === 'ta'
        ? `பிராந்திய நிலப்பரப்பு (${elevText}). கடலோர அருகாமை உறுதிப்படுத்தப்படவில்லை; நீர்நிலைகளில் எச்சரிக்கையுடன் இருக்கவும்.`
        : currentLang === 'hi'
        ? `क्षेत्रीय भूभाग (${elevText})। समुद्र से निकटता असत्यापित; स्थानीय जल स्रोतों पर सावधानी बरतें।`
        : `Regional Terrain (${elevText}). Marine coastal proximity unverified; exercise general water safety at local waterfronts.`;
    }
  } else if (act === 'trekking') {
    if (isMountain) {
      terrainText = currentLang === 'ta'
        ? `உயர்மலை ஆல்பைன் பகுதி (${elevText}). செங்குத்தான பாறைகள் மற்றும் உயர நோய் (AMS) சாத்தியம்; அவசரப்படாமல் பழகி ஏறவும்.`
        : currentLang === 'hi'
        ? `उच्च पर्वतीय भूभाग (${elevText})। खड़ी ढलानें और ऊंचाई की बीमारी (AMS) का जोखिम; धीरे-धीरे चढ़ें और अनुकूलन करें।`
        : `High-Altitude Mountainous Terrain (${elevText}). Steep gradient scree, rapid weather variation, and altitude acclimatization factors apply.`;
    } else if (geo.isHilly) {
      terrainText = currentLang === 'ta'
        ? `மிதமான குன்றுப் பகுதி (${elevText}). வளைவான பாதைகள் மற்றும் காடுகள்; கணுக்கால் தாங்கும் நல்ல காலணிகளை அணியவும்.`
        : currentLang === 'hi'
        ? `मध्यम पहाड़ी क्षेत्र (${elevText})। घुमावदार रास्ते और वन क्षेत्र; अच्छी पकड़ वाले ट्रेकिंग जूते पहनें।`
        : `Elevated Hilly Terrain (${elevText}). Forest trails and undulating gradients; wear supportive ankle-traction footwear.`;
    } else {
      terrainText = currentLang === 'ta'
        ? `சமவெளி / குறைந்த உயர நிலப்பரப்பு (${elevText}). தட்டையான நடைபாதை; வழக்கமான நடைப்பயிற்சி வழிகாட்டல் பொருந்தும்.`
        : currentLang === 'hi'
        ? `मैदानी / कम ऊंचाई वाला भूभाग (${elevText})। सामान्य पगडंडियां; शारीरिक थकान कम रहती है।`
        : `Lowland / Plain Terrain (${elevText}). Flat walking trails; standard outdoor trail endurance precautions apply.`;
    }
  } else if (act === 'sightseeing') {
    if (isMountain) {
      terrainText = currentLang === 'ta'
        ? `மலை வாசஸ்தல சுற்றுலா (${elevText}). செங்குத்தான படிக்கட்டுகள் மற்றும் மேடு பள்ளங்கள்; மூச்சுத் திணறலைத் தவிர்க்க மெதுவாக நடக்கவும்.`
        : currentLang === 'hi'
        ? `पर्वतीय हेरिटेज मार्ग (${elevText})। खड़ी सीढ़ियां और चढ़ाई वाले रास्ते; सांस फूलने से बचने के लिए गति नियंत्रित रखें।`
        : `Hill Station Heritage Circuit (${elevText}). Steep stone staircases and hilly walkways; pace walking intervals to prevent shortness of breath.`;
    } else if (isCoastal) {
      terrainText = currentLang === 'ta'
        ? `கடற்கரை வரலாற்றுத் தளம் (${elevText}). கடலோரக் கோட்டைகள் மற்றும் உலா சாலைகள்; பாசி பிடித்த பழைய மதில்களில் வழுக்காமல் நடக்கவும்.`
        : currentLang === 'hi'
        ? `तटीय ऐतिहासिक गलियारा (${elevText})। समुद्री किले और तटवर्ती स्मारक; पुरानी पत्थरों की दीवारों पर फिसलन से बचें।`
        : `Coastal Heritage Corridor (${elevText}). Waterfront promenades and historic forts; watch for mossy stone steps near the water line.`;
    } else {
      terrainText = currentLang === 'ta'
        ? `சமவெளி வரலாற்று நகரம் (${elevText}). பரந்த அரண்மனை முற்றங்கள் மற்றும் கோட்டைப் பகுதிகள்.`
        : currentLang === 'hi'
        ? `मैदानी ऐतिहासिक शहर (${elevText})। विशाल महल, किले के आंगन और विस्तृत हेरिटेज परिसर।`
        : `Interior Plain / Historical City (${elevText}). Sprawling monument courtyards, stone palaces, and wide walking plazas.`;
    }
  } else if (act === 'road') {
    if (isMountain) {
      terrainText = currentLang === 'ta'
        ? `மலைக் கொண்டை ஊசி வளைவுச் சாலை (${elevText}). செங்குத்தான வளைவுகள் மற்றும் பள்ளமான பள்ளத்தாக்குகள்; ஹார்ன் அடித்து குறைந்த கியரில் இயக்கவும்.`
        : currentLang === 'hi'
        ? `पहाड़ी घाट मार्ग (${elevText})। संकरे हेयरपिन मोड़, गहरी खाइयां और ढलान; नीचे उतरते समय लोअर गियर और हॉर्न का उपयोग करें।`
        : `Mountain Ghat Corridor (${elevText}). Frequent hairpin bends, steep descent grades, and blind turns; use engine braking in low gear and sound horn at blind curves.`;
    } else if (isCoastal) {
      terrainText = currentLang === 'ta'
        ? `கடலோர நெடுஞ்சாலை (${elevText}). கழிமுகப் பாலங்கள் மற்றும் கடற்கரைச் சாலைகள்; குறுக்குக் காற்றைக் கவனிக்கவும்.`
        : currentLang === 'hi'
        ? `तटीय हाईवे (${elevText})। पुल, समुद्री हवा और सड़क पर रेत की संभावना; सामान्य गति सीमा बनाए रखें।`
        : `Coastal Highway Corridor (${elevText}). Estuary bridges and tidal causeways; maintain lane discipline against open coastal crosswinds.`;
    } else {
      terrainText = currentLang === 'ta'
        ? `சமவெளி விரைவுச் சாலை (${elevText}). பல வழித்தடப் போக்குவரத்து; வேகக் கட்டுப்பாட்டைக் கடைப்பிடிக்கவும்.`
        : currentLang === 'hi'
        ? `मैदानी एक्सप्रेसवे (${elevText})। बहु-लेन हाईवे; गति सीमा और लेन अनुशासन का पालन करें।`
        : `Multi-Lane Highway Corridor (${elevText}). Standard expressway transit; monitor high-speed lane discipline.`;
    }
  } else {
    // outdoor
    if (isMountain) {
      terrainText = currentLang === 'ta'
        ? `உயர்மலை வனப்பகுதி (${elevText}). தொலைதூரப் பள்ளத்தாக்குகள் மற்றும் திடீர் வானிலை மாற்றங்கள்; ஆஃப்லைன் வரைபடங்களை வைத்திருக்கவும்.`
        : currentLang === 'hi'
        ? `पर्वतीय बीहड़ भूभाग (${elevText})। दूरदराज की घाटियां और अप्रत्याशित मौसम; ऑफलाइन मैप और प्राथमिक उपचार किट साथ रखें।`
        : `Alpine Wilderness (${elevText}). Remote mountain valleys and rapid weather changes; pre-download offline maps.`;
    } else if (isCoastal) {
      terrainText = currentLang === 'ta'
        ? `கடலோர முகாம் நிலப்பரப்பு (${elevText}). அலை ஏற்ற இறக்கங்கள்; அலை வரும் எல்லைக்குள் கூடாரங்களை அமைக்க வேண்டாம்.`
        : currentLang === 'hi'
        ? `तटीय क्षेत्र (${elevText})। ज्वार-भाटा का प्रभाव; हाई टाइड की सीमा के भीतर टेंट न लगाएं।`
        : `Coastal Estuary & Shoreline (${elevText}). Tidal fluctuations; avoid pitching camping shelters inside intertidal flood zones.`;
    } else {
      terrainText = currentLang === 'ta'
        ? `சமவெளி திறந்தவெளிப் பகுதி (${elevText}). புல்வெளிகள் மற்றும் முகாமிட வசதியான வனப்பகுதிகள்.`
        : currentLang === 'hi'
        ? `मैदानी खुला क्षेत्र (${elevText})। घास के मैदान और साहसिक खेलों के लिए सुलभ रास्ते।`
        : `Open Plains & Woodland (${elevText}). Grassy terrain, clear sightlines, and accessible road access for recreational sports.`;
    }
  }

  // 3. Activity Action Checklist ("What should I do now?")
  let actions = [];

  if (act === 'beach') {
    if (isDefinitiveInland) {
      actions = currentLang === 'ta' ? [
        "குறிப்பு: இந்த இடம் உள்நாட்டில் அமைந்துள்ளது; கடல் அலை மற்றும் ஆழ்கடல் பாதுகாப்பு வழிகாட்டல்கள் இங்கு பொருந்தாது.",
        "உள்ளூர் நதிகள், ஏரிகள் அல்லது அணைகளுக்குச் சென்றால், அனுமதிக்கப்பட்ட பாதுகாப்பான எல்லைகளில் மட்டும் நிற்கவும்.",
        "ஹோட்டல் நீச்சல் குளங்கள் அல்லது ஏரிகளில் நீந்தும்போது ஆழம் தெரியாமல் குதிக்க வேண்டாம்."
      ] : currentLang === 'hi' ? [
        "सूचना: यह स्थान अंतर्देशीय (समुद्र तट से दूर) है; समुद्री लहरों संबंधी सलाह यहां लागू नहीं होती।",
        "यदि स्थानीय नदियों या झीलों पर जाएं, तो किनारे पर लगे चेतावनी बोर्ड का पालन करें और तेज बहाव से बचें।",
        "होटल के स्विमिंग पूल या जलाशयों में गैर-तैराकों के लिए उचित निगरानी रखें।"
      ] : [
        "Note: This destination is an inland location; marine beach advice and ocean surf conditions are not applicable.",
        "If visiting local rivers, reservoirs, or lakes, adhere to posted local barrier warnings and avoid entering swift currents.",
        "For hotel swimming pools or recreational lakes, ensure active supervision for non-swimmers."
      ];
    } else if (statusLevel === 'advisory') {
      actions = currentLang === 'ta' ? [
        "கடல் கொந்தளிப்பு அல்லது கனமழை காரணமாக கடலில் ஆழமாக இறங்குவதைத் தவிர்க்கவும்.",
        "உள்ளூர் உயிர்காப்பாளர்கள் (Lifeguards) வழங்கும் எச்சரிக்கை வழிகாட்டல்களை மதிக்கவும்.",
        "ஈரமான பாறை அலைத்தடுப்புகள் அருகே செல்வதைத் தவிர்க்கவும்; பெரிய அலைகள் திடீரெனத் தாக்கக்கூடும்.",
        "உடைமைகளைத் தள்ளி பாதுகாப்பான உலர்ந்த இடங்களில் வைக்கவும்."
      ] : currentLang === 'hi' ? [
        "खराब मौसम या तेज हवा के कारण समुद्र के गहरे पानी में उतरने से बचें।",
        "स्थानीय लाइफगार्ड द्वारा दी गई सुरक्षा चेतावनियों का कड़ाई से पालन करें।",
        "चट्टानी किनारों और जेटी पर जाने से बचें; अप्रत्याशित लहरों से खतरा हो सकता है।",
        "अपने सामान और फोन को तट से दूर सुरक्षित कवर्ड शेल्टर में रखें।"
      ] : [
        "Avoid wading into deep or turbulent water during heavy rainfall or squally wind conditions.",
        "Strictly heed on-duty local lifeguards and posted municipal beach advisories.",
        "Keep clear of wet slippery rock groynes and sea walls vulnerable to sudden swells.",
        "Keep electronic devices and personal belongings in waterproof covers away from water lines."
      ];
    } else {
      actions = currentLang === 'ta' ? [
        "உயிர்காப்பாளர்கள் கண்காணிக்கும் நியமிக்கப்பட்ட பாதுகாப்பான எல்லைக்குள் மட்டுமே கடலில் நீந்தவும்.",
        "சூரியக் கதிர்வீச்சு மற்றும் வெயில் தாக்கத்திலிருந்து தப்ப சன்ஸ்கிரீன் மற்றும் தொப்பியைப் பயன்படுத்தவும்.",
        "உடல் நீர்ச்சத்து குறையாமல் இருக்கத் தொடர்ந்து தண்ணீர் அல்லது இளநீர் அருந்தவும்.",
        "தனிமையான மணல் திட்டுகளுக்குச் செல்லும் முன் உள்ளூர் அலை நேரங்களை விசாரித்துக் கொள்ளவும்."
      ] : currentLang === 'hi' ? [
        "केवल लाइफगार्ड द्वारा चिह्नित सुरक्षित क्षेत्रों के भीतर ही समुद्र में जाएं।",
        "तेज धूप और यूवी विकिरण से बचाव के लिए सनस्क्रीन लोशन और टोपी का उपयोग करें।",
        "डिहाइड्रेशन से बचने के लिए लगातार पानी या नारियल पानी पीते रहें।",
        "अलग-थलग पड़े रेतीले क्षेत्रों में जाने से पहले स्थानीय ज्वार-भाटे के समय की जांच कर लें।"
      ] : [
        "Swim strictly within designated bathing zones monitored by active lifeguards.",
        "Apply broad-spectrum sunscreen and wear protective headwear to prevent intense UV exposure.",
        "Stay consistently hydrated with water or electrolyte fluids to avert heat fatigue.",
        "Verify local tide timings before venturing onto isolated sandspits or rocky tidal coves."
      ];
    }
  } else if (act === 'trekking') {
    if (statusLevel === 'advisory') {
      actions = currentLang === 'ta' ? [
        "மோசமான வானிலை தணியும் வரை மலையேற்றப் பயணத்தை ஒத்திவைக்கவும்.",
        "மழைக்காலத்தில் மலைப்பாதைகளில் பாறை நழுவல் ஏற்பட வாய்ப்புள்ளதால் விழிப்புடன் இருக்கவும்.",
        "உணவு, மாற்று உடைகள் மற்றும் போன்களை நீர்ப்புகா பைகளில் (Dry bags) பாதுகாக்கவும்.",
        "வழியில் உள்ள பாதுகாப்பான தங்குமிடங்கள் அல்லது சோதனைச் சாவடிகள் பற்றிய விவரங்களை அறிந்து வைத்திருக்கவும்."
      ] : currentLang === 'hi' ? [
        "खराब मौसम या तेज बारिश के दौरान ट्रेक को कुछ समय के लिए स्थगित करने पर विचार करें।",
        "पहाड़ी पगडंडियों पर गीली चट्टानों और मिट्टी के खिसकने के प्रति सतर्क रहें।",
        "अपने कपड़े, दवाइयां और गैजेट्स वाटरप्रूफ बैग में सुरक्षित रखें।",
        "मार्ग में निकटतम वन विभाग चौकी या सुरक्षित शेल्टर की जानकारी रखें।"
      ] : [
        "Consider deferring high-altitude trail ascents during severe rain or gale conditions until weather stabilizes.",
        "Remain vigilant along steep cutting slopes where rain loosens scree and increases slip risks.",
        "Seal spare clothing, first-aid gear, and communication devices inside waterproof dry-sacks.",
        "Note the locations of recognized trail shelters or forest check-posts along your route."
      ];
    } else {
      actions = currentLang === 'ta' ? [
        "பிற்பகல் வானிலை மாற்றங்களைத் தவிர்க்க அதிகாலையிலேயே மலையேற்றத்தைத் தொடங்குங்கள்.",
        "குறைந்தது 2.5 லிட்டர் குடிநீர், எலக்ட்ரோலைட் பாக்கெட்டுகள் மற்றும் முதலுதவிப் பெட்டியைக் கொண்டு செல்லவும்.",
        "உங்கள் தங்குமிட உரிமையாளர் அல்லது நண்பர்களிடம் நீங்கள் செல்லும் பாதையைத் தெரிவிக்கவும்.",
        "அங்கீகரிக்கப்பட்ட மலைப்பாதைகளிலேயே நடக்கவும்; ஆபத்தான குறுக்குவழிகளில் செல்ல வேண்டாம்."
      ] : currentLang === 'hi' ? [
        "दोपहर के मौसम बदलाव से बचने के लिए सुबह जल्दी ट्रेक शुरू करें।",
        "कम से कम 2.5 लीटर पानी, इलेक्ट्रोलाइट पाउडर और फर्स्ट-एड किट साथ रखें।",
        "अपने होमस्टे मालिक या स्थानीय संपर्क को अपने ट्रेक रूट और लौटने के समय की जानकारी दें।",
        "केवल चिह्नित पगडंडियों पर ही चलें; अपरिचित शॉर्टकट लेने से बचें।"
      ] : [
        "Commence morning treks early to negotiate open ridges prior to afternoon weather shifts.",
        "Carry minimum 2.5 liters of drinking water, electrolyte replacement sachets, and basic blister/first-aid gear.",
        "Inform your accommodation host or local contact of your intended trail route and turnaround time.",
        "Stick strictly to established trails; avoid undocumented shortcut descents across loose slopes."
      ];
    }
  } else if (act === 'sightseeing') {
    if (temp >= 38) {
      actions = currentLang === 'ta' ? [
        "கோட்டைகள், அரண்மனைகள் போன்ற திறந்தவெளி இடங்களை காலை 9:30க்கு முன் அல்லது மாலை 4:30க்கு பின் பார்வையிடுங்கள்.",
        "தளர்வான பருத்தி ஆடைகள், தொப்பி மற்றும் UV கண்ணாடிகளை அணியுங்கள்.",
        "தாகம் எடுக்கும் வரை காத்திருக்காமல் அடிக்கடி நீர் அல்லது எலுமிச்சை சாறு குடியுங்கள்.",
        "நண்பகல் வேளையில் ஏசி வசதியுள்ள அருங்காட்சியகங்கள் அல்லது நிழலான கலைக்கூடங்களில் நேரத்தைச் செலவிடுங்கள்."
      ] : currentLang === 'hi' ? [
        "किले और खुले स्मारकों का भ्रमण सुबह 9:30 से पहले या शाम 4:30 बजे के बाद ही करें।",
        "हल्के सूती कपड़े पहनें और सिर पर टोपी तथा धूप का चश्मा लगाएं।",
        "प्यास लगने का इंतजार न करें; लगातार पानी या नींबू पानी पीते रहें।",
        "दोपहर की गर्मी के समय वातानुकूलित संग्रहालयों या इनडोर दीर्घाओं में जाएं।"
      ] : [
        "Schedule open-air monument visits (forts, palaces, courtyards) for early morning or late afternoon.",
        "Wear loose-fitting light-colored cotton apparel, wide-brim headwear, and UV-filtering eyewear.",
        "Drink water or oral rehydration fluids continuously; do not wait until thirst manifests.",
        "Spend the peak midday thermal window (12 PM – 3:30 PM) inside covered museums or indoor galleries."
      ];
    } else if (rain >= 12 || conditionType === 'storm') {
      actions = currentLang === 'ta' ? [
        "மழைக் காலத்தில் வழுக்கும் பாரம்பரிய பளிங்குத் தரைகளில் நடக்க நல்ல பிடிப்புள்ள காலணிகளை அணியுங்கள்.",
        "கனமழையின் போது உட்புற அருங்காட்சியகங்கள், கலைக்கூடங்கள் மற்றும் கைவினைக் கண்காட்சிகளுக்கு முன்னுரிமை அளியுங்கள்.",
        "கேமராக்கள், ஆவணங்கள் மற்றும் மொபைல்களை நீர்ப்புகா பைகளில் வையுங்கள்.",
        "பழமையான பாழடைந்த வளைவுகள் அல்லது பெரிய மரங்களின் கீழ் அடைக்கலம் தேட வேண்டாம்."
      ] : currentLang === 'hi' ? [
        "ऐतिहासिक स्मारकों के गीले संगमरमर के फर्श पर चलने के लिए मजबूत ग्रिप वाले जूते पहनें।",
        "भारी बारिश के दौरान इनडोर संग्रहालयों, कला दीर्घाओं और हस्तशिल्प बाजारों को प्राथमिकता दें।",
        "कैमरा, मोबाइल और पहचान पत्र वाटरप्रूफ पाउच में सुरक्षित रखें।",
        "पुराने जर्जर मेहराबों या बड़े कमजोर पेड़ों के नीचे खड़े होने से बचें।"
      ] : [
        "Wear rubber-soled footwear with dependable grip to negotiate wet polished heritage stone courtyards.",
        "Prioritize covered indoor heritage wings, state museums, and art galleries during rain.",
        "Enclose mobile devices, cameras, and identity documents in sealed zip-lock protectors.",
        "Avoid standing directly under decaying ancient arches or overhanging mature trees."
      ];
    } else {
      actions = currentLang === 'ta' ? [
        "நீண்ட வரிசைகளைத் தவிர்க்க தொல்பொருள் ஆய்வுத் துறையின் (ASI) இணையதளத்தில் நுழைவுச்சீட்டுகளை முன்பதிவு செய்யுங்கள்.",
        "அரசு அங்கீகாரம் பெற்ற சுற்றுலா வழிகாட்டிகளின் (Ministry of Tourism) அடையாள அட்டையைச் சரிபார்த்து அமர்த்தவும்.",
        "வழிபாட்டுத் தலங்களில் உள்ள கலாச்சார ஆடை நெறிமுறைகளை மதிக்கவும்.",
        "அவசர உதவிக்கு 112 மற்றும் சுற்றுலா உதவி எண் 1363 ஐ கைபேசியில் சேமித்து வைக்கவும்."
      ] : currentLang === 'hi' ? [
        "लंबी कतारों से बचने के लिए एएसआई (ASI) के आधिकारिक पोर्टल से ई-टिकट पहले ही बुक कर लें।",
        "केवल पर्यटन मंत्रालय द्वारा प्रमाणित और आधिकारिक पहचान पत्र वाले टूरिस्ट गाइड ही चुनें।",
        "धार्मिक स्थलों पर स्थानीय सांस्कृतिक पोशाक नियमों और परंपराओं का आदर करें।",
        "अपनी पहचान पत्र की प्रतियां और 112 एवं 1363 हेल्पलाइन नंबर मोबाइल में तैयार रखें।"
      ] : [
        "Book monument entry tickets through the official ASI portal in advance where available.",
        "Hire government-certified tourist guides displaying official Ministry of Tourism credential badges.",
        "Respect regional cultural customs regarding modest attire and footwear removal at places of worship.",
        "Keep 112 emergency and 1363 tourist helplines readily accessible on speed dial."
      ];
    }
  } else if (act === 'road') {
    if (rain >= 12 || (isMountain && rain >= 6)) {
      actions = currentLang === 'ta' ? [
        "முன் செல்லும் வாகனத்திலிருந்து கூடுதல் இடைவெளி விட்டு மெதுவாக வாகனத்தை இயக்கவும்.",
        "நீர் தேங்கிய சுரங்கப்பாதைகள் அல்லது வெள்ளம் பெருக்கெடுத்து ஓடும் பாலங்களைக் கடக்க முயற்சிக்காதீர்கள்.",
        "மலைப் பாதைகளில் கொண்டை ஊசி வளைவுகளில் ஒலிப்பான் (Horn) எழுப்பி, மேலே ஏறும் வாகனங்களுக்கு வழிவிடவும்.",
        "வாகனத்தின் மூடுபனி விளக்குகளை (Fog lamps) ஒளிரச் செய்து எச்சரிக்கையுடன் இயக்கவும்."
      ] : currentLang === 'hi' ? [
        "आगे चल रहे वाहन से सुरक्षित दूरी बनाकर चलें और गति नियंत्रित रखें।",
        "जलभराव वाले अंडरपास या पानी से भरे पुलों से गाड़ी निकालने का जोखिम न लें।",
        "पहाड़ी घाट मोड़ों पर हॉर्न अवश्य बजाएं और चढ़ाई करने वाले वाहनों को प्राथमिकता दें।",
        "वाहन की फॉग लाइट चालू रखें और गति सीमा का कड़ाई से पालन करें।"
      ] : [
        "Maintain ample headway distance behind leading vehicles and reduce speed to avoid hydroplaning.",
        "Never attempt driving across submerged underpasses or flooded causeways.",
        "Sound horn at blind mountain hairpin turns and yield right-of-way to ascending vehicles.",
        "Operate low-beam headlights and fog lamps; avoid parking directly beneath steep cutting scree slopes."
      ];
    } else {
      actions = currentLang === 'ta' ? [
        "நீண்ட தூரப் பயணத்தைத் தொடங்கும் முன் டயர் காற்றழுத்தம், உதிரி டயர் மற்றும் வைப்பர்களைச் சரிபார்க்கவும்.",
        "தொலைதூரப் பகுதிகளில் நெட்வொர்க் கிடைக்காத போது பயன்படுத்த ஆஃப்லைன் வரைபடங்களைப் பதிவிறக்கவும்.",
        "வாகனத்தில் அவசர கால முதலுதவிப் பெட்டி, டார்ச் லைட் மற்றும் ஜம்பர் கேபிள்களை வைத்திருக்கவும்.",
        "ஓட்டுனர் சோர்வைத் தவிர்க்க நெடுஞ்சாலைப் பயணத்தின் போது ஒவ்வொரு 2-3 மணி நேரத்திற்கும் ஓய்வெடுக்கவும்."
      ] : currentLang === 'hi' ? [
        "लंबी यात्रा पर निकलने से पहले टायर प्रेशर, स्टेपनी और वाइपर की स्थिति की जांच करें।",
        "दूरदराज के नेटवर्क-विहीन क्षेत्रों के लिए ऑफलाइन मैप्स पहले से डाउनलोड कर लें।",
        "गाड़ी में रिफ्लेक्टिव त्रिकोण, टॉर्च, प्राथमिक उपचार किट और टायर इन्फ्लेटर रखें।",
        "थकावट से बचने के लिए हर 2 से 3 घंटे की लगातार ड्राइविंग के बाद 15 मिनट का विश्राम अवश्य लें।"
      ] : [
        "Inspect tire pressure, tread depth, spare wheel, and windshield wipers prior to highway transit.",
        "Pre-download offline navigation route tiles in mapping apps for patchy cellular areas.",
        "Carry essential vehicle emergency gear: reflective hazard triangle, flashlight, and jumper cables.",
        "Take scheduled 15-minute rest breaks every 2 to 3 hours of highway driving to combat fatigue."
      ];
    }
  } else {
    // outdoor
    if (statusLevel === 'advisory') {
      actions = currentLang === 'ta' ? [
        "வானிலை சீரடையும் வரை சாகச விளையாட்டுகள் மற்றும் திறந்தவெளி நடவடிக்கைகளை நிறுத்தி வையுங்கள்.",
        "தனித்து நிற்கும் உயரமான மரங்களின் கீழோ அல்லது நதிக்கரை தாழ்வான சமவெளியிலோ கூடாரங்களை அமைக்க வேண்டாம்.",
        "கூடாரங்களை பலமான ஆப்புகளால் நிலைநிறுத்தி, தளர்வான துணிகளை அகற்றவும்.",
        "இடி இடிக்கும் போது உடனடியாக கான்கிரீட் கட்டிடங்களுக்குள் செல்லவும்."
      ] : currentLang === 'hi' ? [
        "खराब मौसम शांत होने तक सभी बोटिंग, राफ्टिंग और खुले मैदान की गतिविधियां स्थगित रखें।",
        "ऊंचे अकेले पेड़ों के नीचे या नदी के जलमग्न होने वाले किनारों पर टेंट न लगाएं।",
        "तंबू की रस्सियों को जमीन में मजबूती से बांधें और खुले सामान को समेट लें।",
        "आकाशीय बिजली कड़कने के दौरान तुरंत पक्के आश्रय में जाएं।"
      ] : [
        "Temporarily suspend paragliding, river boating, and aerial sports until weather stabilizes.",
        "Never pitch camping shelters directly beneath isolated tall trees or dry riverbed flash-flood paths.",
        "Secure tent guy-lines with deep-driven stakes and stow loose sun tarps.",
        "Seek enclosed permanent shelter if thunder is audible."
      ];
    } else {
      actions = currentLang === 'ta' ? [
        "சாகச விளையாட்டுகளில் ஈடுபடும் முன் நிறுவனத்தின் அரசு சான்றிதழ் மற்றும் பாதுகாப்பு பெல்ட்களைச் சரிபார்க்கவும்.",
        "முகாம் தீயை கற்களால் சுற்றி அமைக்கவும்; தூங்குவதற்கு முன் தீயை நீரால் அணைக்கவும்.",
        "பூச்சி விரட்டி, ஆண்டி-ஹிஸ்டமைன் மாத்திரைகள் மற்றும் முதலுதவிப் பெட்டியை உடன் வைத்திருக்கவும்.",
        "மின்சாரம் இல்லாத இடங்களுக்குச் செல்லும் முன் பவர் பேங்க் மற்றும் டார்ச் லைட்டை சார்ஜ் செய்து கொள்ளவும்."
      ] : currentLang === 'hi' ? [
        "साहसिक खेलों से पहले ऑपरेटर के सरकारी सुरक्षा प्रमाणपत्र और गियर की जांच करें।",
        "कैंपफायर को पत्थरों से घेरकर रखें; सोने से पहले पानी डालकर आग को पूरी तरह बुझा दें।",
        "मच्छर रोधी क्रीम और प्राथमिक उपचार की सामग्री अपने साथ रखें।",
        "दूरदराज जाने से पहले पावर बैंक और टॉर्च को पूरी तरह चार्ज कर लें।"
      ] : [
        "Verify government licensing and certified safety gear with adventure operators before undertaking activities.",
        "Enclose campfires within stone rings, never leave open flame unattended, and douse with water before retiring.",
        "Pack broad-spectrum insect repellent, antihistamines, and a basic outdoor first-aid kit.",
        "Ensure power banks, flashlights, and communication gear are charged before heading into off-grid areas."
      ];
    }
  }

  return {
    level: statusLevel,
    statusText: (translations[currentLang] && translations[currentLang][statusTextKey]) || statusLevel.toUpperCase(),
    activityName: activeActivityName,
    heading: headingText,
    thermal: thermalText,
    precip: precipText,
    wind: windText,
    terrain: terrainText,
    actions: actions
  };
}
