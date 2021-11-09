const themes = [
  {
    id: 1,
    name: 'Light',
    colors: {
      primary: {
        main: '#1890ff',
      },
      bg: {
        main: '#F0F2F5',
        secondary: '#001529',
        element: '#FFFFFF',
      },
      text: {
        main: 'hsl(200, 15%, 8%)',
        light: 'rgb(17 23 29 / 60%)',
        extra_light: 'rgb(17 23 29 / 50%)',
      },
      border: {
        main: 'rgb(0 0 0 / 8%)',
        active: 'rgb(25 118 210 / 50%)',
      },
    },
  },
  {
    id: 2,
    name: 'Dark',
    colors: {
      primary: {
        main: '#1890ff',
      },
      bg: {
        main: 'hsl(207, 26%, 17%)',
        secondary: '#071A2F',
        element: 'hsl(209, 23%, 22%)',
      },
      text: {
        main: '#f5f5f5',
        light: 'hsl(0deg 0% 96% / 80%)',
        extra_light: 'hsl(0deg 0% 96% / 85%)',
      },
      border: {
        main: '#8d99a7',
        active: 'rgb(144 202 249)',
      },
    },
  },
];

export default themes;

// 24h, 7d, 30d, 1y, 5y
