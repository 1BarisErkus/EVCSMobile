import React from 'react'
import { Box, Button, Text } from 'native-base'
import { Ionicons } from '@expo/vector-icons'

const ProfileButton = ({ title, icon, onPress }) => {
    return <Button size={'lg'} variant="outline" borderColor={'gray.500'} borderRadius={15} mb={4} justifyContent={'flex-start'} onPress={onPress}>
        <Box flexDirection={'row'} alignItems={'center'}>
            <Ionicons name={icon} size={22} style={{ marginRight: 30 }} />
            <Text fontWeight={'bold'}>{title}</Text>
        </Box>
    </Button>
}

export default ProfileButton