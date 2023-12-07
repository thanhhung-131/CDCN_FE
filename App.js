// App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import HomeScreen from "./pages/Home"; // Thêm import này
import TeacherDetail from "./pages/TeacherDetail";
import UserProfile from "./pages/Profile"
import UserDetail from "./components/UserDetail/UserDetail";
import UserDetailPage from "./pages/UserDetail";
import AppointmentScreen from "./pages/Appointment";

// const Stack = createStackNavigator();

function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Login"
    //     screenOptions={{
    //       headerStyle: {
    //         backgroundColor: "#3498db",
    //       },
    //       headerTintColor: "#fff",
    //       headerTitleStyle: {
    //         fontWeight: "bold",
    //       },
    //     }}
    //   >
    //     <Stack.Screen
    //       name="Login"
    //       component={LoginScreen}
    //       options={{ title: "Login" }}
    //     />
    //     <Stack.Screen
    //       name="Register"
    //       component={RegisterScreen}
    //       options={{ title: "Register" }}
    //     />
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{ title: "Home" }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <UserProfile/>
    // <UserDetailPage/>
    <AppointmentScreen/>
  );
}

export default App;
