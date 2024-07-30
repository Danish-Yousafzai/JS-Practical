function studentMarks(num) {
    let grade = "";

    if (num >= 0 && num <= 100) {
        switch (true) {
            case num >= 0 && num <= 40:
                grade = "F";
                break;
            case num > 40 && num <= 50:
                grade = "E";
                break;
            case num > 50 && num <= 60:
                grade = "D";
                break;
            case num > 60 && num <= 70:
                grade = "C";
                break;
            case num > 70 && num <= 80:
                grade = "B";
                break;
            case num > 80 && num <= 90:
                grade = "A";
                break;
            case num > 90 && num <= 100:
                grade = "A+";
                break;
            default:
                return "Syntax Error";
        }
    } else {
        return "Enter a correct percentage!";
    }
    return "The grade of the student with " + num + "% is " + grade;
}
