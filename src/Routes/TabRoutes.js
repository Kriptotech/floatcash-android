import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { Dashboard } from "../screens/Dashboard/index.jsx";
import { Profile } from "../screens/Profile/index.jsx";
import { colors } from "../colors.js";

export function TabRoutes() {
    const { Screen, Navigator } = createBottomTabNavigator();

    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.primary1,
                tabBarInactiveTintColor: colors.tb1,
                tabBarStyle: {
                    backgroundColor: colors.white_background,
                    borderColor: "transparent",
                    borderTopWidth: 0,
                },
            }}
        >
            <Screen
                name="dashboard"
                component={Dashboard}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" color={color} size={size} />
                    ),
                }}
            />

            <Screen
                name="perfil"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="person"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Navigator>
    );
}
