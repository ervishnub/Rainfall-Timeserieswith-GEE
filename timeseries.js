var r2019 = ee.ImageCollection("UCSB-CHG/CHIRPS/DAILY").filter(ee.Filter.calendarRange(2019,2019,"Year"))
var r2020 = ee.ImageCollection("UCSB-CHG/CHIRPS/DAILY").filter(ee.Filter.calendarRange(2020,2020,"Year"))
var bound = ee.FeatureCollection("FAO/GAUL_SIMPLIFIED_500m/2015/level2").filter(ee.Filter.eq('ADM2_NAME', 'Kottayam'))
  
var chart19 = ui.Chart.image.series(r2019, bound, ee.Reducer.mean(),500)       
chart19.setChartType('LineChart').setOptions({
    title: 'Rainfall time series',
    vAxis: {title: 'mm'},
    hAxis:{title: 'Day'},
    colors: ['Red'],
    seriesType: 'line',
    lineWidth: 1,
    pointSize: 3,
    });

var chart20 = ui.Chart.image.series(r2020, bound, ee.Reducer.mean(),500) 
chart20.setChartType('LineChart').setOptions({
    title: 'Rainfall time series',
    vAxis: {title: 'mm'},
    hAxis:{title: 'Day'},
    colors: ['LightSkyBlue'],
    seriesType: 'line',
    lineWidth: 1,
    pointSize: 3,
    });

print (chart19,chart20)
