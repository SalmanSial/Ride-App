import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { cities, demoUser } from '../data/mockData';
import { Button, Field, Heading, Page, ScreenHeader } from '../components/UI';

export function AuthScreen({
  mode,
  onComplete,
  onBack,
  onNavigate,
}: {
  mode: 'login' | 'signup';
  onComplete: () => void;
  onBack: () => void;
  onNavigate: (screen: 'login' | 'signup') => void;
}) {
  const [city, setCity] = useState(demoUser.city);
  const [showCities, setShowCities] = useState(false);
  const [name, setName] = useState(demoUser.name);
  const [phone, setPhone] = useState(demoUser.phone);
  const [email, setEmail] = useState('salman@example.com');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('Female');
  const [showGenders, setShowGenders] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader
        title={mode === 'login' ? 'Welcome back' : 'Create account'}
        onBack={onBack}
      />
      <Page>
        <Heading
          title={
            mode === 'login'
              ? 'Your commute, connected.'
              : 'Join the community.'
          }
          subtitle={
            mode === 'login'
              ? 'Sign in to find your daily ride match.'
              : 'A better daily commute starts here.'
          }
        />
        {mode === 'signup' && (
          <Field label="FULL NAME" value={name} onChangeText={setName} />
        )}
        <Field
          label="PHONE NUMBER"
          value={phone}
          onChangeText={setPhone}
          placeholder="+92 300 1234567"
          keyboardType="phone-pad"
        />
        {mode === 'signup' && (
          <Field
            label="EMAIL"
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
          />
        )}
        <Field
          label="PASSWORD"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          secureTextEntry
        />
        {mode === 'signup' && (
          <>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '800',
                color: '#71807C',
                marginBottom: 8,
              }}
            >
              CITY
            </Text>
            <TouchableOpacity
              onPress={() => setShowCities(!showCities)}
              style={{
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#E5ECE9',
                borderRadius: 13,
                padding: 16,
                marginBottom: 10,
              }}
            >
              <Text>{city} ⌄</Text>
            </TouchableOpacity>
            {showCities && (
              <View>
                {cities.map(item => (
                  <TouchableOpacity
                    key={item}
                    onPress={() => {
                      setCity(item);
                      setShowCities(false);
                    }}
                    style={{ padding: 11 }}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </>
        )}
        {mode === 'signup' && (
          <>
            <Text
              style={{ color: '#71807C', marginVertical: 8, fontWeight: '700' }}
            >
              GENDER
            </Text>
            <TouchableOpacity
              onPress={() => setShowGenders(!showGenders)}
              style={{
                padding: 13,
                backgroundColor: 'white',
                borderRadius: 12,
                marginBottom: 8,
              }}
            >
              <Text>{gender} ⌄</Text>
            </TouchableOpacity>
            {showGenders &&
              ['Female', 'Male', 'Prefer not to say'].map(option => (
                <TouchableOpacity
                  key={option}
                  onPress={() => {
                    setGender(option);
                    setShowGenders(false);
                  }}
                  style={{ padding: 10 }}
                >
                  <Text>{option}</Text>
                </TouchableOpacity>
              ))}
          </>
        )}
        <Button
          title={mode === 'login' ? 'Login' : 'Create account'}
          onPress={onComplete}
        />
        <Button title="Continue as Demo User" onPress={onComplete} secondary />
        <TouchableOpacity onPress={onComplete}>
          <Text style={{ textAlign: 'center', padding: 15, color: '#167C68' }}>
            Use demo account · {demoUser.name}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onNavigate(mode === 'login' ? 'signup' : 'login')}
        >
          <Text
            style={{
              textAlign: 'center',
              padding: 12,
              color: '#167C68',
              fontWeight: '700',
            }}
          >
            {mode === 'login'
              ? 'New here? Create an account'
              : 'Already a member? Login'}
          </Text>
        </TouchableOpacity>
      </Page>
    </View>
  );
}
