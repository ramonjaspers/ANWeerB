import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: 'My Weather',
          tabBarLabel: 'My Weather',
          tabBarIcon: () => <Text style={{ fontSize: 24 }}>⛅</Text>,
        }}
      />
    </Tabs>
  );
}
