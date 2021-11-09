import moment from 'moment';

const convertToChartData = (history) => {
  let data = {
    labels: [],
    datasets: [],
  };

  history?.forEach((item) => {
    data.labels.push(moment(item.timestamp).format('l'));
    data.datasets.push(item.price);
  });

  return data;
};

export default convertToChartData;
