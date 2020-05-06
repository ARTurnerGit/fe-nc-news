# Checklist for Northcoders News Front End

## README - write your own and make sure that it:

- [ ] has a link to the deployed version
- [ ] provides general info about your app
- [ ] includes links to your back end repo
- [ ] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [ ] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)

## UX - I'll look again once you're done with styling

- [ ] Basic styling added
- [ ] Responsive design
- [ ] Items aligned
- [ ] Content legible (not too wide, obstructed, etc)
- [✅] Refreshing doesn’t cause an issue on sub-pages
- [ ] No errors in the console
- [✅] Votes / Posts / Deletions happen instantly _OR_ give user indication of loading

## Functionality

### Login

- [✅] Some indication of who is logged in

### Articles

- [✅] Serves all articles / top articles - **How about showing the article title in the list of articles?**
- [✅] Can vote on articles
- [✅] Can vote a maximum of once in either direction per page load
- [✅] Votes are persistent when page is refreshed
- [✅] Topic pages load only relevant articles (especially when navigating from one topic page to another)
- [x] Can sort articles by date created / comment_count / votes - **Works once viewing articles, but not switching between topics. E.g. when I go from Cooking sorted by Votes, to Football, "Votes" is still highlighted green, but its actually sorted by date created**

### Individual Article / Comments

- [✅] Individual articles are served with comments
- [✅] Can vote on comments
- [✅] Can vote a maximum of once in either direction per page load
- [✅] Votes are persistent when page is refreshed
- [✅] Can post new comments, which are persistent
- [✅] Can only delete comments of logged in user
- [✅] Deleted comments don’t re-appear on re-render/refresh

## Error Handling

- [x] Bad url - **e.g. `/bananas/are/a/fruit` i get a blank screen**
- [x] Bad topic slug in url - **e.g. `/bananas` "Value not found" could be a more useful error message**
- [x] Bad article id in url **"Bad request" for `/cooking/hello`, "Value not found" for `/cooking/9999` could be more useful error messages**
- [✅] Post comment: (No text in comment body / Can you post without logging in?)

**Maybe being a bit picky on the above, but worth looking at if you have time**

## Code

- [✅] Well named components
- [x] Functional components used where possible - **If it doesn't have state, it doesn't need to be a class. E.g. ArticleSmall & ArticleLarge have a look through all your components and check this**
- [✅] Components reused where possible (`Articles` / `Voter`...)
- [✅] Minimal state - don't hold derivable data in state
- [✅] Set state correctly, using previous state where possible
- [✅] Handle asynchronicity clearly (i.e. isLoading pattern)
- [✅] Functions are DRY (`handleChange` for controlled components / api calls)
- [x] Use object destructuring where possible - **Mostly ✅ - a few places where you could repeat this.props less, if I was being picky**
- [✅] Tidy? If not: ESLint / Prettier
- [✅] `node_modules` git ignored
- [x] No `console.log`s / comments
- [✅] remove unnecessary files (e.g. App.test.js)

**Articles.js:**
[x] _componentDidUpdate would be neater/more DRY if you destructured sortby, order and topicslug from props and state, and could even assign the three conditions to variables to make it even more readable_

**VotingButtons / api"** _a nice challenge for you might be to merge your api.patch functions into a single one to save you having to use an if statement in your `requestVoteChange` method_

**AddCommentForm / Comment / SingleArticle** _I would argue that fetching all the comments again after someone has posted one or deleted one is a bit inefficient, and could lead to undesired behaviour if there were other people commenting/deleting at the same time, or you implemented some sorting functionality on your comments (my comment might end up way down the page, or I might think i've deleted a different comment by mistake!) - instead, maybe you could add the successfully posted comment to the state of the SingleArticle component & remove the deleted comment from the state of the SingleArticle component, meaning the entire comments list does not have to re-render_

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END

### Additional functionality:

- [ ] navigate over pages of articles (if implemented in back-end)
- [ ] navigate over pages of comments (if implemented in back-end)
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
