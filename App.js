import { createStackNavigator } from "@react-navigation/stack";
import { NavigatorContainer,DefaultTheme } from '@react-navigation/native';

import { useFonts }from '/expo-font';
import { Colors } from "react-native/Libraries/NewAppScreen";

import Home from "./screens/Home";
import Details from "./screens/Details";

const Stack = createStackNavigator()

const theme = {
  ...DefaultTheme,
colors: {
  ...DefaultTheme.colors,
  background: "tranceparent"
}
}

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if(!loaded) return null;

  return (
    <NavigatorContainer theme={theme}>
      <Stack.Navigator screeenOpotions={{ headerShown: false }} 
      intialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
    </NavigatorContainer>
  );
}
export default App;