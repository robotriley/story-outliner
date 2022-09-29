What is the idea?
 "Story outline builder and visualizer"

**What functionality does our app need?**
1. What libraries do we need or can we use?
2. What tables in the DB do I need to accomplish this?
3. What methods/functions will I need to write?
	- What arguments will these functions accept/pass?
4. What does the front end consist of? (user interface / layout)
  Inputs, buttons for expanding/collapsing, an image with the stoy arc graph, input values passed into the story arc "bubbles."

1. - [X] I need "expand-collapse" for the collapsible forms
   - [X] I need something for the "pop up on hover" feature for showing the definitions of the different story points

2. [X] I don't need tables in the DB. this is front end only

3. - [X] I need to write a method/function to handle the expanding/collapsing of child forms within the parent form
   - [X] I need to write a function for populating the story arc graphic with the user's input,
           passing the user's input into the corresponding piece of the story on the arc graphic

4. The front end consists of:
    - [X] The parent form, consisting of the 5 main story points
      - [X] Each story point has an input and an 'expand' button. When clicked, the button reveals a child form (complete with its own 5 point story
        structure) beneath the corresponding story point. It is collapsible.
    - [X] A story arc graphic. This will serve as a basic visual representation of the user's outlined story.
          [X] The content from the form's input fields will populate the corresponding "bubble" on the graph's 5 story points.
          [ ] Each "bubble" will be clickable. On click, the child form's input (if any) will be visible beneath the parent.


Stretchies:

  - [x] Add <title> to your app so that it doesn't show "React app"
  - [x] Add / create a favicon so that it doesn't show the React logo
  - Persisting data to a db.json
  - Better color scheme (not 0, 0, 0 flat black background)
  - input placeholder text more readable color. (not flat grey)
  - [x] icon next to the title header


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
- 
- 
- 

**Isolate and Sandbox tasks from DON'T KNOW**




**AUTH/validation should be the last thing you do**

Or at least do it as late as possible.

Assume that at least 33% of your tasks will need to be split into their own subtasks.

Start project management process.