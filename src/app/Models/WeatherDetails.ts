export interface WeatherDetails {
    id: string
    "v3-wx-forecast-daily-15day-cognitiveHealth": any
    "v3-wx-conditions-historical-dailysummary-30day": V3WxConditionsHistoricalDailysummary30day
    "v3-wx-forecast-hourly-10day": V3WxForecastHourly10day
    "v3-wx-lightning-15minute-mobile": any
    "v3-wx-skiconditions": any
    "v3-wx-globalAirQuality": V3WxGlobalAirQuality
    "v3-wx-observations-current": V3WxObservationsCurrent
    "v3-wx-forecast-daily-15day": V3WxForecastDaily15day
    vt1idxBreathingDaypart: Vt1idxBreathingDaypart
    vt1wwir: Vt1wwir
    vt1nowcast: Vt1nowcast
    v2idxRunDaypart5: V2idxRunDaypart5
    vt1pastpollen: any
    vt1contentMode: Vt1contentMode
    "v3-location-point": V3LocationPoint
    vt1pollenobs: any
    vt1currentTides: any
    v2idxDrySkinDaypart15: V2idxDrySkinDaypart15
    v2idxMosquitoDaily15: V2idxMosquitoDaily15
    v3alertsHeadlines: any
    vt1idxPollenDaypart: Vt1idxPollenDaypart
    vt1precipitation: Vt1precipitation
    vt1runweatherhourly: Vt1runweatherhourly
  }
  
  export interface V3WxConditionsHistoricalDailysummary30day {
    dayOfWeek: string[]
    iconCodeDay: number[]
    iconCodeExtendDay: number[]
    iconCodeExtendNight: number | undefined[]
    iconCodeNight: number | undefined[]
    precip24Hour: number[]
    rain24Hour: number[]
    snow24Hour: number[]
    temperatureMax: number[]
    temperatureMin: number | undefined[]
    validTimeLocal: string[]
    validTimeUtc: number[]
    wxPhraseLongDay: string[]
    wxPhraseLongNight: string | undefined[]
  }
  
  export interface V3WxForecastHourly10day {
    cloudCover: number[]
    dayOfWeek: string[]
    dayOrNight: string[]
    expirationTimeUtc: number[]
    iconCode: number[]
    iconCodeExtend: number[]
    precipChance: number[]
    precipType: string[]
    pressureMeanSeaLevel: number[]
    qpf: number[]
    qpfSnow: number[]
    relativeHumidity: number[]
    temperature: number[]
    temperatureDewPoint: number[]
    temperatureFeelsLike: number[]
    temperatureHeatIndex: number[]
    temperatureWindChill: number[]
    uvDescription: string[]
    uvIndex: number[]
    validTimeLocal: string[]
    validTimeUtc: number[]
    visibility: number[]
    windDirection: number[]
    windDirectionCardinal: string[]
    windGust: number | undefined[]
    windSpeed: number[]
    wxPhraseLong: string[]
    wxPhraseShort: string[]
    wxSeverity: number[]
  }
  
  export interface V3WxGlobalAirQuality {
    globalairquality: Globalairquality
  }
  
  export interface Globalairquality {
    latitude: number
    longitude: number
    source: string
    disclaimer: string
    airQualityIndex: number
    airQualityCategory: string
    airQualityCategoryIndex: number
    airQualityCategoryIndexColor: string
    primaryPollutant: string
    pollutants: Pollutants
    messages: Messages
    expireTimeGmt: number
  }
  
  export interface Pollutants {
    CO: Co
    NO2: No2
    O3: O3
    PM10: Pm10
    "PM2.5": Pm25
    SO2: So2
  }
  
  export interface Co {
    name: string
    phrase: string
    amount: number
    unit: string
    category: string
    categoryIndex: number
    index: number
  }
  
  export interface No2 {
    name: string
    phrase: string
    amount: number
    unit: string
    category: string
    categoryIndex: number
    index: number
  }
  
  export interface O3 {
    name: string
    phrase: string
    amount: number
    unit: string
    category: string
    categoryIndex: number
    index: number
  }
  
  export interface Pm10 {
    name: string
    phrase: string
    amount: number
    unit: string
    category: string
    categoryIndex: number
    index: number
  }
  
  export interface Pm25 {
    name: string
    phrase: string
    amount: number
    unit: string
    category: string
    categoryIndex: number
    index: number
  }
  
  export interface So2 {
    name: string
    phrase: string
    amount: number
    unit: string
    category: string
    categoryIndex: number
    index: number
  }
  
  export interface Messages {
    General: General
    "Sensitive Group": SensitiveGroup
  }
  
  export interface General {
    title: string
    text: string
  }
  
  export interface SensitiveGroup {
    title: string
    text: string
  }
  
  export interface V3WxObservationsCurrent {
    cloudCeiling: any
    cloudCoverPhrase: string
    dayOfWeek: string
    dayOrNight: string
    expirationTimeUtc: number
    iconCode: number
    iconCodeExtend: number
    obsQualifierCode: any
    obsQualifierSeverity: any
    precip1Hour: number
    precip6Hour: number
    precip24Hour: number
    pressureAltimeter: number
    pressureChange: number
    pressureMeanSeaLevel: number
    pressureTendencyCode: number
    pressureTendencyTrend: string
    relativeHumidity: number
    snow1Hour: number
    snow6Hour: number
    snow24Hour: number
    sunriseTimeLocal: string
    sunriseTimeUtc: number
    sunsetTimeLocal: string
    sunsetTimeUtc: number
    temperature: number
    temperatureChange24Hour: number
    temperatureDewPoint: number
    temperatureFeelsLike: number
    temperatureHeatIndex: number
    temperatureMax24Hour: number
    temperatureMaxSince7Am: number
    temperatureMin24Hour: number
    temperatureWindChill: number
    uvDescription: string
    uvIndex: number
    validTimeLocal: string
    validTimeUtc: number
    visibility: number
    windDirection: number
    windDirectionCardinal: string
    windGust: any
    windSpeed: number
    wxPhraseLong: string
    wxPhraseMedium: string
    wxPhraseShort: string
  }
  
  export interface V3WxForecastDaily15day {
    calendarDayTemperatureMax: number[]
    calendarDayTemperatureMin: number[]
    dayOfWeek: string[]
    expirationTimeUtc: number[]
    moonPhase: string[]
    moonPhaseCode: string[]
    moonPhaseDay: number[]
    moonriseTimeLocal: string[]
    moonriseTimeUtc: number[]
    moonsetTimeLocal: string[]
    moonsetTimeUtc: number | undefined[]
    narrative: string[]
    qpf: number[]
    qpfSnow: number[]
    sunriseTimeLocal: string[]
    sunriseTimeUtc: number[]
    sunsetTimeLocal: string[]
    sunsetTimeUtc: number[]
    temperatureMax: number | undefined[]
    temperatureMin: number[]
    validTimeLocal: string[]
    validTimeUtc: number[]
    daypart: Daypart[]
  }
  
  export interface Daypart {
    cloudCover: number | undefined[]
    dayOrNight: string | undefined[]
    daypartName: string | undefined[]
    iconCode: number | undefined[]
    iconCodeExtend: number | undefined[]
    narrative: string | undefined[]
    precipChance: number | undefined[]
    precipType: string | undefined[]
    qpf: number | undefined[]
    qpfSnow: number | undefined[]
    qualifierCode: string | undefined[]
    qualifierPhrase: string | undefined[]
    relativeHumidity: number | undefined[]
    snowRange: string | undefined[]
    temperature: number | undefined[]
    temperatureHeatIndex: number | undefined[]
    temperatureWindChill: number | undefined[]
    thunderCategory: string | undefined[]
    thunderIndex: number | undefined[]
    uvDescription: string | undefined[]
    uvIndex: number | undefined[]
    windDirection: number | undefined[]
    windDirectionCardinal: string | undefined[]
    windPhrase: string | undefined[]
    windSpeed: number | undefined[]
    wxPhraseLong: string | undefined[]
    wxPhraseShort: string | undefined[]
  }
  
  export interface Vt1idxBreathingDaypart {
    day: Day
    night: Night
  }
  
  export interface Day {
    fcstValid: number | undefined[]
    fcstValidLocal: string | undefined[]
    dayInd: string | undefined[]
    num: number | undefined[]
    daypartName: string | undefined[]
    breathingIndex: number | undefined[]
    breathingCategory: string | undefined[]
  }
  
  export interface Night {
    fcstValid: number[]
    fcstValidLocal: string[]
    dayInd: string[]
    num: number[]
    daypartName: string[]
    breathingIndex: number[]
    breathingCategory: string[]
  }
  
  export interface Vt1wwir {
    processTime: string
    overallType: number
    phrase: string
    tersePhrase: string
    phraseTemplate: string
    tersePhraseTemplate: string
    precipDay: any
    precipTime24hr: any
    precipTime12hr: any
    precipTimeIso: any
    timeZoneAbbreviation: string
  }
  
  export interface Vt1nowcast {
    icon: number
    narrative128Char: string
    narrative256Char: string
    narrative32Char: string
    narrative512Char: string
    peakSeverity: number
    peakWind: number
    processTime: string
    precipAmt: number
  }
  
  export interface V2idxRunDaypart5 {
    metadata: Metadata
    runWeatherIndex12hour: RunWeatherIndex12hour
  }
  
  export interface Metadata {
    language: string
    transactionId: string
    version: string
    latitude: number
    longitude: number
    expireTimeGmt: number
    statusCode: number
  }
  
  export interface RunWeatherIndex12hour {
    fcstValid: number[]
    fcstValidLocal: string[]
    dayInd: string[]
    num: number[]
    daypartName: string[]
    longRunWeatherIndex: number[]
    longRunWeatherCategory: string[]
    shortRunWeatherIndex: number[]
    shortRunWeatherCategory: string[]
  }
  
  export interface Vt1contentMode {
    mode: string
    effectiveDateTime: string
    eventName: string
  }
  
  export interface V3LocationPoint {
    location: Location
  }
  
  export interface Location {
    latitude: number
    longitude: number
    city: string
    locale: Locale
    neighborhood: string
    adminDistrict: string
    adminDistrictCode: any
    postalCode: string
    postalKey: string
    country: string
    countryCode: string
    ianaTimeZone: string
    displayName: string
    dstEnd: any
    dstStart: any
    dmaCd: any
    placeId: string
    disputedArea: boolean
    disputedCountries: any
    disputedCountryCodes: any
    disputedCustomers: any
    disputedShowCountry: boolean[]
    canonicalCityId: string
    countyId: any
    locId: string
    locationCategory: any
    pollenId: any
    pwsId: string
    regionalSatellite: string
    tideId: any
    type: string
    zoneId: any
    displayContext: string
  }
  
  export interface Locale {
    locale1: string
    locale2: string
    locale3: string
    locale4: string
  }
  
  export interface V2idxDrySkinDaypart15 {
    metadata: Metadata2
    drySkinIndex12hour: DrySkinIndex12hour
  }
  
  export interface Metadata2 {
    language: string
    transactionId: string
    version: string
    latitude: number
    longitude: number
    expireTimeGmt: number
    statusCode: number
  }
  
  export interface DrySkinIndex12hour {
    fcstValid: number[]
    fcstValidLocal: string[]
    dayInd: string[]
    num: number[]
    daypartName: string[]
    drySkinIndex: number[]
    drySkinCategory: string[]
  }
  
  export interface V2idxMosquitoDaily15 {
    metadata: Metadata3
    mosquitoIndex24hour: MosquitoIndex24hour
    mosquitoIndex12hour: MosquitoIndex12hour
  }
  
  export interface Metadata3 {
    language: string
    transactionId: string
    version: string
    latitude: number
    longitude: number
    expireTimeGmt: number
    statusCode: number
  }
  
  export interface MosquitoIndex24hour {
    fcstValid: number[]
    fcstValidLocal: string[]
    dow: string[]
    num: number[]
    eveningMosquitoIndex: number[]
    eveningMosquitoCategory: string[]
  }
  
  export interface MosquitoIndex12hour {
    fcstValid: number[]
    fcstValidLocal: string[]
    dayInd: string[]
    num: number[]
    daypartName: string[]
    mosquitoIndex: number[]
    mosquitoCategory: string[]
  }
  
  export interface Vt1idxPollenDaypart {
    day: Day2
    night: Night2
  }
  
  export interface Day2 {
    fcstValid: number | undefined[]
    fcstValidLocal: string | undefined[]
    dayInd: string | undefined[]
    num: number | undefined[]
    daypartName: string | undefined[]
    grassPollenIndex: number | undefined[]
    grassPollenCategory: string | undefined[]
    treePollenIndex: number | undefined[]
    treePollenCategory: string | undefined[]
    ragweedPollenIndex: number | undefined[]
    ragweedPollenCategory: string | undefined[]
  }
  
  export interface Night2 {
    fcstValid: number[]
    fcstValidLocal: string[]
    dayInd: string[]
    num: number[]
    daypartName: string[]
    grassPollenIndex: number[]
    grassPollenCategory: string[]
    treePollenIndex: number[]
    treePollenCategory: string[]
    ragweedPollenIndex: number[]
    ragweedPollenCategory: string[]
  }
  
  export interface Vt1precipitation {
    characteristic: number[]
    startTime: string[]
    endTime: string[]
    eventType: number[]
    forecastedRainAmount: number[]
    forecastedSnowAmount: number[]
    intensity: number[]
    severity: number[]
    imminence: number[]
  }
  
  export interface Vt1runweatherhourly {
    fcstValid: number[]
    fcstValidLocal: string[]
    dow: string[]
    dayInd: string[]
    longRunWeatherIndex: number[]
    shortRunWeatherIndex: number[]
    temperature: number[]
    precipPct: number[]
    dewPoint: number[]
    cloudPct: number[]
    windSpeed: number[]
  }
  