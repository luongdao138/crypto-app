import {
  AiOutlineHome,
  AiOutlineFund,
  AiOutlineMoneyCollect,
  AiOutlineBulb,
} from 'react-icons/ai';

const links = [
  {
    id: 1,
    icon: <AiOutlineHome />,
    label: 'Home',
    path: '/',
  },
  {
    id: 2,
    icon: <AiOutlineFund />,
    label: 'Cryptocurrencies',
    path: '/cryptocurrencies',
  },
  {
    id: 3,
    icon: <AiOutlineMoneyCollect />,
    label: 'Exchanges',
    path: '/exchanges',
  },
  {
    id: 4,
    icon: <AiOutlineBulb />,
    label: 'News',
    path: '/news',
  },
];

export default links;
