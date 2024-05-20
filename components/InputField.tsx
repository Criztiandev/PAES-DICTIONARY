import { View, TextInput } from 'react-native';

const InputField = ({ value, onChange }: any) => {
  return (
    <View className="h-[64px] w-full rounded-full  px-8" style={{ backgroundColor: '#feca57' }}>
      <TextInput
        className="h-full w-full text-[18px] "
        placeholderClassName="text-[32px]"
        placeholder="Search here"
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

export default InputField;
