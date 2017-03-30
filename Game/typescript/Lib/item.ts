// Base item states
enum ItemState{
    Null = 0,
    Create,
    Add,
    Remove,
    Destroy,
    PointerIn,
    PointerOut
}

// Base class for items
class Item
{
    id: number;
    name: string;
    quantity: number;
    spritesheet: string;
    state: ItemState;
    animations: string[];

    parse(json: object):void
    {
        //TODO: make json parser
    }
}