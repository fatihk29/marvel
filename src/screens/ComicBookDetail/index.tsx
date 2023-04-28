import React, {FC, useEffect, useCallback} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

// project imports
import store from '../../store';

const ComicBookDetail: FC = () => {
  const getData = useCallback(() => {
    // store.dispatch(productActions.getCharaterListAT());
  }, []);

  useEffect(() => {}, [getData]);

  return (
    <View>
      <Text>ComicBookDetail</Text>
    </View>
  );
};

export default ComicBookDetail;
