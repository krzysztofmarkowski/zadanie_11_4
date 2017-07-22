// Funkcja konstruująca telefony (klasy)
function Phone(brand, price, color, os, processor, ram) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.os = os;
    this.processor = processor;
    this.ram = ram;
}

// Deklaracja funkcji prototypowej
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". Operating system: " + this.os + ". Processor: " + this.processor + " and RAM: " + this.ram + "GB");
};

// Utworzenie obiektów

var SamsungGalaxyS6 = new Phone("Samsung", 1679, "black", "Android 5.0 Lollipop", "Samsung Exynos 7420 2,1 GHz", 3);
var iPhone6S = new Phone("Apple", 2250, "silver", "iOS 9", "Apple A9 1,5 GHz", 2);
var OnePlusOne = new Phone("OnePlus", 1299, "white", "Android 4.4 KitKat", "Qualcomm Snapdragon 801 8974AC 2,50 GHz", 3);

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();