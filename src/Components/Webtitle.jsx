import React from 'react';

function Webtitle(props) {
  return (
    <div className='web-title'>
      <h2 className='font-semibold text-3xl leading-normal mb-1 text-blue font-Dm'>{props.title}</h2>
      <p className='text-gray max-w-xl mx-auto font-Dm text-base'>{props.para}</p>
    </div>
  );
}
export default Webtitle;
