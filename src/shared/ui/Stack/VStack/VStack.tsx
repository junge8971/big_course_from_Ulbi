import { FC } from 'react';

import { Flex, FlexProps } from '../Flex/Flex';

export type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack: FC<VStackProps> = (props) => {
  return <Flex {...props} direction="column" align="start" />;
};
