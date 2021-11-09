import React from 'react';
import { Line } from 'react-chartjs-2';
import LineChartWrapper from './LineChart.styles';
import { useThemeContext } from '../../context/ThemeContext';

const LineChart = ({ coin_name, change, price, data }) => {
  const { Header } = LineChartWrapper;
  const { theme } = useThemeContext();

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Price in USD',
        data: data.datasets,
        fill: false,
        backgroundColor: theme.colors.primary.main,
        borderColor: theme.colors.primary.main,
      },
    ],
  };

  const options = {
    legend: {
      labels: {
        fontColor: '#f00',
      },
    },
  };

  return (
    <LineChartWrapper>
      <Header>
        <p className='main-title'>{coin_name} Price Chart</p>
        <div className='info'>
          <span>Change: {change}</span>
          <span>Current Bitcoin Price: {price}</span>
        </div>
      </Header>
      <Line data={chartData} options={options} />
    </LineChartWrapper>
  );
};

export default LineChart;
