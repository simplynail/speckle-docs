# Supported Elements

As Speckle develops, we are able to build further integrations with each of the applications we support. However, each application, and its API, comes with its own limitations that (alas) no programmer can overcome!

The tables below give an per-application indication of which object conversions Speckle is currently able to support, and to what extent. 


::: tip Not Seeing Support for Something you Want? 🧃

We're working hard to support additional elements. The list below will be updated as soon new conversion routines are added.

If you'd like us to add something specific, let us know on the [Speckle Community Forum](https://speckle.community)! We use community feedback to guide what features we'll work on next.

:::

## Rhino

### Supported Elements

Almost all geometric elements are supported by the Rhino connector. This includes:

| Geometry     | Send    | Receive | Status     |
| ------------ | :-----: | :-----: | :--------: |
| Point        | ✅       | ✅       | `Complete` |
| Line         | ✅       | ✅       | `Complete` |
| Plane        | ✅       | ✅       | `Complete` |
| Arc          | ✅       | ✅       | `Complete` |
| Circle       | ✅       | ✅       | `Complete` |
| Ellipse      | ✅       | ✅       | `Complete` |
| Polyline     | ✅       | ✅       | `Complete` |
| Polycurve    | ✅       | ✅       | `Complete` |
| Spline       | ✅       | ✅       | `Complete` |
| Nurb Surface | As Brep | ✅       | `Complete` |
| Brep         | ✅       | ✅       | `Complete` |
| Extrusion    | ✅       | As Brep | `Complete` |
| Mesh         | ✅       | ✅       | `Complete` |

| BuiltElement | Send | Receive  | Status     |
| ------------ | :--: | :------: | :--------: |
| View         | ✅    | ✅        | `Complete` |
| ModelCurve   |      | As Curve | `Complete` |
| DirectShape  |      | As Mesh  | `Complete` |

| Other           | Send | Receive | Status        |
| --------------- | :--: | :-----: | :-----------: |
| RenderMaterial  | ✅    |         | `In Progress` |
| BlockInstance   | ✅    | ✅       | `Complete`    |
| BlockDefinition | ✅    | ✅       | `Complete`    |

> Speckle supports sending BREPs from Rhino <-> Rhino, and Rhino <-> Revit, with some limitations imposed by Revit's API.

### Unsupported elements

Many non-geometric elements and any geometric element not listed above, such as text tags, hatches, etc are not supported.


## Grasshopper

### Supported Elements
Grasshopper supports the same geometry as the Rhino connector:

| Geometry       | Send    | Receive | Status        |
| -------------- | :-----: | :-----: | :-----------: |
| Point          | ✅       | ✅       | `Complete`    |
| Line           | ✅       | ✅       | `Complete`    |
| Plane          | ✅       | ✅       | `Complete`    |
| Arc            | ✅       | ✅       | `Complete`    |
| Circle         | ✅       | ✅       | `Complete`    |
| Ellipse        | ✅       | ✅       | `Complete`    |
| Polyline       | ✅       | ✅       | `Complete`    |
| Polycurve      | ✅       | ✅       | `Complete`    |
| Spline         | ✅       | ✅       | `Complete`    |
| Nurb Surface   | As Brep | ✅       | `Complete`    |
| Brep           | ✅       | ✅       | `Complete`    |
| Extrusion      | ✅       | As Brep | `Complete`    |
| Mesh           | ✅       | ✅       | `Complete`    |

| Other          | Send    | Receive | Status        |
| -------------- | :-----: | :-----: | :-----------: |
| RenderMaterial | ✅       |         | `In Progress` |

The **Schema Builder** node also provides additional support for the following built elements:

| BuiltElement                                          | Send    | Receive | Status        |
| ----------------------------------------------------- | :-----: | :-----: | :-----------: |
| Adaptive Component                                    | ✅       |         | `Complete`    |
| Beam                                                  | ✅       |         | `Complete`    |
| Brace                                                 | ✅       |         | `Complete`    |
| Ceiling                                               | ✅       |         | `Complete`    |
| Column                                                | ✅       |         | `Complete`    |
| Curves (Model, Detail, Room Boundary)                 | ✅       |         | `Complete`    |
| Direct Shape                                          | ✅       |         | `Complete`    |
| Freeform Element                                      | ✅       |         | `Complete`    |
| Duct                                                  | ✅       |         | `Complete`    |
| Face Wall                                             | ✅       |         | `Complete`    |
| Family Instance                                       | ✅       |         | `Complete`    |
| Floor                                                 | ✅       |         | `Complete`    |
| GridLine                                              | ✅       |         | `Complete`    |
| Level                                                 | ✅       |         | `Complete`    |
| Opening (Wall, Vertical, Shaft)                       | ✅       |         | `Complete`    |
| Parameter                                             | ✅       |         | `Complete`    |
| Railing                                               | ✅       |         | `Complete`    |
| Roof (Extrusion, Footprint)                           | ✅       |         | `Complete`    |
| Topography                                            | ✅       |         | `Complete`    |
| View                                                  |          |         | `In Progress` |
| Wall                                                  | ✅       |         | `Complete`    |

Refer to the section below for additional information on the **Schema Builder** node.

### Unsupported elements

Non-geometric elements and any geometric element not listed above, such as text tags, hatches, etc... are not supported.


## Revit

### Supported Elements

| BuiltElement                                          | Send | Receive | Status        |
| ----------------------------------------------------- | :--: | :-----: | :-----------: |
| Adaptive Component                                    | ✅    | ✅       | `Complete`    |
| Beam                                                  | ✅    | ✅       | `Complete`    |
| Brace                                                 | ✅    | ✅       | `Complete`    |
| Building Pad                                          | ✅    |         | `In Progress` |
| Ceiling                                               | ✅    |         | `In Progress` |
| Curves (Model, Detail, Room Boundary)                 | ✅    | ✅       | `Complete`    |
| Direct Shape                                          | ✅    | ✅       | `Complete`    |
| Duct                                                  | ✅    | ✅       | `Complete`    |
| Face Wall                                             |      | ✅       | `In Progress` |
| Family Instance                                       | ✅    | ✅       | `Complete`    |
| Floor                                                 | ✅    | ✅       | `Complete`    |
| Freeform Element                                      |      | ✅       | `In Progress` |
| Group                                                 | ✅    |         | `In Progress` |
| Level                                                 | ✅    | ✅       | `Complete`    |
| Opening (Wall, Vertical, Shaft)                       | ✅    | ✅       | `Complete`    |
| Pipe                                                  | ✅    | ✅       | `Complete`    |
| Project Information                                   | ✅    |         | `In Progress` |
| Railing                                               | ✅    | ✅       | `Complete`    |
| Roof (Extrusion, Footprint)                           | ✅    | ✅       | `Complete`    |
| Room                                                  | ✅    |         | `Complete`    |
| Stair                                                 | ✅    |         | `Complete`    |
| Topography                                            | ✅    | ✅       | `Complete`    |
| View (FloorPlan, CeilingPlan, Elevation, Section, 3D) | ✅    |         | `In Progress` |
| Wall                                                  | ✅    | ✅       | `Complete`    |
| Wire                                                  | ✅    | ✅       | `Complete`    |

| Other          | Send | Receive | Status        |
| -------------- | ---- | ------- | ------------- |
| RenderMaterial |      |         | `In Progress` |
| BlockInstance  |      | As Generic Model | `Complete` |

### Supported Geometries

Generally speaking, Revit doesn't support raw geometry as it deals with families. Nonetheless, we've made it simple to receive some types of geometry directly, without the need of specifying family type, name or any other parameter.

| Geometry     | Send | Receive        | Status        |
| ------------ | ---- | -------------- | ------------- |
| Line & Curve |      | As ModelCurve  | `In Progress` |
| Brep         |      | As DirectShape | `Complete`    |
| Mesh         |      | As DirectShape | `Complete`    |

### Non Supported Elements

Various element and data types do not have a direct conversions in Revit. Therefore sending Numbers, Points, Vectors or other non supported elements will have no effects.

To use such data types in Revit you should check our our [Dynamo Connector](/user/dynamo)

:::tip

If non supported elements are received in this connector, no errors are thrown.

:::


## Dynamo

### Supported Elements

| Geometry       | Send          | Receive       | Status     |
| -------------- | :-----------: | :-----------: | :--------: |
| Point          | ✅             | ✅             | `Complete` |
| Line           | ✅             | ✅             | `Complete` |
| Plane          | ✅             | ✅             | `Complete` |
| Arc            | ✅             | ✅             | `Complete` |
| Circle         | ✅             | ✅             | `Complete` |
| Cuboid         | As Box        | ✅             | `Complete` |
| Ellipse        | ✅             | ✅             | `Complete` |
| Helix          | As Spline     |               | `Complete` |
| Polyline       |               | x<sup>α</sup> | `Complete` |
| Polycurve      | ✅             | ✅             | `Complete` |
| Polygon        | As Polyline   | ✅             | `Complete` |
| Rectangle      | As Polyline   | ✅             | `Complete` |
| Spline         | ✅             | ✅             | `Complete` |
| Brep           | ✅             | ✅             | `Complete` |
| Mesh           | ✅             | ✅             | `Complete` |
| Revit Elements | x<sup>β</sup> |               | `Complete` |

<sup>α</sup>: As Rectangle, Polycurve, or Polygon

<sup>β</sup>: All Revit elements described [here](/user/revit.html#supported-elements) can also be sent from Dynamo

### Unsupported Elements

Any geometric elements not listed above are not supported.

## Civil 3D

### Supported Elements

| Geometry      | Send | Receive | Status         |
| ------------- | ---- | ------- | -------------- |
| Featureline   | ✅    |         | `In Progress`  |
| Alignment     | ✅    |         | `In Progress`  |
| Profile       |      |         | `In Progress`  |
| Tin Surface   | as Mesh    |         | `In Progress`  |
| Grid Surface  | as Mesh    |         | `In Progress`  |
| Pipe          | as Mesh    |         | `In Progress`  |
| Structure     | as Mesh    |         | `In Progress`  |

### Unsupported Elements

Subassemblies and Assemblies are not supported.

## AutoCAD

### Supported Elements

| Geometry       | Send | Receive | Status        |
| -------------- | :--: | :-----: | :-----------: |
| Point          | ✅    | ✅       | `Complete`    |
| Line           | ✅    | ✅       | `Complete`    |
| Arc            | ✅    | ✅       | `Complete`    |
| Circle         | ✅    | ✅       | `Complete`    |
| Ellipse        | ✅    | ✅       | `Complete`    |
| Polyline       | ✅    | ✅       | `Complete`    |
| Polycurve      | ✅    | ✅       | `Complete`    |
| Spline         | ✅    | ✅       | `Complete`    |
| Plane Surface  | ✅    |         | `In Progress` |
| Nurb Surface   | ✅    |         | `In Progress` |
| PolyFace Mesh  | ✅    |         | `In Progress` |
| SubD Mesh      | ✅    |         | `In Progress` |
| 3D Solid       | as Mesh    |         | `In Progress` |

| Other          | Send | Receive | Status        |
| -------------- | :--: | :-----: | :-----------: |
| BlockInstance  | ✅    | ✅       | `Complete`    |
| BlockDefinition| ✅    | ✅       | `Complete`    |

### Unsupported Elements

Hatches, labels, and annotations are not supported, as well as any unlisted element. Dynamic blocks are not supported at this time.

## Blender

### Supported Elements

The Blender Connector is still a work in progress and, as such, the conversions to and from Speckle are not yet robust. We welcome feedback, requests, edge cases, and contributions!

- Meshes are fairy well supported
- Breps are imported as meshes using their `displayValue`
- Curves have limited support

| Type                                     | Send | Receive      | Status        |
| ---------------------------------------- | :--: | :----------: | :-----------: |
| Arc                                      |      | approximated | `In Progress` |
| Brep                                     |      | as mesh      | `In Progress` |
| Curve (Nurbs, Bezier, Ngons as Polyline) | ✅    | ✅            | `In Progress` |
| Mesh                                     | ✅    | ✅            | `In Progress` |
| Polycurve                                |      | ✅            | `In Progress` |
| Polyline                                 | ✅    | ✅            | `In Progress` |
| Render Material                          | ✅    | ✅            | `In Progress` |

## Unity

### Supported Elements

We've only started supporting Unity elements, please let us know what else you'd like to see, and do contribute if you have the skillz!

| Type                 | Speckle > Unity | Unity > Speckle |
| -------------------- | :-------------: | :-------------: |
| Point                |       ✅        |       ✅        |
| Line                 |       ✅        |                 |
| Polyline             |       ✅        |                 |
| Curve                |       ✅        |                 |
| Mesh                 |       ✅        |       ✅        |
| BuiltElements 3DView |       ✅        |                 |