import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* Icons */
import { CalendarCheck, ListChecks } from "phosphor-react-native";

/* Screens */
import Login from "@screens/Login";
import Diary from "@screens/Diary";
import NewTask from "@screens/NewTask";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export function AppRoutesTab() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 80,
            borderTopColor: "transparent",
          },
          tabBarActiveTintColor: "#1DB863",
          tabBarInactiveTintColor: "black",
          tabBarItemStyle: { paddingBottom: 24 },
        }}
        initialRouteName="List"
      >
        <Tab.Screen
          name="NewTask"
          component={NewTask}
          options={{
            tabBarIcon: ({ color }) => (
              <CalendarCheck size={26} color={color} weight={"bold"} />
            ),
            title: "Registrar Tarefa",
            tabBarLabelStyle: { fontSize: 14 },
          }}
        />
        <Tab.Screen
          name="List"
          component={Diary}
          options={{
            tabBarIcon: ({ color }) => (
              <ListChecks size={26} color={color} weight={"bold"} />
            ),
            title: "Listar Tarefa",
            // tabBarBadge: 3,
            tabBarLabelStyle: { fontSize: 14 },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="diary" component={AppRoutesTab} />
    </Navigator>
  );
}
