import React from 'react';

type Props = {
  img: string;
  title: string;
}

const Card: React.FC<Props>  = ({ img, title }: Props) => {
  return (
    <div className="card">
      <div className="card__wrapper">
        <img className="card__img" src={img} alt={title} />
      </div>
    </div>
  )
}

export default Card;