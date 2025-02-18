import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD9mMB49gBh8coiRIqgew1JLqPwQA3CoV0",
  authDomain: "gerstrong-d2f75.firebaseapp.com",
  databaseURL: "https://gerstrong-d2f75-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gerstrong-d2f75",
  storageBucket: "gerstrong-d2f75.appspot.com",
  messagingSenderId: "931668237494",
  appId: "1:931668237494:web:8893e899eb425ae2a41a17",
  measurementId: "G-0LM75471RM",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default function App() {
  const [message, setMessage] = useState('No motion detected');

  useEffect(() => {
    // Lắng nghe dữ liệu từ Firebase Realtime Database
    const motionRef = ref(db, 'motion');
    const unsubscribe = onValue(motionRef, (snapshot) => {
      const data = snapshot.val();
      setMessage(data);
    });

    // Hủy lắng nghe khi component bị unmount
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>motion notification</Text>
      <View style={styles.notificationBox}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00796b',
    textAlign: 'center',
  },
  notificationBox: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
  },
  messageText: {
    fontSize: 18,
    color: '#555',
  },
});