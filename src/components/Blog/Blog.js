import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='mt-4 text-4xl font-bold text-sky-700  underline'>MORE OF REACT</h1>
            <div className='m-8'>
                <p className='text-3xl text-left text-sky-700 font-bold'>1.What is the purpose of react-router??</p>
                <p className='text-2xl text-left'><span className='font-bold underline'>ANS:-</span> Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

                    React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications. </p>
            </div>
            <div className='m-8'>
                <p className='text-3xl text-left text-sky-700 font-bold'>2.How does context API works??</p>
                <p className='text-2xl text-left'><span className='font-bold underline'>ANS:-</span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. </p>
            </div>
            <div className='m-8'>
                <p className='text-3xl text-left text-sky-700 font-bold'>3.What is useRef hook reactJS??</p>
                <p className='text-2xl text-left'><span className='font-bold underline'>ANS:-</span> The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
                    <br />
                    <span className='font-bold'>Syntax: </span>
                    const refContainer = useRef(initialValue);
                    <br />
                    The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.  </p>
            </div>
        </div>
    );
};

export default Blog;