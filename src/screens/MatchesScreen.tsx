import React from 'react';
import { Text, View } from 'react-native';
import { MatchScreenProps } from '../navigation/types';
import { MatchCard } from '../components/MatchCard';
import { Card, Heading, Page, ScreenHeader } from '../components/UI';
export function MatchesScreen(p: MatchScreenProps) {
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader
        title={p.published ? 'Matching passengers' : 'Route matches'}
        onBack={p.onBack}
      />
      <Page>
        <Heading
          title={
            p.published ? 'Passengers for your route' : 'Your commute, matched.'
          }
          subtitle="Demo scores use route overlap, time, detour, schedule and preferences."
        />
        <Card>
          <Text style={{ fontWeight: '800', fontSize: 16, marginBottom: 9 }}>
            Match score breakdown
          </Text>
          {[
            ['Route overlap', '35%'],
            ['Time compatibility', '20%'],
            ['Detour', '25%'],
            ['Schedule', '10%'],
            ['Preferences', '10%'],
          ].map(([label, value]) => (
            <View
              key={label}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 6,
              }}
            >
              <Text style={{ color: '#71807C' }}>{label}</Text>
              <Text style={{ fontWeight: '700' }}>{value}</Text>
            </View>
          ))}
          <Text style={{ fontSize: 11, color: '#71807C', marginTop: 8 }}>
            Illustrative demo logic · not live matching
          </Text>
        </Card>
        {p.published && (
          <Card>
            <Text style={{ fontWeight: '800', color: '#167C68' }}>
              ✓ Your route is visible to matching commuters.
            </Text>
          </Card>
        )}
        {p.commuters.map(person => (
          <MatchCard
            key={person.id}
            person={person}
            onProfile={() => {
              p.onSelect(person);
              p.onNavigate('detail');
            }}
            onRequest={() => {
              p.onSelect(person);
              p.onRequest();
            }}
            requested={p.sentIds.includes(person.id)}
          />
        ))}
      </Page>
    </View>
  );
}
