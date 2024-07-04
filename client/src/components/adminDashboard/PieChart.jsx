import Chart from 'react-apexcharts';
import { useHeadDashboardContext } from '../../pages/Admin-Head/dashboard/HeadDashboard';

const PieChart = () => {
    const { statsData } = useHeadDashboardContext();
    const { Totalfeedbacks, feedbackTotalYearCount } = statsData;
    // Destructure feedbackTotalYearCount
    const { personal, ...years } = feedbackTotalYearCount;

    // Access each year using bracket notation
    const firstYear = years['I'] ? years['I'].normal : 0;
    const secondYear = years['II'] ? years['II'].normal : 0;
    const thirdYear = years['III'] ? years['III'].normal : 0;
    const fourthYear = years['IV'] ? years['IV'].normal : 0;

    const options = {
        labels: ["First Year", "Second Year", "Third Year", "Fourth Year"],
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    size: "50px",
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            showAlways: true,
                            fontSize: "20px",
                            color: "#03001C",
                        },
                    },
                },
            },
        },
        colors: ["#201658", "#416D19", "#DD5746", "#FFA500"] // Custom colors for each slice
    };

    const series = [firstYear, secondYear, thirdYear, fourthYear];

    return (
        <Chart
            options={options}
            series={series}
            type="donut"
            width="90%"
            height={190}
        />
    );
};

export default PieChart;

