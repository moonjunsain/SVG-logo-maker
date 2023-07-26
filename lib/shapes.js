// Parent class for all other shapes
class Shapes {
    constructor(fillcolor, textColor, text){
        this.fillcolor = fillcolor
        this.textColor = textColor
        this.text = text;
    }

    // setting fill color
    setColor(color){
        this.fillcolor = color;
    }
}

class Triangle extends Shapes{
    constructor(fillcolor, textColor, text){
        super(fillcolor, textColor, text)
        this.shape = 'triangle'
    }

    // rendering the polygon for triangle
    render(){
        return `<polygon points="150,18 244,182 56,182" fill="${this.fillcolor}" />`
    }

    
}

class Circle extends Shapes{
    constructor(fillcolor, textColor, text){
        super(fillcolor, textColor, text)
        this.shape = 'circle'
    }

    // rendering circle shape
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.fillcolor}" />`
    }
}

class Square extends Shapes{
    constructor(fillcolor, textColor, text){
        super(fillcolor, textColor, text)
        this.shape = 'square'
    }

    // rendering square shape
    render(){
        return `<rect x='50' width="200" height="200" fill="${this.fillcolor}" />`
    }
}

// export classes
module.exports = {
    Triangle,
    Circle,
    Square
}