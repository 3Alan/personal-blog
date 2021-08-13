import { useCallback, useState } from 'react';

/**
 * @description: 简化版
 */
const useToggle = (initialState = false): [boolean, any] => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => {
    setState((preState) => !preState);
  }, []);

  return [state, toggle];
};

export default useToggle;
