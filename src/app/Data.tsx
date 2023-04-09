import { useRouter } from 'next/navigation';
import { useCallback, useContext } from 'react';

import { LayoutDataContext, PageDataContext } from './store';

export function Data() {
  const router = useRouter();
  const { data: pageData, setData: setPageData } = useContext(PageDataContext);
  const { data: layoutData, setData: setLayoutData } = useContext(LayoutDataContext);

  const update = useCallback(() => {
    setPageData('abc');
    setLayoutData('abc');

    router.push('/?data=abc');
  }, [setPageData, setLayoutData, router]);

  return (
    <>
      <div>
        <button className='px-4 py-2 border bg-blue-400 text-white rounded-lg' onClick={update}>
          Click me
        </button>
      </div>
      {pageData && <div className='py-4'>Page Data: {pageData}</div>}
      {layoutData && <div className='py-4'>Layout Data: {layoutData}</div>}
    </>
  );
}
