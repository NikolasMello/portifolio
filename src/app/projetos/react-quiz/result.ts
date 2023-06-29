import { Quiz } from "./questions";

export class Result {

    private marks: number = 0;
    private score: number = 0;
    private situation: string = "";

    public verifyCorretAnswers(quiz:Quiz[]){
        let marks:number = 0;
        for(let i:number = 0; i < quiz.length; i ++){
            let findIndex = quiz[i].answers.findIndex( answer => answer.selected === true && answer.correctAnswer === true)
            if(findIndex >= 0){
                marks = marks + 1;
            }
        }
        this.marks = marks;
    }

    public calculateScore(correctAnswer:number, totalQuestions:number){
        let result:number = (correctAnswer/100)*totalQuestions;
        this.score = result*10;
    }

    public verifySituation(score:number){
        if(score >= 7){
            this.situation = "Approved"
        } else {
            this.situation = "Reproved"
        }
    }

    public get getMarks(){
        return this.marks;
    }

    public get getScore(){
        return this.score;
    }

    public get getSituation(){
        return this.situation;
    }
    

}