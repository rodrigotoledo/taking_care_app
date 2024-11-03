import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function Welcome({ navigation }) {
  return (
    <SafeAreaView className="bg-background flex items-center justify-center p-6">
      {/* Título de Boas-vindas */}
      <Text className="text-2xl text-textPrimary font-bold mt-6">
        Bem-vindo ao TakingCare
      </Text>

      {/* Instruções */}
      <Text className="text-center text-textSecondary mt-4 text-xl">
        Para agilizar o seu atendimento, precisamos saber algumas informações.
      </Text>

      <View className="mt-4 px-10 ">
        <Text className="text-textSecondary text-lg mb-2 font-bold">
          1. Nome completo, data de nascimento ou idade, telefone de contato.
        </Text>
        <Text className="text-textSecondary text-lg mb-2 font-bold">
          2. Nome do acompanhante e uma forma de contato, se houver.
        </Text>
        <Text className="text-textSecondary text-lg mb-2 font-bold">
          4. Principais sintomas e qualquer outra informação relevante.
        </Text>
      </View>

      <Text className="text-center text-textSecondary mt-4 px-10">
        Clique no botão abaixo passar suas informações e seus sintomas.
      </Text>

      {/* Botão para Iniciar Gravação de Diagnóstico */}
      <TouchableOpacity
        className="mt-10 flex-row items-center bg-primary py-3 px-8 rounded-full"
        onPress={() => navigation.navigate('InformarDados')}
      >
        <MaterialIcons name="mic" size={24} color="#FFFFFF" className="mr-2" />
        <Text className="text-white text-lg font-semibold">
          Iniciar gravação de diagnóstico
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="mt-2 flex-row items-center bg-primary py-3 px-8 rounded-full"
        onPress={() => navigation.navigate('InformarDados')}
      >
        <FontAwesome name="keyboard-o" size={24} color="#FFFFFF" className="mr-2" />
        <Text className="text-white text-lg font-semibold">
          Prosseguir preenchendo dados
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
