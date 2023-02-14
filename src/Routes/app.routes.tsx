import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

/* Icons */
import { HouseLine, UsersThree, GearSix } from "phosphor-react-native";

/* Screens */
import Login from "@screens/Login";
import Dashboard from "@screens/Dashboard";
import Settings from "@screens/Settings";
import Sellers from "@screens/Sellers";
import Home from "@screens/Home";
import Signup from "@screens/Signup";
import NewSeller from "@screens/NewSeller";
import SellerList from "@screens/SellerList";
import MilkList from "@screens/MilkList";

const Tab = createBottomTabNavigator();

export function AppRoutesTab() {
  return (
    <Tab.Navigator
      screenOptions={(props) => {
        // console.log(getFocusedRouteNameFromRoute(props.route));
        return {
          headerShown: false,
          tabBarStyle: {
            borderWidth: 0,
            borderTopWidth: 0,
            elevation: 0,
            height: 76,
            backgroundColor: "#EEEEEE",
            display:
              getFocusedRouteNameFromRoute(props.route) === "newSeller"
                ? "none"
                : getFocusedRouteNameFromRoute(props.route) === "sellerList"
                ? "none"
                : getFocusedRouteNameFromRoute(props.route) === "milkList"
                ? "none"
                : "flex",
          },

          tabBarActiveTintColor: "#003057",
          tabBarInactiveTintColor: "#999999",
          tabBarItemStyle: { paddingBottom: 16, paddingTop: 16 },
        };
      }}
      initialRouteName="List"
    >
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => (
            <HouseLine size={22} color={color} weight={"fill"} />
          ),
          title: "Home",
          tabBarLabelStyle: { fontSize: 14, fontWeight: "700" },
        }}
      />
      <Tab.Screen
        name="sellers"
        component={StackNavigatorSystem}
        options={{
          tabBarIcon: ({ color }) => (
            <UsersThree size={22} color={color} weight={"fill"} />
          ),
          title: "Vendedores",
          tabBarLabelStyle: { fontSize: 14, fontWeight: "700" },
        }}
      />

      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <GearSix size={22} color={color} weight={"fill"} />
          ),
          title: "Configurações",
          // tabBarBadge: 3,
          tabBarLabelStyle: { fontSize: 14, fontWeight: "700" },
        }}
      />
    </Tab.Navigator>
  );
}

const { Navigator, Screen } = createNativeStackNavigator();

export function StackNavigatorAuth() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="login" component={Login} />
      <Screen name="signup" component={Signup} />
    </Navigator>
  );
}

export function StackNavigatorSystem() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="sellersStack" component={Sellers} />
      <Screen name="newSeller" component={NewSeller} />
      <Screen name="sellerList" component={SellerList} />
      <Screen name="milkList" component={MilkList} />
    </Navigator>
  );
}
