import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button, Field, Heading, Page, ScreenHeader } from '../components/UI';

export function OfferRideScreen({
  onBack,
  onPublish,
  published,
}: {
  onBack: () => void;
  onPublish: () => void;
  published: boolean;
}) {
  const [from, setFrom] = useState('Johar Town');
  const [to, setTo] = useState('Gulberg');
  const [departure, setDeparture] = useState('8:30 AM');
  const [returnTime, setReturnTime] = useState('6:00 PM');
  const [vehicle, setVehicle] = useState('Toyota Corolla');
  const [average, setAverage] = useState('12 km/L');
  const [seats, setSeats] = useState('1');

  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Offer a ride" onBack={onBack} />
      <Page>
        <Heading
          title="Your Daily Route"
          subtitle="Share seats on a trip you already make."
        />
        <Field label="FROM" value={from} onChangeText={setFrom} />
        <Field label="TO" value={to} onChangeText={setTo} />
        <Field
          label="DEPARTURE"
          value={departure}
          onChangeText={setDeparture}
        />
        <Field label="RETURN" value={returnTime} onChangeText={setReturnTime} />
        <Text style={{ fontSize: 10, fontWeight: '800', color: '#71807C' }}>
          AVAILABLE SEATS
        </Text>
        <View style={{ flexDirection: 'row', gap: 9, marginVertical: 10 }}>
          {['1', '2', '3'].map(value => (
            <TouchableOpacity
              key={value}
              onPress={() => setSeats(value)}
              style={{
                padding: 11,
                borderRadius: 10,
                backgroundColor: seats === value ? '#167C68' : '#E8F4F0',
              }}
            >
              <Text style={{ color: seats === value ? 'white' : '#167C68' }}>
                {value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Field label="VEHICLE" value={vehicle} onChangeText={setVehicle} />
        <Field label="FUEL AVERAGE" value={average} onChangeText={setAverage} />
        <Text style={{ color: '#71807C', marginBottom: 10 }}>
          ✓ AC ✓ Non-smoking ✓ Any gender
        </Text>
        <Button
          title={published ? 'Route Published' : 'Publish My Route'}
          onPress={onPublish}
        />
      </Page>
    </View>
  );
}
