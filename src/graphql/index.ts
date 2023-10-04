import gql from "graphql-tag";

export const QUERY_USERS = gql`
  query Query {
    users {
      id
      first_name
      last_name
      email
      password
    }
  }
`;

export const MUTATION_SIGNIN = gql`
  mutation SignIn($input: SignInInput) {
    signIn(input: $input) {
      token
    }
  }
`;

export const ME_QUERY = gql`
  query me {
    me {
      email
      first_name
      id
      last_name
      password
    }
  }
`;
