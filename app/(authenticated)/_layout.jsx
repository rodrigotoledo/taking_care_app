import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Tabs, router } from 'expo-router';
import "../../global.css"
import { Ionicons, MaterialCommunityIcons, FontAwesome  } from '@expo/vector-icons';
import HeaderLeftWithTitle from '../../components/HeaderLeftWithTitle';

export default function Layout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF4081', // Cor ativa (rosa vibrante)
        tabBarInactiveTintColor: '#8E44AD', // Cor inativa (roxo vibrante)
        headerTitle: '',
        headerLeft: () => (
          <HeaderLeftWithTitle />
        ),
        headerRight: () => (
          <View className="flex flex-row mr-1">
            <TouchableOpacity className="bg-secondary rounded-md mr-2">
              <Text className="text-white p-2">Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPressIn={() => router.replace('(free)')} className="border border-secondary rounded-md">
              <Text className="text-secondary p-2">Sign out</Text>
            </TouchableOpacity>
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Taking Care',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'tv' : 'tv-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
      name="tiktik"
        options={{
          title: '*TikTik*',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'search' : 'search-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
      name="messages"
        options={{
          title: 'Messages',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'send-check' : 'send-check-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
      name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'search' : 'search-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
      name="aboutAuth"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'information' : 'information-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
