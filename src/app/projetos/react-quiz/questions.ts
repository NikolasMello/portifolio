export type Answer = {
    id: number,
    answer: string,
    selected: boolean,
    correctAnswer: boolean
}

export type Quiz = {
    id: number,
    question: string,
    content: string,
    explanation: string,    
    answers: Answer[]
}

export const questions:Quiz[] = [
    {
        id:1,
        question:'Which of the following are the advantages of React.js?',
        content:'',
        explanation:'D is the correct option as all of the above statements are the advantages of React.js.',
        answers:[
            {
                id:1,
                answer:"React.js can increase the application's performance with Virtual DOM.",
                selected:false,
                correctAnswer:false
            },
            {
                id:2,
                answer:"React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.",
                selected:false,
                correctAnswer:false
            },
            {
                id:3,
                answer:"React.js can render both on client and server side.",
                selected:false,
                correctAnswer:false
            },
            {
                id:4,
                answer:"All of the above.",
                selected:false,
                correctAnswer:true
            },

        ]
    },
    {
        id:2,
        question:' Which of the following is not a disadvantage of React.js?',
        content:'',
        explanation:'C is the correct answer. "The JSX in React.js makes code easy to read and write" is an advantage of React.js.',
        answers:[
            {
                id:1,
                answer:"React.js has only a view layer. We have put your code for Ajax requests, events and so on.",
                selected:false,
                correctAnswer:false
            },
            {
                id:2,
                answer:"The library of React.js is pretty large.",
                selected:false,
                correctAnswer:false
            },
            {
                id:3,
                answer:"The JSX in React.js makes code easy to read and write.",
                selected:false,
                correctAnswer:true
            },
            {
                id:4,
                answer:"The learning curve can be steep in React.js.",
                selected:false,
                correctAnswer:false
            },

        ]
    },
    {
        id:3,
        question:'A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?',
        content:'',
        explanation:'B is the correct answer. A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class.',
        answers:[
            {
                id:1,
                answer:"Constructor",
                selected:false,
                correctAnswer:false
            },
            {
                id:2,
                answer:"Class",
                selected:false,
                correctAnswer:true
            },
            {
                id:3,
                answer:"Object",
                selected:false,
                correctAnswer:false
            },
            {
                id:4,
                answer:"DataObject",
                selected:false,
                correctAnswer:false
            },

        ]
    },
    {
        id:4,
        question:'Which of the following acts as the input of a class-based component?',
        content:'',
        explanation:'D "props" is the correct answer.',
        answers:[
            {
                id:1,
                answer:"Class",
                selected:false,
                correctAnswer:false
            },
            {
                id:2,
                answer:"Factory",
                selected:false,
                correctAnswer:false
            },
            {
                id:3,
                answer:"Render",
                selected:false,
                correctAnswer:false
            },
            {
                id:4,
                answer:"Props",
                selected:false,
                correctAnswer:true
            },

        ]
    },
    {
        id:5,
        question:'Which are the correct phases of component lifecycle?',
        content:'var Helloword=(props)=> \n' 
                + ' {  \n'  
                + '  return( \n'  
                + '  <div>  \n' 
                + '  Hello World 1  \n' 
                + '  </div>  \n' 
                + '  <div>  \n' 
                + '  Hello World 2  \n' 
                + '  </div>  \n' 
                + '  );  \n' 
                + ' } \n'  
                + ' ReactDOM.render(<Helloworld/>,mountNode)  ',
        explanation:'D is the correct option. The two adjacent elements in JSX should be wrapped in an element so, this program will result an error.',
        answers:[
            {
                id:1,
                answer:"Hello World 1",
                selected:false,
                correctAnswer:false
            },
            {
                id:2,
                answer:"Hello World 2",
                selected:false,
                correctAnswer:false
            },
            {
                id:3,
                answer:"Hello World 1 Hello World 2",
                selected:false,
                correctAnswer:false
            },
            {
                id:4,
                answer:"Error",
                selected:false,
                correctAnswer:true
            },

        ]
    },
    {
        id:6,
        question:'What is a state in React?',
        content:'',
        explanation:'A "State & Props" is the correct answer.',
        answers:[
            {
                id:1,
                answer:"A permanent storage.",
                selected:false,
                correctAnswer:true
            },
            {
                id:2,
                answer:"Internal storage of the component.",
                selected:false,
                correctAnswer:false
            },
            {
                id:3,
                answer:"External storage of the component.",
                selected:false,
                correctAnswer:false
            },
            {
                id:4,
                answer:"None of the above.",
                selected:false,
                correctAnswer:false
            },

        ]
    },
    {
        id:7,
        question:' Does React.js create a VIRTUAL DOM in the memory?',
        content:'',
        explanation:'A is the correct option as React.js creates a VIRTUAL DOM in the memory.',
        answers:[
            {
                id:1,
                answer:"TRUE",
                selected:false,
                correctAnswer:true
            },
            {
                id:2,
                answer:"FALSE",
                selected:false,
                correctAnswer:false
            },
            {
                id:3,
                answer:"Can be true or false",
                selected:false,
                correctAnswer:false
            },
            {
                id:4,
                answer:"Cannot say",
                selected:false,
                correctAnswer:false
            },

        ]
    },
    {
        id:8,
        question:'Which of the following is used to pass data to a component from outside in React.js?',
        content:'',
        explanation:'C is the correct answer. Props are used to pass data to a component from outside in React.js.',
        answers:[
            {
                id:1,
                answer:"SetState",
                selected:false,
                correctAnswer:false
            },
            {
                id:2,
                answer:"Render with arguments",
                selected:false,
                correctAnswer:false
            },
            {
                id:3,
                answer:"Props",
                selected:false,
                correctAnswer:true
            },
            {
                id:4,
                answer:"PropTypes",
                selected:false,
                correctAnswer:false
            },

        ]
    },
    {
        id:9,
        question:'Which of the following lifecycle events React components have at the highest level?',
        content:'',
        explanation:'D is the correct option.',
        answers:[
            {
                id:1,
                answer:"Destruction",
                selected:false,
                correctAnswer:false
            },
            {
                id:2,
                answer:"Initialization",
                selected:false,
                correctAnswer:false
            },
            {
                id:3,
                answer:"State/Property Updates",
                selected:false,
                correctAnswer:false
            },
            {
                id:4,
                answer:"All of the above.",
                selected:false,
                correctAnswer:true
            },

        ]
    },
    {
        id:10,
        question:'Why is the usage of setState?',
        content:'',
        explanation:'A is the correct option.',
        answers:[
            {
                id:1,
                answer:"Invoke code after the setState operation is done.",
                selected:false,
                correctAnswer:true
            },
            {
                id:2,
                answer:"Replace the state completely instead of the default merge action.",
                selected:false,
                correctAnswer:false
            },
            {
                id:3,
                answer:"Access the previous state before the setState operation.",
                selected:false,
                correctAnswer:false
            },
            {
                id:4,
                answer:"None of the above.",
                selected:false,
                correctAnswer:false
            },

        ]
    }
]