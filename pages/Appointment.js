import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import DateTimePicker from 'react-native-ui-datepicker'
import dayjs from 'dayjs'

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [teacherName, setTeacherName] = useState('')
  const [courseName, setCourseName] = useState('')

  const handleDateChange = (event, date) => {
    if (date) {
      setSelectedDate(dayjs(date))
    }
  }

  const handleBookAppointment = () => {
    // Thực hiện xử lý đặt lịch hẹn với selectedDate, teacherName và courseName
    console.log(
      'Đặt lịch hẹn cho ngày:',
      selectedDate.format('YYYY-MM-DD HH:mm')
    )
    console.log('Tên giáo viên:', teacherName)
    console.log('Tên khóa học:', courseName)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>New Appointment</Text>

      <Text style={styles.text}>Teacher: {teacherName}</Text>
      <Text style={styles.text}>Course: {courseName}</Text>


      <DateTimePicker
        value={selectedDate ? selectedDate.toDate() : new Date()}
        mode='datetime'
        is24Hour={true}
        display='default'
        onChange={handleDateChange}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleBookAppointment()}
      >
        <Text style={styles.buttonText}>Set Appointment</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    marginBottom: 10
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  }
})

export default Appointment
