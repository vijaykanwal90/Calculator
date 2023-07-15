import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className=' w-[500px] h-[500px] mx-auto mt-12 bg-gradient-to-r from-blue-500 to-cyan-500'>
      <div className='flex flex-col justify-center items-end mr-4 my-8 pt-4 text-lg'>
      <div className='previous-output'>21336-</div>
      <div className='current-output'>56569</div>
      </div>
     <div className='grid grid-cols-4  bg-gradient-to-r from-cyan-800 to-cyan-500 gap-4 '>
    <button className='col-span-2'>AC</button>
    <button>DEl</button>
    <button>/</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>X</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>+</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>-</button>
    <button>.</button>
    <button>0</button>
    <button  className='col-span-2'>=</button>
    </div>
    </div>
  );
}

export default App;
