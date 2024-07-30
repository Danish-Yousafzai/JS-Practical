function getDay(weekNum) {
    if (weekNum > 0 && weekNum < 8) {
        switch (weekNum) {
            case 1:
                return ("The Day is Monday");
                break;

            case 2:
                return ("The Day is Tuesday");
                break;

            case 3:
                return ("The Day is Wednesday");
                break;

            case 4:
                return ("The Day is Thursday");
                break;

            case 5:
                return ("The Day is Friday");
                break;

            case 6:
                return ("The Day is Saturday");
                break;

            case 7:
                return ("The Day is Sunday");
                break;

            default:
                return ("Sunytax Error")
                break;
        }
    } else {
        return "Please enter a number between 1 and 7.";
    }
}