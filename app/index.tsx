import { Link } from 'expo-router';
import { Text, View, } from 'react-native';


export default function HomeScreen() {
    return <View>
        <Text>Home Screen</Text>
        <Link href={"/accounts"}>
            <Text>Take me to accounts page</Text>
        </Link>
        
        
        <Link href={"/foryou"}>
            <Text>Take me to for you page</Text>        
        </Link>
        
        
        <Link href={"/explore"}>
            <Text>Take me to explore page</Text>
        </Link>

        </View>;
}