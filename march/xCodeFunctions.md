# xCode

## Functions

What are functions ?
    Functions are compartmentalized sets of instructions that can be re-used over and over within your code. This allows us to write out our functionality and how it will work when we call said function.

### argument labels

``func add(firtNumber: Int, to secondNumber: Int) -> Int {
    let sum = firstNumber + secondNumber
    return sum
}
``
within this function you can see that the parameter label gets used within the scope

in this example the `to` inbetween the paramters is called an "argument label" this helps the function be "more readable"

in a function when you have two arguments you have one that
The argument label gets read at the call-site. makes it readable 

the parameter label (firstNumber and secondNumber) gets used within the scope.

``add(firstNumber: 18, to 120)

^ this is refered to as a "call site" this is where you use the function. Where we defined the function above this call site. We then have to call the function.

## If / Else statement

basic logic. 

"if this then that"