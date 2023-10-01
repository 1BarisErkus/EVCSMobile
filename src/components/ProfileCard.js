import React from 'react';
import { View, Image } from 'react-native';
import { Box, Text, HStack, VStack, Spacer } from 'native-base';

const ProfileCard = () => {
  const profileData = {
    name: 'Barış ERKUŞ',
    email: 'baris@gmail.com',
    phone: '+90 535 469 ** **',
    profileImage: '../assets/avatar.jpeg',
  };

  return (
    <Box bg="transparent" p="4" mx="2" mt={10} alignItems={'center'} >
      <HStack alignItems="center">
        <Image
          source={require("../assets/avatar.jpeg")}
          style={{ width: 80, height: 80, borderRadius: 40, marginRight: 30 }}
        />
        <VStack alignItems="flex-start">
          <Text fontWeight="bold" fontSize="lg" color={'gray.700'}>
            {profileData.name}
          </Text>
          <Text color="gray.500" fontSize="sm">
            {profileData.email}
          </Text>
          <Text color="gray.500" fontSize="sm">
            {profileData.phone}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default ProfileCard;
