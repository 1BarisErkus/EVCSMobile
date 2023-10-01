import { Box, FormControl, Stack, Input, Button } from 'native-base'
import React from 'react'
import styles from './AccountInfo.styles'
import { LinearGradient } from 'expo-linear-gradient';

const AccountInfo = () => {

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
                            <Stack mx="1" my="1" >
                                <FormControl.Label _text={{ color: "black" }}>Kullanıcı Adı</FormControl.Label>
                                <Input borderColor={'black'} type="text" placeholder="maksopus" color='black' fontSize={16} value='bariserkus' />
                            </Stack>

                            <Stack mx="1" my="1">
                                <FormControl.Label _text={{ color: "black" }}>Şifre</FormControl.Label>
                                <Input borderColor={'black'} type="password" placeholder="******" color='black' fontSize={18} value='******' />
                            </Stack>

                            <Stack mx="1" my="1">
                                <FormControl.Label _text={{ color: "black" }}>Email</FormControl.Label>
                                <Input borderColor={'black'} type="text" placeholder="maksopus@gmail.com" color='black' fontSize={16} value='baris@gmail.com' />
                            </Stack>

                            <Stack mx="1" my="1">
                                <FormControl.Label _text={{ color: "black" }}>Telefon</FormControl.Label>
                                <Input borderColor={'black'} type="text" placeholder="555 555 55 55" color='black' fontSize={16} value='535 469 ** **' />
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

export default AccountInfo