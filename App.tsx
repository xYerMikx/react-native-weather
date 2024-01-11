import React from "react";
import { AppRegistry } from "react-native";
import { View } from "react-native";

import { Home } from "@/screens/home/Home";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://192.168.100.14:4000/",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View className="flex-1 w-full h-screen items-center py-10 bg-slate-200">
        <Home />
      </View>
    </ApolloProvider>
  );
}
AppRegistry.registerComponent("MyApplication", () => App);
