const sayHello = () => {
    console.log("Hello world Alex");
    return "Hello world Alex";
};

module.exports = {
    sayHello
};

if (require.main === module) {
    sayHello();
}