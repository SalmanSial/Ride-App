import React from 'react';
import { Text, View } from 'react-native';
import { demoNotifications } from '../data/mockData';
import { AppScreenProps } from '../navigation/types';
import { Card, Heading, Page, ScreenHeader } from '../components/UI';
export function NotificationsScreen({ onBack }: AppScreenProps) {
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Notifications" onBack={onBack} />
      <Page>
        <Heading
          title="You're all caught up."
          subtitle="Updates from your Daily Drive community."
        />
        {demoNotifications.map(item => (
          <Card key={item.title}>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}
            >
              <Text style={{ fontSize: 22, color: '#167C68' }}>
                {item.icon}
              </Text>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: '700' }}>{item.title}</Text>
                <Text style={{ fontSize: 11, color: '#71807C', marginTop: 4 }}>
                  {item.time}
                </Text>
              </View>
            </View>
          </Card>
        ))}
      </Page>
    </View>
  );
}
