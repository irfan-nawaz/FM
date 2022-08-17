// Example-1:-
const findSomeone = () => {
    const speak = () => {
        console.log(who);
    }
    let who = "well hello there, prof plum"

    return speak;
}
var someOneSpeak = findSomeone();
someOneSpeak();
// Output:-
// well hello there, prof plum.

// Example-2:-
const makeTimer = () => {
    let elapsed = 0;

    const increase = () => {
        return elapsed++;
    };

    setInterval(increase, 1000);

    const stopWatch = () => {
        return elapsed;
    };

    return stopWatch;
}