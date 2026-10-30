import React, { useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { AppScreenProps } from '../navigation/types';
import { Card, Field, Heading, Page, ScreenHeader } from '../components/UI';
export function FuelCalculatorScreen({ onBack }: AppScreenProps) {
  const [distance, setDistance] = useState('24');
  const [average, setAverage] = useState('12');
  const [price, setPrice] = useState('280');
  const [people, setPeople] = useState('2');
  const [days, setDays] = useState('22');
  const result = useMemo(() => {
    const total =
      (Number(distance || 0) / Math.max(1, Number(average || 0))) *
      Number(price || 0) *
      Number(days || 0);
    return {
      total,
      share: total / Math.max(1, Number(people || 0)),
      savings: total - total / Math.max(1, Number(people || 0)),
    };
  }, [distance, average, price, people, days]);
  const money = (value: number) => `PKR ${Math.round(value).toLocaleString()}`;
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Fuel calculator" onBack={onBack} />
      <Page>
        <Heading
          title="Make every commute count."
          subtitle="Estimate a fair share of your existing fuel cost."
        />
        <Field
          label="DISTANCE PER DAY (KM)"
          value={distance}
          onChangeText={setDistance}
        />
        <Field
          label="VEHICLE AVERAGE (KM/L)"
          value={average}
          onChangeText={setAverage}
        />
        <Field
          label="FUEL PRICE (PKR/L)"
          value={price}
          onChangeText={setPrice}
        />
        <Field
          label="NUMBER OF COMMUTERS"
          value={people}
          onChangeText={setPeople}
        />
        <Field
          label="WORKING DAYS / MONTH"
          value={days}
          onChangeText={setDays}
        />
        <Card>
          <Text style={{ fontSize: 10, color: '#71807C', fontWeight: '800' }}>
            MONTHLY FUEL COST
          </Text>
          <Text
            style={{
              fontSize: 27,
              fontWeight: '800',
              color: '#123B35',
              marginVertical: 5,
            }}
          >
            {money(result.total)}
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: '#71807C',
              fontWeight: '800',
              marginTop: 10,
            }}
          >
            YOUR SHARE
          </Text>
          <Text
            style={{
              fontSize: 23,
              fontWeight: '800',
              color: '#167C68',
              marginVertical: 5,
            }}
          >
            {money(result.share)}
          </Text>
          <Text style={{ fontSize: 12, color: '#167C68', marginTop: 9 }}>
            Estimated monthly savings: {money(result.savings)}
          </Text>
        </Card>
      </Page>
    </View>
  );
}
