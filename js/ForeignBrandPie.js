// am4core.ready(function() {

//     // Themes begin
//     am4core.useTheme(am4themes_animated);
//     // Themes end
    
//     // Create chart instance
//     var chart = am4core.create("chartdiv5", am4charts.XYChart);
    
//     var label = chart.chartContainer.createChild(am4core.Label);
//     label.text = "(Sources: Ministry of Finance of PRC)";
//     label.align = "center";
//     // label.isMeasured = false;
//     label.fontSize = 13;
//     label.x = 280;
//     label.y = 350;

//     // Add data
//     chart.data = [{
//       "year": "2017",
//       "europe": 188.6,
//       "namerica": 1256.5,
//     }, {
//       "year": "2018",
//       "europe": 203.9,
//       "namerica": 1358.5,
//     }, {
//       "year": "2019",
//       "europe": 221.2,
//       "namerica": 1445.3,
//     }, {
//         "year": "2020",
//         "europe": 387.9,
//         "namerica": 1532.2,
//     }, {
//         "year": "2021",
//         "europe": 397.8,
//         "namerica": 1522.7,
//     }];
    
     

//     // Create axes
//     var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
//     categoryAxis.dataFields.category = "year";
//     categoryAxis.renderer.grid.template.location = 0;
    
    
//     var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//     // valueAxis.renderer.inside = true;
//     // valueAxis.renderer.labels.template.disabled = true;
//     // valueAxis.min = 0;
    
//     // Create series
//     function createSeries(field, name) {
      
//       // Set up series
//       var series = chart.series.push(new am4charts.ColumnSeries());
//       series.name = name;
//       series.dataFields.valueY = field;
//       series.dataFields.categoryX = "year";
//       series.sequencedInterpolation = true;
      
//       // Make it stacked
//       series.stacked = true;
      
//       // Configure columns
//       series.columns.template.width = am4core.percent(60);
//       series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";
      
//       // Add label
//     //   var labelBullet = series.bullets.push(new am4charts.LabelBullet());
//     //   labelBullet.label.text = "{valueY}";
//     //   labelBullet.locationY = 0.5;
//     //   labelBullet.label.hideOversized = true;
      
//       return series;
//     }
    
//     createSeries("europe", "Public Health Expenditure");
//     createSeries("namerica", "Other Healthcare Expenditure");
    
//     var title = chart.titles.create();
//     title.text = "Surging Healthcare Expenditure due to Covid";
//     title.fontSize = 20;
//     title.marginTop = 20;
//     title.marginBottom = 20;

//     // Legend
//     chart.legend = new am4charts.Legend();
//     chart.legend.position = "top";
    
//     }); // end am4core.ready()

// am4core.ready(function() {

//   // Themes begin
//   am4core.useTheme(am4themes_animated);
//   // Themes end
  
//   var chart = am4core.create("chartdiv5", am4charts.XYChart);
//   chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
  
//   chart.data = [{
//     "country": "2017",
//     "value1": 188.6,
//     "value2": 1445.1
//   }, {
//     "country": "2018",
//     "value1": 203.9,
//     "value2": 1562.4
//   }, {
//     "country": "2019",
//     "value1": 221.2,
//     "value2": 1666.5
//   }, {
//     "country": "2020",
//     "value1": 387.9,
//     "value2": 1920.1
//   }, {
//     "country": "2021",
//     "value1": 397.8,
//     "value2": 1920.5
//   }];
 

//   var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
//   categoryAxis.renderer.grid.template.location = 0;
//   categoryAxis.dataFields.category = "country";
//   categoryAxis.renderer.minGridDistance = 40;
  
//   var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  
//   var series = chart.series.push(new am4charts.CurvedColumnSeries());
//   series.dataFields.categoryX = "country";

//   series.dataFields.valueY = "value1";
//   series.tooltipText = "{valueY.value}"
//   series.columns.template.strokeOpacity = 0;
//   series.clustered = false;
//   series.hiddenState.properties.visible = true; // this is added in case legend is used and first series is hidden.
  
//   var series2 = chart.series.push(new am4charts.CurvedColumnSeries());
//   series2.dataFields.categoryX = "country";
  
//   series2.dataFields.valueY = "value2";
//   series2.tooltipText = "{valueY.value}"
//   series2.columns.template.strokeOpacity = 0;
//   series2.clustered = false;
  
//   var series3 = chart.series.push(new am4charts.CurvedColumnSeries());
//   series3.dataFields.categoryX = "country";
  
//   series3.dataFields.valueY = "value3";
//   series3.tooltipText = "{valueY.value}"
//   series3.columns.template.strokeOpacity = 0;
//   series3.clustered = false;
  
  
//   chart.cursor = new am4charts.XYCursor();
//   chart.cursor.maxTooltipDistance = 0;
  
//   chart.scrollbarX = new am4core.Scrollbar();
  
  
//   series.dataItems.template.adapter.add("width", (width, target) => {
//     return am4core.percent(target.valueY / valueAxis.max * 100);
//   })
  
//   series2.dataItems.template.adapter.add("width", (width, target) => {
//     return am4core.percent(target.valueY / valueAxis.max * 100);
//   })
  
//   series3.dataItems.template.adapter.add("width", (width, target) => {
//     return am4core.percent(target.valueY / valueAxis.max * 100);
//   })
  
//   series.columns.template.events.on("parentset", function(event){
//     event.target.zIndex = valueAxis.max - event.target.dataItem.valueY;
//   })
  
//   series2.columns.template.events.on("parentset", function(event){
//     event.target.parent = series.columnsContainer;
//     event.target.zIndex = valueAxis.max - event.target.dataItem.valueY;  
//   })
  
//   series3.columns.template.events.on("parentset", function(event){
//     event.target.parent = series.columnsContainer;
//     event.target.zIndex = valueAxis.max - event.target.dataItem.valueY;  
//   })
  
  
  
//   }); // end am4core.ready()

am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // var label = chart.chartContainer.createChild(am4core.Label);
  //   label.text = "(Sources: Ministry of Finance of PRC)";
  //   label.align = "center";
  //   // label.isMeasured = false;
  //   label.fontSize = 13;
  //   label.x = 300;
  //   label.y = 400;

  var data = [{
    "country": "2017",
    "units": 1445.1,
    "pie": [{
      "value": 188.6,
      "title": "Public Health Expenditure"
    }, {
      "value": 1256.5,
      "title": "Other Healthcare Expenditure "
    }]
  }, {
    "country": "2018",
    "units": 1562.4,
    "pie": [{
      "value": 203.9,
      "title": "Public Health Expenditure"
    }, {
      "value": 1358.5,
      "title": "Other Healthcare Expenditure "
    }]
  }, {
    "country": "2019",
    "units": 1666.5,
    "pie": [{
      "value": 221.2,
      "title": "Public Health Expenditure"
    }, {
      "value": 1445.3,
      "title": "Other Healthcare Expenditure "
    }]
  }, {
    "country": "2020",
    "units": 1920.1,
    "pie": [{
      "value": 387.9,
      "title": "Public Health Expenditure"
    }, {
      "value": 1532.2,
      "title": "Other Healthcare Expenditure "
    }]
  }, {
    "country": "2021",
    "units": 1920.5,
    "pie": [{
      "value": 397.8,
      "title": "Public Health Expenditure"
    }, {
      "value": 1522.7,
      "title": "Other Healthcare Expenditure "
    }]
  }];
   
     
  // Create chart instance
  var chart = am4core.create("chartdiv5", am4charts.XYChart);
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
  
  // Add data
  chart.data = data;
  
  // Create axes
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "country";
  categoryAxis.renderer.grid.template.disabled = true;
  
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  // valueAxis.title.text = "Total Healthcare Expenditure (RMB Billion)";
  valueAxis.min = 0;
  valueAxis.renderer.baseGrid.disabled = true;
  valueAxis.renderer.grid.template.strokeOpacity = 0.07;
  
  // Create series
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = "units";
  series.dataFields.categoryX = "country";
  series.tooltip.pointerOrientation = "vertical";
  
  
  var columnTemplate = series.columns.template;
  // add tooltip on column, not template, so that slices could also have tooltip
  columnTemplate.column.tooltipText = "Total Healthcare Expenditure: {valueY}";
  columnTemplate.column.tooltipY = 0;
  columnTemplate.column.cornerRadiusTopLeft = 20;
  columnTemplate.column.cornerRadiusTopRight = 20;
  columnTemplate.strokeOpacity = 0;
  
  
  // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
  columnTemplate.adapter.add("fill", function(fill, target) {
    var color = chart.colors.getIndex(target.dataItem.index * 1);
    return color;
  });

  var title = chart.titles.create();
      title.text = "Total Healthcare Expenditure Surged Due to Covid (RMB Billion)";
      title.fontSize = 20;
      title.marginTop = 20;
      title.marginBottom = 20;
      
  var label = chart.chartContainer.createChild(am4core.Label);
    label.text = "(Sources: Ministry of Finance of PRC)";
    label.align = "center";
    // label.isMeasured = false;
    label.fontSize = 13;
    label.x = 300;
    label.y = 400;
  
  // create pie chart as a column child
  var pieChart = series.columns.template.createChild(am4charts.PieChart);
  pieChart.width = am4core.percent(80);
  pieChart.height = am4core.percent(80);
  pieChart.align = "center";
  pieChart.valign = "middle";
  pieChart.dataFields.data = "pie";
  
  var pieSeries = pieChart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "value";
  pieSeries.dataFields.category = "title";
  pieSeries.labels.template.disabled = true;
  pieSeries.ticks.template.disabled = true;
  pieSeries.slices.template.stroke = am4core.color("#ffffff");
  pieSeries.slices.template.strokeWidth = 1;
  pieSeries.slices.template.strokeOpacity = 0;
  
  pieSeries.slices.template.adapter.add("fill", function(fill, target) {
    return am4core.color("#ffffff")
  });
  
  pieSeries.slices.template.adapter.add("fillOpacity", function(fillOpacity, target) {
    return (target.dataItem.index + 1) * 0.2;
  });
  
  pieSeries.hiddenState.properties.startAngle = -90;
  pieSeries.hiddenState.properties.endAngle = 270;
  

  // Create chart instance
  var chart = am4core.create("chartdiv", am4charts.XYChart);
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
  
  // Add data
  chart.data = data;
  
  // Create axes
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "country";
  categoryAxis.renderer.grid.template.disabled = true;
  
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = "Units sold (M)";
  valueAxis.min = 0;
  valueAxis.renderer.baseGrid.disabled = true;
  valueAxis.renderer.grid.template.strokeOpacity = 0.07;
  
  // Create series
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = "units";
  series.dataFields.categoryX = "country";
  series.tooltip.pointerOrientation = "vertical";
  
  
  var columnTemplate = series.columns.template;
  // add tooltip on column, not template, so that slices could also have tooltip
  columnTemplate.column.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
  columnTemplate.column.tooltipY = 0;
  columnTemplate.column.cornerRadiusTopLeft = 20;
  columnTemplate.column.cornerRadiusTopRight = 20;
  columnTemplate.strokeOpacity = 0;
  
  
  // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
  columnTemplate.adapter.add("fill", function(fill, target) {
    var color = chart.colors.getIndex(target.dataItem.index * 3);
    return color;
  });
  
  // create pie chart as a column child
  var pieChart = series.columns.template.createChild(am4charts.PieChart);
  pieChart.width = am4core.percent(80);
  pieChart.height = am4core.percent(80);
  pieChart.align = "center";
  pieChart.valign = "middle";
  pieChart.dataFields.data = "pie";
  
  var pieSeries = pieChart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "value";
  pieSeries.dataFields.category = "title";
  pieSeries.labels.template.disabled = true;
  pieSeries.ticks.template.disabled = true;
  pieSeries.slices.template.strokeWidth = 1;
  
  pieSeries.slices.template.adapter.add("stroke", function(stroke, target) {
    return chart.colors.getIndex(target.parent.parent.dataItem.index * 3);
  });
  
  pieSeries.slices.template.adapter.add("fill", function(fill, target) {
    return am4core.color("#ffffff")
  });
  
  pieSeries.slices.template.adapter.add("fillOpacity", function(fillOpacity, target) {
    return (target.dataItem.index + 1) * 0.2;
  });
  
  pieSeries.hiddenState.properties.startAngle = -90;
  pieSeries.hiddenState.properties.endAngle = 270;
  
  // this moves the pie out of the column if column is too small
  pieChart.adapter.add("verticalCenter", function(verticalCenter, target) {
    var point = am4core.utils.spritePointToSprite({ x: 0, y: 0 }, target.seriesContainer, chart.plotContainer);
    point.y -= target.dy;
  
    if (point.y > chart.plotContainer.measuredHeight - 15) {
      target.dy = -target.seriesContainer.measuredHeight - 15;
    }
    else {
      target.dy = 0;
    }
    return verticalCenter
  })
  
  // var title = chart.titles.create();
  //     title.text = "Surging Healthcare Expenditure due to Covid(RMB Billion)";
  //     title.fontSize = 20;
  //     title.marginTop = 20;
  //     title.marginBottom = 20;

  // var label = chart.chartContainer.createChild(am4core.Label);
  //   label.text = "(Sources: Ministry of Finance of PRC)";
  //   label.align = "center";
  //   // label.isMeasured = false;
  //   label.fontSize = 13;
  //   label.x = 300;
  //   label.y = 400;

  }); // end am4core.ready()