function getDegrees(grads) {
    grads %= 400;
    let degrees = grads * 0.9;

    if (degrees < 0) {
        degrees = 360 + degrees;
    }

    console.log(degrees);

}

getDegrees(850);
