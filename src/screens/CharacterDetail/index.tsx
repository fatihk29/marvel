import React, {FC, useEffect, useCallback, useState} from 'react';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  FlatList,
  Stack,
  VStack,
  View,
  ScrollView,
} from 'native-base';
import {useSelector} from 'react-redux';

// project imports
import {productActions, productsSelectors} from '../../store/slices/product';
import store from '../../store';
import {dateFormatter} from '../../helper/time';

const CharacterDetail: FC<any> = ({route}) => {
  const getData = useCallback(() => {
    store.dispatch(productActions.getCharaterByIdAT(route.params?.id));
  }, [route.params?.id]);

  useEffect(() => {
    getData();
  }, [getData]);

  const data = useSelector(productsSelectors.characterById);
  // console.log('data :>> ', data.data?.[0]);
  const [sdata, setSData] = useState<any>();

  useEffect(() => {
    setSData(data.data?.[0]);
  }, [data]);

  // console.log('sdata :>> ', sdata?.series?.items);

  return (
    <ScrollView>
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          {/* <Image
            source={{
              uri: `${sdata?.collectionURI?.path}.${sdata?.thumbnail?.extension}`,
            }}
            alt="image"
          /> */}
        </AspectRatio>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {sdata?.name}
          </Heading>
        </Stack>
        <Text fontWeight="800">Comics</Text>
        <FlatList
          data={sdata?.comics?.items}
          keyExtractor={(item: any) => item.id}
          renderItem={({item}) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
        />
        <Text fontWeight="800">Series</Text>
        <FlatList
          data={sdata?.series?.items}
          keyExtractor={(item: any) => item.id}
          renderItem={({item}) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
          ListFooterComponent={() => <VStack mb="20" />}
        />
      </Stack>
      <VStack mb="20" />
    </ScrollView>
  );
};

export default CharacterDetail;
