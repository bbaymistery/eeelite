export const spaHavlulari = [];

for (let i = 1; i <= 32; i++) {
    const productImage = require(`../images/spaBakim/${i}.jpg`);
    const product = {
        id: i,
        image: productImage,
        altname: "EE ELITE products",
    };
    spaHavlulari.push(product);
}




export const plajHavlulari = [];
for (let i = 3; i <= 24; i++) {
    
    const productImage = require(`../images/plajHavlular/${i}.jpg`);
    const product = {
        id: i,
        image: productImage,
        altname: "EE ELITE products",
    };
    plajHavlulari.push(product);
}
