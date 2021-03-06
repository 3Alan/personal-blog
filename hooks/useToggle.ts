import { useCallback, useState } from 'react';

/**
 * @description: įŽåį
 */
const useToggle = (initialState = false): [boolean, any] => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => {
    setState((preState) => !preState);
  }, []);

  return [state, toggle];
};

export default useToggle;
