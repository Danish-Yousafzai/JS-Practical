function shippingCost(num) {
    let cost = "";

    if (num > 0) {
        switch (true) {
            case num > 0 && num <= 10:
                cost = "$7";
                break;
            case num > 10 && num <= 20:
                cost = "$10";
                break;
            case num > 20 && num <= 30:
                cost = "$14";
                break;
            case num > 30 && num <= 40:
                cost = "$20";
                break;
            case num > 40 && num <= 70:
                cost = "$32";
                break;
            case num > 70:
                cost = "$49.99";
                break;
            default:
                return "Syntax Error";
        }
    } else {
        return "Enter the correct weight!";
    }

    return "The shipping cost for " + num + " kg is " + cost;
}
