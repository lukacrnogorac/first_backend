//just for example
module.exports = (message) =>{
    switch(message){
        case "jwt malformed":
            return 400;
        default:
            return 401;
    };
}