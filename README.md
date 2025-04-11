
# HBnB Evolution

**HBnB Evolution** is a basic clone of the popular AirBnB platform, developed as part of the Holberton School curriculum. This project demonstrates a fundamental understanding of full-stack web development by implementing a Flask-based backend and a simple web client built with HTML, CSS, and JavaScript with few functionalities.

The backend is designed to manage and serve data related to places, users, and reviews. Upon launching the backend server, a database is automatically populated with sample data, allowing for immediate testing of the implemented functionalities.

For know more about the Backend, check the Readme in `/holbertonschool-hbnb/part4/hbnb` directory

The key features of the Frontend are:
* **Viewing Places:** Users can browse a list of available places filtered by max price.
* **Viewing Place Details + Reviews:** Users can view detailed information about a specific place, including its associated reviews.
* **Login / Logout:** Registered users can log in and out of the application.
* **Submitting Reviews:** Only logged-in users can submit reviews for places.
    * Owners cannot review their own places.
    * Each user is limited to submitting only one review per place.


## Prerequisites
Before you begin, ensure you have the following installed:

* **Python 3.x:** The backend is built using Python.
* **pip:** Python package installer (usually comes with Python).

#### Clone the repository:

```bash
git clone https://github.com/pablonudel/holbertonschool-hbnb.git
```

#### Install Backend Dependencies:
Navigate to the `/holbertonschool-hbnb/part4/hbnb` directory in your terminal and run the following command to install the necessary Python packages:

```bash
pip install -r requirements.txt
```


## Get Started!
#### ▶︎ Backend
Navigate to the `/holbertonschool-hbnb/part4/hbnb` directory in your terminal and run the following command:
```bash
python3 run.py
```
---
#### ▶︎ Frontend
You will need a way to serve the static frontend files. Here I will cover to options: **NodeJS** and **Live Server for Visual Studio Code**.

**A. NodeJS**

If you have **NodeJS** installed globally, open a new terminal window, navigate to the `/holbertonschool-hbnb/part4/frontend` directory and run the following command:
```bash
node run.js
```
Then open your browser and go to `http://localhost:3000/`

**B. Live Sever**

> [!IMPORTANT]  
> By default, Live Server automatically reloads the page on every file change. While convenient, this might interfere with testing backend interactions.

if you are using **Visual Studio Code** and you want to use the **Live Server extension (by Ritwick Dey)**, follow these steps to ensure an optimal experience:

**1.** Install the **Live Server extension (by Ritwick Dey)** in **Visual Studio Code**.

**2.** Go to the Extesion tab on the left and find **Live Server**.

**3.** Right clic over the extesion and go to `Settings`

**4.** Within the settings options, find and open the `Edit in settings.json` link

**5.** At the end of the setting object add the following:
```json
"liveServer.settings.fullReload": false,
"liveServer.settings.ignoreFiles": [
    "**/**"
]
```

**6.** Finally, open the `index.html` file in the `/holbertonschool-hbnb/part4/frontend` directory and run the **Live Server**
## Available users for testing
As the database is created and populated on backend run, here is the list of users credentials to test the frontend functionalities:

email: jane@email.com  
password: jane1234

email: jennifer@email.com  
password: jennifer1234

email: pablo@email.com  
password: pablo1234

email: john@email.com  
password: john1234

email: mathieu@email.com  
password: mathieu1234

email: morgane@email.com  
password: morgane1234
