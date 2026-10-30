import React from 'react';
import { Text, View } from 'react-native';
import { Commuter } from '../data/mockData';
import { theme } from '../theme';
import { Avatar, Button, Card } from './UI';

export function MatchCard({
  person,
  onProfile,
  onRequest,
  requested,
}: {
  person: Commuter;
  onProfile: () => void;
  onRequest: () => void;
  requested?: boolean;
}) {
  return (
    <Card>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar initials={person.initials} color={person.color} />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text
            style={{ fontSize: 15, fontWeight: '700', color: theme.colors.ink }}
          >
            {person.name}
          </Text>
          <Text
            style={{ fontSize: 12, color: theme.colors.muted, marginTop: 3 }}
          >
            ⭐ {person.rating} · Verified member
          </Text>
        </View>
        <Text
          style={{
            fontWeight: '800',
            color: theme.colors.primary,
            backgroundColor: theme.colors.mint,
            padding: 9,
            borderRadius: 11,
          }}
        >
          {person.match}%
        </Text>
      </View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '700',
          color: theme.colors.ink,
          marginTop: 15,
        }}
      >
        {person.route}
      </Text>
      <Text
        style={{ fontSize: 11, color: theme.colors.muted, marginVertical: 10 }}
      >
        ◷ {person.time} · ↗ {person.detour} detour · PKR {person.price}/day
      </Text>
      <Text
        style={{ fontSize: 12, color: theme.colors.muted, marginBottom: 8 }}
      >
        {person.vehicle}
      </Text>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <View style={{ flex: 1 }}>
          <Button title="View Profile" onPress={onProfile} secondary />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title={requested ? 'Request Sent' : 'Request Ride'}
            onPress={onRequest}
          />
        </View>
      </View>
    </Card>
  );
}
