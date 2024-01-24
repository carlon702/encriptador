let hola = "hola como estas";
let regex = /[aeiou]/g;
let regex2 = /(enter)|(ober)|(imes)|(ufat)|(ai)/g;

let newstring = hola.replace(regex,function encript(match){
    switch(match){
        case 'e':
            return 'enter';
            break;
        case 'i':
            return 'imes';
            break;
        case 'a':
            return 'ai';
            break;
        case 'o':
            return 'ober';
            break;
        case 'u':
            return 'ufat';
            break;
        default:
            throw console.error('error');                    
    }
});
let placeholderDecript = "hola hola hola"
let decript = placeholderDecript.replace(regex2, function decript(match){
    switch(match){
        case 'enter':
            return 'e';
            break;
        case 'imes':
            return 'i';
            break;
        case 'ai':
            return 'a';
            break;
        case 'ober':
            return 'o';
            break;
        case 'ufat':
            return 'u';
            break;
        default:
            throw console.error('error');                    
    }
})

