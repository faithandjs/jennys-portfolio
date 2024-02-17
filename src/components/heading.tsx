import React from 'react';

export default function Heading({
  head,
  text,
}: {
  head: string;
  text: string;
}) {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-3 md:items-center pb-10'>
      <h3 className='sm:text-4xl text-3xl font-medium '>{head}</h3>
      <p className='text-ink md:max-w-[50%] md:w-[700px]'>{text}</p>
    </div>
  );
}

