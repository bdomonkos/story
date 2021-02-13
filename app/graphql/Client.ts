import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {RestLink} from 'apollo-link-rest';

const restLink = new RestLink({
  uri: 'https://dev-storytelling.blackrock.com/insights/api/',
});

const apolloClient = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

export default apolloClient;
