import React from 'react';
import { Text, View } from 'react-native';
import { Button, Card, Heading, Page, ScreenHeader } from '../components/UI';
export function RidesScreen({
  onBack,
  onNavigate,
  requested,
}: {
  onBack: () => void;
  onNavigate: (s: any) => void;
  requested: boolean;
}) {
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="My Rides" onBack={onBack} />
      <Page>
        <Heading
          title="Your commute"
          subtitle="Upcoming plans and completed journeys."
        />
        <Text style={{ fontSize: 16, fontWeight: '800', marginBottom: 9 }}>
          Upcoming
        </Text>
        <Card>
          <Text style={{ color: '#167C68', fontSize: 10, fontWeight: '800' }}>
            CONFIRMED · TOMORROW
          </Text>
          <Text style={{ fontWeight: '800', fontSize: 17, marginTop: 8 }}>
            Johar Town → Gulberg
          </Text>
          <Text style={{ color: '#71807C', marginTop: 5 }}>
            8:30 AM · Ahmed Khan · PKR 250/day
          </Text>
          <Button
            title="Open messages"
            secondary
            onPress={() => onNavigate('chat')}
          />
        </Card>
        <Text style={{ fontSize: 16, fontWeight: '800', marginVertical: 9 }}>
          Past Rides
        </Text>
        {[
          'Sep 29 · Johar Town → Gulberg · Ahmed Khan · PKR 250',
          'Sep 26 · DHA → Gulberg · Ali Raza · PKR 300',
          'Sep 24 · Model Town → Gulberg · Hamza Malik · PKR 220',
        ].map(item => (
          <Card key={item}>
            <Text style={{ color: '#1D2927' }}>{item} · ⭐ 5.0</Text>
          </Card>
        ))}
        {requested && (
          <Card>
            <Text style={{ color: '#167C68' }}>
              Your new request is pending with Ahmed Khan.
            </Text>
          </Card>
        )}
      </Page>
    </View>
  );
}
