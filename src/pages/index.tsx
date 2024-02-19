'use client'
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { setCount } from '@/store/reducers/common';
import Http from '@/service/api';

function Index({ data }: any) {
  const dispatch = useAppDispatch();
  const common = useAppSelector((state) => state.common);
  console.log(data);

  return (
    <div>
      {common.count}
      <button onClick={() => dispatch(setCount({ type: "add", count: common.count + 1 }))}>Dispatch Action</button>
    </div>
  );
}

export async function getStaticProps() {
  const res = await Http.get('/user')
  const result = res.data
  return {
    props: { data: result }
  }
}

export default Index
