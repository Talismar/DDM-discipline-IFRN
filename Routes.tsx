import React from "react";
import NewTask from "@screens/NewTask";
import Diary from "@screens/Diary";
import { ListNumbers } from "phosphor-react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={NewTask}
        options={{
          tabBarIcon: ({ color }) => <ListNumbers size={24} color="black" />,
          title: "Registrar Tarefa",
        }}
      />

      <Tab.Screen
        name="tecnico"
        component={Diary}
        options={{
          tabBarIcon: ({ color }) => <ListNumbers size={24} color="black" />,
          title: "Registrar Tarefa",
        }}
      />
    </Tab.Navigator>
  );
}
