import React, { FC, ReactNode } from 'react';
import { cn } from '@bem-react/classname';
import { classnames as cx } from '@bem-react/classnames';

import './Button.css';

export interface IButtonProps {
  /**
   * Дополнительный класс
   */
  className?: string;

  /**
   * Текст кнопки.
   */
  children?: ReactNode;
}

export const cnButton = cn('Button');

/**
 * Компонент для создания кнопок.
 * @param {IButtonProps} props
 */
export const Button: FC<IButtonProps> = ({ className, children }) => {
  const displayName = cnButton();

  return <button className={cx(displayName, className)}>{children}</button>;
};
