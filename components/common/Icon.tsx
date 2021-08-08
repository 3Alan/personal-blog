import { memo, FC } from 'react';

import { IconContext, IconBaseProps } from 'react-icons';

export interface IconProps {
  component: IconBaseProps;
  customStyle?: IconContext;
}

const Icon: FC<IconProps> = (props) => {
  // TODO: 传入的customStyle服务端/客户端表现不一致
  const { customStyle, component } = props;
  if (customStyle) {
    return (
      <IconContext.Provider value={customStyle}>
        <div>{component}</div>
      </IconContext.Provider>
    );
  }
  return <>{component}</>;
};

export default memo(Icon);
