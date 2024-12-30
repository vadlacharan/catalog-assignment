const t1 = require("./testcase1.json")
const t2  = require("./testcase2.json")

function value_decode(value,base){
    const x =  parseInt(value, parseInt(base));
    return x
}


function lgr(points){
    function mini(i, x){
        let num=1;
        let den=1;
        for (let j =0; j <points.length;j++) 
            {
            if (i!==j) {
                num =num * (x -points[j][0]);
                den =den *(points[i][0] -points[j][0]);
            }
        }
        return num/den;
    }
    let constant = 0;
    for (let i=0; i<points.length; i++) {
        constant =constant +points[i][1] *mini(i,0);
    }
    return constant;
}

function findc(data) {
    const k =data.keys.k;
    let points = [];
    for (const key in data) {
    if (key !== 'keys') {
        const x =parseInt(key);
        const y =value_decode(data[key].value, data[key].base);
        points.push([x,y]);}
    }
 points = points.slice(0,k);
    return lgr(points);
}


    const testcases = [t1, t2];
    testcases.forEach((testcase) => {
        const c = findc(testcase);
        console.log(c);
    });


