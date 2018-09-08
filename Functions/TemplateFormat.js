function getTemplate(array) {
    let template = '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<quiz>\n';

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            template += '   <question>\n' +
                `     ${array[i]}\n` +
                '   </question>\n';
        } else {
            template += '   <answer>\n' +
                `       ${array[i]}\n` +
                '   </answer>\n';
        }
    }

    template += '</quiz>';
    console.log(template);
}

getTemplate(["Dry ice is a frozen form of which gas?", "Carbon Dioxide", "What is the brightest star in the night sky?", "Sirius"]);

