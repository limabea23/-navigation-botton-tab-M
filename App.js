import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/TabNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    );
}