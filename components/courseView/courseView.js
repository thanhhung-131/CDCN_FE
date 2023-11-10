import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const CourseView = (props) => {
  return (
    <View style={styles.container} onPress={() => alert('Buy Now button pressed')}>
      <Image
        source={require('./OIP.jpg')} // Replace with your course image
        style={styles.courseImage}
      />
      <Text style={styles.courseTitle}>{props.courseTitle} Course</Text>
      <Text style={styles.coursePrice}>{props.coursePrice}$</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  courseImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  courseTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginVertical: 10,
    marginBottom:0,
  },
  coursePrice: {
    paddingTop:0,
    marginTop:0,
    fontSize: 12,
    fontWeight: 'bold',
    marginVertical: 10,
  }
});

export default CourseView;
