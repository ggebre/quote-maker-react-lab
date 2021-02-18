// TODO: Create action creators as defined in tests


function addQuote(quote){
    return {
        type: "ADD_QUOTE",
        quote
    }
} 
function removeQuote(id){
    return {
        type: "REMOVE_QUOTE",
        id
    }
} 
function upvoteQuote(id){
    return {
        type: "UPVOTE_QUOTE",
        id
    }
}

function downvoteQuote(id){
    return {
        type: "DOWNVOTE_QUOTE",
        id
    }
}
export { addQuote, removeQuote, downvoteQuote, upvoteQuote }