import { Quiz } from "./questions";

export class Result {

    verifyCorretAnswers(quiz:Quiz[]){
        let marks:number = 0;

        return 1;
    }

    calculateScore(correctAnswer:number, totalQuestions:number){
        let result:number = (correctAnswer/100)*totalQuestions;
        return result;
    }

}