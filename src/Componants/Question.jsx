import React, { useState, useEffect } from "react";  


function Question({replyDisplay,data}) {
    const [selectedAnswer,setSelectedAnswer] = useState(null)
    return (
        <div className="question">
            <h2>{data.question}</h2>
            {!replyDisplay &&  
                <div className="answers">
                    {data.answers.map((answer) => 
                    
                        <button className={`button ${selectedAnswer==answer ? "selected" : ""}`} key={answer.text} onClick={() => setSelectedAnswer(answer)}>{answer.text}</button>
                    )
                    }
                </div>
            }
            {replyDisplay &&  
            <div className="reply">
                    {selectedAnswer?.reply}
            </div>
            }
        </div>
    );
}

export default Question;