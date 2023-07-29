import {
    Box,
    Text,
    Heading,
    FlatList,
    HStack,
    VStack,
    Spacer
} from 'native-base'

const Recipes = () => {
    const data = [{
        id: "1",
        fullName: "AC Soket",
        price: "6,50",
    }, {
        id: "2",
        fullName: "10 kW DC Soket",
        price: "7,70",
    }, {
        id: "3",
        fullName: "20 kW DC Soket",
        price: "8,80",
    }, {
        id: "4",
        fullName: "30 kW DC Soket",
        price: "9,90",
    }, {
        id: "5",
        fullName: "40 kW DC Soket",
        price: "10,10",
    }, {
        id: "6",
        fullName: "50 kW DC Soket",
        price: "11,10",
    }, {
        id: "7",
        fullName: "60 kW DC Soket",
        price: "12,70",
    }];
    
    return <Box style={{marginTop: 50}}>
        <Heading fontSize="xl" p="4" pb="3" mx='auto'>
            Maksopus Tarife Listesi
        </Heading>
        <FlatList style={{ margin: 20 }} data={data} renderItem={({ item }) =>
            <Box borderBottomWidth="1" _dark={{
                borderColor: "muted.50"
            }} borderColor="gray.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
                <HStack space={[2, 3]} justifyContent="space-between">
                    <VStack>
                        <Text fontSize="md" _dark={{
                            color: "warmGray.50"
                        }} color="coolGray.800" bold>
                            {item.fullName}
                        </Text>
                    </VStack>
                    <Spacer />
                    <Text fontSize="md" _dark={{
                        color: "warmGray.50"
                    }} color="coolGray.800" alignSelf="flex-start">
                        {item.price} TL / kWH
                    </Text>
                </HStack>
            </Box>} keyExtractor={item => item.id} />

        <Text style={{opacity: 0.6, textAlign: 'center'}}>* Fiyatlarımıza KDV dahildir.</Text>
    </Box>;
};

export default Recipes