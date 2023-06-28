"use client"
import { useState, Fragment } from "react"
import { Quiz, Answer, questions, checkQuestions, CheckedQuestion } from "./questions"
import { FaCalculator, FaCheck, FaFile, FaPen, FaReact, FaRegThumbsUp } from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";

export default function ReactQuizContent(){

    const [quiz, setQuiz] = useState<Quiz[]>(questions);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [resultModal, setResultModal] = useState<boolean>(false)

    const nextQuestion:()=> void = () => {
        if(currentQuestion <= 8){
            setCurrentQuestion(currentQuestion + 1)
        } else if(currentQuestion > 8 ){
            console.log('aqui')
            setResultModal(true)
        }
    }

    const prevQuestion:()=> void = () => {
        if(currentQuestion >= 1){
            setCurrentQuestion(currentQuestion - 1)
        }
    }

    const selectAnswer =(event:React.ChangeEvent<HTMLInputElement>): void => {
        let updateQuiz:Quiz[] = [...quiz];
        let findIndex = quiz[currentQuestion].answers.findIndex( answer => answer.id.toString() === event.target.id);
        if(findIndex >= 0){
                for(let i:number = 0; i < updateQuiz[currentQuestion].answers.length; i ++){
                    updateQuiz[currentQuestion].answers[i].selected = false;
                }
                updateQuiz[currentQuestion].answers[findIndex].selected = true;
                setQuiz(updateQuiz);
        }
    }

    const selectQuestion = (questionNumber: number) => {
        let index: number = questionNumber - 1;
        setCurrentQuestion(index);
    }

    const isQuestionChecked:(id:number)=> boolean =(id)=> {
        let index = id-1;
        let itemIndex:number = quiz[index].answers.findIndex(answer => answer.selected === true);
        
        if(itemIndex >=0 ){          
            return true;
        } else {
            return false;
        }
    }

    const allAnswersAreChecked:()=> boolean = ()=> {
        let status = false;
        for(let i:number = 0; i < quiz.length; i ++){
            let findIndex = quiz[i].answers.findIndex( answer => answer.selected === true)
            if(findIndex === -1){
                break;
            } else {
                status = true;
            }
        }
        return status;
    }

    const answerLabelStyle:(correctAnswer:boolean, selectedAnswer:boolean)=> string =(correctAnswer, selectedAnswer)=> {
        if(correctAnswer && selectedAnswer){
            return "bg-emerald-300 dark:bg-emerald-400 bg-opacity-30 dark:bg-opacity-50 dark:text-white p-2 mb-2 rounded-lg";
        } else if(!correctAnswer && selectedAnswer) {
            return "bg-rose-400 bg-opacity-30 dark:bg-opacity-60 p-2 mb-2 dark:bg-opacity-50 dark:text-white  rounded-lg";
        } else {
            return "p-2 mb-2 rounded-lg";
        }
        
    }

    const loadCode:(code:string)=>string =(code)=>{
        if(code.length > 0){
            return "text-gray-700 dark:text-gray-50 p-4 rounded-lg bg-sky-100 dark:bg-sky-950 my-4 overflow-x-auto";
        } else {
            return "";
        }      
    }

    return (
        <div className="grid grid-cols-3 gap-2 max-w-7xl items-center mx-auto px-4 md:px-10 pt-20 pb-3">
            <div className="col-span-3 text-center text-base py-3">
                <FaReact className="w-10 h-10 text-sky-500 mx-auto" />
                <h3 className="text-sky-500">React Quiz</h3>
            </div>
            <div className="col-span-3">
                <div className="grid grid-cols-3 gap-2 bg-card card-shadow rounded-lg md:p-3 min-h-[26rem]">
                    <div className="col-span-3 md:col-span-2 py-2 px-4 md:border-right">
                        <form className="min-h-[22rem] ">
                        <h6 className="text-sky-500 mb-2 select-none">Questions</h6>
                            <p>
                                <span className="text-sky-500 font-bold">{quiz[currentQuestion].id}.</span> { quiz[currentQuestion].question}
                            </p>
                            <pre className={loadCode(quiz[currentQuestion].content)}>{quiz[currentQuestion].content}</pre>
                            <div className="my-6 space-y-6" >
                                {quiz[currentQuestion].answers.map((answer) => (
                                        <div className="flex items-center gap-x-3" key={answer.id}>
                                        <input
                                            id={answer.id.toString()}
                                            name={answer.id.toString()}
                                            type="radio"
                                            value={answer.correctAnswer.toString()}
                                            className="h-4 w-4 border-gray-300 dark:border-gray-500 text-sky-600 focus:ring-sky-600 dark:bg-slate-700 focus:dark:bg-sky-600  checked:dark:bg-sky-600 "
                                            checked={answer.selected}
                                            onChange={selectAnswer}
                                        />
                                        <label htmlFor={answer.id.toString()} className="block leading-6 text-base">
                                           <span className="text-sky-500 font-bold">{answer.label}. </span>{answer.answer}
                                        </label>
                                        </div>
                                ))}
                            </div>
                        </form>
                        <div className="flex border-top pt-4">
                                <button className="bg-sky-600 disabled:bg-sky-300 flex w-1/2 md:w-fit justify-center rounded-md px-3 py-1.5 text-gray-50 me-1 md:me-0"
                                        onClick={prevQuestion}
                                        disabled={currentQuestion <= 0}>
                                    <span className="select-none">Prev</span>
                                </button>
                               <button className="bg-sky-600  flex w-1/2 md:w-fit justify-center rounded-md px-3 py-1.5 text-gray-50 ms-1  md:ms-auto"
                                        onClick={nextQuestion}>
                                    <span className="select-none">{ currentQuestion <= 8 ? "Next" : "Finish" }</span>
                                </button>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1 py-2 px-4">
                        <h6 className="text-sky-500 mb-2 select-none">Question Panel</h6>
                        { quiz.map((question) => (                            
                            <button className={currentQuestion === (question.id - 1) ? "bg-sky-600 w-[30%] justify-center rounded-md px-3 py-1.5 text-gray-50 m-1 transition duration-500" 
                            : "border border-sky-600 border-opacity-50 w-[30%] justify-center rounded-md px-3 py-1.5 text-base m-1"}
                                key={question.id}
                                onClick={()=>{selectQuestion(question.id)}}>
                                <span className="select-none flex">{question.id}{isQuestionChecked(question.id) ? (<FaCheck className="h-3 my-auto ms-2" />) : ""}</span>
                            </button>                           
                        ))}
                    </div>
                </div>
            </div>
            <Transition show={resultModal} >
            <Dialog onClose={() => setResultModal(false)}>
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                <div className="fixed inset-0 bg-black/90 z-[10]" />
                </Transition.Child>
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                    <div className="fixed inset-0 z-[11]">
                    <div className="flex h-[58rem] justify-center p-4">
                    <Dialog.Panel className="w-full max-w-5xl rounded text-base p-4 bg-card">
                        <Dialog.Title>
                            <h4 className="text-sky-500 text-center">Result</h4>
                        </Dialog.Title>
                                    <Dialog.Description>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="col-span-1 text-center">
                                            <div className="ring-4 rounded-lg w-44 h-40 mx-auto py-2 mb-4">
                                                <h6 className="">Marks</h6>
                                                <FaPen className="mx-auto h-8 w-8 m-4" />
                                                <p className="my-2 font-bold">7/10</p>
                                            </div>
                                        </div>
                                        <div className="col-span-1 text-center">
                                        <div className="ring-4 rounded-lg w-44 h-40 mx-auto py-2 mb-4">
                                                <h6 className="">Score</h6>
                                                <FaCalculator className="mx-auto h-8 w-8 m-4" />
                                                <p className="my-2 font-black">70</p>
                                            </div>
                                        </div>
                                        <div className="col-span-1 text-center">
                                            <div className="ring-4 rounded-lg w-44 h-40 mx-auto py-2 mb-4">
                                                <h6 className="">Situation</h6>
                                                <FaRegThumbsUp className="mx-auto h-8 w-8 m-4" />
                                                <p className="my-2 font-bold">Approved</p>
                                            </div>
                                        </div>
                                            <div className="col-span-3 max-h-[30rem] overflow-y-auto my-4">
                                                <div className="min-h-full">
                                                    {quiz.map((result)=> (
                                                        <div key={result.id} className="p-4">
                                                            <p><span className="text-sky-500 font-bold">{result.id}. </span>{result.question}</p>
                                                            <div className="py-2">
                                                                {result.answers.map((answer) => (
                                                                    <p key={answer.id} className={answerLabelStyle(answer.correctAnswer, answer.selected)}>
                                                                        <span className="text-sky-500 font-bold">{answer.label}. </span>{answer.answer}
                                                                    </p>
                                                                ))}
                                                            </div>
                                                            <p className="my-2 p-3 border border-sky-500 border-opacity-50 rounded-lg font-semibold">{result.explanation}</p>
                                                        </div>
                                                    ))}  
                                                </div>                                        
                                        </div>
                                    </div>
                                    
                                    </Dialog.Description>

                                    <button onClick={() => setResultModal(false)}>Deactivate</button>
                                    <button onClick={() => setResultModal(false)}>Cancel</button>
                                        
                            {/* ... */}
                        </Dialog.Panel>
                    </div>
                    </div>
                </Transition.Child>
            </Dialog>
            </Transition>
        </div>  
    )
}