import { createUploadLink } from "apollo-upload-client"; 
import { setContext } from "@apollo/client/link/context"; 
import { ApolloClient, InMemoryCache, from, HttpLink } from "@apollo/client"; 
 
export default function clientRequireToken(token: string) { 
  const httpLink = createUploadLink({ 
    uri: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/graphql", 
    credentials: "same-origin", 
  }); 
 
  const authLink = setContext((_, { headers }) => { 
    return { 
      headers: { 
        ...headers, 
        authorization: token ? `Bearer ${token}` : "", 
      }, 
      fetchOptions: { cache: "no-store" }, 
    }; 
  }); 
 
  return new ApolloClient({ 
    link: from([authLink, httpLink]), 
    cache: new InMemoryCache(), 
 
    name: "TOU", 
    defaultOptions: { 
      watchQuery: { 
        errorPolicy: "all", 
        fetchPolicy: "no-cache", 
      }, 
      query: { 
        fetchPolicy: "no-cache", 
        errorPolicy: "all", 
      }, 
    }, 
  }); 
}