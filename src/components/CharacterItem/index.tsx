import React, {FC} from 'react';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  HStack,
  Stack,
  Pressable,
  Button,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

// project imports
import {dateFormatter} from '../../helper/time';
import {APP_ROUTER} from '../../navigation/app-router';

interface CharacterItemProps {
  item: any;
}

const CharacterItem: FC<CharacterItemProps> = ({item}) => {
  // console.log('item14 :>> ', item);
  const navigation = useNavigation();
  return (
    <Pressable
      alignItems="center"
      pt={5}
      onPress={() => {
        navigation.navigate(APP_ROUTER.SCREEN.characterDetail.path, {id: item.id});
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
              {item.name}
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
            <Button
              w="20%"
              p={1}
              bg="cyan.200"
              _pressed={{backgroundColor: 'cyan.300'}}
              variant="subtle"
              onPress={() => {
                navigation.navigate(APP_ROUTER.SCREEN.characterDetail.path, {id: item.id});
              }}
              height="10">
              <Text fontSize="16">Detail</Text>
            </Button>
          </HStack>
        </Stack>
      </Box>
    </Pressable>
  );
};
export default CharacterItem;
