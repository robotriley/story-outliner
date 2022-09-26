What is the idea?
 "Story outline builder and visualizer"

**What functionality does our app need?**
1. What libraries do we need or can we use?
2. What tables in the DB do I need to accomplish this?
3. What methods/functions will I need to write?
	- What arguments will these functions accept/pass?
4. What does the front end consist of? (user interface / layout)
  Inputs, buttons for expanding/collapsing, an image with the stoy arc graph, input values passed into the story arc "bubbles."

1. - I need "expand-collapse" for the collapsible forms
   - I need something for the "pop up on hover" feature for showing the definitions of the different story points

2. I don't need tables in the DB. this is front end only

3. - I need to write a method/function to handle the expanding/collapsing of child forms within the parent form
   - I need to write a funciton for populating the story arc graphic with the user's input
    - passing the user's input into the corresponding piece of the story on the arc graphic

4. The front end consists of:
    - The parent form, consisting of the 5 main story points
      - Each story point has an input and an 'expand' button. When clicked, the button reveals a child form (complete with its own 5 point story
        structure) beneath the corresponding story point. It is collapsible.
    - A story arc graphic. This will serve as a basic visual representation of the user's outlined story.
      The content from the form's input fields will populate the corresponding "bubble" on the graph's 5 story points.
      Each "bubble" will be clickable. On click, the child form's input (if any) will be visible beneath the parent.

**Libraries/Tools** (it helps to have backup libraries for any given functionality)
BrowserRouter, useState
d
**Categorize your tech specs into 2 main categories: ESSENTIAL and NON-ESSENTIAL

ESSENTIAL means: what you need to demonstrate your concept.
eg:

NON-ESSENTIAL


**Categorize ESSENTIAL and NON-ESSENTIAL into DO KNOW and DON'T KNOW

DO KNOW(anything you've done end-to-end previously)
take these tasks and timebox them. Add a buffer of AT LEAST 50%.
- user authentication with devise (3h)
- deployment (90m)
- ticket model (1h)
- event model (2h)

DON'T KNOW(anything you haven't done 100%)
- payment processing
- user seat choice (front end)
- seat data modeling (back end)

**Isolate and Sandbox tasks from DON'T KNOW**
Work on Stripe payment processing in a tiny little repo.
(it only has that feature. it's just a payment form If we run into errors in the sandbox repo, it's not models, controllers, params, forms, react, etc.)

Work on user seat choice with index.html, main.css and main.js

**AUTH/validation should be the last thing you do**
Or at least do it as late as possible.

Assume that at least 33% of your tasks will need to be split into their own subtasks.

Start project management process.