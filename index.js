const sayHello = () => {
    console.log("Hello world Alex");
     console.log("log desde Rama Developn");
     console.log("Rama feature con validaciones");
    return "Hello world Alex";
};

module.exports = {
    sayHello
};

if (require.main === module) {
    sayHello();
}