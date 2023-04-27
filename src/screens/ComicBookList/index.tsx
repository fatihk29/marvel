import React, {FC, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// project imports
import store from '../../store';
import {productActions, productsSelectors} from '../../store/slices/product';

const ComicBookList: FC = () => {
  const dispatch = useDispatch();

  store.dispatch(productActions.getComicListAT());

  const data = useSelector(productsSelectors.comicList);
  console.log('data :>> ', data);

  return (
    <View>
      <Text>ComicBookList</Text>
    </View>
  );
};

export default ComicBookList;
