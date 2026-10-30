import { Commuter } from '../data/mockData';

export type ScreenName =
  | 'splash'
  | 'onboarding'
  | 'login'
  | 'signup'
  | 'home'
  | 'find'
  | 'matches'
  | 'offer'
  | 'detail'
  | 'confirm'
  | 'requests'
  | 'rides'
  | 'messages'
  | 'chat'
  | 'profile'
  | 'safety'
  | 'fuel'
  | 'notifications';
export type AppScreenProps = {
  onNavigate: (screen: ScreenName) => void;
  onBack: () => void;
};
export type MatchScreenProps = AppScreenProps & {
  commuters: Commuter[];
  selected: Commuter;
  onSelect: (person: Commuter) => void;
  sentIds: string[];
  onRequest: () => void;
  published: boolean;
};
