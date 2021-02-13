import gql from 'graphql-tag';

export const getThemes = gql`
  query {
    themes @rest(type: "[Theme]", path: "themes") {
      id
      title
      storyCount
    }
  }
`;

export const getStoryByThemeId = (id: number) => {
  let path = null;
  if (id === null) {
    path = 'stories';
  } else {
    path = `stories/?theme=${id}`;
  }
  
  return gql`
  query {
    stories @rest(type: "Story", path: "${path}") {
      results
    }
  }
`;
};
