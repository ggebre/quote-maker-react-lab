export default (state = [], action) => {
  let idx;
  let quotes;
  let quote;
  switch(action.type){

    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.id)
      return [...state.slice(0, idx), ...state.slice(idx+1)]
    case "UPVOTE_QUOTE": 
      quotes = [...state]
      quote = quotes.find(quote => quote.id === action.id) 
      quote.votes = quote.votes + 1 
      return quotes

    case "DOWNVOTE_QUOTE":
      quotes = [...state]
      quote = quotes.find(quote => quote.id === action.id) 
      quote.votes = quote.votes > 0 ? quote.votes - 1 : 0
      return quotes
    default:
      return state
  }
  
}
