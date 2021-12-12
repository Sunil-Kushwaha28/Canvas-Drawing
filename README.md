# Canvas-Draw
I have developed this application using Node js, Express and React js here consists of a Canvas that enables you to Sketch desired figures  in the draw area, along with multiple colors to choose from placed in the palette. It also facilitates you to Download your art from the canvas into a PDF file format through the 'Download the PDF' button provided.

# Project Setup
1. Create a new directory `mkdir Canvas-Draw` && `cd Canvas-Draw`
2. Create a new React App with `create-react-app client` and then move into newly created directory and install dependencies `cd client` && `npm i -S axios file-saver`
3. Create an Express server with `mkdir server` && `cd server` && `touch index.js` && `npm init` press enter a couple of times to initialize package.json and then run `npm i -S express body-parser cors html-pdf` to save all the necessary dependencies.
4. Add proxy inside of client/package.json, above the dependencies, simply add `“proxy”: “http://localhost:5000/"`, so you can call the localhost from the client.
5. Open two different terminals: First one: go into the client directory and run `npm start` Second one: go into the server directory and run `node index.js`

# Screen Shots
![DashBoard](https://user-images.githubusercontent.com/82012814/145703321-21ff539d-68b3-48cc-b140-1443a629191e.png)

![Output](https://user-images.githubusercontent.com/82012814/145703325-9f4d360a-340f-443b-989e-e8b7567ba7fa.png)

![Output_pdf](https://user-images.githubusercontent.com/82012814/145724404-8563f5cb-769b-4df4-8957-cc8d5b6db182.png)
