import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Todo() {
  const [todo, setTodo] = useState('');
  const [search, setSearch] = useState('');
  const [todos, setTodos] = useState([]);

  // Add Todo
  const addTodo = () => {
    if (todo.trim() === '') return;

    setTodos([
      ...todos,
      { id: Date.now().toString(), text: todo, completed: false },
    ]);

    setTodo('');
  };

  // Toggle Complete
  const toggleTodo = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  // Delete Todo
  const deleteTodo = (id) => {
  Alert.alert(
    "Delete Todo",
    "Are you sure you want to delete this todo?",
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "Delete",
        onPress: () => {
          setTodos(todos.filter((item) => item.id !== id));
        },
        style: "destructive"
      }
    ]
  );
};

  // Filter Todo (Search)
  const filteredTodos = todos.filter((item) =>
    item.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Todo List</Text>

      {/* Search */}
      <TextInput
        style={styles.input}
        placeholder="Search todo..."
        value={search}
        onChangeText={setSearch}
      />

      {/* Add Todo */}
      <View style={styles.addContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new todo..."
          value={todo}
          onChangeText={setTodo}
        />

        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Ionicons name="add" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Todo List */}
      <FlatList
        data={filteredTodos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            
            <TouchableOpacity
              onPress={() => toggleTodo(item.id)}
              style={{ flex: 1 }}
            >
              <Text
                style={[
                  styles.todoText,
                  item.completed && styles.completedText,
                ]}
              >
                {item.text}
              </Text>
            </TouchableOpacity>

            {/* Delete Button */}
            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
              <Ionicons name="trash" size={20} color="red" />
            </TouchableOpacity>

          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#d6b8b8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  addContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  addButton: {
    backgroundColor: '#ff6373',
    padding: 14,
    borderRadius: 10,
    marginLeft: 10,
  },
  todoItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  todoText: {
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});