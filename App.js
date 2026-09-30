import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') {
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      name: input.trim(),
    };

    setTasks([...tasks, newTask]);
    setInput('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const renderTask = ({ item, index }) => (
    <View style={styles.taskCard}>

      <View style={styles.numberBox}>
        <Text style={styles.numberText}>{index + 1}</Text>
      </View>

      <Text style={styles.taskText}>
        {item.name}
      </Text>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTask(item.id)}
      >
        <Text style={styles.deleteText}>×</Text>
      </TouchableOpacity>

    </View>
  );

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>My Tasks</Text>

        <Text style={styles.subtitle}>
          Stay organized and get things done.
        </Text>
      </View>

      <View style={styles.counterBox}>
        <Text style={styles.counterNumber}>
          {tasks.length}
        </Text>

        <View>
          <Text style={styles.counterTitle}>
            Total Tasks
          </Text>

          <Text style={styles.counterText}>
            Keep going!
          </Text>
        </View>
      </View>

      <View style={styles.inputArea}>

        <TextInput
          style={styles.input}
          placeholder="What do you need to do?"
          placeholderTextColor="#999"
          value={input}
          onChangeText={setInput}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={addTask}
        >
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.listTitle}>
        Your Tasks
      </Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyIcon}>✓</Text>

            <Text style={styles.emptyTitle}>
              No tasks yet
            </Text>

            <Text style={styles.emptyText}>
              Add your first task above.
            </Text>
          </View>
        }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
    paddingHorizontal: 20,
    paddingTop: 55,
  },

  header: {
    marginBottom: 20,
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#202124',
  },

  subtitle: {
    fontSize: 15,
    color: '#777',
    marginTop: 5,
  },

  counterBox: {
    backgroundColor: '#202124',
    borderRadius: 18,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  counterNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 15,
  },

  counterTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  counterText: {
    color: '#BDBDBD',
    fontSize: 13,
    marginTop: 2,
  },

  inputArea: {
    flexDirection: 'row',
    marginBottom: 25,
  },

  input: {
    flex: 1,
    height: 52,
    backgroundColor: 'white',
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#E1E3E8',
  },

  addButton: {
    width: 52,
    height: 52,
    backgroundColor: '#202124',
    borderRadius: 14,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '300',
    marginTop: -3,
  },

  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#202124',
    marginBottom: 12,
  },

  taskCard: {
    backgroundColor: 'white',
    minHeight: 65,
    borderRadius: 14,
    marginBottom: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E9ED',
  },

  numberBox: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#F0F1F4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  numberText: {
    fontWeight: 'bold',
    color: '#555',
  },

  taskText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },

  deleteButton: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#F0F1F4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  deleteText: {
    fontSize: 25,
    color: '#555',
    lineHeight: 27,
  },

  emptyBox: {
    backgroundColor: 'white',
    borderRadius: 18,
    padding: 30,
    alignItems: 'center',
    marginTop: 5,
  },

  emptyIcon: {
    fontSize: 35,
    color: '#777',
    marginBottom: 10,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  emptyText: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
});