
let eded = Number(prompt("Bir ədəd daxil edin:"));
let cem = 0;
let i = 100;

while (i <= 999) {
    if (i % eded === 0) {
        cem += i;
    }
    i++;
}

console.log("Bolunən üç rəqəmli ədədlərin cəmi " + cem);
