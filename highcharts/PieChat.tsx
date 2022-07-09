import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options: Highcharts.Options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      type: "pie",
      data: [1, 2, 3],
    },
  ],
};

interface ExperimentsProps {}

const Experiments: React.FC<ExperimentsProps> = ({}) => {
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};
export default Experiments;
