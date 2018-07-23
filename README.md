[![Build Status](https://travis-ci.com/DevinTyler26/28-routing-and-testing-notes-app.svg?branch=lab-28)](https://travis-ci.com/DevinTyler26/28-routing-and-testing-notes-app)
![cf](http://i.imgur.com/7v5ASc8.png) 28: To Do App
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork called `lab-28`
  * Submit a pull request to your repository
  * Submit a link to your pull request on canvas
  * Set up Travis CI and update your repo to utilize the [Travis CI Github app](https://github.com/marketplace/travis-ci). *Use the free instsallation.*
  * Submit a question, observation, and how long you spent on Canvas  
  * DO NOT reuse the same exact SCSS styling as lecture code. Change colors, sizes, and fonts around and find your own branding. **AUTOMATIC 0's will be given for using the same SCSS as lecture code**. 

## Requirements  
#### Configuration  
Your lab directory must include  
* **README.md** -- with documention about your lab
* **.babelrc** -- with all dependencies and dev-dependencies 
* **.eslintrc.json** -- with the class .eslintrc.json file
* **.gitignore** -- with a robust .gitignore
* **.eslintignore** -- with the class .eslintignore
* **package.json** -- with all dependencies and dev-dependencies 
* **webpack.dev.js** 
* **webpack.common.js** 
* **webpack.prod.js** 
* **src/** -- containing the frontend code
* **src/main.js** -- for appending your app to the DOM
* **src/components/** -- containing your components
* **src/components/app/app.js** -- containing your App component
* **src/components/landing/landing.js** -- containing your Landing component
* **src/components/dashboard/dashboard.js** -- containing your Dashboard component
* **src/components/note-create-form/note-create-form.js** -- containing your NoteCreateForm component
* **src/components/note-list/note-list.js** -- containing your Notelist component
* **src/components/note-item/note-item.js** -- containing your NoteItem component
* **src/style** -- containing your sass
* **src/style/main.scss** -- for importing and including reset and base
 
#### Feature Tasks 

Create the following components and structure them according to the following diagram.  
``` 
App
  Landing
  Dashboard
    NoteCreateForm
    NoteList
      Noteitem
```
###### App Component
* The App component should manage the frontend routes and have a navbar
* the `/` route should display the `Landing` component
* the `/dashboard` route should display the `Dashboard` component

###### Landing Component
* The Landing component should display a brief description of the notes app

###### Dashboard Component 
* The Dashboard component should manage the entire **application state**
* The state should contain a notes array
* It should have a `addNote(note)` method that adds a note to `state.notes`
  * each note that gets added should have the following data
    * `_id`: always should contain the result of `uuid()`
    * `editing`: false by default
    * `completed`: false by default
    * `content`: user provided content
    * `title`: user provided title
* It should have a `removeNote(note)` method that removes a note from `state.notes` based on its `id`

###### NoteForm Component
* `onSubmit` the NoteForm should add a note to the application state

###### NoteList Component 
* should display an unordered list of NoteItem components

###### NoteItem
* should display the notes content and title
* should display a delete button
  * `onClick` the note should be removed from the application state

#### Test
* Test Dashboard
  * Test the initial state
  * Test for changes to the state
* Test NoteCreateForm
  * Test the initial state
  * Test for changes to the state
 
 #### SCSS
 * Create a `_base`, `_vars`, and `_reset` stylesheet in your `style` directory. The `_reset` can be the same as lecture code. However, do NOT copy lecture code's styles and apply your own styling to your app. 

#### Documentation  
Add your Travis badge to the top of your README (even if your build is failing) and write a description of the project. 

#### Stretch Goals
* Read [Enzyme testing docs](https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md) and write more tests for your components.
* Create an `updateNote` handler that updates a note based off its `_id`. 
* Utilize local storage for persistence of your data
* Find a way to use a hashmap in this lab
* Make it pretty with SCSS
