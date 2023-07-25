const {Triangle, Square, Circle} = require('./shapes')

describe('Triangle', () => {
    describe('render()', () => {
        it('should return the rendered shape using polygon for triangle with correct color')
        const shape = new Triangle('none', 'none', 'none')
        shape.setColor('blue')
        expect(shape.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
    })
})

describe('Square', () => {
    describe('render()', () => {
        it('should return the rendered shape using polygon for Square with correct color')
        const shape = new Square('none', 'none', 'none')
        shape.setColor('blue')
        expect(shape.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
    })
})

describe('Circle', () => {
    describe('render()', () => {
        it('should return the rendered shape using polygon for Circle with correct color')
        const shape = new Circle('none', 'none', 'none')
        shape.setColor('blue')
        expect(shape.render()).toBe('<circle r="100" fill="blue" />')
    })
})