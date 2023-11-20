import * as React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={{
            width: 50,
            height: 50,
          }}
          source={{
            uri: 'data:image/png;base64,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',
          }}
        />
        <View>
          <Icon name="delete" size={32} color="red" />
        </View>
      </View>
      <Text>Woww</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
});

// https://aiary.net/share/토큰
// s3주소 + cloud + 제목 + 내용; -> 토큰화
// 토큰 -> decode -> 내용물을 일기 쫙
