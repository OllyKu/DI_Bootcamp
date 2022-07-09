// For each of the questions, find 2 WAYS of accessing :

// 1. The div DOM node?
body.children[0]
body.firstChild()

// 2. The ul DOM node?
body.lastChild()
li.parentNode()

// 3. The second li (with Pete)?
ul.children([1])
ul.lastChild()