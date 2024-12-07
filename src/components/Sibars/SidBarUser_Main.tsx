import React from 'react'
import NestedList from './SidbarUtils'

type Props = {}

export default function SidBarUserMain({}: Props) {
  return (
    <div className='p-4'>
     
        <div className="flex flex-col bg-slate-50">
            <NestedList />
        </div>
    </div>
  )
}