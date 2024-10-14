
const makeChange = (c) => {
    let change = {
        q: 0,
        d: 0,
        n: 0,
        p: 0
    };

    c = parseInt(c, 10);

    change.q = Math.floor(c / 25);
    c %= 25;

    change.d = Math.floor(c / 10);
    c %= 10;

    change.n = Math.floor(c / 5);
    c %= 5;

    change.p = c;

    return change;
};
const c = prompt("Enter c (amount in cents): ");
alert(JSON.stringify(makeChange(c)));
