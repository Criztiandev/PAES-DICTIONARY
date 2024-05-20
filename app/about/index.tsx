import { Image } from 'expo-image';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const AboutScreen = () => {
  return (
    <View style={{ backgroundColor: 'rgb(16, 172, 132)' }} className="flex-1 p-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="mb-10 text-center text-[32px] font-bold uppercase text-white">
          About Us
        </Text>

        <View className="my-4 text-lg text-white">
          <View className="justify-center" style={{ alignItems: 'center', marginBottom: 64 }}>
            <Image
              source={require('assets/profile_1.jpg')}
              contentFit="cover"
              transition={1000}
              style={{
                backgroundColor: 'white',
                borderRadius: 100,
                width: 200,
                height: 200,
                marginBottom: 24,
              }}
            />

            <View style={{ backgroundColor: 'white', padding: 16, borderRadius: 10 }}>
              <Text style={{ fontSize: 18, textAlign: 'center' }}>
                Hi bayaws 👋 Im{' '}
                <Text
                  className="capitalize"
                  style={{
                    backgroundColor: '#f9ca24',
                    color: 'black',
                    paddingHorizontal: 12,
                    borderRadius: 100,
                  }}>
                  {' '}
                  kent john legal
                </Text>{' '}
                a 3rd year college taking a degree of agricultural and biosystems engineering. I am
                from DEBESMSCAT chapter
              </Text>
            </View>
          </View>

          <View className="justify-center" style={{ alignItems: 'center' }}>
            <Image
              source={require('assets/profile_2.jpg')}
              contentFit="cover"
              transition={1000}
              style={{
                backgroundColor: 'white',
                borderRadius: 100,
                width: 200,
                height: 200,
                marginBottom: 24,
              }}
            />

            <View style={{ backgroundColor: 'white', padding: 16, borderRadius: 10 }}>
              <Text style={{ fontSize: 18, textAlign: 'center' }}>
                Hi bayaws 👋 Im{' '}
                <Text
                  className="capitalize"
                  style={{
                    backgroundColor: '#f9ca24',
                    color: 'black',
                    paddingHorizontal: 12,
                    borderRadius: 100,
                  }}>
                  {' '}
                  Reneboy Escala
                </Text>{' '}
                a 3rd year college taking a degree of agricultural and biosystems engineering. I am
                from DEBESMSCAT chapter
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutScreen;
