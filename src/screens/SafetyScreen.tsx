import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { AppScreenProps } from '../navigation/types';
import { Card, Heading, Page, ScreenHeader } from '../components/UI';
export function SafetyScreen({ onBack }: AppScreenProps) {
  const demo = (title: string) =>
    Alert.alert(
      title,
      'Demo action only. No emergency or external service was contacted.',
    );
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Safety Center" onBack={onBack} />
      <Page>
        <Heading
          title="Your Safety Matters"
          subtitle="A trusted community makes every shared ride feel better."
        />
        {[
          ['✓', 'Verified Community', 'Connect with verified commuters.'],
          ['↗', 'Share Trip', 'Share trip details with a trusted contact.'],
          ['☎', 'Emergency Contacts', 'Add or manage the people you trust.'],
        ].map(([icon, title, description]) => (
          <TouchableOpacity key={title} onPress={() => demo(title)}>
            <Card>
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}
              >
                <Text style={{ fontSize: 24, color: '#167C68' }}>{icon}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: '800' }}>{title}</Text>
                  <Text
                    style={{ fontSize: 12, color: '#71807C', marginTop: 4 }}
                  >
                    {description}
                  </Text>
                </View>
                <Text>›</Text>
              </View>
            </Card>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          onPress={() => demo('Emergency SOS')}
          style={{
            height: 145,
            backgroundColor: '#CE4646',
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 32, fontWeight: '900', color: 'white' }}>
            SOS
          </Text>
          <Text style={{ color: 'white' }}>Emergency assistance</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 11, color: '#71807C' }}>
          Demo safety center · SOS does not contact emergency services.
        </Text>
      </Page>
    </View>
  );
}
