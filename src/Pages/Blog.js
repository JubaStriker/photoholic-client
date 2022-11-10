import React, { useState } from 'react';
import useTitle from '../Hooks/useTitle';

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    useTitle('Blog')
    return (
        <div className="border-b">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <svg
                    viewBox="0 0 24 24"
                    className={`w-3 text-gray-600 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                >
                    <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        points="2,7 12,17 22,7"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};

const Blog = () => {
    return (
        <div className=' '>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                Blogs
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="232db96b-4aa2-422f-9086-5a77996d1df1"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative text-orange-500">Hey</span>
                            </span>{' '}
                            <span className='text-green-600'>did you know?</span>
                        </h2>
                        <p className="text-base text-orange-400 md:text-lg ">
                            Knowledge is power. Get along with our blogs to never ending journey of learning.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <Item title="What is the difference between SQL and NoSQL?">
                            <p className='text-lg text-green-600'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                        </Item>
                        <Item title="What is JWT, and how does it work?">
                            <p className='text-lg text-green-600'>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.</p>
                        </Item>
                        <Item title="What is the difference between javascript and NodeJS?">
                            <p className='text-lg text-green-600'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                        </Item>
                        <Item title="How does NodeJS handle multiple requests at the same time?">
                            <p className='text-lg text-green-600'>
                                How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. They handle 40K requests per second having Node.</p>
                        </Item>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
