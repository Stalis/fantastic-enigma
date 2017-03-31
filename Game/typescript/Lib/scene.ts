class point
{
    x: number;
    y: number;
}

class LayerGate
{
    points: point[];
    target: number;
}

class SceneLayer
{
    enabled: boolean;
    collisionMask: string;
    gates: LayerGate[];
}

class Scene
{
    background: string;
    layers: SceneLayer[];

    constructor()
    {

    }

    updateLayers()
    {

    }
}