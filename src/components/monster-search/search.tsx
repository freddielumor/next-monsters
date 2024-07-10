'use client';
import {useState} from "react";
import {MonsterSummary} from "@/types/monsters.interface";

import styles from "./monster-search.module.css";

export const Search = () => {

    const [monsters, setMonsters] = useState<Array<MonsterSummary>>([]);


    return (
        <>
            <form className={styles['search']}>
                <label className={styles['search__label']}>Search</label>
                <input className={styles['search__input']}/>
                <button className={styles['search__submit']} type={'submit'}>Search</button>
            </form>

            <ul>
                {monsters.map((monster) => (
                    <li key={monster.index}>{monster.name}</li>
                ))}
            </ul>
        </>
    )
}
