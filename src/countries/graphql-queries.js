import {gql} from 'apollo-boost';

export const ALL_COUNTRIES = gql`
query {
  countries{
    name
    code
    native
    continent{
      name
    }
    languages{
      code
      name
    }
    emoji
    emojiU
    states{
      name
    }
  }
}
`