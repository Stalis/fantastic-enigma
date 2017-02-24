#!/usr/bin/python3
from PIL import Image, ImageDraw
import os, sys

def makeTilemap(folderName):
    inFile = "Maps/" + folderName + "/Scene_Mask.png"
    outFile = "Maps/" + folderName + "/Scene_Mask.csv"
    
    try:
        image = Image.open(inFile)
        draw = ImageDraw.Draw(image)
        width = image.size[0]
        height = image.size[1]
    except IOError:
        print('Cannot open!')
        
    tMap = list()
    
    factor = 129
    for i in range(height):
        row = list()
        for j in range(width):
            p = image.getpixel((j,i))
            if p < factor:
                image.putpixel((j,i),0)
                row.append(0)
            else:
                row.append(-1)
        tMap.append(row)

    sMap = ''
    for row in tMap:
        sMap += ','.join(str(x) for x in row)
        sMap += '\n'

    try:
        with open(outFile, 'w') as f:
            f.write(sMap)
            f.close()
    except IOError:
        print('Cannot write!')

directory = os.getcwd() + "/Maps"
folders = os.listdir(directory)

for scene in folders:
    if os.path.isdir(directory + "/" + scene):
        print(scene + "...", end='')
        try:
            makeTilemap(scene)
        except TypeError as inst:
            print('TypeError!')
            print(inst.args)
        except:
            print("Error!", sys.exc_info()[0])            
        else:
            print("Done!")

tileset = Image.new('L', (1,2))        
tileset.format = 'PNG'
tileset.putpixel((0,0),0)
tileset.putpixel((0,1),129)
tileset.save("Maps/TileSet.png", 'PNG')
tileset.close()
