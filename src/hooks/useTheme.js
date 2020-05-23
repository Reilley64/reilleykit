import { useContext } from 'react';

import { ThemeContext } from '../components/ThemeProvider/ThemeProvider';

const useTheme = () => useContext(ThemeContext);

export default useTheme;
