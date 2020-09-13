import { withBemMod } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_view_link.css';

interface IButtonViewLinkProps {
  /**
   * Внешний вид кнопки
   */
  view?: 'link';
}

/**
 * Модификатор, отвечающий за внешний вид кнопки.
 * @param {IButtonViewLinkProps} props
 */
export const withViewLink = withBemMod<IButtonViewLinkProps>(cnButton(), {
  view: 'link',
});
