# Git Searcher - Github User Search Application.

## Setup Guide

1. Install the packages with the script `npm i` or `npm Install` 
2. Now create the GitHub access token by:
a. Go to Settings.

b. Open Developer Settings.

c. Head to Personal Access Token Tab (Tokens Classic)

d. Generate a new token and copy it (The token can be viewed only once so its recommended to store it properly ! ).

3. Generate env variables
a. Create a new `.env` file in the root folder and copy the contents of `.env.example` in it.

b. Paste the GitHub token.

c. now run the application using the script `npm run dev`.

## Tech Stak used

- NextJs
- TypeScript
- Tailwind
- Github GraphQl API

## About Github Searcher

Github Searcher is a web application from which users can find the information of other GitHub users just by searching their usernames. 

Rather than using traditional REST API, the application uses the power of GraphQl Query to fetch only the required information from the API which results in decreased use of bandwidth and increasing performance.

Other than that being built on top of Nextjs makes the application server side, and using tailwind for styling makes the website look more modular and user friendly.

Type safety is taken utmost care with the help of TypeScript resulting in a decreased number of bugs.


`Made with Love by Dhairya Majmudar 🚀⭐`
