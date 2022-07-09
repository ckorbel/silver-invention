import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface DraftNumbers {
  name: string;
  y: number;
  totalProbowls: number;
  proBowlsPerPlayer: number;
}
interface ExperimentsProps {
  title: string;
  data: DraftNumbers[];
}

const Experiments: React.FC<ExperimentsProps> = ({ title = "", data }) => {
  const options: Highcharts.Options = {
    chart: {
      plotShadow: false,
      type: "pie",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    title: {
      text: title,
    },
    series: [
      {
        type: "pie",
        colorByPoint: true,
        data,
      },
    ],
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};
export default Experiments;
