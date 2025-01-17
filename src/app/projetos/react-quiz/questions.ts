export type Answer = {
    id: number,
    label: string,
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

export type Result = {
    marks: number,
    score: number,
    situation: string;
}

export const questions:Quiz[] = [
    {
        id:1,
        question:'Which of the following are the advantages of React.js?',
        content:'',
        explanation:'D is the correct option as all of the above statements are the advantages of React.js.',
        answers:[
            {
                id:101,
                label:"a",
                answer:"React.js can increase the application's performance with Virtual DOM.",
                selected:false,
                correctAnswer:false
            },
            {
                id:102,
                label:"b",
                answer:"React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.",
                selected:false,
                correctAnswer:false
            },
            {
                id:103,
                label:"c",
                answer:"React.js can render both on client and server side.",
                selected:false,
                correctAnswer:false
            },
            {
                id:104,
                label:"d",
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
                id:201,
                label:"a",
                answer:"React.js has only a view layer. We have put your code for Ajax requests, events and so on.",
                selected:false,
                correctAnswer:false
            },
            {
                id:202,
                label:"b",
                answer:"The library of React.js is pretty large.",
                selected:false,
                correctAnswer:false
            },
            {
                id:203,
                label:"c",
                answer:"The JSX in React.js makes code easy to read and write.",
                selected:false,
                correctAnswer:true
            },
            {
                id:204,
                label:"d",
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
                id:301,
                label:"a",
                answer:"Constructor",
                selected:false,
                correctAnswer:false
            },
            {
                id:302,
                label:"b",
                answer:"Class",
                selected:false,
                correctAnswer:true
            },
            {
                id:303,
                label:"c",
                answer:"Object",
                selected:false,
                correctAnswer:false
            },
            {
                id:304,
                label:"d",
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
                id:401,
                label:"a",
                answer:"Class",
                selected:false,
                correctAnswer:false
            },
            {
                id:402,
                label:"b",
                answer:"Factory",
                selected:false,
                correctAnswer:false
            },
            {
                id:403,
                label:"c",
                answer:"Render",
                selected:false,
                correctAnswer:false
            },
            {
                id:404,
                label:"d",
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
                id:501,
                label:"a",
                answer:"Hello World 1",
                selected:false,
                correctAnswer:false
            },
            {
                id:502,
                label:"b",
                answer:"Hello World 2",
                selected:false,
                correctAnswer:false
            },
            {
                id:503,
                label:"c",
                answer:"Hello World 1 Hello World 2",
                selected:false,
                correctAnswer:false
            },
            {
                id:504,
                label:"d",
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
                id:601,
                label:"a",
                answer:"A permanent storage.",
                selected:false,
                correctAnswer:true
            },
            {
                id:602,
                label:"b",
                answer:"Internal storage of the component.",
                selected:false,
                correctAnswer:false
            },
            {
                id:603,
                label:"c",
                answer:"External storage of the component.",
                selected:false,
                correctAnswer:false
            },
            {
                id:604,
                label:"d",
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
                id:701,
                label:"a",
                answer:"TRUE",
                selected:false,
                correctAnswer:true
            },
            {
                id:702,
                label:"b",
                answer:"FALSE",
                selected:false,
                correctAnswer:false
            },
            {
                id:703,
                label:"c",
                answer:"Can be true or false",
                selected:false,
                correctAnswer:false
            },
            {
                id:704,
                label:"d",
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
                id:801,
                label:"a",
                answer:"SetState",
                selected:false,
                correctAnswer:false
            },
            {
                id:802,
                label:"b",
                answer:"Render with arguments",
                selected:false,
                correctAnswer:false
            },
            {
                id:803,
                label:"c",
                answer:"Props",
                selected:false,
                correctAnswer:true
            },
            {
                id:804,
                label:"d",
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
                id:901,
                label:"a",
                answer:"Destruction",
                selected:false,
                correctAnswer:false
            },
            {
                id:902,
                label:"b",
                answer:"Initialization",
                selected:false,
                correctAnswer:false
            },
            {
                id:903,
                label:"c",
                answer:"State/Property Updates",
                selected:false,
                correctAnswer:false
            },
            {
                id:904,
                label:"d",
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
                id:101,
                label:"a",
                answer:"Invoke code after the setState operation is done.",
                selected:false,
                correctAnswer:true
            },
            {
                id:102,
                label:"b",
                answer:"Replace the state completely instead of the default merge action.",
                selected:false,
                correctAnswer:false
            },
            {
                id:103,
                label:"c",
                answer:"Access the previous state before the setState operation.",
                selected:false,
                correctAnswer:false
            },
            {
                id:104,
                label:"d",
                answer:"None of the above.",
                selected:false,
                correctAnswer:false
            },

        ]
    }
]