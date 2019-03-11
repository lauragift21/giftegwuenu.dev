---
title: Introducing React Hooks
date: 2018-12-04
published: true
tags: ['react','hooks']
# cover_image: https://res.cloudinary.com/lauragift/image/upload/v1543931797/1_Ra-gkqfPqbWVhgP3tR-0Cg_a7gxdm.png
canonical_url: false
description: "React v16.7.0 was introduced at the React Conf 2018 and Dan Abramov did the honors of letting the cat out of the bag when he introduced React Hooks.  We only just got a new release React v16.6.0:lazy, memo and contextType and now Hooks don’t you just love the react community."
---

<iframe title="parler" style="width: 100%; max-height: 115px; border: none;" src='https://api.parler.io/ss/player?url=https%3A%2F%2Fwww.parler.io%2Faudio%2F16923918848%2Fb83af23d5742cb52468fd08ccb8342d0a3e6c2f9.bf9ce1dd-570b-42bc-bb7f-b23d7cc5c6d8.mp3'></iframe>

**[React v16.8.0](https://reactjs.org/docs/hooks-intro.html) was introduced at the React Conf 2018 and officially released in February 2019. [Dan Abramov] (https://twitter.com/dan_abramov) did the honors of letting the cat out of the bag when he introduced [React Hooks.](https://reactjs.org/docs/hooks-intro.html) We only just got a new release React v16.6.0: lazy, memo and contextType and now Hooks don't you just love the react community.**

## What are Hooks?

*Hooks are a new feature in React that lets you use state and other React features without writing a Class. This new feature allows you to hook into React state directly and allows you to write complex logic using only functional components without the need of any Class Component.*

*The idea behind this proposal was as a result of the following conceptions:*

-   *Complex components become exhausting to know and manage.*
-   *Classes confuse people and machines.*
-   *It's exhausting to reuse stateful logic between components.*

## Hooks in action

*I'm going to illustrate the difference between using Classic React components and the new React Hooks in the demo below.*

Class component with state
-------------------------

```js

import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = {
    count: 0
  };
  setCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.setCount}>Click me</button>
      </>
      );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```
[View Demo](https://codesandbox.io/s/r726kwvm2m)

UseState with React Hooks
-------------------------

```js

import React, { useState } from "react";
import ReactDOM from "react-dom";

function Counter() {
// similar to this.state and this.setState
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Click me</button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);

```
[View Demo](https://codesandbox.io/s/r726kwvm2m)

Using State Hooks
-----------------

*Here's what awesome about Hooks. It introduces new basic hooks we can use out of the box State Hooks and Effects hooks. You can also create custom hooks to hook into a functional component which is really cool. The demo presented above utilizes the State hook and generally, this is used to manage the state just like we used this.state in Class components. The useState() takes an argument which defaults to the initial state, This can be a string or a number. In the demo, we have useState(0) as the initial state for the count. useState() also takes in two variables the first value being the current state similar to this.state in Class components and the second value is the value we want the current state to be updated to similar to this.setState in Class Components.*

*The idea behind creating state hook is that we can now manage state in a functional component which takes away the need of being confused when should we actually use stateless component over stateful component.*

Using multiple states with Hooks
--------------------------------

*We can also have more than one state with the useState hooks all you need to do is to declare multiple useState hooks within the function.*

```js

import React, { useState } from 'react';

function multipleStates() {
  // Declare multiple state variables!
  const [count, setCount] = useState(0);
  const [cars, setCars] = useState('Lamborghini');
  const [menu, setMenu] = useState([{ menu: 'Scrambled Eggs' }]);
}

```
*Using multiple state variables is great but we can also use a single state variable. State variables can hold objects and arrays together, so we can still group related data together. However, in contrast to this.setState in a class component updating a state variable invariably replaces it rather than merging it.*

The Effect Hook
---------------

*Side effects occur when a procedure changes a variable from outside its scope. A typical example could be manually changing the DOM or fetching data from a different source.*

*The effect hook allows us to handle side effects in function components. If you're familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined. This example describes how the useEffect hook works:*

*With Class component we track the side effect using lifecycle methods like componentDidMount, componentDidUpdate. An example of how to manage side effects in Class Components works like this:*

```js

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    document.title = `You clicked ${count} times`;
  }
  render() {
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }
```

```js

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Example() {
  const [count, setCount] = useState(0);
  /* handles lifecycle event just like
  componentDidMount and componentDidUpdate */
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Example />, rootElement);
```

[View Demo](https://codesandbox.io/s/r726kwvm2m)

*And with React hooks the same can be done using the useEffect hook, Whenever the component mounts, the effect hook will run after rendering including the first render. What the code illustrated above is doing is it updates the count on the document title, for every time the component renders.*

## Rules of React Hooks

*To use hooks effectively we need to adhere to two important rules and React also provides a [linter plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks) to enforce these rules automatically.*

### Rule 1: Only call hooks at the top level

*The documentation suggests that we should not call Hooks inside loops, conditions, or nested functions:*

-   *By following this rule, you ensure that Hooks are called in the same order each time a component renders. That's what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls.  -[React](https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level) [Hook Rules](https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level)*

### Rule 2: Only Call Hooks from React Functions:

*The documentation goes on to state that we should not call Hooks from regular JavaScript functions:*

-  *By following this rule, you ensure that all stateful logic in a component is clearly visible from its source code.  [-React](https://reactjs.org/docs/hooks-rules.html#only-call-hooks-from-react-functions) [Hook Rules](https://reactjs.org/docs/hooks-rules.html#only-call-hooks-from-react-functions)*

*In order to automatically add the ESLint-Plugin to enforce these rules when working with React Hooks we need to follow these steps to install the plugin:*

```js
$ npm install eslint-plugin-react-hooks@next
```

```js

// Your ESLint configuration
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error"
  }
}
```

-   *In the future, The Plugin will be installed by default into Create React App and similar toolkits.*

## Conclusion

*We have learned what Hooks is all about and how React Hooks brings with it all the possibilities that weren't attainable with the function components previously, we can now manage state within the React's function component and that takes away the need of having write class components for our applications. Now, this doesn't mean Class components aren't useful anymore, they are but to reduce the complexity of class component we can break them down into functional components that utilize the React Hooks. We can also write custom hooks for different functionality and this by far extends the use cases of React Hooks.*