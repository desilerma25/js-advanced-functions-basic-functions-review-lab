// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
} 

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(style="*") {
    return function(adj="special") {
        return `You are ${style}${adj}${style}!`
    }
}

const Calculator = {
    add: function(n1, n2){
        return n1 + n2
    },
    subtract: function(n1, n2){
        return n1 - n2
    },
    multiply: function(n1, n2){
        return n1 * n2
    },
    divide: function(n1, n2){
        return n1 / n2
    } 
}

function actionApplyer(start, functions) {
    // returns given start point when the array is empty
    if (functions.length === 0) {
        return start
    }
    else {
        // given 13, return 4 after being acted on by sev. funct.
        let i = 0
        while (i < functions.length) {
            start = functions[i](start)
            i++
        }
        return start
    }
}