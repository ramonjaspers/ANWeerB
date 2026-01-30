import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { theme } from '../../styles/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.grey.light,
        tabBarStyle: {
          backgroundColor: theme.colors.secondary,
          borderTopColor: theme.colors.secondary,
          borderTopWidth: 1,
          height: 60 + (insets.bottom > 0 ? insets.bottom : 0),
          // iOS shadow
          shadowColor: theme.colors.black,
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        tabBarLabelStyle: {
          fontSize: theme.fontSize.sm,
          fontWeight: '600',
        },
        headerStyle: {
          backgroundColor: theme.colors.tertiary,
          // iOS shadow
          shadowColor: theme.colors.black,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.15,
          shadowRadius: 3,
        },
        headerTintColor: theme.colors.black,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: theme.fontSize.lg,
        },
        headerShadowVisible: true,
      }}
    >
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
