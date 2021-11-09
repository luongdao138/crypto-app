import { Footer, Menu } from '../components';
import LayoutWrapper from './styles/Layout.styles';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import { useThemeContext } from '../context/ThemeContext';
import themes from '../helpers/theme';

const Layout = ({ children }) => {
  const { theme, setTheme } = useThemeContext();

  const handleSetTheme = (id) => {
    const newTheme = themes.find((t) => t.id === id);
    setTheme(newTheme);
  };

  return (
    <LayoutWrapper>
      <Menu />
      <div className='main'>
        <div className='content'>{children}</div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
      <LayoutWrapper.ThemeSwitch>
        {theme.id === 1 ? (
          <FaRegMoon onClick={() => handleSetTheme(2)} />
        ) : (
          <FaRegSun onClick={() => handleSetTheme(1)} />
        )}
      </LayoutWrapper.ThemeSwitch>
    </LayoutWrapper>
  );
};

export default Layout;
