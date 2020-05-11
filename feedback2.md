# Checklist for Northcoders News Front End

## README - write your own and make sure that it:

- [x]**Remove the entire `## Using React` readme section - thats from create-react-app to help you, not aimed at the readers/users of your repo.**

- [✅] has a link to the deployed version
- [✅] provides general info about your app
- [✅] includes links to your back end repo
- [✅] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [✅] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)

## UX - I'll look again once you're done with styling

- [✅] Basic styling added
- [✅] Responsive design
- [✅] Items aligned
- [✅] Content legible (not too wide, obstructed, etc)
- [✅] Refreshing doesn’t cause an issue on sub-pages
- [✅] No errors in the console
- [✅] Votes / Posts / Deletions happen instantly _OR_ give user indication of loading

## Functionality

### Login

- [✅] Some indication of who is logged in

### Articles

- [x] Serves all articles / top articles - **I would remove the limit until you have pagination implemented**
- [✅] Can vote on articles
- [✅] Can vote a maximum of once in either direction per page load
- [✅] Votes are persistent when page is refreshed
- [✅] Topic pages load only relevant articles (especially when navigating from one topic page to another)
- [✅] Can sort articles by date created / comment_count / votes -

### Individual Article / Comments

- [✅] Individual articles are served with comments
- [✅] Can vote on comments
- [✅] Can vote a maximum of once in either direction per page load
- [✅] Votes are persistent when page is refreshed
- [✅] Can post new comments, which are persistent
- [✅] Can only delete comments of logged in user
- [✅] Deleted comments don’t re-appear on re-render/refresh

## Error Handling

- [✅] Bad url
- [✅] Bad topic slug in url
- [✅] Bad article id in url
- [✅] Post comment: (No text in comment body / Can you post without logging in?)

## Code

- [✅] Well named components
- [✅] Functional components used where possible
- [✅] Components reused where possible (`Articles` / `Voter`...)
- [✅] Minimal state - don't hold derivable data in state
- [✅] Set state correctly, using previous state where possible
- [✅] Handle asynchronicity clearly (i.e. isLoading pattern)
- [✅] Functions are DRY (`handleChange` for controlled components / api calls)
- [x] Use object destructuring where possible - _"`Sorry, we can't find an article with the id ${this.props.article_id}` no need for `this.props` as you have destructured above_
- [✅] Tidy? If not: ESLint / Prettier
- [✅] `node_modules` git ignored
- [x] No `console.log`s / comments - _App.css has a comment I don't think you need_
- [✅] remove unnecessary files (e.g. App.test.js)

[x]**removeCommentFromState & addCommentToState:** _Both of these setStates, should use a function as an argument so that you can use current state instead of referencing `this.state` from outside of the setState. Happy to discuss why this is important, even though it still works with your current setup._

[x]**NavList:** _Similar to how you highlight the sorting that is being applied, it would be great if the current topic that i was viewing was made obvious fro, the text being made darker/bolder or however you decide looks best:_

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END

### Additional functionality:

- [ ] sort comments by votes/created_at
- [x] navigate over pages of articles (if implemented in back-end)
- [x] navigate over pages of comments (if implemented in back-end)
- [ ] filter / display articles by specific user
- [ ] post new article
- [ ] delete logged in user's articles

## Once everything else is complete, here are some extra challenges:

- [ ] Use `aXe` extension to check for a11y issues
- [ ] Make sure any pure functions are extracted and tested with `Jest`
- [ ] Add integration tests with `cypress`
- [ ] Use Context API for sharing logged in user amongst components
- [ ] Use React Hooks
- [ ] Create a user page where you can change their profile information if they are "logged in as the right user". This will require having an additional PATCH endpoint on your backend
- [ ] Create a view for all the articles a user has liked. This will require additional functionality on your backend
- [ ] Make use of [web sockets](https://en.wikipedia.org/wiki/WebSocket) to allow your page to automatically update with a little notification if there have been any recent posts. [socket.io](https://socket.io/) is quite a good one to use and has some good getting started guides. This will require additional functionality on your backend for recent articles e.g. last 10 minutes
