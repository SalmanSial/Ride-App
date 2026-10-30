import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { AppScreenProps } from '../navigation/types';
import { Button } from '../components/UI';
import { theme } from '../theme';

const slides = [
  [
    '🛣️',
    'Find People Going Your Way',
    'Meet commuters whose everyday route overlaps yours.',
  ],
  [
    '🚘',
    'Share Your Daily Commute',
    'Make the journey you already take more connected.',
  ],
  [
    '🤝',
    'Split Fuel Costs Fairly',
    'Share existing travel costs. No fares, just good company.',
  ],
];
export function OnboardingScreen({ onNavigate }: AppScreenProps) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.paper,
        padding: 24,
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.mint,
          borderRadius: 28,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 25,
        }}
      >
        <Text style={{ fontSize: 86 }}>{slide[0]}</Text>
        <Text style={{ fontSize: 34, marginTop: 24 }}>● ━━━ ●</Text>
      </View>
      <Text
        style={{
          fontSize: 11,
          color: theme.colors.primary,
          fontWeight: '800',
          letterSpacing: 1,
        }}
      >
        DAILY DRIVE · {index + 1} OF 3
      </Text>
      <Text
        style={{
          fontSize: 27,
          color: theme.colors.ink,
          fontWeight: '800',
          marginTop: 12,
        }}
      >
        {slide[1]}
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: theme.colors.muted,
          lineHeight: 23,
          marginTop: 8,
          marginBottom: 20,
        }}
      >
        {slide[2]}
      </Text>
      <Button
        title={index === 2 ? 'Get Started' : 'Continue'}
        onPress={() => (index < 2 ? setIndex(index + 1) : onNavigate('login'))}
      />
      <Button title="Skip" onPress={() => onNavigate('login')} secondary />
    </View>
  );
}
