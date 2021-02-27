<p align="center">
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/0mC5gV2/logo.png" alt="logo" border="0" /></a>
</p>

<h3 align="center">VidHits</h3>

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> A web application to help users find top 5 most relevant videos on Youtube and interact with them using Youtube Data API v3
    <br> 
</p>


## 📝 Table of Contents
- [About](#about)
- [Built Using](#built_using)
- [Installation](#installation)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>
A web application to help users find top 5 most relevant videos on Youtube and view them. The app also contains user authentication as well as watch history databases.


## ⛏️ Built Using <a name = "built_using"></a>
- [React.js](https://reactjs.org/) - Frontend Framework
- [Flask](https://flask.palletsprojects.com/en/1.1.x/) - Server Framework
- [Youtube Data API v3](https://developers.google.com/youtube/v3) - Youtube API

### 🔧 Installation <a name = "installation"></a>
Set up the server

```
cd server
Create venv : py -3 -m venv venv
Activate venv: venv\Scripts\activate
Install dependencies: pip -r install requirements.txt
set FLASK_APP=auth.py
set FLASK_ENV=development
flask run
```

Set up client side

```
cd client
npm install
npm start
```

## ✍️ Authors <a name = "authors"></a>
- [@baotran01](https://github.com/baotran01)
- [@ltmquan](https://github.com/ltmquan)
- [@DuongPhan45](https://github.com/DuongPhan45)
