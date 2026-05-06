import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  
const [length, setLength] = useState(8);
const [noallowed, setNoallowed] = useState(false);
const [character, setCharacter] = useState(false);
const [Password, setPassword] = useState("");

const passref = useRef(null);

const passwordGenerator = useCallback(()=>{
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if(noallowed) str+= "0123456789";

  if(character) str+= "!@#$%^&*()_+=";

  for(let i=1; i<=length; i++){
    let char = Math.floor(Math.random ()* str.length + 1);
    pass += str.charAt(char);
  }

  setPassword(pass);

}, [length, noallowed, character, setPassword]);

const copyPassword = useCallback(()=>{
  passref.current?.select();
  passref.current?.setSelectionRange(0, 999);
  window.navigator.clipboard.writeText(Password);
}, [Password]);

useEffect(()=>{
  passwordGenerator()
}, [length, noallowed, character, passwordGenerator]);



  return (
    <>
      <h1 className='text-4xl text-center text-white '>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
        
        <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={Password} className='outline-none w-full py-1 px-3 bg-white' placeholder='password' readOnly  ref={passref} />
           <button
        onClick={copyPassword}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={noallowed}
          id="numberInput"
          onChange={() => {
              setNoallowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={character}
              id="characterInput"
              onChange={() => {
                  setCharacter((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
        </div>
      </div>
    </>
  ) 
}

export default App

