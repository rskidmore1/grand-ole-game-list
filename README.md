#Grand ole' Game List



### Install instructions
- npm install
- npm run start
---------------
## Future Features
### Search feature
Create a function that concats publisher and game name together and pushes it to searchFields object with {concatString: '', id: ''} and use filter to search searchFields.fiter((field) => field.concatString.contains(input)).
### Edit Feature
Create an Edit button by each game list item that loads that record into the fields of the Entry Form. After changing the fields and pressing the submit button, the function will find the game id in games array and update the field

### Persistent Storage
For proof of concept, I would use Local Storage. I would create an if statement that checks if there is Local storage using localStorage?.getItem('games'). If there is none, it will set local storage using localStorage.setItem('games', games). When a new entry is added, it will add the new entry to state using setGames(games.concat({newGameEntry})).

I will eventually upgrade this to a mySQL database with the same id, publisher, name, nickame, and rating schema.

### Backend
I will create a back end to enter and retrieve records from the database using Get, Post and Put calls.

## Project ideas

### Component Structure
There are two main UI parts: Games List and Entry Form. The Entry Form is used in two different places.

### Linting
I add linting to every project because that will keep my code uniform and catch errors. I choose Airbnb's eslint-config-airbnb for small projects because it will enforce an abundance of good practices without having to select each one. Saving automatically formats my code. For larger or more long term projects, I hand select linting rules that support it's long term goals and make my day to day life easier.

### NPM Dependencies
- **Tailwindcss** is a CSS framework that allows making simple css quickly.
- **Mantine.dev** is a React component library that makes adding the Accordion and adding functionality very fast.
- **eslint-config-airbnb** adding best linting practices functionality with a quick install.

### Wireframe
[Game List Wireframe](https://www.figma.com/file/BTLVnni09C9DPcNyxWbAQZ/Games-List?node-id=0%3A1). I chose to make a simple black and white theme because I love the UI of Robinhood over Fidelity.com's trading platform. That style with a splash of color seems to be the "smart money". I left it without extra color or flourishes because while creating a good basic layout in black and white is fast adding color and other element that improve (and do not detract) it requires time and design acumen.
The design is also mobile responsive. The Entry Form folds into an Accordion element in mobile view.

### Font
I selected Abeezee because it is a clean san-sarif that is not commonly used. Meaning, it will not look like every other site.
