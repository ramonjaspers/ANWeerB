import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { theme } from '../../styles/theme';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: 'My Weather',
          tabBarLabel: 'My Weather',
          tabBarIcon: () => (
            <Text style={{ fontSize: theme.fontSize.xl }}>⛅</Text>
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          tabBarLabel: 'Search',
          tabBarIcon: () => (
            <Text style={{ fontSize: theme.fontSize.xl }}>🔍</Text>
          ),
        }}
      />
    </Tabs>
  );
}
