'use strict';
function monkeyPatcher(command) {

    let commands = {
        upvote: () => {
            this.upvotes++;
        },
        downvote: () => {
            this.downvotes++;
        },
        score: () => {
            let upVotes = this.upvotes;
            let downVotes = this.downvotes;
            let totalVotes = upVotes + downVotes;
            let balance = upVotes - downVotes;  
            let maxVotes = Math.max(upVotes, downVotes);
            let rating;

            if (totalVotes < 10) {
                rating = 'new';
            } else if (upVotes > 0.66 * totalVotes) {
                rating = 'hot';
            } else if (balance >= 0 && (upVotes > 100 || downVotes > 100)) {
                rating = 'controversial';
            } else if (balance < 0) {
                rating = 'unpopular';
            }

            if (totalVotes > 50) {
                let obfuscatedValue = Math.ceil(0.25 * maxVotes);
                upVotes += obfuscatedValue;
                downVotes += obfuscatedValue;
            }

            return [upVotes, downVotes, balance, rating];
        }
    };

    return commands[command]();
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

monkeyPatcher.call(post, 'upvote');
monkeyPatcher.call(post, 'downvote');
let score = monkeyPatcher.call(post, 'score'); 
console.log(score);

for (let i = 0; i < 50; i++) {
    monkeyPatcher.call(post, 'downvote');
}

score = monkeyPatcher.call(post, 'score');     
console.log(score);
