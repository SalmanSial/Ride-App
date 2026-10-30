import React, { PropsWithChildren } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { theme } from '../theme';

export function Page({
  children,
  scroll = true,
}: PropsWithChildren<{ scroll?: boolean }>) {
  return scroll ? (
    <ScrollView
      style={s.page}
      contentContainerStyle={s.content}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  ) : (
    <View style={[s.page, s.content]}>{children}</View>
  );
}
export function Heading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <View style={s.heading}>
      <Text style={s.title}>{title}</Text>
      {subtitle ? <Text style={s.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}
export function Card({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: object;
}) {
  return <View style={[s.card, style]}>{children}</View>;
}
export function Button({
  title,
  onPress,
  secondary = false,
}: {
  title: string;
  onPress: () => void;
  secondary?: boolean;
}) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={[s.button, secondary && s.buttonSecondary]}
    >
      <Text style={[s.buttonText, secondary && s.buttonTextSecondary]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
export function Field({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType,
}: {
  label: string;
  value: string;
  onChangeText: (v: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'numeric' | 'phone-pad' | 'email-address';
}) {
  return (
    <View style={s.field}>
      <Text style={s.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9BA9A5"
        style={s.input}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
}
export function Avatar({
  initials,
  color,
  size = 52,
}: {
  initials: string;
  color?: string;
  size?: number;
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color || theme.colors.mint,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          fontSize: size * 0.31,
          fontWeight: '800',
          color: theme.colors.dark,
        }}
      >
        {initials}
      </Text>
    </View>
  );
}
export function RouteMap({
  from = 'Johar Town',
  to = 'Gulberg',
}: {
  from?: string;
  to?: string;
}) {
  return (
    <View style={s.map}>
      <View style={s.mapDot} />
      <View style={s.mapLine} />
      <View style={[s.mapDot, s.mapEnd]} />
      <View style={s.mapNames}>
        <Text style={s.mapLabel}>{from}</Text>
        <Text style={s.mapLabel}>{to}</Text>
      </View>
      <Text style={s.mapCaption}>LAHORE · DAILY ROUTE</Text>
    </View>
  );
}
export function ScreenHeader({
  title,
  onBack,
}: {
  title: string;
  onBack: () => void;
}) {
  return (
    <View style={s.header}>
      <TouchableOpacity onPress={onBack} style={s.back}>
        <Text style={s.backText}>‹</Text>
      </TouchableOpacity>
      <Text style={s.headerTitle}>{title}</Text>
      <Text style={s.brandMark}>DD</Text>
    </View>
  );
}
const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: theme.colors.paper },
  content: { padding: theme.spacing.page, paddingBottom: 30 },
  heading: { marginBottom: 18 },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: theme.colors.ink,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: theme.colors.muted,
    marginTop: 6,
  },
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.card,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#EDF1EF',
  },
  button: {
    minHeight: 48,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.control,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginVertical: 5,
  },
  buttonText: { fontSize: 14, fontWeight: '700', color: theme.colors.white },
  buttonSecondary: { backgroundColor: theme.colors.mint },
  buttonTextSecondary: { color: theme.colors.primary },
  field: { marginBottom: 13 },
  label: {
    fontSize: 10,
    color: theme.colors.muted,
    letterSpacing: 1,
    fontWeight: '800',
    marginBottom: 7,
  },
  input: {
    height: 50,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.line,
    borderRadius: 13,
    paddingHorizontal: 14,
    color: theme.colors.ink,
    fontSize: 14,
  },
  map: {
    height: 112,
    borderRadius: 15,
    backgroundColor: '#EEF5F2',
    marginVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    overflow: 'hidden',
  },
  mapDot: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: theme.colors.primary,
    zIndex: 1,
  },
  mapEnd: { backgroundColor: '#EAAE52' },
  mapLine: { width: 76, height: 3, backgroundColor: '#9ACDBD' },
  mapNames: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'space-between',
    height: 42,
  },
  mapLabel: { fontSize: 11, color: theme.colors.dark, fontWeight: '700' },
  mapCaption: {
    position: 'absolute',
    bottom: 9,
    right: 12,
    fontSize: 8,
    color: '#91A59F',
    letterSpacing: 1,
  },
  header: {
    height: 58,
    backgroundColor: theme.colors.paper,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  backText: { fontSize: 28, color: theme.colors.dark, marginTop: -5 },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.ink,
    flex: 1,
  },
  brandMark: {
    color: theme.colors.primary,
    fontWeight: '800',
    backgroundColor: theme.colors.mint,
    padding: 8,
    borderRadius: 12,
  },
});
