import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import CounterScreenWithReducer from "./src/screens/CounterScreenWithReducer";
import ColorScreen from "./src/screens/ColorScreen";
import ColorSelectScreen from "./src/screens/ColorSelectScreen";
import ColorSelectScreenWithReducer from "./src/screens/ColorSelectScreenWithReducer";
import InputScreen from "./src/screens/InputScreen";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Images: ImageScreen,
    Counter: CounterScreen,
    CounterWithReducer: CounterScreenWithReducer,
    Color: ColorScreen,
    ColorSelect: ColorSelectScreen,
    ColorSelectWithReducer: ColorSelectScreenWithReducer,
    Input: InputScreen,
    Box: BoxScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
