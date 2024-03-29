import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
mutation addProduct(
  $name: String! 
  $description: String!
  $price: Float!
  $image: String
  $category: [ID]!
  ) {
  addProduct(
    name: $name 
    description: $description 
    price: $price 
    image: $image
    category: $category
    ) {
    name
    description
    price
    image
    category {
      name
    }
  }
}
`;

export const UPDATE_PRODUCT = gql`
mutation updateProduct(
  $_id: ID!,
  $quantity: Int!
) {
  updateProduct (
    _id: $_id
    quantity: $quantity
  ){
    quantity
  }
}
`;


export const UPDATE_USER = gql`
mutation updateUserToWhatever($id: ID!, $userType: String!) {
  updateUserToWhatever(_id: $id, userType: $userType) {
    firstName
    lastName
    userType
  }
}
`;
export const ADD_CONTACT = gql`
mutation addContact($name: String!, $email: String!, $phone: String!) {
  addContact(name: $name, email: $email, phone: $phone) {
    email
    name
    phone
  }
}
`


