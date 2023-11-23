import React, { useState } from 'react';
import { View, Text, ScrollView,Image, FlatList, TouchableOpacity, StyleSheet, Dimensions  } from 'react-native';

const coursesData = [
  { id: '1', title: 'Course 1' , image: 'https://example.com/course1.jpg', price : '50$'},
  { id: '2', title: 'Course 2' , image: 'https://example.com/course2.jpg', price : '50$'},
  { id: '3', title: 'Course 3' , image: 'https://example.com/course3.jpg', price : '50$'},
  { id: '4', title: 'Course 4' , image: 'https://example.com/course4.jpg', price : '50$'},
  { id: '5', title: 'Course 5' , image: 'https://example.com/course5.jpg', price : '50$'},
  { id: '6', title: 'Course 6' , image: 'https://example.com/course6.jpg', price : '50$'},
  // Add more courses as needed
];

const CoursesList = () => {
  const [showAllCourses, setShowAllCourses] = useState(false);

  const renderCourse = ({ item }) => (
    <View style={styles.courseItem} >
        <Image source={require('./OIP.jpg')} style={styles.courseImage} />
      <Text>{item.title}</Text>
      <Text style={styles.coursePrice}>{item.price}</Text>
    </View>
    );

  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <FlatList
          data={showAllCourses ? coursesData : coursesData.slice(0, 3)}
          renderItem={renderCourse}
          keyExtractor={(item) => item.id}
          horizontal
          style={{ maxWidth: windowWidth-25 }} // Set maxWidth to the device's width

        />
      </ScrollView>

      {showAllCourses ? (
        <TouchableOpacity
          style={styles.showButton}
          onPress={() => setShowAllCourses(false)}>
          <Text>Show Less Courses</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.showButton}
          onPress={() => setShowAllCourses(true)}>
          <Text>Show More Courses</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // maxWidth:'',
    marginTop: 20,
  },
  courseImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 5,
  },
  coursePrice: {
    color: 'green',
    fontWeight: 'bold',
  },
  courseItem: {
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  showButton: {
    margin: 10,
    padding: 10,
    left : 10,
    width:300,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default CoursesList;
