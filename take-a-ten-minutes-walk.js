/* INSTRUCTIONS:
You live in the city of Cartesia where all roads are 
laid out in a perfect grid. You arrived ten minutes too early to an appointment, 
so you decided to take the opportunity to go for a short walk. 
The city provides its citizens with a Walk Generating App on their phones -- 
everytime you press the button it sends you an array of one-letter 
strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You always walk only a single block for each letter (direction) and you know 
it takes you one minute to traverse one city block, so create a function that 
will return true if the walk the app gives you will take you exactly ten minutes 
(you don't want to be early or late!) and will, of course, return you to your starting point. 
Return false otherwise.
*/

// SOLUTION:
let walk = [
    ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'], // true
    ['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'], // false
    ['w'], // false
    ['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'], // false
];

const isValidWalk = (walk) => {
    let time = walk.length;

    let y = 0;
    let x = 0;

    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n':
                y++;
                break;
            case 's':
                y--;
                break;
            case 'w':
                x++;
                break;
            case 'e':
                x--;
                break;
            default:
                break;
        }
    }

    return y === 0 && x === 0 && time === 10;
};

const testWalk = () => {
    for (let i = 0; i < walk.length; i++) {
        isValidWalk(walk[i]);
    }
};

testWalk();
