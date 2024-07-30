function vehicleType(str) {
    switch (str) {
        case "car":
            return "The type of vehicle is Car";
        case "truck":
            return "The type of vehicle is Truck";
        case "motorcycle":
            return "The type of vehicle is Motorcycle";
        default:
            return "Invalid vehicle type. Please enter 'car', 'truck', or 'motorcycle'.";
    }
}

console.log(vehicleType("motorcycle"));
console.log(vehicleType("bicycle"));