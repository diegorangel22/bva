'use client';

import { FasterTimeToMarket } from '@/webflow'; // from Webflow DevLink
import Calculator from '@/components/calculator'; // your custom logic

export default function Home() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <FasterTimeToMarket />
    </main>
  );
}

