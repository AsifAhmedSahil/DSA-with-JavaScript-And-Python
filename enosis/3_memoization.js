function memoize(fn) {
    // create cache for storing
    const cache = {}

    return function(id){
        // step 1: check in cache or not
        if(id in cache){
            return cache[id]
        }

        // step2: generate result with fn call for first time

        const result = fn(id)



        // step3: store in cache
        cache[id] = result
        
        return result
    }
}