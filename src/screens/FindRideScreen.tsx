import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AppScreenProps } from '../navigation/types';
import {
  Button,
  Field,
  Heading,
  Page,
  RouteMap,
  ScreenHeader,
} from '../components/UI';
export function FindRideScreen({ onNavigate, onBack }: AppScreenProps) {
  const [from, setFrom] = useState('Johar Town');
  const [to, setTo] = useState('Gulberg');
  const [time, setTime] = useState('8:30 AM');
  const [days, setDays] = useState(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']);
  const [female, setFemale] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Find a ride" onBack={onBack} />
      <Page>
        <Heading
          title="Where are you going?"
          subtitle="Find someone already traveling your route."
        />
        <Field label="PICKUP" value={from} onChangeText={setFrom} />
        <Field label="DESTINATION" value={to} onChangeText={setTo} />
        <Field label="DEPARTURE TIME" value={time} onChangeText={setTime} />
        <Text
          style={{
            fontSize: 10,
            fontWeight: '800',
            color: '#71807C',
            marginBottom: 8,
          }}
        >
          DAYS
        </Text>
        <View style={{ flexDirection: 'row', gap: 6, marginBottom: 15 }}>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
            <TouchableOpacity
              key={day}
              onPress={() =>
                setDays(
                  days.includes(day)
                    ? days.filter(d => d !== day)
                    : [...days, day],
                )
              }
              style={{
                backgroundColor: days.includes(day) ? '#E8F4F0' : 'white',
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: '#167C68' }}>{day}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text
          style={{
            fontSize: 10,
            fontWeight: '800',
            color: '#71807C',
            marginBottom: 8,
          }}
        >
          PREFERENCES
        </Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 6,
            flexWrap: 'wrap',
            marginBottom: 12,
          }}
        >
          {['✓ AC', '✓ Non-Smoking', '✓ Flexible pickup'].map(v => (
            <Text
              key={v}
              style={{
                color: '#167C68',
                backgroundColor: 'white',
                padding: 9,
                borderRadius: 10,
              }}
            >
              {v}
            </Text>
          ))}
        </View>
        <TouchableOpacity onPress={() => setFemale(!female)}>
          <Text style={{ color: '#71807C', marginBottom: 12 }}>
            {female ? '✓' : '○'} Female only
          </Text>
        </TouchableOpacity>
        <Button title="Find Matches" onPress={() => onNavigate('matches')} />
        <RouteMap from={from} to={to} />
      </Page>
    </View>
  );
}
