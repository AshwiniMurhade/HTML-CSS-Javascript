let alien = {
    name: 'Vivek',
    tech: 'Java',
    laptop: {
        brand: 'Asus',
        processor: 'i7',
        ram: 4
    },
    greet: () => console.log("Namaste India!")
};
console.log(alien);
for(let key in alien){
    console.log(key, alien[key]);
}
alien.greet();