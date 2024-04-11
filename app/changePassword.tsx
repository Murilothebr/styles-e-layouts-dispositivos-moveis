import { View, Text, StyleSheet, TextInput, SafeAreaView, Alert } from 'react-native'
import React, { useState } from 'react'
import { Stack, router, useNavigation } from 'expo-router';
import { Colors } from '@/consts/colors';
import FormInput from '@/components/form/FormInput';
import PasswordFormInput from '@/components/form/PasswordFormInput';
import FormButton from '@/components/form/FormButton';

export default function changePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleLogin = () => {
    if (confirmNewPassword !== newPassword) {
      Alert.alert(
        "As senhas não são iguais",
        "Certifique-se de que as senhas são iguais",
        [
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
      return;
    }
    
    Alert.alert(
      "Senha alterada!",
      "Certifique-se de guardar a nova senha",
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );

    router.push("/");
  };

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          title: 'Senha de acesso',
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <View style={styles.form}>
        <PasswordFormInput
          label="Senha Atual"
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />

        <PasswordFormInput
          label="Nova Senha"
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <PasswordFormInput
          label="Confirmar nova senha"
          value={confirmNewPassword}
          onChangeText={setConfirmNewPassword}
        />

        <FormButton onPress={handleLogin} title="Salvar" />
        
      </View >
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  form: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
