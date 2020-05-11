# Checklist for Northcoders News Front End

## README - write your own and make sure that it:

## UX

- _I'd love to be able to see whether I am showing 1,2,5,10 or ALL articles by looking at those buttons (maybe similar to your sort by), or being told near the top of the page (maybe you could also try showing the buttons at the top below the sort section, but appreciate it might take up too much room / look slightly less tidy_

**removeCommentFromState & addCommentToState:** _If I was being really picky, I would say that doing a .find and then a .splice feels a bit messier than i foyu were to use a filter for `removeCommentFromState`, and that for `addCommentToState` you could have put your new comment in without having to use unshift. E.g._

```js
removeCommentFromState = (commentIdToRemove) => {
  this.setState(({ comments }) => {
    const amendedComments = comments.filter(({ comment_id }) => {
      return comment_id !== commentIdToRemove;
    });
    return { comments: amendedComments };
  });
};

addCommentToState = (newComment) => {
  this.setState((currentState) => {
    const amendedComments = [newComment, ...currentState.comments];
    return { comments: amendedComments };
  });
};
```

## Pagination

- _Now that you have pagination implemented, I would default to 5 or 10 articles so that it is immediately obvious to a user all the good work you've done implementing pagination_
- _I would argue that when I switch topic, the page should reset to 1 to avoid bugs switching to a page that doesn't exist for one of the other topics_
