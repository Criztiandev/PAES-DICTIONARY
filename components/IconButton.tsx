import { FC } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  icon: any;
  onPress: () => void;
}

const IconButton: FC<Props> = ({ icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className="h-[64px] w-[64px] items-center justify-center rounded-full"
        style={{ backgroundColor: '#feca57' }}>
        {icon}
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;
