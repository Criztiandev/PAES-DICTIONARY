import { Image } from 'expo-image';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Text } from './nativewindui/Text';

interface Props {
  title: string;
  description: string;
}

const HeroCard = ({ title, description }: Props) => {
  return (
    <View
      className="w-full  "
      style={{
        width: 300,
        height: 300,
        padding: 16,
        borderRadius: 5,
        backgroundColor: 'white',
        elevation: 12,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ScrollView>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('assets/logo.png')}
            contentFit="cover"
            transition={1000}
            style={{
              backgroundColor: 'white',
              borderRadius: 100,
              width: 94,
              height: 94,
              marginBottom: 24,
            }}
          />
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text className="text-[32px] font-bold  capitalize text-black">{title}</Text>
          <View className="my-4">
            <Text className="text-black" style={{ textAlign: 'center' }}>
              {description}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HeroCard;
