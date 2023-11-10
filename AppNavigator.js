import { createStackNavigator } from "react-navigation";
import Home from "./pages/Home";
import Course from "./pages/Course";

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Course: { screen: Course },
});

export default AppNavigator;
