const sayHello = () => {
    console.log("Hello world Alex");
     console.log("log desde Rama Develop");
    return "Hello world Alex";
};

module.exports = {
    sayHello
};

if (require.main === module) {
    sayHello();
}