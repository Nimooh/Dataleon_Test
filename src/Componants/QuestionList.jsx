import React from "react";  
import { useEffect, useState } from "react";
import Question from "./Question";

function QuestionList() {
    const [questions, setQuestions] = useState(null);
    const [replyDisplay, setReplyDisplay] = useState(false)

    const fetchJson = () => {
        fetch('./src/data/data.json').then(response => {
        return response.json();
        }).then(data => {
            setQuestions(
                data.map((question) => (
                  <Question key={question.id} data={question} replyDisplay={replyDisplay} />
                )))
        })
    }
    useEffect(() => {
        fetchJson();
    }, [replyDisplay]);
    return (
        <>  
            <div className="questionList">
                {questions}
            </div>
            <button className="button validationButton" onClick={() => setReplyDisplay(true)}disabled={replyDisplay}>Validate Answers</button>
        </>
    );
}

export default QuestionList;