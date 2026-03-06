import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// 3. Definir los Props usando TypeScript
interface PokemonCardProps {
  name: string;
  url: string;
}

// 2. Crear el componente
const PokemonCard: React.FC<PokemonCardProps> = ({ name, url }) => {
  // 4. Obtener el id desde la URL usando split, filter y pop
  const id = url.split('/').filter(Boolean).pop();

  // 5. Construir la URL de la imagen
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <View style={styles.card}>
      {/* 6. Mostrar la imagen con width y height requeridos */}
      <Image 
        source={{ uri: imageUrl }} 
        style={styles.image} 
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 18,
    textTransform: 'capitalize', // Pone la primera letra en mayúscula
  },
});

export default PokemonCard;