import {MonsterInfo} from "@/types/monsters.interface";
import {FC} from "react";

import styles from './monster.module.css';

export interface MonsterProps {
    monster: MonsterInfo
}

export const Monster: FC<MonsterProps> = ({monster}) => {

    return (
        <div className={styles['monster']}>
            <h1 className={styles['monster__name']}>{monster.name}</h1>
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
    )
}
