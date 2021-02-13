// eslint-disable-next-line import/prefer-default-export

import {Story} from '../types/tpyes';

type ActionMap<M extends {[index: string]: any}> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Delete = 'DELETE_STORY',
  Add = 'ADD_STORY',
}

// Product

type StoryPayload = {
  [Types.Add]: {
    story: Story;
  };
  [Types.Delete]: {
    id: number;
  };
};

export type StoryActions = ActionMap<StoryPayload>[keyof ActionMap<
  StoryPayload
>];

export const storyReducer = (state: Story[], action: StoryActions) => {
  switch (action.type) {
    case Types.Add:
      return [...state, action.payload.story];
    case Types.Delete:
      return state.filter((element) => element.id !== action.payload.id);
    default:
      return state;
  }
};
