import React, { Fragment } from 'react'

function Counter({qtn}) {
    let[count, setCount] = React.useState(qtn);

    const increment =()=>{
        setCount(count + 1)
    }
    const decrement =()=>{
        if(count > 0){
            setCount(count - 1)
        }
    }
  return (
    <Fragment>
        <div className="qty-icons">
            <button onClick={() =>decrement()} className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange/5 hover:bg-orange text-orange hover:text-white minus">-</button>
            <input min="0" name="quantity" value={count} type="number" readOnly className="h-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange/5 hover:bg-orange text-orange hover:text-white pointer-events-none w-16 ps-4 quantity mx-1"/>
            <button onClick={() =>increment()} className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange/5 hover:bg-orange text-orange hover:text-white plus">+</button>
        </div>
    </Fragment>
  )
}

export default Counter
