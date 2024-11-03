import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function PatientInfo() {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [responsiblePhone, setResponsiblePhone] = useState('');
  const [accompanyingName, setAccompanyingName] = useState('');
  const [symptoms, setSymptoms] = useState('');

  return (
    <SafeAreaView className="bg-background p-6 flex-1">
      <Text className="text-2xl text-textPrimary font-bold mb-6">Informações do Paciente</Text>

      {/* Nome */}
      <TextInput
        label="Nome Completo"
        value={name}
        onChangeText={setName}
        mode="outlined"
        className="mb-4"
      />

      {/* Data de Nascimento */}
      <TextInput
        label="Data de Nascimento"
        value={birthDate}
        onChangeText={setBirthDate}
        mode="outlined"
        className="mb-4"
        placeholder="dd/mm/aaaa"
      />

      {/* Idade */}
      <TextInput
        label="Idade"
        value={age}
        onChangeText={setAge}
        mode="outlined"
        keyboardType="numeric"
        className="mb-4"
      />

      {/* Telefone do Paciente */}
      <TextInput
        label="Telefone do Paciente"
        value={patientPhone}
        onChangeText={setPatientPhone}
        mode="outlined"
        keyboardType="phone-pad"
        className="mb-4"
      />

      {/* Telefone do Responsável */}
      <TextInput
        label="Telefone do Responsável"
        value={responsiblePhone}
        onChangeText={setResponsiblePhone}
        mode="outlined"
        keyboardType="phone-pad"
        className="mb-4"
      />

      {/* Nome do Acompanhante */}
      <TextInput
        label="Nome do Acompanhante"
        value={accompanyingName}
        onChangeText={setAccompanyingName}
        mode="outlined"
        className="mb-4"
      />

      {/* Sintomas */}
      <TextInput
        label="Principais Sintomas"
        value={symptoms}
        onChangeText={setSymptoms}
        mode="outlined"
        multiline
        numberOfLines={4}
        className="mb-6"
      />

      {/* Botão para salvar */}
      <TouchableOpacity className="bg-primary text-white justify-center items-center my-2 rounded-full" mode="contained" onPress={() => console.log('Salvar informações')}>
        <Text className="text-white text-2xl p-2">Salvar Informações</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
