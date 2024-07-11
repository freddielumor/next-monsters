import { Suspense } from 'react';
import Monster from '@/components/monster/monster';
import { MonsterDetailIndex } from '@/types/monsters.interface';

interface MonsterDetailPageProps {
  params: MonsterDetailIndex;
}

export default function MonsterDetailPage({ params }: MonsterDetailPageProps) {
  const { index } = params;

  return (
    <Suspense fallback={<div>Loading details...</div>}>
      <Monster index={index} />
    </Suspense>
  );
}