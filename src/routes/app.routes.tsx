import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateMeanDone } from '@screens/CreateMeanDone';
import { Home } from '@screens/Home';
import { Meal } from '@screens/Meal';
import { NewMeal } from '@screens/NewMeal';
import { Statistics } from '@screens/Statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export function App() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="meal" component={Meal} />
      <Screen name="new" component={NewMeal} />
      <Screen name="createMeanDone" component={CreateMeanDone} />
    </Navigator>
  );
}
