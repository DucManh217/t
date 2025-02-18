import { Text, View, Button } from "react-native";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyD9mMB49gBh8coiRIqgew1JLqPwQA3CoV0",
  authDomain: "gerstrong-d2f75.firebaseapp.com",
  databaseURL: "https://gerstrong-d2f75-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gerstrong-d2f75",
  storageBucket: "gerstrong-d2f75.appspot.com",
  messagingSenderId: "931668237494",
  appId: "1:931668237494:web:8893e899eb425ae2a41a17",
  measurementId: "G-0LM75471RM"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase();
//ghi dữ liệu
function BatDen1(){
  set(ref(db,"R712"), {"Den":1})
};
function TatDen1(){
  set(ref(db,"R712"), {"Den":0})
};
// Đọc dữ liệu
function docdulieu(){
  onValue(ref(db,"R712"), (snapshot) => {
    const data_layduoc= snapshot.val();
    console.log(data_layduoc);
})};
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>  Nguyễn DUC STRONG </Text>
      <Button
        title="BatDen"
        color="#ff0000"
        onPress={BatDen1}
      />
      <Button
        title="TatDen"
        color="#3440eb"
        onPress={TatDen1}
      />
      <Button 
          title="docdulieu "
          color="#ff0000"
          onPress={docdulieu}
      />
    </View>
  );
};