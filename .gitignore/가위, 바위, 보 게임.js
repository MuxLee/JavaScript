for(; ;) {
    var answerCom;
    var userChoice = prompt("가위? 바위? 보?");
    var checkUser;
    if (userChoice === "가위") {
            checkUser = 1;
        } else if(userChoice === "바위") {
                checkUser = 2;
            } else if(userChoice === "보") {
                    checkUser = 3;
                } else if(userChoice === "exit") {
                        break;
                    }
    else if(userChoice !== ("가위" || "바위" || "보" || "exit") || userChocie === null)
    {
        console.log("Error!");
        break;
        }
    var computerChoice = Math.floor(Math.random() * 3) + 1;
    var checkCom;
    if(computerChoice === 1) {
            answerCom = "가위";
            checkCom = 1;
        } else if(computerChoice === 2) {
                answerCom = "바위";
                checkCom = 2;
            } else if(computerChoice === 3) {
                    answerCom = "보";
                    checkCom = 3;
                }
                
    console.log("User >> "+userChoice+"\nComputer >> "+answerCom);
    
    if(checkUser === checkCom) {
            console.log("<-- Draw! -->\n");
        }
        
    else if(checkUser === 1) {
        if(checkCom === 2) {
            console.log("<-- Computer Win! -->\n");
            }
        else if(checkCom === 3) {
                console.log("<-- User Win! -->\n");
                }
        }
        
    else if(checkUser === 2) {
        if(checkCom === 1) {
            console.log("<-- User Win! -->\n");
            }
        else if(checkCom === 3) {
            console.log("<-- Computer Win! -->\n");
            }
        }
        
    else if(checkUser === 3) {
        if(checkCom === 1) {
            console.log("<-- Computer Win! -->\n");
            }
        else if(checkCom === 2) {
            console.log("<-- User Win! -->\n");
            }
        }
}
