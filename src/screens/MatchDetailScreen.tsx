import React from 'react';
import { Alert, Text, View } from 'react-native';
import { Commuter } from '../data/mockData';
import {
  Avatar,
  Button,
  Card,
  Heading,
  Page,
  RouteMap,
  ScreenHeader,
} from '../components/UI';
export function MatchDetailScreen({
  person,
  requested,
  onRequest,
  onBack,
  onNavigate,
  confirmMode,
}: {
  person: Commuter;
  requested: boolean;
  onRequest: () => void;
  onBack: () => void;
  onNavigate: (screen: 'chat') => void;
  confirmMode?: boolean;
}) {
  if (confirmMode)
    return (
      <View style={{ flex: 1 }}>
        <ScreenHeader title="Ride request" onBack={onBack} />
        <View style={{ flex: 1, padding: 22, justifyContent: 'center' }}>
          <Card>
            <Heading
              title="Send Ride Request?"
              subtitle={`${person.name} will be notified about your request.`}
            />
            <Text style={{ marginBottom: 12, fontWeight: '700' }}>
              {person.route} · {person.time}
            </Text>
            <Button title="Send Request" onPress={onRequest} />
            <Button title="Cancel" secondary onPress={onBack} />
          </Card>
        </View>
      </View>
    );
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Commuter profile" onBack={onBack} />
      <Page>
        <View style={{ alignItems: 'center', padding: 15 }}>
          <Avatar initials={person.initials} color={person.color} size={82} />
          <Text style={{ fontSize: 24, fontWeight: '800', marginTop: 12 }}>
            {person.name}
          </Text>
          <Text style={{ color: '#71807C' }}>
            ⭐ {person.rating} Rating · ✓ Verified member
          </Text>
        </View>
        <Card>
          <Text style={{ fontWeight: '800', fontSize: 16 }}>Daily Route</Text>
          <RouteMap />
          <Text style={{ fontWeight: '700' }}>{person.route}</Text>
        </Card>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {[
            [`${person.match}%`, 'Route match'],
            [person.detour, 'Detour'],
            [person.time, 'Departure'],
            [`PKR ${person.price}`, 'Daily share'],
          ].map(([v, l]) => (
            <Card key={l} style={{ width: '48%' }}>
              <Text
                style={{ fontSize: 18, fontWeight: '800', color: '#167C68' }}
              >
                {v}
              </Text>
              <Text style={{ fontSize: 11, color: '#71807C' }}>{l}</Text>
            </Card>
          ))}
        </View>
        <Card>
          <Text style={{ fontWeight: '800' }}>Vehicle & preferences</Text>
          <Text style={{ color: '#71807C', marginTop: 8 }}>
            {person.vehicle}
          </Text>
          <Text style={{ color: '#71807C' }}>AC · Non-smoking · Weekdays</Text>
        </Card>
        <Button
          title={requested ? 'Request Pending' : 'Request to Join'}
          onPress={() =>
            requested
              ? Alert.alert(
                  'Request pending',
                  'Your request is awaiting a response.',
                )
              : onRequest()
          }
        />
        <Button title="Message" secondary onPress={() => onNavigate('chat')} />
      </Page>
    </View>
  );
}
