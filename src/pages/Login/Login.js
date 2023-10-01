import { Box, FormControl, Stack, Input, Button } from 'native-base'
import { ImageBackground } from 'react-native'
import React from 'react'
import styles from './Login.styles'

const Login = ({ navigation }) => {

    const loginPress = () => {
        navigation.navigate('HomeScreen')
    }

    const registerPress = () => {
        navigation.navigate('RegisterScreen')
    }

    const forgotPress = () => {
        navigation.navigate('ForgotPasswordScreen')
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
                                    <Input type="text" placeholder="baris@gmail.com" color='white' fontSize={16} />
                                </Stack>

                                <Stack mx="1">
                                    <FormControl.Label _text={{ color: "white" }}>Şifre</FormControl.Label>
                                    <Input type="password" placeholder="******" color='white' fontSize={18} />
                                </Stack>
                            </FormControl>
                            <Box style={styles.buttons}>
                                <Button onPress={loginPress} colorScheme="indigo" size='md'>Giriş Yap</Button>
                                <Button onPress={registerPress} colorScheme="indigo" size='md'>Kayıt Ol</Button>
                                <Button size="md" variant="link" onPress={forgotPress} _text={{ color: 'orange.400', fontSize: 16, fontWeight: 'bold' }} >
                                    Şifremi Unuttum
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </ImageBackground>
    )
}

export default Login