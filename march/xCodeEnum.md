# Enum

Enumeration

A group of values that related that you put together in an enum

 enum Days of the week {
    case monday
    case tuesday
    case wednesday
    case thursday
    case friday
    case saturday
    case sunday
 }

 enum Directions {
    case north
    case south
    case east
    case west
 }

when using an enum you have the opportunity to use it like a property of an object.  You can access any of these "properties" by using something like. Dot notation.

`` .<case  gets printed here>``

this helps by autogenerating your code and will save you from having any typo by granting you access to these properties by way of the "." that gives you a drop down.

Enums also have "raw values" This is accessible when you get the enum a type (in this exampls it is a String.)

``
    enum Phone: String {
    case iPhone11Pro = "hell yea"
    case iPhoneSE = "cool"
    case pixel = "this is not a thing"
    case nokia = "this is weak"
}

func getMyOpinion( on phone: Phone){
    print(phone.rawValue)
}

getMyOpinion(on: .iPhoneSE)``

This function takes in a phone as a parameter and then will print the rawValue of the phone, which is depenedent on the phone we pass

## Switch Statement

 a switch statement in xCode needs to be exhaustive meaning it needs to account for every case. So if we are using a `enum` we need to account for everyone of our enums. If we take our established enum above where we wrote out our phones we would need to take care of every case

 func refactoredGetMyOpinion( on phone: Phone){

    switch phone {
    case .iPhone11Pro:
        print("hell yea")
    case .iPhoneSE:
        print("cool")
    case .nokia:
        print(phone.rawValue)
    case .pixel:
        print(phone.rawValue)
        
    }

}

however if we ran into a switch statement where we were not able to handle EVERY case (to be exhaustive) we would need to have a `default` case which is essentially our "catch all". In the example below I handled every other case with my default and any number that does not fit within the paramter still has print statement

func determinePlayerLeague(from rank: Int){
    switch rank{
    case 0:
        print("play the game to determine your league")
    case 1..<50:
        print("You are in the bronze leage")
    case 50..<100:
        print("you are in the silver leage")
    case 100..<200:
        print("you are in gold leage")
    default:
        print("You are in a leage of your own")
    }
}

determinePlayerLeague(from: 103)
