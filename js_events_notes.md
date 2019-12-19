# JS EVENTS & EVENT LISTENERS

## EVENTS

- Notifications that are sent to notify me / the code that something has happened on the webpage
- E.g: Clicking a button, resizing a window, scrolling down, pressing a key, etc etc....

## EVENT LISTENERS

- A function that performs the action based on a certain event.
- It waits for a specific event to happen.

## HOW EVENTS ARE PROCESSED

- Just like how there is the execution stack in the engine for my functions.

- There is a 'message que' in the JS engine, that holds all of my JS events.

- The events in the message que are only processed once my execution stack has been cleared.

- When an event is ready to be processed the browser engine grabs the event, gives it its own execution context and is placed in the execution stack.
