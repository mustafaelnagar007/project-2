/**
 * Truncates a given text to a specified character limit and appends ellipsis ("...") if the text exceeds the limit.
 * 
 * @param {string} text - The text to be truncated.
 * @param {number} [limit=100] - The maximum number of characters allowed before truncation. Defaults to 100.
 * @returns {string} The truncated text with ellipsis if it exceeds the limit, or the original text otherwise.
 *
 * @example
 * txtSlicer("This is a long piece of text that needs to be shortened.", 20);
 * // Returns: "This is a long piece..."
 * 
 * @example
 * txtSlicer("Short text", 20);
 * // Returns: "Short text"
 */
export const txtSlicer=(text:string,limit:number=100):string=>{
    if(text.length>limit){
        return text.slice(0,limit)+"..."
    }
    return text
}