import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import ContentWrapper from "./components/ContentWrapper/index";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="bg-body bg-opacity">
    <ContentWrapper />
    </div>
  </ApolloProvider>
);
export default App;
