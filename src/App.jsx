import './index.css'
import React from 'react'
import Button from './components/Elements/Button/'
// class Button extends React.Component {
//   render() {
//     return (
//       <button className="h-10 px-6 font-semibold rounded-md bg-black text-white"
//         type='submit'>
//           Buy Now
//         </button>
//     );
//   }
// }

// function ButtonBlack() {
//   return (
//     <button className="h-10 px-6 font-semibold rounded-md bg-green-500 text-white"
//       type='submit'>
//       Buy Now
//     </button>
//   );
// }


function App() {

  return (
    <>
      <div className='flex justify-center bg-indigo-300 min-h-screen items-center'>
        <div className='flex gap-x-4'>
          <Button variant="bg-black">Black Button</Button>
          <Button variant="bg-green-500">Green Button</Button>
          <Button variant="bg-blue-500">Blue Button</Button>
          <Button variant="bg-red-500">Red Button</Button>
          <Button />
        </div>
      </div>
    </>
  )
}

export default App
