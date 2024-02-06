'use client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCount } from '@/store/reducers/common';

function Index() {
  const dispatch = useDispatch();
  const common = useSelector((state: any) => state.common);

  return (
    <div>
      {common.count}
      <button onClick={() => dispatch(setCount({ type: "add", count: common.count + 1 }))}>Dispatch Action</button>
    </div>
  );
}
export default Index
