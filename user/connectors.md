# Introduction

Our Desktop Connectors are plugins for some of the most popular AEC software, including:

- [McNeel Rhinoceros](/user/rhino)
- [Grasshopper](/user/grasshopper)
- [Autodesk Revit](/user/revit)
- [Dynamo](/user/dynamo)
- [Autodesk AutoCAD](/user/autocadcivil)
- [Autodesk Civil3D](/user/autocadcivil)
- [Unity](/user/unity)
- [Blender](/user/blender)
- [Excel](/user/excel)

...with more on the way soon!

These Connectors take care of sending and receiving data to your Speckle server, in the form of streams (no need for files or file types!)

::: tip

Want to see a connector for an application we don't support yet? [Let us know in the Speckle community forum!](https://speckle.community)

:::

## Installation

All our connectors (with a few exceptions) are distributed via the [Speckle Manager](/user/manager). See our section on [installing connectors](/user/manager.html#installing-connectors) for more details.

## Units

The connectors take care of unit conversions for geometric objects so you don't have to worry about that. For example, if you're sending a 1 foot long line from Rhino to an AutoCAD document in mm it will measure exactly 304.8mm.

Unit conversion also automatically happens on BIM metadata, so if you're sending a Wall [using the Schema Builder](/user/grasshopper.html#schema-builder) node from Grasshopper to Revit the connectors will take care of converting the height for you.

::: tip IMPORTANT 🙌
Custom metadata and non-linear units are not currently being converted.
:::
