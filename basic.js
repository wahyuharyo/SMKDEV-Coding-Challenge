function udin(berat, tinggi) {
    return MBI = berat/(tinggi*tinggi);
};

function nanang(berat, tinggi) {
    return MBI = berat/(tinggi*tinggi);
};

//Data Uji 1

const a = udin(78, 1.69);
const b = nanang(92, 1.95);


//Data Uji 2

const c = udin(95, 1.88);
const d = nanang(85, 1.76);

console.log("------------------- DATA UJI 1 -------------------");

if(a > b) {
    console.log(`MBI Udin (${a}) lebih tinggi dari Nanang (${b})`);
} else {
    console.log(`MBI Nanang (${b}) lebih tinggi dari Udin (${a})`);
};


console.log("------------------- DATA UJI 2 -------------------");

if(a > b) {
    console.log(`MBI Udin (${c}) lebih tinggi dari Nanang (${d})`);
} else {
    console.log(`MBI Nanang (${d}) lebih tinggi dari Udin (${c})`);
};