import React from 'react';
import {Card} from 'react-native-paper';

interface CardViewInterface {
  height?: number;
}


const CardView = ({height = 150, children}: CardViewInterface) => {
  return <Card style={{height}}>{children}</Card>;
};

CardView.defaultProps = {
  height: 150,
};

export default CardView;
