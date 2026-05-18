function textjustification(words, maxWidth) {

 const res = [];

    let line = [];

    let length = 0;

    for (const word of words) {

        // check line complete or not
        if (length + line.length + word.length > maxWidth) {

            // total extra spaces
            let extraSpace = maxWidth - length;

            // gaps between words
            let gaps = Math.max(1, line.length - 1);

            // evenly distributed spaces
            let spaces = Math.floor(extraSpace / gaps);

            // remaining extra spaces
            let reminder = extraSpace % gaps;

            // add spaces
            for (let j = 0; j < gaps; j++) {

                line[j] += " ".repeat(spaces);

                if (reminder > 0) {

                    line[j] += " ";

                    reminder--;
                }
            }

            // build justified line
            res.push(line.join(""));

            // reset
            line = [];

            length = 0;
        }

        // add current word
        line.push(word);

        length += word.length;
    }

    // handle last line
    let lastLine = line.join(" ");

    let trailSpaces = maxWidth - lastLine.length;

    res.push(lastLine + " ".repeat(trailSpaces));

    return res;
}

const output = textjustification(["This", "is", "an", "example", "of", "text", "justification."],16)

console.log(output)

// TC - O(total number of characters in output = m)
// SC - O(m)