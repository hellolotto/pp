// src/screens/FlexionDetailScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Start: undefined;
  Main: undefined;
  List: undefined;
  FlexionDetail: undefined;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'FlexionDetail'>;
};

export default function FlexionDetailScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      {/* 🔙 뒤로가기 */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image
          source={require('../../assets/images/left.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Shoulder Flexion</Text>
      <Text style={styles.subtitle}>(어깨관절 굽힘)</Text>

      {/* 🎥 영상 */}
      <Video
        source={require('/Users/iyujin/pp/assets/videos/flexion.mp4')}
        style={styles.video}
        resizeMode="contain"
        controls
      />

      {/* 📋 설명 */}
      <Text style={styles.instructionTitle}>Instructions(요령)</Text>
      <View style={styles.instructions}>
        <Text style={styles.bullet}>✅ 거울 앞에 앉으시고 카메라를 맞춰주세요</Text>
        <Text style={styles.bullet}>✅ 동작 내내 등을 똑바로 유지하시고 천천히 올려주세요</Text>
        <Text style={styles.bullet}>✅ 팔을 올릴 수 있는 최대 높이까지 들어 올리세요</Text>
      </View>

      {/* 🔵 Start 버튼 */}
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 60, alignItems: 'center' },
  backButton: { position: 'absolute', top: 60, left: 20, zIndex: 2 },
  backIcon: { width: 30, height: 30 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1a1a1a', marginTop: 10 },
  subtitle: { fontSize: 16, color: '#555' },
  video: { width: '90%', height: 200, marginVertical: 20 },
  instructionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  instructions: { paddingHorizontal: 30, marginTop: 10 },
  bullet: { fontSize: 14, marginBottom: 6, color: '#333' },
  startButton: {
    marginTop: 20,
    backgroundColor: '#72ACFF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  startButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});