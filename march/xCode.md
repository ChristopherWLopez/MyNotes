# Xcode

What is a type : its a type something is

Int is a number

created variable of type Int (whole number)
``var highScore: Int = 0``

our highScore is a numver is a type ``type`` int

## float

has atleast 6 decimal places
`` var percentComplete : Double = 0.76 ``

## double

``0.7652145865222``
has atleast 15 decimal places. This is not a requirement inorder to use a double it is just something that you can do if you need to be very precise

You dont need to use the decimal places in order to use these Types, it is just their capabilities.

## String

A string is a string of text. This is signified by using the double quotes

``var userThought : String = "I hope I get to eat pizza today``

## Bool

this is true or false

``var truth : Bool = true``

These are the basic types that we can use in swift, however there are instance where we can create our own types.

``var Chris : Person = Person(named:"Chris")``

## Type inference

Swift is able to infer the type of variable we are create. Type inference works most of the time

## Variables and Constants

variables and constants "capture a value"

a constants (``let``)are immutible and are often a "safty feature" it also offers a bit of performance perl since a variable can be changed and that possibiliy needs to taken into consideration.

A ``var`` is something that can be changed there for if you have a variable that is likely to be updated it is wise to use ``var``

## Arrays

An array is a container or a list of objects that holds various items.

arrays are 0 indexed

arrays are always be in order If you want an empty array you need to give it a type. It can infer what the items are if it is populated. However for an empty container you need to set the type.

### methods

 arr. count(the count)
 arr.first(the first item)
 arr.last(the last item)
 arr.[0] (like JS you will get the index that you ask for)
 arr.append() (this allows you to append an item to the end of the array)
 arr.insert(44, at: 0)
 arr.sort() (this allows us to sort our array)
 arr.shuffle()

## Sets

 Sets are like arrays, except sets are unOrdered. They cannot garuantee any order, They can also have no duplicate values.
 they have better performance than arrays They have faster Insertion and removal, so if you want to constantly manipulate a list than a `set` would likely be the way to go.

If you want to declare an empty Set:

    ``var agaesSet: Set<int> = []`` 

    ``var agesArray = [18, 33, 44, 34]``
    ``var agesArray  [int] = []``

you can use a set based on an exisiting array.

inorder for something to go into a set it has to conform into a hashable.

<!-- what is hashable -->

basic typs that come with swift conform to hashable.
sets have hashvalues which makes it easy to look things up, like arrays in order to find a specific item we would have to visit every item until we find what are looking for. With sets we can find the item specificley because of its hash value.

``set.contains(101)``
``set.insert()``

A set will never hold on to a certain order
no duplicates
however it has great performance. When trying to search for a specific item it will always be constant time, because of the hashvalue.

## Dictionary

A collection of items has labels that have ``key:value`` "pairs".

    let devices: [String: String] = [:]
        what type your key is and what type your value is we have declare this inside of an empty square bracket where the items are sperated by a colon

        We are able to look up specific items of a dictionary.
        let devices: [String: String]=[
              "phone":"Iphone 8s",
              "cat": "Kitty",
]
              devices["phone"]  "Iphone 8s"

We know the key so we know the exact location of the item we are looking for. Its a good way to store a collection of information with keys attached
