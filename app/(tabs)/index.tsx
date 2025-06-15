// https://ideogram.ai/assets/progressive-image/balanced/response/1yw9LYbkQR6v--TUgayfFw
// https://ideogram.ai/assets/progressive-image/balanced/response/V90jOxp4QMib790iVjlB6Q

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useWallpapers } from '@/hooks/useWallpapers';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Explore() {
    const wallpapers = useWallpapers();
    return <SafeAreaView style={{flex: 1}}> 
        <ParallaxScrollView headerBackgroundColor={{dark: "black", light: "white"}} 
        headerImage={<Image style={{flex:1}} source={{uri: wallpapers[0]?.image??""}}/>}>
            
        </ParallaxScrollView>
    </SafeAreaView>;
}