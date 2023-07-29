import {
  Box,
  Text,
  Heading,
  FlatList,
  HStack,
  VStack,
  Spacer
} from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';

const Recipes = ({ navigation }) => {

  const data = [{
    id: "1",
    fullName: "Çukurova Üniversitesi",
    price: "0,5",
    isSelect: false
  }, {
    id: "2",
    fullName: "Balcalı Hastanesi",
    price: "2",
    isSelect: true
  }, {
    id: "3",
    fullName: "Migros Üniversite",
    price: "3",
    isSelect: false
  }, {
    id: "4",
    fullName: "KYK Erkek Yurdu",
    price: "5",
    isSelect: false
  }, {
    id: "5",
    fullName: "Şehir Hastanesi",
    price: "8",
    isSelect: false
  }, {
    id: "6",
    fullName: "ÇEAŞ Anadolu Lisesi",
    price: "12",
    isSelect: false
  }, {
    id: "7",
    fullName: "Duygu Kafe",
    price: "14",
    isSelect: false
  }, {
    id: "8",
    fullName: "Yeni Baraj Lisesi",
    price: "15",
    isSelect: false
  }, {
    id: "9",
    fullName: "Optimum AVM",
    price: "17",
    isSelect: true
  }];

  const [recipeData, setRecipeData] = useState(data);

  const heartPress = (itemId) => {
    // Yeni bir dizi oluşturarak mevcut verileri kopyalayın
    const newData = recipeData.map((item) =>
      item.id === itemId ? { ...item, isSelect: !item.isSelect } : item
    );
    // State'i güncelleyin
    setRecipeData(newData);
  };

  const arrowPress = (itemId) => {
    if (itemId == 1) {
      navigation.navigate("Map", { latitude: 37.04155255419312, longitude: 35.361228364710904 })
    }
    if (itemId == 2) {
      navigation.navigate("Map", { latitude: 37.05572529095496, longitude: 35.362674754645695 })
    }
  }

  return (
    <Box>
      <Heading fontSize="xl" p="4" pb="3" mx='auto'>
        En Yakın İstasyonlar
      </Heading>
      <FlatList data={recipeData} renderItem={({ item, index }) =>
        <Box
          background={index % 2 == 0 ? 'light.200' : 'gray.500'}
          borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="gray.300" pl={["4", "4"]} pr={["4", "5"]} py="3">
          <HStack space={[2, 3]} justifyContent="space-between">
            <VStack>
              <Text
                style={{ color: index % 2 == 0 ? 'black' : 'white' }}
                fontSize="md" _dark={{
                  color: "warmGray.50"
                }} color="coolGray.800" bold>
                {item.fullName}
              </Text>
            </VStack>
            <Spacer />
            <Text
              style={{ color: index % 2 == 0 ? 'black' : 'white' }}
              fontSize="md" _dark={{
                color: "warmGray.50"
              }} color="coolGray.800" alignSelf="flex-start">
              {item.price} KM
            </Text>
            <TouchableOpacity onPress={() => arrowPress(item.id)}>
              <Ionicons name='arrow-redo' size={24} color='#ffcc40' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => heartPress(item.id)}>
              <Ionicons name={item.isSelect ? 'heart' : 'heart-outline'} size={24} color='red' />
            </TouchableOpacity>
          </HStack>
        </Box>} keyExtractor={item => item.id} />
    </Box>)
};

export default Recipes