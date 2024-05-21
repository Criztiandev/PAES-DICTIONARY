import { Icon } from '@roninoss/icons';
import DictionaryEntryDataset from 'data/dataset.json';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import HeroCard from '~/components/HeroCard';
import IconButton from '~/components/IconButton';
import InputField from '~/components/InputField';

interface DictionaryEntry {
  id: number;
  title: string;
  meaning: string;
}

const RootScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataset, setDataset] = useState<DictionaryEntry[]>([]);
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (isLoading) {
      setDataset(DictionaryEntryDataset as DictionaryEntry[]);
      setIsLoading(false);
    }
  }, [isLoading]);

  useEffect(() => {
    if (search.length <= 0) {
      setSearch('');
      setResult([]);
    }
  }, [search]);

  const handleSearch = (term: string) => {
    setSearch(term);
  };

  const handleResult = (term: string) => {
    const sanitizedTerm = term.trim().toLocaleLowerCase();
    const filteredResults = dataset.filter(
      (item) =>
        item.title.toLowerCase().includes(sanitizedTerm) || item.id.toString() === sanitizedTerm
    );

    if (filteredResults.length <= 0) {
      Toast.show({
        type: 'error',
        text1: 'Word doest exist, Plese try again later',
      });

      return;
    }

    setResult(filteredResults as any);
  };

  const handleReset = () => {
    setResult([]);
    setSearch('');
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgb(16, 172, 132',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('assets/logo.png')}
          contentFit="cover"
          transition={1000}
          style={{ backgroundColor: 'white', borderRadius: 100, width: 200, height: 200 }}
        />
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <>
      <SafeAreaView className="flex-1 bg-[white]" style={{ backgroundColor: 'rgb(16, 172, 132)' }}>
        <View className="h-full items-center justify-center p-2 py-4">
          <View className="items-center justify-center">
            {result.length > 0 ? (
              <View style={{ height: 300 }}>
                <FlatList
                  horizontal
                  data={result}
                  ItemSeparatorComponent={() => <View style={{ margin: 8 }} />}
                  renderItem={({ item }) => (
                    <HeroCard title={item.title} description={item.meaning} />
                  )}
                  keyExtractor={(key: any) => key?.id as any}
                />
              </View>
            ) : (
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text className="mb-4 text-[32px] font-bold text-white">PAES DICTIONARY</Text>
                <Image
                  source={require('assets/logo.png')}
                  contentFit="cover"
                  transition={1000}
                  style={{ backgroundColor: 'white', borderRadius: 100, width: 200, height: 200 }}
                />
              </View>
            )}

            <View className="w-[350px] items-center justify-center space-y-4 px-4 py-4">
              <InputField value={search} onChange={handleSearch} />

              <View className="my-4 flex-row gap-4">
                <IconButton
                  onPress={() => handleResult(search)}
                  icon={<Icon name="magnify" color="black" />}
                />

                <IconButton onPress={handleReset} icon={<Icon name="restart" color="black" />} />
                <IconButton
                  onPress={() => router.push('/about')}
                  icon={<Icon name="information" color="black" />}
                />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default RootScreen;
