import { Box, FormControl, Stack, Input, Button } from 'native-base'
import { ImageBackground } from 'react-native'
import React from 'react'
import styles from './ForgotPassword.styles'

const ForgotPassword = () => {

    const handlePress = () => {

    }

    return (
        <ImageBackground
            source={require('../../assets/6.jpg')}
            style={styles.imageBackground}
            blurRadius={2}
        >
            <Box style={styles.container}>
                <Box style={styles.mainBox}>
                    <Box style={styles.formControlBox}>
                        <FormControl isRequired>
                            <Stack mx="1">
                                <FormControl.Label _text={{ color: "white" }}>Email</FormControl.Label>
                                <Input type="text" placeholder="maksopus@gmail.com" color='white' fontSize={16} />
                            </Stack>
                        </FormControl>
                        <Box style={styles.buttons}>
                            <Button onPress={handlePress} colorScheme="indigo" size='md'>Şifremi Kurtar</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ImageBackground>
    )
}

export default ForgotPassword