import React from 'react';
import { Box } from 'native-base';
import ProfileCard from '../../../../components/ProfileCard'
import ProfileButton from '../../../../components/ProfileButton';
import { LinearGradient } from 'expo-linear-gradient';

const Profile = ({navigation}) => {

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
            <Box>
                <ProfileCard />
            </Box>
            <Box mt={30} mx={10} >
                <ProfileButton title="Hesap Bilgilerim" icon="person-outline" onPress={() => navigation.navigate('AccountInfoScreen')} />
                <ProfileButton title="Araçlarım" icon="car-sport-outline" />
                <ProfileButton title="Şarj Geçmişi" icon="bookmark-outline" />
                <ProfileButton title="Kredi Kartlarım" icon="card-outline" />
                <ProfileButton title="Şifre Değiştir" icon="refresh-outline" onPress={() => navigation.navigate('ChangePasswordScreen')} />
                <ProfileButton title="Yardım" icon="help-outline" />
                <ProfileButton title="Oturumu Kapat" icon="exit-outline" onPress={() => navigation.navigate('LoginScreen')} />
            </Box>
        </LinearGradient >
    );
};

export default Profile;
