//CALLBACK FUNCTIONS
/*
function getIDs(){
    setTimeout(()=>{
        var IDs = [432,123,412,534];
        console.log(IDs);
        setTimeout(id=>{
            let recepie = {name: "Tomato Crush",Publisher: "Kushagra"};
            console.log(`${id}: ${recepie.name}`);
            setTimeout(pub => {
                let recepie = {name: "Cheese Burst",Publisher: "Kushagra"};
                console.log(recepie);
            },1500,recepie.Publisher)
        },1500,IDs[2])
    },1500)
};
*/
//PROMISES

let getIDs = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve([432,123,412,534]);
    },1500);
});

let getRecipie = id =>{
    return new Promise((resolve,reject)=>{
        setTimeout((id)=>{
            let recepie = {name: "Tomato Crush",Publisher: "Kushagra"};
            resolve([`${id}: ${recepie.name}.`,recepie]);
        },1500,id);
    });
};

let getMoreRecipie = pub =>{
    return new Promise((resolve,reject)=>{
        setTimeout((pub)=>{
            let recepie = {name: "Cheese Burst",Publisher: "Kushagra"};
            resolve([pub,recepie]);
        },1500,pub);
    });
}
/*
// getIDs
// .then((ids)=>{
//     console.log(ids);
//     return getRecipie(ids[2]);
// })
// .then((recepie)=>{
//     console.log(recepie[0]);
//     return getMoreRecipie(recepie[1].Publisher);
// })
// .then((recepie)=>{
//     console.log(`${recepie[0]}: Other Populars ${recepie[1].name}`);
// })
// .catch(()=>{
//     console.log("Failed To Load Data.")
// })
*/
async function getRecipieIds(){
    let ids = await getIDs;
    console.log(ids);
    let reipe = await getRecipie(ids[2]);
    console.log(reipe[0]);
    let moreRecipe = await getMoreRecipie(reipe[1].Publisher);
    console.log(`${moreRecipe[0]}: Other Populars ${moreRecipe[1].name}`);
    return reipe;
};

const receoie = getRecipieIds();
receoie.then(res=>{
    console.log(res);
})