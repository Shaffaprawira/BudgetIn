# BudgetInApp
Software Engineering Class Project by Group 14: \
Adiva Veronia (2006468421) \
Firzy Allen (2006577555) \
Mochammad Shaffa Prawiranegara (2006528105)

Summary: BudgetIn is a mobile application for managing money aimed at university students using the 50/30/20 rule. The aim of this project is to help users in managing their finance using the 50/30/20 budget rule, evaluate their finances every month, give tips and tricks to help manage their finances.

## STEPS
-> Do npm i in the root directory and in the "/client" folder. The React App lives in the "/client" directory \
-> In the "/client" directory there is a .env.example file. Rename it to .env and change the variable to your url/api \
-> In the root directory there is a .env.example file too. Rename it to .env and put your DATABASE_URL ie the postgresql connection URL. The port variable is optional. \
-> Run npm run buildClient to build the react app (at the root folder). A clientBuild folder will be created. \
-> Run "npx prisma generate" and "npx prisma migrate dev" to generate the prisma client and apply the migrations to the db  \
See here : https://www.prisma.io/docs/reference/database-reference/connection-urls \
Example : DATABASE_URL=postgresql://janedoe:mypassword@localhost:5432/mydb 

## Available Scripts
You need to run progresql and provide the correct DATABASE_URL TO PRISMA!!\
-> In the root directory run npm run dev and both frontend and backend will run concurrently. The React app will live at localhost:3006 and the api at localhost:5000/api

