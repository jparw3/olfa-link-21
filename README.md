# Olfa

- Ofla Connect audiences to all of your content with just one link. It is an open-source alternative to [Linktree](https://linktr.ee/) implemented in JavaScript.

## 👨‍💻 Demo

Check out the website: [Olfa](link will go here)

## 👇 Prerequisites

Before installation, please make sure you have already installed following tools:

- [Git](https://git-scm.com/downloads)
- [NodeJs](https://nodejs.org/en/download/)

## 🛠️ Installation Steps

1. Fork the project
2. Clone the project
3. Navigate to the project directory `cd open-source-olfa`
4. Install dependencies with `npm install`
5. Run `npm start`
6. Optional : Run the tests with `npm run cypress:run`

Alternatively, skip all the steps by using [![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/jparw/open-source-olfa/)

## 🎭 To Add Your Profile

Create a file named `your-username.json` in the directory `public/data` with the following content:

Optional fields: `links` and `milestones`

```json
{
    "name": "Jack Willars",
    "bio": "Founder of Olfa.",
    "avatar": "https://github.com/jparw.png",
    "links": [
      {
        "name": "Follow me on GitHub",
        "url": "https://github.com/jparw",
        "icon": "github"
      },
      {
        "name": "Follow me on Twitter",
        "url": "https://twitter.com/jparw3",
        "icon": "twitter"
      }
    ],
    "milestones": [
      {
        "title": "Started College",
        "date": "September 2020",
        "icon": "book",
        "color": "grey",
        "description": "I began studying information technology at Peterborough college & currently working towards a level 3 diploma."

      },
      {
        "title": "Started 'Olfa'",
        "date": "October 2021",
        "icon": "link",
        "color": "red",
        "description": "Founded olfa as part of a college project."
      }
    ]
  }
```

Your URL will be `http://link/<yourusername>`. For example: <http://link.com/jparw>\
Your `avatar` URL should take the format of `https://github.com/<yourusername>.png`.

### Available Icons:

## 🛡️ License

This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.

## 🙏 Support

This project needs a ⭐️ from you. Don't forget to leave a star ⭐️
