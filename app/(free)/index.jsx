import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, PermissionsAndroid, Platform } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const audioRecorderPlayer = new AudioRecorderPlayer();

export default function Welcome({ navigation }) {
  const [recordSecs, setRecordSecs] = useState(0);
  const [recordTime, setRecordTime] = useState('00:00:00');
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestPermissions();
    }
  }, []);

  // Solicita permissão para gravação de áudio no Android
  const requestPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Permissão para Gravação de Áudio',
          message: 'Este aplicativo precisa acessar o microfone para gravação de áudio.',
          buttonNeutral: 'Pergunte-me depois',
          buttonNegative: 'Cancelar',
          buttonPositive: 'OK',
        },
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permissão de gravação de áudio negada');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // Função para iniciar a gravação
  const onStartRecord = async () => {
    setIsRecording(true);
    await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener((e) => {
      setRecordSecs(e.current_position);
      setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.current_position)));
      return;
    });
  };

  // Função para parar a gravação
  const onStopRecord = async () => {
    setIsRecording(false);
    await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
  };

  // Função para regravar o áudio
  const onReRecord = async () => {
    setRecordSecs(0);
    setRecordTime('00:00:00');
    await onStartRecord();
  };

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

      <View className="mt-4 px-10">
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
        Clique no botão abaixo para passar suas informações e seus sintomas.
      </Text>

      {/* Exibição do tempo de gravação */}
      <Text className="text-4xl text-textPrimary mt-4">{recordTime}</Text>

      {/* Botão para Iniciar, Parar e Regravar */}
      {isRecording ? (
        <TouchableOpacity
          className="mt-6 flex-row items-center bg-red-500 py-3 px-8 rounded-full"
          onPress={onStopRecord}
        >
          <MaterialIcons name="stop" size={24} color="#FFFFFF" className="mr-2" />
          <Text className="text-white text-lg font-semibold">Parar Gravação</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          className="mt-6 flex-row items-center bg-primary py-3 px-8 rounded-full"
          onPress={onStartRecord}
        >
          <MaterialIcons name="mic" size={24} color="#FFFFFF" className="mr-2" />
          <Text className="text-white text-lg font-semibold">Iniciar Gravação</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        className="mt-2 flex-row items-center bg-primary py-3 px-8 rounded-full"
        onPress={() => navigation.navigate('InformarDados')}
      >
        <FontAwesome name="keyboard-o" size={24} color="#FFFFFF" className="mr-2" />
        <Text className="text-white text-lg font-semibold">
          Prosseguir preenchendo dados
        </Text>
      </TouchableOpacity>

      {/* Botão para Regravar ou Prosseguir */}
      {!isRecording && recordSecs > 0 && (
        <View className="mt-4 flex-row">
          <TouchableOpacity
            className="flex-row items-center bg-secondary py-3 px-6 rounded-full mr-4"
            onPress={onReRecord}
          >
            <MaterialIcons name="refresh" size={24} color="#FFFFFF" className="mr-2" />
            <Text className="text-white text-lg font-semibold">Regravar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center bg-primary py-3 px-6 rounded-full"
            onPress={() => navigation.navigate('InformarDados')}
          >
            <FontAwesome name="arrow-right" size={24} color="#FFFFFF" className="mr-2" />
            <Text className="text-white text-lg font-semibold">Avançar</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
