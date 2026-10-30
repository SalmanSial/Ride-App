import React, { useEffect, useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { commuters, Commuter } from '../data/mockData';
import { HomeScreen } from '../screens/HomeScreen';
import { AuthScreen } from '../screens/AuthScreen';
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { FindRideScreen } from '../screens/FindRideScreen';
import { MatchesScreen } from '../screens/MatchesScreen';
import { OfferRideScreen } from '../screens/OfferRideScreen';
import { MatchDetailScreen } from '../screens/MatchDetailScreen';
import { RequestsScreen } from '../screens/RequestsScreen';
import { RidesScreen } from '../screens/RidesScreen';
import { MessagesScreen } from '../screens/MessagesScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SafetyScreen } from '../screens/SafetyScreen';
import { FuelCalculatorScreen } from '../screens/FuelCalculatorScreen';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { ScreenName } from './types';
import { theme } from '../theme';

export function AppNavigator() {
  const [screen, setScreen] = useState<ScreenName>('splash');
  const [_history, setHistory] = useState<ScreenName[]>([]);
  const [tab, setTab] = useState('Home');
  const [selected, setSelected] = useState<Commuter>(commuters[0]);
  const [sent, setSent] = useState<string[]>([]);
  const [accepted, setAccepted] = useState(false);
  const [published, setPublished] = useState(false);
  const [messages, setMessages] = useState([
    'Hi, I usually leave around 8:25 AM. Is that okay?',
    'Yes, that works for me.',
  ]);
  useEffect(() => {
    const timer = setTimeout(
      () => setScreen(s => (s === 'splash' ? 'onboarding' : s)),
      1300,
    );
    return () => clearTimeout(timer);
  }, []);
  const navigate = (next: ScreenName) => {
    setHistory(current => [...current, screen]);
    setScreen(next);
  };
  const back = () =>
    setHistory(current => {
      if (current.length) {
        setScreen(current[current.length - 1]);
        return current.slice(0, -1);
      }
      setScreen('home');
      return current;
    });
  const request = () => {
    setSent(current =>
      current.includes(selected.id) ? current : [...current, selected.id],
    );
    Alert.alert('Request Sent ✓', 'Your ride request is pending.');
    setTab('Rides');
    setHistory([]);
    setScreen('rides');
  };
  const tabs = ['Home', 'Find', 'Rides', 'Messages', 'Profile'];
  const tabContent = () => {
    if (tab === 'Home')
      return <HomeScreen onNavigate={navigate} onBack={back} />;
    if (tab === 'Find')
      return <FindRideScreen onNavigate={navigate} onBack={back} />;
    if (tab === 'Rides')
      return (
        <RidesScreen
          onNavigate={navigate}
          onBack={back}
          requested={sent.length > 0}
        />
      );
    if (tab === 'Messages')
      return <MessagesScreen onNavigate={navigate} onBack={back} />;
    return <ProfileScreen onNavigate={navigate} onBack={back} />;
  };
  const screenContent = () => {
    const shared = { onNavigate: navigate, onBack: back };
    if (screen === 'splash')
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: theme.colors.mint,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 34,
              fontWeight: '800',
              color: theme.colors.dark,
            }}
          >
            Daily Drive
          </Text>
          <Text style={{ color: theme.colors.muted, marginTop: 8 }}>
            Same Route. Shared Ride.
          </Text>
        </View>
      );
    if (screen === 'onboarding') return <OnboardingScreen {...shared} />;
    if (screen === 'login' || screen === 'signup')
      return (
        <AuthScreen
          {...shared}
          mode={screen}
          onNavigate={next => navigate(next)}
          onComplete={() => {
            setHistory([]);
            setTab('Home');
            setScreen('home');
          }}
        />
      );
    if (screen === 'home') return tabContent();
    if (screen === 'find') return <FindRideScreen {...shared} />;
    if (screen === 'matches')
      return (
        <MatchesScreen
          {...shared}
          commuters={commuters}
          selected={selected}
          onSelect={setSelected}
          sentIds={sent}
          onRequest={() => navigate('confirm')}
          published={published}
        />
      );
    if (screen === 'offer')
      return (
        <OfferRideScreen
          {...shared}
          onPublish={() => {
            setPublished(true);
            navigate('matches');
          }}
          published={published}
        />
      );
    if (screen === 'detail')
      return (
        <MatchDetailScreen
          {...shared}
          onNavigate={() => navigate('chat')}
          person={selected}
          requested={sent.includes(selected.id)}
          onRequest={() => navigate('confirm')}
        />
      );
    if (screen === 'confirm')
      return (
        <MatchDetailScreen
          {...shared}
          onNavigate={() => navigate('chat')}
          person={selected}
          requested={sent.includes(selected.id)}
          onRequest={request}
          confirmMode
        />
      );
    if (screen === 'requests')
      return (
        <RequestsScreen
          {...shared}
          accepted={accepted}
          onAccept={() => {
            setAccepted(true);
            Alert.alert('Request accepted', 'Ali is confirmed on your route.');
          }}
        />
      );
    if (screen === 'rides')
      return <RidesScreen {...shared} requested={sent.length > 0} />;
    if (screen === 'messages') return <MessagesScreen {...shared} />;
    if (screen === 'chat')
      return (
        <ChatScreen
          {...shared}
          messages={messages}
          onSend={message => setMessages(current => [...current, message])}
        />
      );
    if (screen === 'profile') return <ProfileScreen {...shared} />;
    if (screen === 'safety') return <SafetyScreen {...shared} />;
    if (screen === 'fuel') return <FuelCalculatorScreen {...shared} />;
    return <NotificationsScreen {...shared} />;
  };
  const main =
    screen === 'home' ||
    (screen === 'find' && tab === 'Find') ||
    (screen === 'rides' && tab === 'Rides') ||
    (screen === 'messages' && tab === 'Messages') ||
    (screen === 'profile' && tab === 'Profile');
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.paper }}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          height: screen === 'splash' ? 0 : 56,
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 21,
              fontWeight: '800',
              color: theme.colors.dark,
            }}
          >
            Daily Drive
          </Text>
          <Text style={{ fontSize: 10, color: theme.colors.muted }}>
            Same Route. Shared Ride.
          </Text>
        </View>
        {screen !== 'splash' && (
          <TouchableOpacity onPress={() => navigate('notifications')}>
            <Text style={{ fontSize: 21, color: theme.colors.primary }}>♢</Text>
          </TouchableOpacity>
        )}
      </View>
      {screen === 'home' ? (
        <HomeScreen onNavigate={navigate} onBack={back} />
      ) : (
        screenContent()
      )}
      {main && (
        <View
          style={{
            height: 66,
            backgroundColor: theme.colors.white,
            borderTopWidth: 1,
            borderColor: theme.colors.line,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          {tabs.map((item, i) => (
            <TouchableOpacity
              key={item}
              onPress={() => {
                setTab(item);
                setScreen(item.toLowerCase() as ScreenName);
              }}
              style={{ alignItems: 'center', flex: 1 }}
            >
              <Text
                style={{
                  fontSize: 19,
                  color: tab === item ? theme.colors.primary : '#9AA7A3',
                }}
              >
                {['⌂', '⌕', '▣', '▤', '◉'][i]}
              </Text>
              <Text
                style={{
                  fontSize: 9,
                  color: tab === item ? theme.colors.primary : '#9AA7A3',
                  marginTop: 3,
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
