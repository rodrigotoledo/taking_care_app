import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome  } from '@expo/vector-icons';

const HeaderLeftWithTitle = () => (
  <View className="flex flex-row items-center ml-2">
    <FontAwesome name="hospital-o" size={30} color={'#4A90E2'} className="text-primary mr-2" />
    <Text className=' font-bold text-lg text-primary'>TakingCare</Text>
  </View>
);

export default HeaderLeftWithTitle;
