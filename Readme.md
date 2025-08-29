What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById --- This is what captures the element of that id.
getElementsByClassName ---- This is what captures the element of that classname.
querySelector ---- If selected by any class name, id name, or CSS style, the first element that matches will be returned.
querySelectorAll --- If selected by any class name, id name, or CSS style, all the elements that match will be returned,not just the first one.

How do you create and insert a new element into the DOM?
Ans:
 parent element = section
first create a element (div, li, ol) -- const newElement = document.createElement("div")
Then  will add it to the parent element ---- section.appendChild(newElement)

What is Event Bubbling and how does it work?
Ans:
 When clicking with an event handler, the first thing that triggers is the element itself, and then, if it has any parent elements, those will also be triggered.such as,
event bubbling -> child-parent-grandparent....

What is Event Delegation in JavaScript? Why is it useful?
Ans:
 By using an event handler on the parent element, the child element’s events can also be handled.If there are many child elements, they can be captured easily, and it’s not necessary to use an event handler on each of them, which reduces memory usage and makes it more optimized

What is the difference between preventDefault() and stopPropagation() methods?
Ans:
preventDefault() ---  cancels the default event behavior. That means if there is any default action of an element, it will be prevented. For example, when a form’s submit button is clicked, by default the page reloads, but if preventDefault() is used, that will not happen.

stopPropagation() ---- Since event bubbling occurs, if stopPropagation() is used on an element, the event will stop there and will not continue executing towards the parent elements.

Now it can be said that stopPropagation() stops event bubbling so that parent elements don’t execute, while preventDefault() stops the browser’s default behavior.






