// let arr1 = ["a","A","A","b","b","c"]
// let arr2 = ["A","a"]
// let res = 0;

// function fan(arr1, arr2){
//     for(let i=0; i<arr1.length;i++){
//         for(let j=0; j<arr2.length; j++){
//             if(arr2[j] === arr1[i]){
//                 res++
//             }
//         }
//     }
//     return res;
// }
// fan(arr1,arr2)

// console.log(res);
// let runList = ['r','r','l','d','u'];

// let start ={
//     status:0,
//     x:0,
//     y:0
// };

// let run ={
//     u:1,
//     r:1,
//     l:-1,
//     d:-1
// }

// let finish ={
//     status:1,
//     x:0,
//     y:0
// }

// if(start.status === finish.status){
//     console.log('no run')
// }else{
//     if(start.x === finish.x && start.y === finish.y){
//         console.log('true')
//     }
// }

// function runadd(arr, finish){
//     arr.forEach(item => {if(item == 'u'){
//         finish.y ++
//     }else if(item == 'r'){
//         finish.x ++
//     }
//     else if(item == 'l'){
//         finish.x --
//     }
//     else if(item == 'd'){
//         finish.y --
//     }})
//     console.log(finish)

//     if(start.x === finish.x && start.y === finish.y){
//         console.log('true')
//     }else if(start.x !== finish.x || start.y !== finish.y){
//         console.log('false')
//     }
    
// }

// runadd(runList,finish)

let numbers = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

let counts = 0;
let indexEl = false;
function search(arr){
    let left = 0;
    let rigth = arr.length -1
    while(left<=rigth){
        counts++
        let mid = Math.floor((rigth + left)/2)
        if(arr[mid] == 0){
            rigth = mid -1;
            indexEl = mid
        }else if(arr[mid] == 1){
            left = mid +1
        }
    }
    
    console.log('число итераций ',counts)
    console.log('Индекс первого ноля: ',indexEl)
    console.log('----------------------------------------')
}
search(numbers)


let counts_2 = null;
function interpolationSearch(arr){
    let left = 0
    let rigth = arr.length -1;
    let mid = null
    while(arr[left] >= arr[rigth] ){
        counts_2++
        if(arr[left]==arr[rigth]){
            break
        }
        mid = (((0 - arr[left])*(left-rigth))/(arr[left]-arr[rigth]))+left;
        if(arr[mid] == 0){
        rigth = mid -1
        }else if(arr[mid] == 1){
        left = mid +1
        }
    index = mid
    }
    console.log('Индек искомого елемента: ', mid)
    console.log('счетчик',counts_2)
    console.log('----------------------------------------')
    
}

interpolationSearch(numbers)

