// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import UserDetail from './../components/UserDetail/UserDetail';

const user = {
  avatar: 'https://i.pinimg.com/564x/4b/22/57/4b22571e202097c0a14a53a686dc96b2.jpg',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  role: 'teacher', // or 'Student'
};

const UserDetailPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserDetail user={user} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '30vh',
    justifyContent: 'center',
  },
});

export default UserDetailPage;
