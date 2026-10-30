import React from 'react';
import { Alert, Text, View } from 'react-native';
import { demoUser } from '../data/mockData';
import { AppScreenProps } from '../navigation/types';
import {
  Avatar,
  Button,
  Card,
  Heading,
  Page,
  ScreenHeader,
} from '../components/UI';
export function ProfileScreen({ onBack, onNavigate }: AppScreenProps) {
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="My Profile" onBack={onBack} />
      <Page>
        <View style={{ alignItems: 'center', padding: 14 }}>
          <Avatar initials="SN" size={80} />
          <Text style={{ fontSize: 24, fontWeight: '800', marginTop: 10 }}>
            {demoUser.name}
          </Text>
          <Text style={{ color: '#71807C' }}>
            ⭐ 4.8 Rating · ✓ Verified Member
          </Text>
        </View>
        <Card>
          <Text style={{ fontWeight: '800', fontSize: 16 }}>
            Trust & verification
          </Text>
          <Text style={{ color: '#167C68', marginTop: 9 }}>
            ✓ Phone verified ✓ Email verified
          </Text>
          <Text style={{ color: '#167C68', marginTop: 5 }}>
            ✓ Identity verified ✓ Driver verified
          </Text>
        </Card>
        <Card>
          <Heading title="My Vehicle" />
          <Text style={{ color: '#71807C' }}>🚘 Toyota Corolla</Text>
          <Heading title="My Routes" />
          <Text style={{ color: '#71807C' }}>
            Johar Town → Gulberg · 8:30 AM
          </Text>
          <Heading title="Preferences" />
          <Text style={{ color: '#71807C' }}>AC · Non-Smoking</Text>
        </Card>
        <Button
          title="Edit Profile"
          onPress={() =>
            Alert.alert('Edit Profile', 'Demo profile details are prefilled.')
          }
        />
        <Button
          title="Manage Vehicle"
          secondary
          onPress={() => Alert.alert('Vehicle', 'Toyota Corolla · AC')}
        />
        <Button
          title="Safety Center"
          secondary
          onPress={() => onNavigate('safety')}
        />
        <Button
          title="Fuel Cost Calculator"
          secondary
          onPress={() => onNavigate('fuel')}
        />
      </Page>
    </View>
  );
}
