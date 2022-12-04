import React from 'react'
import { useEffect, useRef } from "react";
import * as echarts from "echarts";

function Line() {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = echarts.init(chartRef.current);
    const option = {
      legend: {
        data: [
          "Open",
          "High",
          "Low",
          "Close",
          "Adj Close",
          "Volumn",
        ],
      },
      xAxis: {
        type: "category",
        data: ["街道1", "街道2", "街道3", "街道4", "街道5", "街道6"],
      },
      yAxis: [
        { type: "value" },
        {
          type: "value",
          name: "%",
          nameTextStyle: {
            color: "#ccc",
            padding: [0, 0, 10, -30],
          },
          splitNumber: 5,
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              width: 1,
              color: ["#ccc", "#ccc"],
            },
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 12,
            },
          },
        },
      ],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        textStyle: {
          color: "#fff",
          align: "left",
          fontSize: 14,
        },
        backgroundColor: "rgba(0,0,0,0.8)",
      },
      series: [
        {
          name: "Open",
          data: [150, 230, 224, 218, 135, 147],
          yAxisIndex: 1,
          type: "line",
          smooth: true,
        },
        {
          name: "Low",
          data: [150, 230, 224, 218, 135, 147],
          yAxisIndex: 1,
          type: "line",
          smooth: true,
        },
        {
          name: "High",
          data: [150, 230, 224, 218, 135, 147],
          yAxisIndex: 1,
          type: "line",
          smooth: true,
        },
        {
          name: "Close",
          data: [880, 30, 124, 118, 35, 47],
          yAxisIndex: 1,
          type: "line",
          smooth: true,
        },
        {
          name: "Adj Close",
          data: [660, 30, 124, 118, 35, 47],
          yAxisIndex: 1,
          type: "line",
          smooth: true,
        },
        {
          name: "Volumn",
          data: [880, 30, 124, 118, 35, 47],
          type: "bar",
        },
      ],
    };
    chartInstance.setOption(option);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>2330.TW</h2>
      <div ref={chartRef} style={{ height: "400px" }}></div>
    </div>
  );
}

export default Line;