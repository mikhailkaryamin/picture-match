import React from 'react';

import Card from '../Card/Card';

type Props = {
  cards: {
    imgSrc: string,
    title: string,
  }[];
  sizeFrame: number[];
}

const Frame: React.FC<Props> = ({ cards, sizeFrame}: Props) => {
  return (
    <div className="frame">
      <ul className="frame__cards-list">
        {cards.map((card) => {
          const {
            imgSrc,
            title
          } = card;

          return (
            <li className={`frame__card frame__card--${sizeFrame[0]}x${sizeFrame[1]}`}>
              <div className="frame__card-wrapper">
                <Card
                  img={imgSrc}
                  title={title}
                />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Frame;