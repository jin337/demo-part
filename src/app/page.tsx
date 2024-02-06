import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { setCount } from '@/store/reducers/common';

function Home() {
  const dispatch = useAppDispatch();
  const common = useAppSelector((state) => state.common);

  return (
    <div>
      {common.count}
      <button onClick={() => dispatch(setCount({ type: "add", count: 2 }))}>Dispatch Action</button>
    </div>
  );
}
export default Home
