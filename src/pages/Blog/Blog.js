import React from 'react';

const Blog = () => {
    return (
        <div className='mt-20'>
            <div className="card bg-base-100 shadow-xl mb-5">
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p><strong>Answer :</strong> There are four main types of state to need to properly manage in your React apps: <br />
                        1. Local state <br />
                        2. Global state <br />
                        3. Server state <br />
                        4. URL state <br />
                        Local (UI) state : Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook. <br />
                        Global (UI) state : Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. <br />
                        Server state : Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <br />
                        URL state : Data that exists on our URLs, including the pathname and query parameters.</p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl mb-5">
                <div className="card-body">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p><strong>Answer :</strong> Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date.</p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl mb-5">
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                    <p><strong>Answer :</strong> A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. For Test-Driven Development (TDD), you write unit tests before writing any implementation. This makes your implementation details in your code shorter and easier to understand. In this instance, the best time to write unit tests is immediately. For others, most developers write unit tests after the code's been written.</p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl mb-5">
                <div className="card-body">
                    <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                    <p><strong>Answer : React: </strong> <br />
                        i. Free and open-source <br />
                        ii. Easy to learn <br />
                        iii. Lightweight <br />
                        iv. Search engine optimization (SEO) friendly <br />
                        v. Large developer community <br />
                        vi. Ideal for building user interfaces (UI) <br />
                        vii. Declarative <br />
                        viii. Reusable components <br />
                        ix. Migration friendly <br />
                        x. Mobile browser support <br />
                        xi. JavaScript Syntax Extension (JSX) <br />
                        xii. Hard to keep up-to-date <br />
                        xiii. Lack of detailed documentation with the latest updates <br />
                        <strong>Angular : </strong>
                        i. Ideal for developing Single Page Applications (SPA) <br />
                        ii. Easier Document Object Model (DOM) manipulation <br />
                        iii. Two-way data binding <br />
                        iv. Reusable components <br />
                        v. Ideal testing framework <br />
                        vi. Full-fledged solution <br />
                        vii. Monolithic framework <br />
                        viii. Well documented <br />
                        ix. Better suited for more advanced code developers <br />
                        x. Performance issues <br />

                        <strong>Vue : </strong>
                        i. Free and open-source <br />
                        ii. Flexible and lightweight <br />
                        iii. Easy to learn <br />
                        iv. Fastest JS Framework available <br />
                        v. Two-way data binding <br />
                        vi. Virtual Document Object Model (DOM) <br />
                        vii. Good for developing Single Page Applications (SPA) <br />
                        viii. Fewer job opportunities than its competitors <br />
                        ix. Lack of constant updates and bug fixes due to a minor developer team <br />
                        x. Not ideal for large-scale projects <br />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;