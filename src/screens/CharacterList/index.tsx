import React, {FC, useEffect, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {View, Text} from 'react-native';

// project imports
import {productActions, productsSelectors} from '../../store/slices/product';
import store from '../../store';

const CharacterList: FC = () => {
  // const getData = useCallback(() => {
  //   console.log('aaa :>> ');
  //   store.dispatch(productActions.getCharaterListAT());
  // }, []);

  useEffect(() => {
    store.dispatch(productActions.getCharaterListAT());
  }, []);

  const data = useSelector(productsSelectors.charaterList);
  console.log('data2 :>> ', data);

  return (
    <View>
      <Text>CharacterList as</Text>
    </View>
  );
};

export default CharacterList;
