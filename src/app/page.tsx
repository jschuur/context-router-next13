'use client';

import { Data } from './Data';
import { PageDataProvider } from './store';

export default function Home() {
  return (
    <PageDataProvider>
      <main>
        <Data />
      </main>
    </PageDataProvider>
  );
}
