// # file_id dia dile khujte hbe-- tar mane file_map e file id dia key value pair kora lagbe, key = file_id, value = (user_id,file_path)
// # example - "MATH" -> ("0", "google.com")
// # user count korte hbe - user কয়বার request হয়েছে
// # সব records traverse। korte hbe loop kore
// # user count e user id dia check korbo - then count barabo
// # then result e return korbe - (path,count)

// # ===================== INPUT ======================
records = [
  "0 MATH google.com",
  "0 SCI facebook.com",
  "2 ENG hackerrank.com"
]

queries = [
   "ENG",
   "MATH",
   "SCI"
]

function getFileRequests(records, queries) {
    const file_map = {}
    const result = []
    const user_count = {}

    // step-1: file map create
    for(const res of records){
        const parts = res.split(" ") 
        const user_id = parts[0]
        const file_id = parts[1]

        const file_path = parts.slice(2).join("");

        file_map[file_id]  = {user_id,file_path}



    }

    // step -2: process queries
    for(const file_id of queries){
        const {user_id,file_path}=file_map[file_id]

        // increase user count
        if(user_id in user_count){
            user_count[user_id] +=1
        } else{
             user_count[user_id] =1
        }

        result.push([file_path,user_count[user_id]])

    }

    return result
}

console.log(getFileRequests(records,queries))

