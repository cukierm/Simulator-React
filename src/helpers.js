export function computeSampleProp (probSuccess, sampleSize) {
    let successes = 0;
    for (let i=0; i<sampleSize; i++) {
        if (Math.random() < probSuccess) {
            successes++;
        }      
    }
    return successes/sampleSize;
};

export function computeSampleArray(pHat, ho, ha, n, numDraws) {  
    let propCount = 0;
    let samplePropArray=[]
    if (ha === '>') {
        for (let i=0; i<numDraws; i++) {
            let sampleProp = computeSampleProp(ho, n);
            samplePropArray.push(sampleProp);
            if (sampleProp >= pHat) { 
                propCount++;
            }            
        }
    }
    else if (ha === '<') {
        for (let i=0; i<numDraws; i++) {
            let sampleProp = computeSampleProp(ho, n);
            samplePropArray.push(sampleProp);
            if (sampleProp <= pHat) { 
                propCount++;    
            }
        }
    };   
    return [samplePropArray, propCount];
};