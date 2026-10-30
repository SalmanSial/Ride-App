import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AppScreenProps } from '../navigation/types';
import { theme } from '../theme';
export function ChatScreen({
  onBack,
  messages,
  onSend,
}: AppScreenProps & { messages: string[]; onSend: (m: string) => void }) {
  const [draft, setDraft] = useState('');
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.paper }}>
      <View
        style={{ height: 50, paddingHorizontal: 20, justifyContent: 'center' }}
      >
        <Text onPress={onBack} style={{ fontSize: 19, fontWeight: '800' }}>
          ‹ Ahmed Khan
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end', padding: 18 }}>
        <Text
          style={{
            textAlign: 'center',
            color: '#71807C',
            fontSize: 10,
            marginBottom: 18,
          }}
        >
          TODAY · YOUR SHARED COMMUTE
        </Text>
        {messages.map((message, i) => (
          <View
            key={`${i}-${message}`}
            style={{
              alignSelf: i % 2 ? 'flex-end' : 'flex-start',
              backgroundColor: i % 2 ? '#E8F4F0' : 'white',
              padding: 13,
              borderRadius: 16,
              maxWidth: '84%',
              marginBottom: 10,
            }}
          >
            <Text>{message}</Text>
          </View>
        ))}
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 12,
          backgroundColor: 'white',
          gap: 8,
        }}
      >
        <TextInput
          value={draft}
          onChangeText={setDraft}
          placeholder="Write a message..."
          style={{
            flex: 1,
            height: 46,
            backgroundColor: '#F7FAF9',
            borderRadius: 13,
            paddingHorizontal: 12,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            if (draft.trim()) {
              onSend(draft.trim());
              setDraft('');
            }
          }}
          style={{
            width: 46,
            borderRadius: 13,
            backgroundColor: '#167C68',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>↑</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
