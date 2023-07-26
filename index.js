const {Triangle, Circle, Square} = require('./lib/shapes.js')
const inq = require('inquirer')
const fs = require('fs')

// questions for the user
const questions = [
    {
        type: 'input',
        message: 'Enter text for your logo (no more than 3 characters)',
        name: 'text',
        // checks if input is up to 3 characters
        validate: function(input){
            if(input.length > 3){
                console.log(`\tYou have entered ${input}, does that look like no more than 3 characters to you?`)
                return false;
            }else{
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter the color for the text',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Enter the shape for the logo',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'Enter the color for the shape',
        name: 'shapeColor'
    }

]

// function for starting the program by asking questions for the user
function init(){
    inq.prompt(questions).then((answers) => {
       const logo = renderLogo(answers);
       fs.writeFile('./examples/logo.svg', generateSVG(logo), err => {
        if(err){
            console.log('Error occured')
        }else {
            console.log("generated")
        }
       })

    })
}

// function for rendering a logo
// accepts answer object returned from the inquirer
function renderLogo({text, textColor, shape, shapeColor}){
    // determine which shape the user chose
    let logo = null
    switch(shape){
        case 'Circle':
            logo = new Circle(shapeColor, textColor, text)
            break;
        case 'Square':
            logo = new Square(shapeColor, textColor, text)
            break;
        case 'Triangle':
            logo = new Triangle(shapeColor, textColor, text)
            break;
    }

    logo.setColor(shapeColor);

    // return rendered logo
    return logo;
}

// function for generating svg
function generateSVG(logo){
    return `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  ${logo.render()}

  <text x="150" y="120" font-size="60" text-anchor="middle" fill="${logo.textColor}">${logo.text}</text>

</svg>
`
}

init()
