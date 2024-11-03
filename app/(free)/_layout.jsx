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
        tabBarActiveTintColor: '#4A90E2', // Cor ativa (rosa vibrante)
        tabBarInactiveTintColor: '#90bff5', // Cor inativa (roxo vibrante)
        headerTitle: '',
        headerLeft: () => (
          <HeaderLeftWithTitle />
        ),
        headerRight: () => (
          <View className="flex flex-row mr-1">
            <TouchableOpacity onPress={() => router.push('/patient_info')} className="bg-blueSecondary rounded-md mr-2">
              <Text className="text-white p-2">Entrar</Text>
            </TouchableOpacity>
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Diagnóstico',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'tv' : 'tv-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
      name="follow_process"
        options={{
          title: 'Acompanhar Processo',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'information' : 'information-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
