import { useRef } from "react";

import Navbar from "@/components/steven/Navbar";

import styles from "@/styles/pages/steven/css-training/CSS.module.scss";
import PokemonList from "@/components/steven/pokemon/PokemonList";
import Carousel from "@/components/steven/Carousel";
import DragAndDrop from "@/components/steven/DragAndDrop";
import usePokemon from "hooks/usePokemon";
import SidebarPage from "@/components/steven/SidebarPage";
import PokemonCard from "@/components/steven/pokemon/PokemonCard";

/**
 * Index component
 * @return {JSX.Element} - The JSX code for Index component
 */
const Index = (): JSX.Element => {
  const pokemonRef = useRef<any>(null);
  const containerRef = useRef<any>(null);
  const [pokemon, loading, setLoading] = usePokemon(10);

  return (
    <div className={styles.home}>
      <Navbar />
      <SidebarPage
        items={[
          {
            title: "Drag & Drop",
            render: (
              <div
                className={`${styles.item__dragdrop} ${styles.item}`}
                ref={containerRef}
              >
                <DragAndDrop newStyles={styles}>
                  {pokemon.slice(0, 8).map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                  ))}
                </DragAndDrop>
              </div>
            ),
          },
          {
            title: "Carousel",
            render: (
              <div className={`${styles.item__item__carousel} ${styles.item}`}>
                <Carousel
                  newStyles={styles}
                  loading={loading}
                  setLoading={setLoading}
                >
                  {pokemon.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                  ))}
                </Carousel>
              </div>
            ),
          },
          {
            title: "Item list",
            render: (
              <div
                className={`${styles.item__pokemon} ${styles.item}`}
                ref={pokemonRef}
              >
                <PokemonList containerRef={pokemonRef} newStyles={styles} />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Index;
