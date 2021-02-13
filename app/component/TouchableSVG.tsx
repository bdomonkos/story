import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';
import {AppContext} from '../context/context';
import {Story} from '../types/tpyes';
import {Types} from '../reducer/reducer';

const TouchableSVG = ({story}: Story) => {
  const {state, dispatch} = React.useContext(AppContext);

  const isStoredInreducer =
    state.stories.filter((element) => element.id === story.id).length > 0;

  return (
    <Svg
      height="100%"
      width="50%"
      viewBox="0 0 50 50"
      onPress={() => {
        // console.log(story);
        if (!isStoredInreducer) {
          dispatch({
            type: Types.Add,
            payload: {
              story,
            },
          });
        } else {
          dispatch({
            type: Types.Delete,
            payload: {
              id: story.id,
            },
          });
        }
      }}>
      <Circle
        cx="0"
        cy="25"
        r="15"
        stroke="blue"
        strokeWidth="2.5"
        fill={isStoredInreducer ? 'yellow' : 'white'}
      />
    </Svg>
  );
};

export default TouchableSVG;
