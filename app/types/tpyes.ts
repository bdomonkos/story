export interface Theme {
  id: number;
  title: string;
  order: number;
  position: string;
  redOak: string;
  disclosure: string;
  isDraft: boolean;
  updatedForMobileAt?: any;
  updatedAt: Date;
  publishedAt: Date;
  storyCount: number;
}
export interface Themes {
  themes: Theme[];
}

export interface Card {
  id: number;
  takeaway: string;
  cardType: string;
  source: string;
  prefix: string;
  number: string;
  suffix: string;
  label: string;
  imageCaption: string;
  description: string;
  headline: string;
  body: string;
}

export interface Opub {
  date: string;
  title: string;
  url: string;
  type: string;
}

export interface Story {
  id: number;
  title: string;
  storyType: string;
  thumbnail?: any;
  thumbnails?: any;
  thumbnailCaption: string;
  topLine: string;
  cardCount: number;
  isDraft: boolean;
  isRecommended: boolean;
  recommendedStories: any[];
  cards: Card[];
  themes: string[];
  assetClasses: string[];
  opub: Opub;
  disclosure: string;
  redOak: string;
  publishedAt: Date;
}

export interface ThemeRootObject {
  count: number;
  next: string;
  previous?: any;
  results: Story[];
}

export interface RootObject {
  stories: ThemeRootObject;
  themes: Theme[];
}
