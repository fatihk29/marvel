import React, {FC, useEffect, useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native';
import {Icon, Input, FlatList, VStack, Button} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// project imports
import {productActions, productsSelectors} from '../../store/slices/product';
import CharacterItem from '../../components/CharacterItem';
import store from '../../store';
import style from './style';

const CharacterList: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const getData = useCallback(() => {
    store.dispatch(productActions.getCharaterListAT());
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const data = useSelector(productsSelectors.charaterList);

  return (
    <SafeAreaView style={style.container}>
      <Input
        w={{
          base: '96%',
          md: '80%',
        }}
        m={1}
        p={2}
        InputLeftElement={
          <Icon as={<MaterialIcons name="search" />} size={5} ml="2" color="muted.400" />
        }
        InputRightElement={
          <Button
            size="xs"
            rounded="none"
            w="1/6"
            h="full"
            onPress={() => {
              store.dispatch(productActions.getCharaterListAT());
            }}>
            Search
          </Button>
        }
        onChangeText={setSearchValue}
        value={searchValue}
        placeholder="Character"
      />
      <FlatList
        data={data?.data}
        keyExtractor={(item: any) => item.id}
        renderItem={({item}) => <CharacterItem item={item} />}
        ListFooterComponent={() => <VStack mb="20" />}
      />
    </SafeAreaView>
  );
};

export default CharacterList;
