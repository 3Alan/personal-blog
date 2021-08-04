import { useRouter } from 'next/router';
import { FaComments, FaArrowUp } from 'react-icons/fa';
import { useEffect, useState, FC } from 'react';
import Icon from './Icon';

const MenuBar: FC = () => {
  const router = useRouter();
  const [darkValue, setDarkValue] = useState('light');

  const toggleMode = () => {
    console.log(localStorage.theme);
    if (localStorage.theme === 'dark') {
      localStorage.theme = 'light';
    } else {
      localStorage.theme = 'dark';
    }
    router.reload();
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollToComment = () => {
    const vComment = document.getElementById('wcomments');
    vComment.scrollIntoView();
  };

  useEffect(() => {
    const darkItem = window.localStorage.getItem('theme');
    setDarkValue(darkItem);
  }, []);

  return (
    <div className="fixed right-3 bottom-2 sm:right-6 sm:bottom-8 flex flex-col z-50">
      <div
        className="w-8 h-8 mb-2 sm:w-11 sm:h-11 flex bg-blue-500 justify-center items-center rounded-full cursor-pointer dark:bg-gray-800"
        onClick={scrollToTop}
      >
        <Icon
          customStyle={{ color: '#fff', className: 'text-xs sm:text-base dark:text-gray-900' }}
          component={<FaArrowUp />}
        />
      </div>
      <div
        className="w-8 h-8 mb-2 sm:w-11 sm:h-11 flex bg-blue-500 justify-center items-center rounded-full cursor-pointer dark:bg-gray-800"
        onClick={scrollToComment}
      >
        <Icon
          customStyle={{ color: '#fff', className: 'text-xs sm:text-base dark:text-gray-900' }}
          component={<FaComments />}
        />
      </div>
      {/* <div
        className="w-8 h-8 sm:w-11 sm:h-11 flex bg-blue-500 justify-center items-center rounded-full cursor-pointer dark:bg-gray-800"
        onClick={toggleMode}
      >
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className="text-xs sm:text-base dark:text-gray-900">
            {darkValue === 'light' ? <FaMoon /> : <FaSun />}
          </div>
        </IconContext.Provider>
      </div> */}
    </div>
  );
};

export default MenuBar;
