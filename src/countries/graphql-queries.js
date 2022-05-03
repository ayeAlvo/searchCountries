import {gql} from 'apollo-boost';

export const ALL_COUNTRIES = gql`
query {
  countries{
    name
    code
    native
    capital
    continent{
      name
    }
    languages{
      code
      name
      native
    }
    emoji
    emojiU
    states{
      name
    }
  }
}
`