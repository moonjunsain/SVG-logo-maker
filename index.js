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
                console.log(`You have entered ${input}, does that look like no more than 3 characters to you?`)
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
