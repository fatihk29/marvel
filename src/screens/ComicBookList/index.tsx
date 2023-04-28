import React, {FC, useEffect, useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native';
import {Icon, Input, FlatList, VStack, Button} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// project imports
import {productActions, productsSelectors} from '../../store/slices/product';
import ComicBookItem from '../../components/ComicBookItem';
import store from '../../store';
import style from './style';

const ComicBookList: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const getData = useCallback(() => {
    store.dispatch(productActions.getComicListAT());
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const data = useSelector(productsSelectors.comicList);
  // console.log('data19 :>> ', data);

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
        placeholder="Comic"
      />
      <FlatList
        data={data?.data}
        keyExtractor={(item: any) => item.id}
        renderItem={({item}) => <ComicBookItem item={item} />}
        ListFooterComponent={() => <VStack mb="20" />}
      />
    </SafeAreaView>
  );
};

export default ComicBookList;
