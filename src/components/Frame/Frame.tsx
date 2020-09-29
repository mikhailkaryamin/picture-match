import React from 'react';

import Card from '../Card/Card';
import CardFlip from '../../containers/CardFlip/CardFlip';
import Animals from '../../assets/animals/index'

type Props = {
  cards: {
    srcImg: string,
    title: string,
  }[];
  sizeFrame: number[];
}

const Frame: React.FC<Props> = ({ cards, sizeFrame}: Props) => {
  return (
    <div className="frame">
      <ul className="frame__cards-list">
        {cards.map((card, i) => {
          const {
            srcImg,
            title
          } = card;

          return (
            <li
              className={`frame__card frame__card--${sizeFrame[0]}x${sizeFrame[1]}`}
              key={`${card}-${i}`}
            >
              <div className="frame__card-wrapper">
                <CardFlip>
                  <Card
                    img={srcImg}
                    title={title}
                  />
                  <Card
                    img={Animals.BACK.srcImg}
                    title={Animals.BACK.title}
                  />
                </CardFlip>

              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Frame;