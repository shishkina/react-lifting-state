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

- Add a `featureMe` method in the `Quote` component
- Give the `Quote` component state

### Next Steps

This works well enough if we want to feature multiple quotes, but what if we just want one featured quote at a time? Could we do this if we had state in each child component that needed to be checked?

## Lifting State

This use case and similar ones is why we would want to lift state.

> Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor. [From the React docs](https://facebook.github.io/react/docs/lifting-state-up.html)

If we only want to feature one quote, we'd need to do a couple of things:

- Remove state from the `Quote` component
- Move `setFeature` into `App.js`
- Set a property `featuredQuote` in the state of `App.js` that has the featured quote's ID
- Pass down `featuredQuote` and `setFeature` through the `QuoteList` component to each `Quote` component
- Adjust `onClick={this.setFeature}` so that it accepts an argument of the quote's ID

We'll walk through this together, and there's a completed version in `quotes-liftingstate-final`.


