function getTicketsPrices(array) {
    let movieTitle = array[0].toLowerCase();
    let day = array[1].toLowerCase();
    let price = '';
    let isTrue = true;

    switch (movieTitle){
        case 'the godfather':
            switch (day) {
                case 'monday':
                    price = '12';
                    break;
                case 'tuesday':
                    price = '10';
                    break;
                case 'wednesday':
                case 'friday':
                    price = '15';
                    break;
                case 'thursday':
                    price = '12.50';
                    break;
                case 'saturday':
                    price = '25';
                    break;
                case 'sunday':
                    price = '30';
                    break;
                default:
                    isTrue = false;
                    break;
            }

            break;
        case 'schindler\'s list':
            switch (day){
                case 'monday':
                case 'tuesday':
                case 'wednesday':
                case 'thursday':
                case 'friday':
                    price = '8.50';
                    break;
                case 'saturday':
                case 'sunday':
                    price = '15';
                    break;
                default:
                    isTrue = false;
                    break;
            }

            break;

        case 'casablanca':
            switch (day){
                case 'monday':
                case 'tuesday':
                case 'wednesday':
                case 'thursday':
                case 'friday':
                    price = '8';
                    break;
                case 'saturday':
                case 'sunday':
                    price = '10';
                    break;
                default:
                    isTrue = false;
                    break;
            }

            break;

        case 'the wizard of oz':
            switch (day){
                case 'monday':
                case 'tuesday':
                case 'wednesday':
                case 'thursday':
                case 'friday':
                    price = '10';
                    break;
                case 'saturday':
                case 'sunday':
                    price = '15';
                    break;
                default:
                    isTrue = false;
                    break;
            }

            break;

        default:
            isTrue = false;

    }

    if (!isTrue) {
        console.log('error');
    } else {
        console.log(price);
    }
}

getTicketsPrices(['Schindler\'s List', 'Thursday']);