import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AppScreenProps } from '../navigation/types';
import { Avatar, Card, Heading, Page, ScreenHeader } from '../components/UI';
export function MessagesScreen({ onBack, onNavigate }: AppScreenProps) {
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Messages" onBack={onBack} />
      <Page>
        <Heading
          title="Keep in touch."
          subtitle="Coordinate your shared commute."
        />
        {[
          ['AK', 'Ahmed Khan', 'Yes, that works for me.', '9:12'],
          ['AR', 'Ali Raza', 'See you at the pickup point!', 'Yesterday'],
        ].map(([initials, name, last, time]) => (
          <TouchableOpacity key={name} onPress={() => onNavigate('chat')}>
            <Card>
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}
              >
                <Avatar initials={initials} />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: '800' }}>{name}</Text>
                  <Text
                    style={{ color: '#71807C', fontSize: 12, marginTop: 4 }}
                  >
                    {last}
                  </Text>
                </View>
                <Text style={{ color: '#71807C', fontSize: 10 }}>{time}</Text>
              </View>
            </Card>
          </TouchableOpacity>
        ))}
      </Page>
    </View>
  );
}
