import React from 'react';
import {Story, Theme} from '../types/tpyes';
import {storyReducer} from '../reducer/reducer';

type InitialStateType = {
  stories: Story[];
};

const intialState = {
  stories: [],
};

const AppContext = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: intialState,
  dispatch: () => null,
});

const mainReducer = ({stories}, action) => ({
  stories: storyReducer(stories, action),
});

export {AppContext, mainReducer, intialState};
