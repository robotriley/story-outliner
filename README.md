What is the idea?
 "Story outline builder and visualizer"

**What functionality does our app need?**
1. What libraries do we need or can we use?
2. What tables in the DB do I need to accomplish this?
  ...
3. What methods/functions will I need to write?
  Something for expanding / collapsing nested forms within the main form segments.
	- What arguments will these functions accept/pass?
4. What does the front end consist of? (user interface / layout)
  Inputs, buttons for expanding/collapsing, an image with the stoy arc graph, input values passed into the story arc "bubbles."


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