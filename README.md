# Travel Journal

A simple travel blog website created with React as the second Solo Project of a React course on Scrimba - [Learn React](https://scrimba.com/learn/learnreact)

As usual, the markup uses BEM naming conventions to make styling with CSS straightforward. The page makes use of two custom components, a "Navbar" component which includes the logo image and heading. And, a "Card" component which makes use of props to create a reusable component. The card component passes data from an seperate file that contains an array of objects. Making use of the array map method, we can loop over each individual entry in the data file and use it to pass through to the component as props.

This makes the "Card" component extremely reusable, as we style it once and can pass different information in for different entries.
