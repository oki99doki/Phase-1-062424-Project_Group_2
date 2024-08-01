# Phase-2-062424-Project_Group_1
Phase 2 - Week 6 Group Project - Group 1

## Getting Started
To get a local copy up and running, follow these steps:

**#Front-end Installation**

**1. Clone the repository:**
      git clone git@github.com:oki99doki/Phase-2-Project.git

**2. Navigate to the front-end directory:**
      cd Phase-2-Project/my-app

**3. Install npm packages:**
      npm install -- save react-router-dom

**4. Running the Application**
   Ensure you are in the root directory of the project.
      cd Phase-2-Project/my-app

      a. Start the JSON server to watch db.json on port 4000:
      npm run server

      json-server --watch db.json --port 4000

      b. Open another terminal and start the application:

      npm start

## Project Requirements
- [ ] A one sentence description of your app
- [ ] A simple wireframe of your site (A SCREENSHOT of your wireframe)
- [ ] User stories/deliverables
- [ ] What CRUD routes you will be using and where (GET and POST are required)
- [ ] What three or more React Router routes you will be using and what components they will be used for (include any params)
- [ ] A component diagram detailing the purpose of each component (at least five components)
- [ ] An example of data for your db.json
- [ ] Three stretch goals
- [ ] A Kanban board


## Project Requirements (One Sentence Description)
- [ ] An app where users can search for popular destinations and share their favorite places.

## Wireframe Screenshot
- [ ] to be added (link)
- [ ] ![image](/assets/wireframe_project_2.JPG)
- [ ] ![image](/assets/New_Dest_Route.JPG)
- [ ] ![image](/assets/Favorite_route.JPG)


## Deliverables (User Stories)
- [ ] User can view existing travel destinations by country and city/ destination (destinations are held in Cards for each destination)
- [ ] User can view and pick favorite travel destinations via Favortie Form (Favorite Page component)
- [ ] User can add new travel destinations via NewDestination Form (Add New Destination Page component)


## CRUD routes you will be using and where (GET and POST are required)
- [ ] GET request -> Homepage component, Favorite Page component
- [ ] POST request -> New Destination form component
- [ ] PATCH request -> City Card component (2 PATCH req-- one to update favorites and one to remove from favorites list)
- [ ] DELETE request -> City Card component


## What three or more React Router routes you will be using and what components they will be used for (include any params)
![image](https://github.com/user-attachments/assets/d6304df3-d8aa-44c8-8c8f-0e46acdd97b1)


## A component diagram detailing the purpose of each component (at least five components)
- [ ] to be added (link)
- [ ] ![image](/assets/Component_Diagram.png)
- [ ] ![image](/assets/Component_Overview_Latest.png)
      

## DB.JSON
Example below:

# {
  "places": [
    {
      "id": "3",
      "country-name": "Australia",
      "city-name": "Brisbane",
      "image": "https://content.r9cdn.net/rimg/dimg/97/d4/1dc3de6e-city-27249-163f5014ee8.jpg?crop=true&width=1020&height=498",
      "favorite": false
    }


## Three Stretch Goals
- [ ] User can filter travel destination(s) based on criteria such as e.g. "Is it safe for women?", "Is desired travel time good (weather)?", "Types of Food available? Michelin restaurants, specific cuisine?


## Kanban Board
- [ ] Link to Trello to be added
- [ ] Screenshot image to be added
- [ ] ![image](/assets/KANBAN_Board.png)
