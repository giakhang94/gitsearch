//Ghi chu: Chart the hien cac ngon ngu thuong dung nhat theo ti le % (100 repo gan nhát)
// STEP 1 - Include Dependencies
// Include react

import React, { useState } from "react";
import ReactDOM from "react-dom";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Pie2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { useContext } from "react";
import { GithubContext } from "../Context/GitContext";
import { useEffect } from "react";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Pie2D, FusionTheme);

// STEP 2 - Chart Data


// STEP 3 - Creating the JSON object to store the chart configurations

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
function BarChart({data})  {
    const chartConfigs = {
      type: "pie2d", // The chart type
      width: "400", // Width of the chart
      height: "400", // Height of the chart
      dataFormat: "json", // Data type
      dataSource: {
        // Chart Configuration
        "chart": {
            "caption": "Language",
            "subCaption": "Last year",
            "use3DLighting": "0",
            "showPercentValues": "1",
            "decimals": "1",
            "useDataPlotColorForLabels": "1",
            "theme": "fusion",
            "pieRadius": "35%"
        },
        // Chart Data
        "data": data
      }
    };
   
    return (<ReactFC {...chartConfigs} />);
}

export default BarChart;