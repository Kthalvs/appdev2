import { View, Text, StyleSheet } from 'react-native';

export default function ProfileDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Information</Text>

      <Text style={styles.text}>Course & Section: BSIS-3A</Text>
      <Text style={styles.text}>Name: Kathline Alvarado</Text>
      <Text style={styles.text}>Age: 21</Text>
      <Text style={styles.text}>Favorite Hobby: Eating , Watching Movies</Text>

      <Text style={styles.subtitle}>Pet Peeves in Class:</Text>
      <Text style={styles.text}>1. Showing off too much in class</Text>
      <Text style={styles.text}>2. Interrupting the teacher</Text>
      <Text style={styles.text}>3. Acting like they know more than the teacher</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    marginBottom: 5,
  },
});
