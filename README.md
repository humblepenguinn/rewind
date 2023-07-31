⚠️ **Disclaimer:** If you encounter any errors or issues while using the live app, it's most likely due to one of my API tokens expiring or my account reaching its usage limit. In such cases, I advise you to run the application from the source code provided in this repository.

# Rewind
<div align="center">
<h2 align="center"><a href="https://rewind-liard.vercel.app/">Link to live demo</a></h2>
</div>

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=flat-square)](https://nextjs.org/)
[![Powered by TypeScript](https://img.shields.io/badge/Powered%20by-TypeScript-blue?style=flat-square)](https://www.typescriptlang.org/)

![Home Page](./assets/1.png)
![Search Page](./assets/2.png)
![Video Page](./assets/3.png)
![Channel Page](./assets/4.png)

Rewind is an open-source YouTube clone project that aims to provide users with a familiar video-sharing platform experience. With Rewind, users can watch videos, search for channels, select categories, and enjoy a beautiful user interface built using Material UI.

# Features
- Watch Videos: Users can watch their favorite videos hosted on YouTube right within the Rewind platform.

- Search Channels: Easily search for channels or creators to discover new and exciting content.

- Select Categories: Browse through a variety of categories to find content that matches your interests.

- Beautiful UI using Material UI: Rewind boasts a visually appealing user interface crafted using Material UI, providing a smooth and seamless user experience.

- Completely responsive

# Run Locally
To run Rewind locally, follow these steps:

- Clone the Repository: Clone this GitHub repository to your local machine.

```bash
git clone https://github.com/humblepenguinn/rewind.git
cd rewind
```

- Install Dependencies: Make sure you have Node.js and npm (Node Package Manager) installed. Run the following command to install the project dependencies:

```bash
npm install
```

- Obtain YouTube Rapid API Key: If you don't have one already, you need to obtain a YouTube Rapid API key Rapid API website. Once you have the API key, create a `.env` file in the root directory of the project and add the following line:

```bash
NEXT_PUBLIC_RAPID_API_KEY=YOUR_API_KEY
```

Replace `YOUR_API_KEY` with your actual API key.


