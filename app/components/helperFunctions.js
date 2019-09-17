
//For adding date when user fails to do it
function stringyDate() {
    var x = new Date();
    x = x.toLocaleDateString('en-GB');
    
    //console.log(typeof(x)); 
    return '15/06/14';
}



//Exportables
module.exports = {
    stringyDate
};