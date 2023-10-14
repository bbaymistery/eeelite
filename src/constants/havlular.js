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


export const kuaforHavlulari = [];
for (let i = 1; i <= 22; i++) {

    const productImage = require(`../images/kuafor/${i}.jpg`);
    const product = {
        id: i,
        image: productImage,
        altname: "EE ELITE products",
    };
    kuaforHavlulari.push(product);
}


export const manikurHavlulari = [];
for (let i = 1; i <= 5; i++) {

    const productImage = require(`../images/manikurpedikur/${i}.${i === 1 ? "png" : "jpg"}`);
    const product = {
        id: i,
        image: productImage,
        altname: "EE ELITE products",
    };
    manikurHavlulari.push(product);
}



export const restoranHavlulari = [];
for (let i = 1; i <= 26; i++) {

    const productImage = require(`../images/restoran/${i}.jpg`);
    const product = {
        id: i,
        image: productImage,
        altname: "EE ELITE products",
    };
    restoranHavlulari.push(product);
}


