# Merch Site

#### A simple React application for conditionally rendering multiple different components and implementing full CRUD functionality.

#### By Joey Palchak

## Technologies Used

- JavaScript
- React
- CSS
- HTML

## Description

Merch Site is a simple React application intended only for practice & learning purposes. The application conditionally renders a number of different components: a list of products, a form to create a product, or a form to update or delete an existing product, as well as allow a user to buy or restock a specific product, which updates that products quantity count. 

A product's quantity can only go as low as 0, at which point the product is listed as "Out of Stock".

The initial diagram listing out the application's component tree is shown below:

<img src="https://github.com/jfpalchak/merch-site/blob/main/src/img/merch-diagram-v1.drawio.png" alt="Application's component diagram." />

### TO DO: 
* Create a Cart widget, listing a user's bought items.

## Setup & Installation

1. Copy the **[URL](https://github.com/jfpalchak/merch-site.git)** provided for this repository.
2. Open Terminal.
3. Change your working directory to where you'd like to create the cloned directory.
4. In your terminal, type `git clone` and use the copied URL from Step 1. Or, copy the following git command:
   
```bash
$ git clone https://github.com/jfpalchak/merch-site.git
```

5. Navigate to the root of the newly cloned directory.
6. In your terminal, assuming Node and npm are installed, type the following command to install the project's dependencies found in `package.json`:
   
```bash
$ npm install
```

7. With the dependencies installed, type the following line in your terminal to run the application in development mode:
   
```bash
$ npm run start
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Known Bugs

* The application, in its current state, has no styling.
* The application's header & navigation is static and has no functionality.


## License

MIT License

Copyright (c) 2023 Joey Palchak

```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```