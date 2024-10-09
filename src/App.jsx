import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
   <div className='w-[1140px] m-auto py-[60px]'>

   <div className='grid grid-cols-9 row-span-12'>
      <div className='bg-black col-span-2 rounded-t-lg' >fffffffffff</div>
      <div className='bg-[#f8f5f0] col-span-7 p-[30px_32px_30px_32px] grid gap-4'>
        
        <h3 className='text-[26px] font-bold pb-3 grid '>Overview</h3>
        <div className='grid grid-cols-3 row-span-9 gap-4 pb-[32px]'>
          <div className='border-spacing-1 bg-white rounded-lg'>1</div>
          <div className='border-spacing-1 bg-white rounded-lg'>2</div>
          <div className='border-spacing-1 bg-white rounded-lg'>3</div>
        </div>
        <div className='grid grid-cols-5 gap-4 '>
          <div className='border-spacing-1 bg-white col-span-3 row-span-4 p-20 rounded-lg'>4</div>
          <div className='border-spacing-1 bg-white col-span-2 row-span-8 p-20 rounded-lg'>5</div>
          <div className='border-spacing-1 bg-white col-span-3 row-span-8 p-20 rounded-lg'>6</div>
          <div className='border-spacing-1 bg-white col-span-2 row-span-4 p-20 rounded-lg'>7</div>
        </div>
        
      </div>
   </div>
   
    </div> 
  </>
  )
}

export default App
