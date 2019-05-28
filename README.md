## Simon

Simon is a simple memory game where the player is given a click pattern that they have to replicate. After they successfully reproduce the pattern, the game will add one more item to the sequence and the user will need to replicate the patter again from the start.

I chose this project because it required solving a number of problems related to how the game compares its own sequence with the user's input and also communicates to the user when it’s their turn to provide input. this implementation features very few UI components and reuses elements of the UI to share only the information relevant to a user at a given time.

![Simon says](https://www.budimir.dev/simon/Simon%20Screenshot.png 'Simon!')

### Features

---

##### MVP Features (Completed)

**Normal Game Mode**
Each square flashes white indicating to the user what their click pattern should be.

**Round Counter**
When the user completes the pattern the round counter will increment by 1.

**Responsive Design**
The game functions the same way on screen sizes for all major devices. The user can load the game at one window size, adjust the window and continue playing all in the same instance. This implementation has **no media queries** but does require some javascript to make the design adjust to the window in real-time.

##### Additional Features (Completed)

**User Timeout**
If it's the users turn to input the pattern and they take no action for 5 seconds, they will lose the game. All error states produce a modal inside of the DOM instead of a browser alert.

**User Feedback**
The header of the page will indicate the state of the game to the user. These changes are animated using CSS so the user is more likely to see them.

1. Default state, header = "Simon!"
2. Waiting for the user to select a mode, header = "Get ready!"
3. Displaying the patter for the user, header = "Simon says.."
4. Waiting for the user to complete the pattern, header = "Your turn!"

Additionally, I implemented short sounds that play when the user clicks a square to further confirm that the click action registered.

**Cat Mode**
If the user selects "Cat Mode" they will see a flash of a cat photo instead of a white flash indicating the sequence of clicks. This sequence of cat images is generated by the [Cat API](https://thecatapi.com) and is different in each new instance of the game.

### Technologies Used

---

**Javascript:**
The Javascript behind this game is divided into three categories.

1. Game Logic
2. Cat API
3. Game Box Interactivity

**CSS:**
In most cases, instead of animating DOM using Javascript, we're using JS to remove and add CSS classes that contain the animation rules.

1. Look & Feel
2. Animations:

**HTML:**
Contains all elements that need to be loaded prior to any user interactions. This includes:

1. Header
2. Gamebox / Squares
3. Start Button
4. Audio Files

**CAT API:**
The app is fetching from the [Cat API](https://thecatapi.com) to produce a series of cat images in "Cat Mode". When the page loads, the app calls the API and preloads to cat photos into a "buffer". This was set up so that when the user selects "Cat Mode" the patter can display right away without taking time to load an image. There will always be a buffer of tow cat image loaded before they are needed to ensure a more seamless gameplay experience.

```
// Preloads two cat images into the buffer.

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 4; i += 1) {getData(url);}
    const promise = new Promise(function(resolve) {
        setTimeout(function() {
            resolve(catBuffer);
        }, 500);
    });
    promise.then(function() {
        document.querySelector('.cats-temp').innerHTML = `<img src="${catBuffer[0]}" id="random-cat">
        <img src="${catBuffer[1]}" id="random-cat">`;
    });
});
```

### What's In the Repo?

---

-  **main.js**
-  **style.css**
-  **index.html**
-  **/sounds:** Contains four sound files used when a user clicks on a square.
-  **README.md**

##### Contribution Guidelines

Fork and clone this repo, contribute from a new branch.

-  Main repository: https://github.com/dbudimir/simon
-  Issue tracker: https://github.com/dbudimir/simon/issues

Contact me: dav.budimir@gmail.com
