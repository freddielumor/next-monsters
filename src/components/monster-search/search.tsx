'use client';

import { useState, FormEvent } from "react";
import { MonsterSummary } from "@/types/monsters.interface";
import styles from "./search.module.css";

export const Search = () => {
  const [monsters, setMonsters] = useState<Array<MonsterSummary>>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('https://www.dnd5eapi.co/api/monsters');
      const data = await response.json();
      
      const filteredMonsters = data.results.filter((monster: MonsterSummary) =>
        monster.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setMonsters(filteredMonsters);
    } catch (error) {
      console.error('Error fetching monsters:', error);
    }
  };

  return (
    <>
      <form className={styles['search']} onSubmit={handleSearch}>
        <label className={styles['search__label']}>Search</label>
        <input
          className={styles['search__input']}
          value={searchTerm}
          placeholder="Enter your search term..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={styles['search__submit']} type="submit" disabled={!searchTerm}>Search</button>
      </form>

      {monsters?.length > 0 && (
        <>
        <h2>Results</h2>
        <ul className={styles['results']}>
            {monsters.map((monster) => (
            <li key={monster.index} className={styles['result-item']}>
                <a href={`/monster/${monster.index}`}>{monster.name}</a>
            </li>
            ))}
        </ul>
      </>
      )}

    
    </>
  );
};
