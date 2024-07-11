
"use client"
import { MonsterInfo } from "@/types/monsters.interface";
import { FC, useEffect, useState } from "react";
import styles from './monster.module.css';
import Image from 'next/image';

export interface MonsterProps {
  index: string;
}

const Monster: FC<MonsterProps> = ({ index }) => {
  const [monster, setMonster] = useState<MonsterInfo | null>(null);

  useEffect(() => {
    const fetchMonster = async () => {
      try {
        const response = await fetch(`https://www.dnd5eapi.co/api/monsters/${index}`);
        const data = await response.json();
        setMonster(data);

      } catch (error) {
        console.error('Error fetching monster details:', error);
      }
    };
    
    fetchMonster();
  }, [index]);


  if (!monster) return <div>Loading...</div>;

  return (
    <div className={styles['monster']}>
      <h1 className={styles['monster__name']}>{monster.name}</h1>
      {monster.image && (
        <div className={styles['monster__image']}>
          <Image src={`https://www.dnd5eapi.co${monster.image}`} priority placeholder="blur" blurDataURL={`https://www.dnd5eapi.co${monster.image}`} alt={monster.name}  width={500} height={500}  />
        </div>
      )}
      <dl className={styles['monster__stats']}>
        <dt className={styles['monster__stat']}>Strength</dt>
        <dd className={styles['monster__stat-value']}>{monster.strength}</dd>
        <dt className={styles['monster__stat']}>Dexterity</dt>
        <dd className={styles['monster__stat-value']}>{monster.dexterity}</dd>
        <dt className={styles['monster__stat']}>Constitution</dt>
        <dd className={styles['monster__stat-value']}>{monster.constitution}</dd>
        <dt className={styles['monster__stat']}>Intelligence</dt>
        <dd className={styles['monster__stat-value']}>{monster.intelligence}</dd>
        <dt className={styles['monster__stat']}>Wisdom</dt>
        <dd className={styles['monster__stat-value']}>{monster.wisdom}</dd>
        <dt className={styles['monster__stat']}>Charisma</dt>
        <dd className={styles['monster__stat-value']}>{monster.charisma}</dd>
      </dl>
    </div>
  );
}

export default Monster;

