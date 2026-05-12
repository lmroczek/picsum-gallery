# Picsum Image Gallery

Small gallery app that loads images from [Lorem Picsum](https://picsum.photos/). Built with **Vite**, **React**, **TypeScript**, **Tailwind CSS**, and **React Router**

## Features

- Grid of images from `https://picsum.photos/v2/list` api endpoint
- Click a image to open the detail page and see the **author** name
- Author name is also available on **hover**
- Optional: `limit` search param on homepage to control how many images are returned.

Image Gallery defaults to a limit of 36 images. Use the optional search param `limit` to display a custom limit.



## Requirements

- Node.js
- npm

## Setup

Run `npm install`

## Run Locally

Run `npm run dev`
Navigate to `http://localhost:5173/` or `http://localhost:5173/?limit={limit_num}` 

## Production Build

Run `npm run build`

