import { FC } from 'react';
import { compose, composeU } from '@bem-react/core';

import {
  IButtonProps as IButtonDesktopProps,
  Button as ButtonDesktop,
} from '../Button';
// _view
import { withViewLink } from '../_view/Button_view_link';

export interface IButtonProps extends IButtonDesktopProps {
  view?: 'default' | 'link';
}

export const Button = compose(composeU(withViewLink))(ButtonDesktop) as FC<
  IButtonProps
>;
