import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DestaquesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Destaques</Text>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>A cinco passos de você</Text>
        <Text style={styles.movieDescription}>Stella passa muito tempo no hospital por causa de uma fibrose cística. Lá, ela conhece Will, que sofre da mesma doença. Eles são obrigados a manter distância, mas mesmo assim se apaixonam.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Godzilla vs. King Kong</Text>
        <Text style={styles.movieDescription}>Dois titãs lendários se enfrentam em uma batalha épica que abala o mundo.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Fabricante de Lagrimas</Text>
        <Text style={styles.movieDescription}>Criados em um orfanato e adotados pela mesma família, Nica e Rigel percebem que têm sentimentos inesperados e irresistíveis um pelo outro.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8DC',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8B4513',
  },
  movie: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFE4C4',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#8B4513',
  },
  movieDescription: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#333',
  },
});

export default DestaquesScreen;
