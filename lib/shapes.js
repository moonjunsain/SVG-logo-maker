class Shapes {
    constructor(fillcolor, textColor, text){
        this.fillcolor = fillcolor
        this.textColor = textColor
        this.text = text;
    }

    setColor(color){
        this.fillcolor = color;
    }
}

class Triangle extends Shapes{
    constructor(fillcolor, textColor, text){
        super(fillcolor, textColor, text)
        this.shape = 'triangle'
    }

    render(){
        
    }

    
}

class Circle extends Shapes{
    constructor(fillcolor, textColor, text){
        super(fillcolor, textColor, text)
        this.shape = 'circle'
    }

    render(){
        
    }
}

class Square extends Shapes{
    constructor(fillcolor, textColor, text){
        super(fillcolor, textColor, text)
        this.shape = 'square'
    }

    render(){
        
    }
}

// export classes
module.exports = {
    Triangle,
    Circle,
    Square
}