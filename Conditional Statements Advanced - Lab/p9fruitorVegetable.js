function fruitorVegetable(input) {
    let product = input[0];
    switch (product) {
        //tomato, cucumber, pepper и carrot, cucumber, pepper и carrot
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes": console.log("fruit"); break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot": console.log("vegetable");break;
default:
    console.log("unknown");break;


    }
}
fruitorVegetable(["tomato"])