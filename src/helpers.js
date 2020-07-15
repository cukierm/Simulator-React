export function computeSampleProp (probSuccess, sampleSize) {
    let successes = 0;
    for (let i=0; i<sampleSize; i++) {
        if (Math.random() < probSuccess) {
            successes++;
        }      
    }
    return successes/sampleSize;
};

