import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-bold text-3xl pt-6 pb-16 mb-16 bg-gradient-to-r from-indigo-100'>Question Answers</h1>
                <div className='mx-20 text-xl mb-24'>
                    <div className='border-gray-500 border-2 p-5 bg-cyan-50 my-5'>
                        <h1 className='text-bold text-2xl'>When should you use context API?</h1>
                        <p>Answer: It is used when you have data or state that needs to be accessible by multiple components at different levels of the component hierarchy or when you have data or state that needs to be accessed by multiple components at different levels of the component tree.</p>
                    </div>
                    <div className='border-gray-500 border-2 p-5 bg-cyan-50 my-5'>
                        <h1 className='text-bold text-2xl'>What is a custom hook?</h1>
                        <p>Answer: Custom hook is a JavaScript function that uses one or more of the built-in React hooks to provide a reusable piece of logic. It is a way to abstract away complex or repetitive logic from your components and encapsulate it in a separate function that can be reused across different components.</p>
                    </div>
                    <div className='border-gray-500 border-2 p-5 bg-cyan-50 my-5'>
                        <h1 className='text-bold text-2xl'>What is useRef?</h1>
                        <p>Answer: useRef is a hook that returns a mutable ref object which can be used to store a value that persists across component renders. Unlike state, updating a ref value does not trigger a re-render of the component. useRef is commonly used to access the DOM nodes or to store any mutable value that needs to be accessed within a component.</p>
                    </div>
                    <div className='border-gray-500 border-2 p-5 bg-cyan-50 my-5'>
                        <h1 className='text-bold text-2xl'>What is useMemo?</h1>
                        <p>Answer: useMemo is a hook that allows you to memoize the result of a function call, caching its return value and preventing unnecessary recalculations. This can help improve the performance of your application by avoiding expensive calculations when the component re-renders.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;