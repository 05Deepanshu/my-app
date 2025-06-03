import { DownlaodPicture } from '@/components/BottomSheet';
import { Button } from '@react-navigation/elements';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Account() {
    const [pictureOpen, setPictureOpen] = useState(false);

    return (
        <SafeAreaView style ={{ flex: 1 }}> 
        <View style={{ flex:1}} >    
            <Text>Accounts page</Text>
            <Button onPress={() => {
                setPictureOpen(true);
            }}>Open Bottom Sheet</Button>
            {pictureOpen && (<DownlaodPicture onClose={() => setPictureOpen(false)}/>)}
        </View>    
        </SafeAreaView>
    );
}