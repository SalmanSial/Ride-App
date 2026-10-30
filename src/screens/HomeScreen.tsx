import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { demoUser } from '../data/mockData';
import { AppScreenProps } from '../navigation/types';
import { Button, Card, Heading, Page, RouteMap } from '../components/UI';
import { MatchCard } from '../components/MatchCard';
import { commuters } from '../data/mockData';

export function HomeScreen({ onNavigate }: AppScreenProps) {
  return (
    <Page>
      <Text
        style={{
          fontSize: 10,
          color: '#167C68',
          fontWeight: '800',
          letterSpacing: 1.4,
        }}
      >
        THURSDAY · LAHORE
      </Text>
      <Heading
        title={`Good Morning, ${demoUser.name.split(' ')[0]} 👋`}
        subtitle="Where are you heading today?"
      />
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <TouchableOpacity
          onPress={() => onNavigate('find')}
          style={{
            flex: 1,
            backgroundColor: '#123B35',
            padding: 18,
            borderRadius: 21,
            minHeight: 130,
            justifyContent: 'flex-end',
          }}
        >
          <Text style={{ fontSize: 27, color: 'white' }}>⌕</Text>
          <Text style={{ fontSize: 17, color: 'white', fontWeight: '800' }}>
            Find a Ride
          </Text>
          <Text style={{ color: '#CEE7DE' }}>I need a ride</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onNavigate('offer')}
          style={{
            flex: 1,
            backgroundColor: '#167C68',
            padding: 18,
            borderRadius: 21,
            minHeight: 130,
            justifyContent: 'flex-end',
          }}
        >
          <Text style={{ fontSize: 27, color: 'white' }}>➜</Text>
          <Text style={{ fontSize: 17, color: 'white', fontWeight: '800' }}>
            Offer a Ride
          </Text>
          <Text style={{ color: '#CEE7DE' }}>I'm driving</Text>
        </TouchableOpacity>
      </View>
      <Card style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: '800', color: '#1D2927' }}>
          My Daily Route
        </Text>
        <Text style={{ fontSize: 12, color: '#71807C' }}>
          Your weekday commute
        </Text>
        <RouteMap />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: '700' }}>8:30 AM</Text>
          <Text style={{ color: '#71807C' }}>Monday – Friday</Text>
        </View>
      </Card>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontWeight: '800', fontSize: 17, marginVertical: 9 }}>
          Made for your route
        </Text>
        <TouchableOpacity onPress={() => onNavigate('matches')}>
          <Text style={{ color: '#167C68' }}>See all</Text>
        </TouchableOpacity>
      </View>
      <MatchCard
        person={commuters[0]}
        onProfile={() => onNavigate('detail')}
        onRequest={() => onNavigate('confirm')}
      />
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <View style={{ flex: 1 }}>
          <Button
            title="Requests"
            onPress={() => onNavigate('requests')}
            secondary
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title="Fuel calculator"
            onPress={() => onNavigate('fuel')}
            secondary
          />
        </View>
      </View>
      <Button
        title="Safety Center"
        onPress={() => onNavigate('safety')}
        secondary
      />
    </Page>
  );
}
