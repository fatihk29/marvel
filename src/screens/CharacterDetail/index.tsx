import React, {FC, useEffect, useCallback} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

// project imports
import {productActions, productsSelectors} from '../../store/slices/product';
import store from '../../store';

const CharacterDetail: FC<any> = ({route}) => {
  const getData = useCallback(() => {}, []);

  useEffect(() => {
    getData();
  }, [getData]);

  console.log('params :>> ', route.params?.id);

  return (
    <View>
      <Text>CharacterDetail</Text>
    </View>
  );
};

export default CharacterDetail;
