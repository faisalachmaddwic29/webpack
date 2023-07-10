import _ from "lodash";
console.log("Hello From hello.js");

const developer = [
    {
        name: "Faisal",
        email: "faisalachmaddwic@gmail.com",
        status: "aktif",
    },
    {
        name: "Rizqi",
        email: "rizqi@gmail.com",
        status: "tidak aktif",
    },
    {
        name: "Nanda",
        email: "nanda@gmail.com",
        status: "aktif",
    },
    {
        name: "Fitri",
        email: "fitri@gmail.com",
        status: "tidak aktif",
    },
    {
        name: "Janah",
        email: "janah@gmail.com",
        status: "aktif",
    },
];

// const dev = _.find(developer, { status: "aktif" });
const dev = _.filter(developer, (i) => i.status == 'aktif');

console.log(dev);
