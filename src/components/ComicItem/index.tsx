import React, {FC} from 'react';
import {Box, Heading, AspectRatio, Image, Text, HStack, Stack, Pressable} from 'native-base';
import {useNavigation} from '@react-navigation/native';

// project imports
import {dateFormatter} from '../../helper/time';
import {APP_ROUTER} from '../../navigation/app-router';

interface ComicItemProps {
  item: any;
}

const ComicItem: FC<ComicItemProps> = ({item}) => {
  const navigation = useNavigation();
  // console.log('item12 :>> ', item.id);
  return (
    <Pressable
      alignItems="center"
      pt={5}
      onPress={() => {
        navigation.navigate(APP_ROUTER.SCREEN.comicDetail.path, {id: item.id});
      }}>
      <Box
        maxW="90%"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: `${item?.thumbnail?.path}.${item?.thumbnail?.extension}`,
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {item.title}
            </Heading>
          </Stack>
          <Text fontWeight="400" noOfLines={2}>
            {item.description ? item.description : 'No Description'}
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
                fontWeight="400">
                {dateFormatter(item.modified)}
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Pressable>
  );
};

export default ComicItem;
