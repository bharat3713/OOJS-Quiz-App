-------------------------------------------------------------------------------------------------------------------
Framework: Object oriented Javascript, prototype
-------------------------------------------------------------------------------------------------------------------

Excercise: Need to make wizard component with questions
-------------------------------------------------------------------------------------------------------------------
- Should support 1 components radio button group
- Each question and answer can be assigned by component type
- Should be flexible to add more question
- Code should be object oriented, modularized
- You can use prototype, classes, inheritance
- Solution should be in individual components interacting with each other
- Extensible folder structure for scalable application
- Build system to build dev/prod code to deploy


Data:
-------------------------------------------------------------------------------------------------------------------
questions:[
	{id:'Q-101', title:'What is India\'s capital', type:'radiogroup', options:['Delhi','Mumbai','Kolkatta','Pune']},
	{id:'Q-103', title:"Grand Central Terminal, Park Avenue, New York is the world's", type:'radiogroup', options:['largest railway station','highest railway station','longest railway station','None of the above']},
	{id:'Q-103', title:'Entomology is the science that studies', type:'dropdown', options:['Behavior of human beings','Insects','The origin and history of technical and scientific terms','The formation of rocks']}
]


Requirements:
-------------------------------------------------------------------------------------------------------------------
1. Should not be able to move next if question is unanswered (next button should be disabled).
2. Previous button should be disabled on 1st question
3. If user has answered all question on last question "Submit" button should be there
4. User should be able to navigate to previous qustion and change the answer
5. Should preserve state on prev and next if selected
6. Supported component can be extended to more component like dropdown for answer selection 
7. Unit tests for components
8. Status bar showing attemted/total current question no.


Things to Avoid
-------------------------------------------------------------------------------------------------------------------
1. Submitting one js file with functions doing all the work
2. Open functions coding 
3. Everything in html file
4. Object literal coding (plain objects with functions)


COMMANDS
-------------------------------------------------------------------------------------------------------------------

1.npm install
2.npm start



