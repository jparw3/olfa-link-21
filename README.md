# Olfa

- Ofla Connect audiences to all of your content with just one link. It is an open-source alternative to [Linktree](https://linktr.ee/) implemented in JavaScript.

## 👨‍💻 Demo

Check out the website: [Olfa](https://olfa21.herokuapp.com/)

## 👇 Prerequisites

Before installation, please make sure you have already installed following tools:

- [Git](https://git-scm.com/downloads)
- [NodeJs](https://nodejs.org/en/download/)

## 🛠️ Installation Steps

1. Fork the project
2. Clone the project
3. Navigate to the project directory `cd olfa-link-21`
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
    "bio": "Co-Founder of 𝗼𝗹𝗳𝗮.",
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
      },
      {
        "name": "Email",
        "url": "mailto:jparw3@gmail.com",
        "icon": "envelope"
      },
      {
        "name": "Discord Server",
        "url": "https://www.discord.com/",
        "icon": "discord"
      },
      {
        "name": "Personal Site",
        "url": "https://www.jparw.com/",
        "icon": "globe"
      }
      
    ]
  }
```

Your URL will be `https://olfa21.herokuapp.com/<yourusername>`. For example: <https://olfa21.herokuapp.com/jparw>\
Your `avatar` URL should take the format of `https://github.com/<yourusername>.png`.

### Available Icons:

    Link
    android 
    apple 
    discord 
    facebook 
    github 
    microsoft
    paypal 
    slack
    twitter
    vimeo 
    youtube
    envelope
    send
    instagram
    linkedin
    codewars
    twitch
    hashcode
    dev.to
    web


## 🛡️ License

This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.

## 🙏 Support

This project needs a ⭐️ from you. Don't forget to leave a star ⭐️
