import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

const teachers = [
  { id: 1, name: "Teacher 1", age: 30, address: "123 Main St" },
  { id: 2, name: "Teacher 2", age: 35, address: "456 Elm St" },
  { id: 3, name: "Teacher 3", age: 28, address: "789 Oak St" },
  { id: 4, name: "Teacher 4", age: 28, address: "789 Oak St1" },

  // Thêm dữ liệu giáo viên ở đây
];

const HomeScreen = () => {
  const handleViewDetail = (teacher) => {
    console.log(`View detail for ${teacher.name}`);
  };
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/teacher");
      setData(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.content_wrap}>
          <View>
            <Text style={styles.title}>Hi, JOHN</Text>
            <Text style={styles.subTitle}>Let's start learning</Text>
          </View>
          <View style={styles.search}>
            <Icon name="bell" size={24} color="black" style={styles.icon} />
            <TextInput placeholder="Search" style={styles.searchInput} />
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <FlatList
          data={teachers}
          keyExtractor={(teacher) => teacher.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.teacherItem}>
              {data.map((teacher) => {
                console.log(teacher);
                return (
                  <View>
                    <Text style={styles.teacherName}>
                      {teacher.first_name + " " + teacher.last_name}
                    </Text>
                    <Text style={styles.teacherAge}>Email: {teacher.mail}</Text>
                    <Text style={styles.teacherAddress}>
                      Gender: {teacher.gender === "0" ? "Male" : "Female"}
                    </Text>
                    <TouchableOpacity
                      onPress={() => handleViewDetail(item)}
                      style={styles.detailButton}
                    >
                      <Text style={styles.buttonText}>View Detail</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    height: 150,
    backgroundColor: "#7752FE",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  content_wrap: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: "white",
  },
  subTitle: {
    fontSize: 16,
    color: "white",
  },
  search: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 10,
    color: "white",
  },
  searchInput: {
    width: 150,
    height: 30,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingLeft: 10,
    color: "white",
  },
  content: {
    flex: 1,
    padding: 10,
  },
  teacherItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  teacherName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  teacherAge: {
    fontSize: 16,
  },
  teacherAddress: {
    fontSize: 16,
  },
  footer: {
    height: 50,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontSize: 20,
  },
  detailButton: {
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
  },
  filterButton: {
    backgroundColor: "green",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});

export default HomeScreen;
