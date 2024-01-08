Auth
    -/auth/signin
    -/auth/forget-password

Task(/task)
    -create(post)
    -update(put)
    -delete(delete)
    -single task(GET)
    -All task(GET){/task}
User(/user)
    -Create(post)
    -Update(put)
    -delete(delete)
    -single user(GET)
    -All user(GET) (/users)
Search
    -Task (GET) (/search-task)
    -User (GET) (/search-user)