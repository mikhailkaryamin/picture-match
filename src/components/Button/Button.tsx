import React from 'react';

type Props = {
  children?: React.ReactNode;
  onClick: () => void;
  title: string;
  prefix: string;
}

const Button: React.FC<Props>  = ({children, onClick, prefix, title }: Props) => {
  return (
    <button
      className={`button button--${prefix}`}
      onClick={onClick}
    >
      <span className={`button__title button__title--${prefix}`}>
        {children === undefined && (
          title
        )}
        {children}
      </span>
    </button>
  )
}

export default Button;