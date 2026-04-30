"use client"
import useBear from '@/zustand/store'



const About = () => {

  const bears = useBear((state: any) => state.bears);
  const increasePopulation = useBear((state: any) => state.increasePopulation);
  const removeAllBears = useBear((state: any) => state.removeAllBears);
  const updateBears = useBear((state: any) => state.updateBears);

  return (
    <div>
      <h1 className='alert alert-primary text-center'>About</h1>
      <h1>Bears:{bears}</h1>
      <button onClick={increasePopulation}>+1</button>
      <br /><br />
      <button onClick={removeAllBears}>remove all</button>
      <br /><br />
      <button onClick={() => { updateBears(item) }}>update</button>
    </div>
  )
}

export default About