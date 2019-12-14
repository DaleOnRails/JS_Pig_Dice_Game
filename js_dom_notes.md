# ************* THE "DOM" EXPLAINED *********************

## SHORT VERSION

- HTML content is stored in the DOM.

- The DOM is an interface that allows JS to interact with the webpage (HTML code).

- JS interacts with the DOM using special methods (DOM methods).

## LONG VERSION

### WHAT IS DOM MANIPULATION

- DOM manipulation simply refers to getting JS code to interact with the browser (HTML)

### WHAT IS THE DOM (Document Object Model)

- Used to connect webpages to scripts such as JAVASCRIPT

- Is a structured representation of a HTML document

- Structure refers to the structure of a HTML Doc, like:

```html
(<body> ... </body>, <p> ... </p> etc, etc, .....)
```

- Think of each HTML tag/element as a box.
- & boxes within other boxes, example: (link tag inside of a paragraph tag)

- So.. the DOM gives me a fully OBJECT ORIENTATED representation of a HTML doc.

- For each of these boxes the DOM has an OBJECT for it.
- I can then access these DOM objects from my JS code.

- THIS IS HOW PARTS OF A HTML PAGE CAN GET FUNCTIONALITY AND MOVE AROUND LIKE ALL THE COOL EFFECTS I SEE. (particles.js)

**IMPORTANT NOTE:**

- Don't mix up the DOM and JS. They are two different things.

- Think of DOM as a language translator to allow JS & HTML to talk to each other.

- He translates JS lang for HTML so that HTML can understand and RESPOND....

- JS USES SPECIAL METHODS to change DOM objects. (and therefore the webpage itself).

- These methods are just like methods in normal JS (A function attached to an object literal), but instead.. the object they are attached to is the DOM.

- SIMPLE
