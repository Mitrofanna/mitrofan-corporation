import { TQuote } from "./types/quote-type";

export function getRandom(array: TQuote[]) {
    const randomQuote = array[Math.floor(Math.random() * array.length)];
    return randomQuote;
}