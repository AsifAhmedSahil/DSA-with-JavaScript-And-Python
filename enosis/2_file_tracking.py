# file_id dia dile khujte hbe-- tar mane file_map e file id dia key value pair kora lagbe, key = file_id, value = (user_id,file_path)
# example - "MATH" -> ("0", "google.com")
# user count korte hbe - user কয়বার request হয়েছে
# সব records traverse। korte hbe loop kore
# user count e user id dia check korbo - then count barabo
# then result e return korbe - (path,count)

# ===================== INPUT ======================
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

# ========================= OUTPUT =====================
[
   ["hackerrank.com",1],
   ["google.com",1],
   ["facebook.com",2]
]

# ====================== problem ===============================

def getFileRequests(records, queries):
    file_map = {}

    user_count = {}
    result = []

    # step - 1 : build file map
    for rec in records:
        parts = rec.split()
        user_id = parts[0]
        file_id = parts[1]

        file_path = " ".join(parts[2:])

        file_map[file_id] = (user_id,file_path)

    # STEP 2:
    # process queries

    for file_id in queries:
        user_id,file_path=file_map[file_id]

        # step - 3 : increase request count
        if user_id in user_count:
            user_count[user_id] +=1
        else:
            user_count[user_id] =1
    # step 4 : store answer

        result.append([file_path,user_count[user_id]])

    return result


print(getFileRequests(records,queries))
