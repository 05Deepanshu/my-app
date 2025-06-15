import { Wallpaper } from "@/hooks/useWallpapers";
import { Image, StyleSheet, View } from "react-native";

export default function ImageCard({wallpaper}: {
    wallpaper: Wallpaper
}) {

    return <View>
        <Image source={{uri: wallpaper.image}} style={styles.image} />    
    </View>
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: 300,

    }
})    
