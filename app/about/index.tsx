import { View, Text } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={{ backgroundColor: 'rgb(16, 172, 132)' }} className="flex-1 p-4">
      <Text className="text-[32px] font-bold uppercase text-white">About Us</Text>

      <View className="my-4 text-lg text-white">
        <Text className="text-lg font-semibold text-white">Description</Text>
      </View>
    </View>
  );
};

export default AboutScreen;
