import { Box, FormControl, Stack, Input, Button, Checkbox } from 'native-base'
import { ImageBackground } from 'react-native'
import React from 'react'
import styles from './Register.styles'

const Register = () => {

    const registerPress = () => {

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
                                <FormControl.Label _text={{ color: "white" }}>Ad Soyad</FormControl.Label>
                                <Input type="text" placeholder="Barış Erkuş" color='white' fontSize={16} />
                            </Stack>

                            <Stack mx="1">
                                <FormControl.Label _text={{ color: "white" }}>Email</FormControl.Label>
                                <Input type="text" placeholder="baris@gmail.com" color='white' fontSize={16} />
                            </Stack>

                            <Stack mx="1">
                                <FormControl.Label _text={{ color: "white" }}>Şifre</FormControl.Label>
                                <Input type="password" placeholder="******" color='white' fontSize={18} />
                            </Stack>

                            <Stack mx="1">
                                <FormControl.Label _text={{ color: "white" }}>Şifre Tekrar</FormControl.Label>
                                <Input type="password" placeholder="******" color='white' fontSize={18} />
                            </Stack>
                        </FormControl>
                        <Box style={styles.buttons}>
                            <Box style={styles.checkBox}>
                                <Checkbox value="one" size="sm" _text={{ color: 'white', fontSize: 14 }} colorScheme="orange" >
                                    Robot olmadığını doğrula!
                                </Checkbox>
                            </Box>
                            <Button onPress={registerPress} colorScheme="indigo" size='md'>Kayıt Ol</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ImageBackground>
    )
}

export default Register