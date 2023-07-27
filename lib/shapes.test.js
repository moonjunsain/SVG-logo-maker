const {Triangle, Square, Circle} = require('./shapes')

// test for triangle render function
describe('Triangle', () => {
    describe('render()', () => {
        it('should return the rendered shape using polygon for triangle with correct color', ()=>{
            const shape = new Triangle('red')
            shape.setColor('blue')
            expect(shape.render()).toBe('<polygon points="150,18 244,182 56,182" fill="blue" />')
        })
    })
})

// test for square render function
describe('Square', () => {
    describe('render()', () => {
        it('should return the rendered shape using rect for Square with correct color', () => {
            const shape = new Square('red')
            shape.setColor('blue')
            expect(shape.render()).toBe(`<rect x='50' width="200" height="200" fill="blue" />`)
        })
    })
})

// test for circle render function
describe('Circle', () => {
    describe('render()', () => {
        it('should return the rendered shape using circle for Circle with correct color', () => {
            const shape = new Circle('red')
            shape.setColor('red')
            expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />')
        })
    })
})