import React from 'react';

const Blog = () => {
 return (
  <div className=''>
   <h3 className='text-5xl bg-gray-50 text-center py-8'>Questions and Answers</h3>

   <div className='w-80 mx-auto mt-10'>

   <h1 className='text-4xl'>1.When should I use context API?</h1>
   <p className='text-2xl my-4'><span className='font-bold'>Answer:</span> When I need to send data from parents components lower child components then I should use context API. Because without context api data have send one by one by props from parent component to child component.</p>

   <h1 className='text-4xl'>2.What is a custom hook?</h1>
   <p className='text-2xl my-4'><span className='font-bold'>Answer:</span> Custom hook is a javascript function that allow us to extract and reuse  logic from components.Custom hooks are useful for summarizing  complex logic that can be shared across different components.</p>

   <h1 className='text-4xl'>3.What is useRef?</h1>
   <p className='text-2xl my-4'><span className='font-bold'>Answer:</span> UseRef is a react hook that allows to create mutable reference that exists across re-renders of a component. One can use useRef to reference a DOM element, create a timer or an animation, manage focus, or any other use case where you need to store a value that should not trigger a re-render when it changes.</p>

   <h1 className='text-4xl'>4.What is useMemo?</h1>
   <p className='text-2xl my-4'><span className='font-bold'>Answer:</span> The React useMemo Hook returns a memoized value.Think of memoization as caching a value so that it does not need to be recalculated.The useMemo Hook only runs when one of its dependencies update.</p>
   
   </div>
  </div>
 );
};

export default Blog;