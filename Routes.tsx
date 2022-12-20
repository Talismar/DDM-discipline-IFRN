import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import RegistrationTask from "./pages/RegistrationTask";
import ListTask from "./pages/ListTask";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={RegistrationTask}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="calendar-check-o" size={24} color="black" />
          ),
          title: "Registrar Tarefa",
        }}
      />

      <Tab.Screen
        name="tecnico"
        component={ListTask}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted-triangle"
              size={24}
              color="black"
            />
          ),
          title: "Listar Tarefa",
        }}
      />
    </Tab.Navigator>
  );
}
