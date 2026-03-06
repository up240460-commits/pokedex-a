import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

// 7. Importar el componente en el archivo principal
import PokemonCard from "../components/PokemonCard";

export default function Index() {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    // Sugerencia: Bajé el límite a 150 para que el .map no congele tu aplicación
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";
    const response = await fetch(URL, {
      method: "GET"
    });
    const data = await response.json();
    setResults(data.results);
  };

  return (
    // Agregamos un ScrollView para que la lista se pueda desplazar hacia abajo
    <ScrollView>
      <View style={{ padding: 20 }}>
        {results.map((item) => {
          // 8. Reemplazar el contenido del .map
          return (
            // 9. Pasar props al componente
            <PokemonCard 
              key={item.name} 
              name={item.name} 
              url={item.url} 
            />
          );
        })}
      </View>
    </ScrollView>
  );
}