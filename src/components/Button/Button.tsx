import React, { FC } from 'react';
import { cn } from '@bem-react/classname';
import { classnames as cx } from '@bem-react/classnames';

interface IButtonProps {
  className?: string;
}

const Button: FC<IButtonProps> = ({ className }) => {
  const displayName = cn('Button');

  return <button className={cx(displayName(), className)}>Отправить</button>;
};

export default Button;
