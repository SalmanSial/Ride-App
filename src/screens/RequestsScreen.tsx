import React from 'react';
import { Alert, Text, View } from 'react-native';
import { AppScreenProps } from '../navigation/types';
import {
  Avatar,
  Button,
  Card,
  Heading,
  Page,
  ScreenHeader,
} from '../components/UI';
export function RequestsScreen({
  onBack,
  accepted,
  onAccept,
}: AppScreenProps & { accepted: boolean; onAccept: () => void }) {
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Ride requests" onBack={onBack} />
      <Page>
        <Heading
          title="Requests"
          subtitle="Manage your commuter connections."
        />
        <Text style={{ fontSize: 16, fontWeight: '800', marginBottom: 10 }}>
          Incoming Requests
        </Text>
        <Card>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <Avatar initials="AR" color="#E7E8F2" />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: '800' }}>Ali Raza</Text>
              <Text style={{ color: '#71807C', fontSize: 12 }}>
                Wants to join Johar Town → Gulberg.
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', gap: 8, marginTop: 12 }}>
            <View style={{ flex: 1 }}>
              <Button
                title={accepted ? 'Accepted' : 'Accept'}
                onPress={onAccept}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Button
                title="Decline"
                secondary
                onPress={() =>
                  Alert.alert(
                    'Request declined',
                    'Ali has been notified in this demo.',
                  )
                }
              />
            </View>
          </View>
          {accepted && (
            <Text style={{ color: '#167C68', fontWeight: '700', marginTop: 8 }}>
              ✓ Ride confirmed
            </Text>
          )}
        </Card>
        <Text style={{ fontSize: 16, fontWeight: '800', marginVertical: 10 }}>
          Sent Requests
        </Text>
        <Card>
          <Text style={{ fontWeight: '700' }}>Ahmed Khan</Text>
          <Text style={{ color: '#71807C', marginTop: 5 }}>
            Johar Town → Gulberg · Pending
          </Text>
        </Card>
      </Page>
    </View>
  );
}
