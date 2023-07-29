import { Box, FormControl, Stack, Input, Button } from 'native-base'
import React from 'react'
import styles from './ChangePassword.styles'
import { LinearGradient } from 'expo-linear-gradient'

const ChangePassword = () => {

    const handlePress = () => {

    }

    return (
        <LinearGradient
            colors={['orange', '#fff']}
            start={[0, 0]}
            end={[1, 1]}
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            }}
        >
            <Box style={styles.container}>
                <Box style={styles.mainBox}>
                    <Box style={styles.formControlBox}>
                        <FormControl isRequired>
                            <Stack mx="1">
                                <FormControl.Label _text={{ color: "black" }}>Eski Şifre</FormControl.Label>
                                <Input type="password" placeholder="******" color='black' fontSize={18} />
                            </Stack>

                            <Stack mx="1">
                                <FormControl.Label _text={{ color: "black" }}>Yeni Şifre</FormControl.Label>
                                <Input type="password" placeholder="******" color='black' fontSize={18} />
                            </Stack>

                            <Stack mx="1">
                                <FormControl.Label _text={{ color: "black" }}>Yeni Şifre Tekrar</FormControl.Label>
                                <Input type="password" placeholder="******" color='black' fontSize={18} />
                            </Stack>
                        </FormControl>
                        <Box style={styles.buttons}>
                            <Button onPress={handlePress} colorScheme="indigo" size='md'>Kaydet</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </LinearGradient>
    )
}

export default ChangePassword