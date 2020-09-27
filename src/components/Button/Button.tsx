import React from 'react';

type Props = {
  img?: string;
  onClick: () => void;
  title: string;
  prefix: string;
}

const Button: React.FC<Props>  = ({ img, onClick, prefix, title }: Props) => {
  return (
    <button
      className={`button button--${prefix}`}
      onClick={onClick}
    >
      <span className={`button__title button__title--${prefix}`}>
        {title}
      </span>
    </button>
  )
}

export default Button;