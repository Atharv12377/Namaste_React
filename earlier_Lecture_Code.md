
const jsxheading = <h1 id="head">Namaste React</h1> //this is jsx, just a syntax.

// const HeadingComponent = () => {
//     return <h2>This is React functional component</h2>
// } //This is valid too, here we have used { } and return statement.
const Title = () => (
    <div id="container">
        <h1>
            Namaste React
        </h1>
    </div>
)

const title =  (
    <div id="container">
        <h1>
            Namaste React from element
        </h1>
    </div>
)

//that title component inside the heading component is called the 
const HeadingComponent = () => (
    <div id="container2">
        {title} this is how we put element inside a component
        <Title/> 
        <h2>This is React functional component</h2>
    </div>
)
//This is a perfectly valid functional component. In arrow functions when there is only one thing to return we can skip { } and return statement, therefore this works too



