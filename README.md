# Lifting State

### Learning Objectives

- Change components dynamically based on the `App.js` state
- Follow best practices by lifting state to the main `App` component
- Pass methods down between components to adjust state in the main `App` component

### Before we dive into lifting state, let's add a feature to our quotes app so far.

Let's say we want to be able to "feature" quotes -- display our favorite ones differently.

- When a user clicks on the star
    - the quote becomes featured
    - and changes its background to tan.

THis will make use of conditional rendering we've talked about a couple of times. We'll also need to do a couple of things:

- Add a `featureQuote` method in the `Quote` component
- Give the `Quote` component state

### Next Steps

This works well enough if we want to feature multiple quotes, but what if we just want one featured quote at a time? Could we do this if we had state in each child component that needed to be checked?

## Lifting State

This use case and similar ones is why we would want to lift state.

> Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor. [From the React docs](https://facebook.github.io/react/docs/lifting-state-up.html)

If we only want to feature one quote, we'd need to do a couple of things:

- Remove state from the `Quote` component
- Move `featureQuote` into `App.js`
- Set a property `featured` in the state of `App.js` that has the featured quote's ID
- Pass down `featured` and `featureQuote` through the `QuoteList` component to each `Quote` component
- Adjust `onClick={this.setFeature}` so that it accepts an argument of the quote's ID

We'll walk through this together, and there's a completed version in `quotes-liftingstate-final`.


### Step 1: Altering the `Quote` component.

So, we need to get rid of state and the `featureQuote` method. We also need to modify the `featureQuote` method call in the `onClick` so it takes an argument. That's the trickiest part of this, and it looks like this:

```jsx
<i onClick={() => props.featureQuote(props.quote.id)} className="fa fa-star fa-2x" />
```

### Step 2: Putting `featureQuote` into `App.js`

Now, our `featureQuote` method needs to be changed so that it takes a parameter of the id:

```js
featureQuote(id) {
    this.setState({
        featured: id,
    });
}
```

Now, `featureQuote` is taking the ID of the individual quote that's been clicked on and setting it in the state of our `App` component. This is why this is called "lifting state" -- we're taking the value from a child component and lifting it all the way back up to the parent.

Of course, we need to initialize that value in state.

### Step 3:

We have the method call `onClick` in our child component and the method itself in our parent component, but we still need a way for the two to talk to each other. This is where React's focus on unidirectional dataflow is important. If props can only flow one way, how will we get the correct information up to the parent?

Well, not only can we pass props like numbers and text, but also we can pass functions and methods along. And those functions are still bound to the context of their original components. So, since we've bound `featureQuote` in `App.js`, `this.setState` refers to the state in `App.js`.

In our example, the prop `quote` is passing information down to the children, while the prop `featureQuote` is allowing us to use our interaction with that component to set the data in the parent. So we have to pass `featureQuote` down through `QuoteList` to `Quote` to make good use of it.

##  🚀 LAB!!

Work on getting the `quotes-liftngstate-begin` app to this point.

# Another example

- Walkthrough pokémon app

##  🚀 LAB!!

If your Pokémon homework didn't work, go back and apply this new concept to it. Otherwise, refactor it so that it follows best practices.

