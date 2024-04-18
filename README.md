# API Backend Development :

A backend service using Node.js and Express.js that interfaces with the GitHub API to fetch and persist user data. 
This service will support operations such as storing user details, identifying mutual followers, searching, updating, and soft deleting records in a database.

#### Tech Stack:

Backend Framework: Node.js with Express.js
Database: MongoDB

#### Features and Endpoints:

GitHub User Data Storage: GET "/save-user/:username"

Mutual Followers as Friends: GET "/find-mutual-followers/:username" 

Search Functionality: GET "/search-users" 

Soft Delete User Recordse: DELETE "/delete-user/:username" 

Update User Details: PATCH "/update-user/:username" 

List Users with Sorting: GET "/list-users" 


##### For testing we can follow bellow steps: 

GET - https://autonomize-ai-github-backend.onrender.com/save-user/ksuthar937

GET - https://autonomize-ai-github-backend.onrender.com/find-mutual-followers/ksuthar937

GET - https://autonomize-ai-github-backend.onrender.com/search-users?location=Pune,%20India

GET- https://autonomize-ai-github-backend.onrender.com/list-users?sortBy=followers&order=asc

DELETE - https://autonomize-ai-github-backend.onrender.com/delete/ksuthar937

PATCH - https://autonomize-ai-github-backend.onrender.com/update-user/ksuthar937
