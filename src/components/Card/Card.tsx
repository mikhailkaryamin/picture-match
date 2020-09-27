import React from 'react';

type Props = {
  img: string;
  title: string;
}

const Card: React.FC<Props>  = ({ img, title }: Props) => {
  return (
    <div className="card">
      <img className="card__img" src={img} alt={title} />
    </div>
  )
}

export default Card;