import { Link, Slot } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Layout(){
    return <SafeAreaView>
        <View style={{height: "90%"}}>
            <Slot />
        </View>
        <View style={{ backgroundColor: "red" }}>
            <Link href={"/accounts"}>
                <Text>Take me to accounts page</Text>
            </Link>
        
            <Link href={"/"}>
                <Text>Take me to for you page</Text>        
            </Link>
        
        
            <Link href={"/explore"}>
                <Text>Take me to explore page</Text>
            </Link>
            </View>
            
        
    </SafeAreaView>
}

// Slot is similar to children in NextJs.