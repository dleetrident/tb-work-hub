import { useEffect, useState } from "react";
import useGetNews from "../../hooks/useGetNews";
import Card from "../../ui/Card";
import classes from "./ClothesCard.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const ClothesCard = (props) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [clothes, setClothes] = useState(null);
  const [reducedClothes, setReducedClothes] = useState({});
  const [percentageClothes, setPercentageClothes] = useState({});
  const [displayLabels, setDisplayLabels] = useState(true);
  useEffect(() => {
    const fetchClothes = async () => {
      try {
        const response = await fetch("http://localhost:5000/clothes");
        const data = await response.json();
        const sendClothes = data;
        console.log(sendClothes[0].clothe);
        //   Object.entries(data).map((entry) => ({
        //   [entry[0]]: entry[1],
        // }));
        setClothes(sendClothes);
      } catch (error) {
        alert(error);
      }
    };
    fetchClothes();
    setWindowWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    if (clothes) {
      let clothesArray = clothes.map((item) => {
        return item.clothe;
      });
      const reducedObj = {};
      clothesArray.forEach((item) => {
        reducedObj[item] = (reducedObj[item] || 0) + 1;
      });
      const total = Object.values(reducedObj).reduce((a, b) => a + b);
      const percentageArray = Object.values(reducedObj).map((item) => {
        let percentage = (item / total) * 100;
        return Number(percentage.toFixed(3));
      });

      setPercentageClothes(percentageArray);
      setReducedClothes(reducedObj);
      if (windowWidth < 1191) {
        setDisplayLabels(false);
      }
    }
  }, [clothes]);

  const chartData = {
    labels: Object.keys(reducedClothes),
    datasets: [
      {
        label: "# of Votes",
        data: percentageClothes,
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      datalabels: {
        formatter: function (value, context) {
          return Math.round(value) + "%";
        },
      },
      legend: {
        display: displayLabels,
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 7,
          },
        },
      },
    },
  };

  return (
    <Card cardHeader="Clothes">
      <div className={classes.container}>
        <Pie data={chartData} options={options} />
      </div>
    </Card>
  );
};

export default ClothesCard;
