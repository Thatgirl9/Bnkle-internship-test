# Blog Post 📝

The Blog Post is a landing page that displays a list of posts fetched from an API. When hovered it displays a **Learn More** text that presents a modal showing more information about the post like the Author's Image. It routes to an **Analytics** *(/analytics)* page, that tracks and shows how often a post has been clicked in a tabular form.

**[Blog Post](https://blog-posts-test.netlify.app/)**

## Technologies Used ⚙ and Reference Links 🔗.
- **Technologies**
- [Vite + React](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) - Used to create a React Application supporting Typescript.
- [React Routing](https://reactrouter.com/en/main/start/tutorial) - Used to implement React Routing to route through *(/home)* and *(/analytics)*.
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started) - Used to track the number of clicks of each post.
- [Jest](https://jestjs.io/docs/getting-started) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Used to implement testing.
- **Designs**
- [First Image](https://raw.githubusercontent.com/Codeinwp/front-end-internship-test/main/img/posts.jpg) - Represents the home page after successfully fetching the posts data from the API. The last post represents the hovered state, displaying the **Learn More** text.
- [Second Image](https://raw.githubusercontent.com/Codeinwp/front-end-internship-test/main/img/posts-modal.jpg) - Represents the Modal after the **Learn More** text has been clicked.


## Approach and Key Decisions in the Development Process 🏗.

### 1.  Understanding Requirements.
  The first step involved understanding the project requirements. This includes undergoing the design specifications, application setup, responsiveness and dos and don'ts.

### 2. Planning and strategy.
  I planned how to approach the project that satisfied the requirements. 


### 3. Technology Selection.
I used technologies and tools based on project requirements and scalability. Key Decision: Using Redux-Toolkit over Context API, why? Redux is a JS library for maintainable global state management. Redux Toolkit is Redux's official recommended approach for writing its logic, it simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications. I decided to use Redux-Toolkit in line with the project requirement because I wanted to expand my knowledge and improve my skills in it since I have little proficiency in it, subsequently, it is recommended for a bigger application. 

### 4. Testing.
Unit testing was implemented to ensure the application worked as expected.

### 5. Deployment.
I deployed using Netlify Pages to ensure reliability.

### 5. Documentation.
Complete documentation was created. This covers information about the Blog Post Application, the technologies and tools utilised, major approaches and key decisions taken during the development process, and instructions for running the Blog Post application. 


## How to Install and Run Blog Post📝.

- **Prerequisites- [Node.js](https://nodejs.org/en) installed and [Git](https://www.git-scm.com/) installed**.

- Fork this Repository
- Clone your forked repository into your local machine terminal using this command.
```
  git clone githubForkedRepoUrl
```
- Install NPM packages by running this command in your terminal.
 ```
  npm install
 ```
- To view the website on your local server,
``` 
npm run dev
```
Click the link that shows.


## How to Contribute to Blog Post📝.

- After installing the NPM packages from the step above.

- Create a branch, by running the command in your terminal, this creates a new branch and checkout.
```
git branch -M branchname
```

- Make your changes

- After making your changes. Run the following commands.
```
  git add .
```
to add all changed files, 
```
git commit -m "commit message"
```
write a short description stating what you did between the quotes, 
```
git push -u origin branchname
```
this pushes your changes to the main branch and prompts a pull request to compare both branches.

- Create a Pull Request.

- Wait for the pull request to be merged.


## Conclusion.

Thank you for reading🚀.

  
  

