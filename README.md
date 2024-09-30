# Springboard-Capstone-Project-2
## Hike-spike
The Hiking Trail Finder is a web application that allows users to explore and discover hiking trails, search for trails in a directory, rate and review trails, and authenticate users.

## Technologies Used:
- **Frontend**: React.js, HTML, CSS, Bootstrap, Hook, Redux, Okta
- **Backend**: Node.js
- **Database**: MongoDB
- **APIs**: National Park Services API (for trail data), 
- **User Authentication**: JSON Web Tokens (JWT), bcrypt.js (for password hashing in the future)

## API:

National Parks and Service-api: https://developer.nps.gov/api/v1

## Features

- **Trail Details**: View detailed information about hiking trails, including trail name, location, difficulty level, length, elevation gain, and description.
- **Trail Directory**: Search for hiking trails based on location, such as city or state. Browse through a list of trails.
- **Comments/ Reviews**: Users can write and leave reviews for trails they have hiked, providing valuable feedback to other users.
- **User Authentication**: Users can create accounts, log in, and manage their profile. Authentication ensures that only registered users can rate, review, and access certain features.
- **Interactive UI**: The application provides an intuitive and user-friendly interface, allowing users to navigate easily and find relevant information.
- **Featured trail**: On the home page user can see the featured trail.
- **Safety Information**: User can see the the safety information regarding the trail.

## Usage

1. Register for a new account or log in with existing credentials.
2. Explore hiking trails by browsing through the trail directory or using the search functionality.
3. View trail details to get more information about specific trails, including their location, difficulty level, length, and elevation gain.
4. Rate and review trails based on your hiking experience.
5. Update your profile information and manage your account settings.

## Pages:
- **Home**: This is the Home page. It has news letter sign up feature. This pge also displays featured trails on this page. On clicking on this trail, user can see the details of the tral. Also user can visit about us page from here.
- **Trails**: User can search the trail based  on state, city. User can see list of the trails and clicking on  one of the trail user can see the detail of the trail like trail name, location, difficulty level, length, elevation gain, and description.Also user can se the rating and comment of it. 
- **Safety**: User can see the safty information regarding the trail. This information is fatched from national parks and service api.
- **About**: This page represent the information About us.
- **Contact**: User can fill the form if any query.
- **Login**: USer can Login.

## Deployment URL: 
https://cpastone2-front.onrender.com/

## Working Website Video: 

## Future Enhancements

- **Favorite Trails**: Allow users to save trails as favorites for quick access.
- **Trail Recommendations**: Provide personalized trail recommendations based on user preferences and past activity.
- **Trail Maps and Directions**: Integrate maps and directions to guide users to the trailhead.
- **Mobile Application**: Develop a mobile application for on-the-go access to hiking trail information.
