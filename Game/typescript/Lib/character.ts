// Base states of parts of char
enum OState 
{
    Default = 0,
    Light,
    Medium,
    Hard,
    Out
}

// Struct w/ states of char
class CharacterState
{
    arms:       OState = OState.Default;
    head:       OState = OState.Default;
    legs:       OState = OState.Default;
    body:       OState = OState.Default;
    common:     OState = OState.Default;
    radiation:  OState = OState.Default;
    acid:       OState = OState.Default;
}

// Class w/ Role Playing part of char
class RPChar
{

}

// Base class of character
class Character
{
    name: string;
    state: CharacterState;
    constructor(name)
    {
        this.name = name;
    }
    rolePart: RPChar;
}