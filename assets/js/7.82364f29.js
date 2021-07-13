(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{313:function(e,t,a){e.exports=a.p+"assets/img/rvt-schemaBuilder-popup.05a0e125.gif"},521:function(e,t,a){e.exports=a.p+"assets/img/ghrvt-intro.720cca57.gif"},522:function(e,t,a){e.exports=a.p+"assets/img/ghRvt-sendProjectData.0174d413.gif"},523:function(e,t,a){e.exports=a.p+"assets/img/ghRvt-receiveRvtData.292159b1.png"},524:function(e,t,a){e.exports=a.p+"assets/img/InteropGuide-plotData.2c703569.png"},525:function(e,t,a){e.exports=a.p+"assets/img/ghRvt-plot-geometry.75f72684.png"},526:function(e,t,a){e.exports=a.p+"assets/img/gh-Rvt-sendPlotData.802d0700.png"},527:function(e,t,a){e.exports=a.p+"assets/img/gh-Rvt-anim-plot.4fd2bb57.gif"},528:function(e,t,a){e.exports=a.p+"assets/img/ghRvt-plot-revitObjects.367dc235.png"},529:function(e,t,a){e.exports=a.p+"assets/img/gh-Rvt-anim-plotRvt.31a993e0.gif"},530:function(e,t,a){e.exports=a.p+"assets/img/InteropGuide_floors.d6a52b40.png"},531:function(e,t,a){e.exports=a.p+"assets/img/ghRvt-createLevels.1e482f8f.png"},532:function(e,t,a){e.exports=a.p+"assets/img/ghRvt-createFloors.4e6e481f.png"},533:function(e,t,a){e.exports=a.p+"assets/img/InteropGuide-beams.12dbd078.png"},534:function(e,t,a){e.exports=a.p+"assets/img/InteropGuide-walls.c40f96f6.png"},535:function(e,t,a){e.exports=a.p+"assets/img/ghRvt-createRevitWallsByFace.64f0ed0d.png"},536:function(e,t,a){e.exports=a.p+"assets/img/ghRvt-createRevitWalls.64fc2722.png"},537:function(e,t,a){e.exports=a.p+"assets/img/ghRvt-genericObj-directShape.4bb203ee.png"},538:function(e,t,a){e.exports=a.p+"assets/img/ghRvt-structureData.b38e35f4.png"},539:function(e,t,a){e.exports=a.p+"assets/img/gh-Rvt-sendStructureData.31a6e354.png"},540:function(e,t,a){e.exports=a.p+"assets/img/gh-Rvt-anim-structureData.d66c5a3f.gif"},541:function(e,t,a){e.exports=a.p+"assets/img/InteropGuide-panels.c1293242.png"},542:function(e,t,a){e.exports=a.p+"assets/img/ghRvt-creatingAdaptiveComponents.b51fe833.png"},543:function(e,t,a){e.exports=a.p+"assets/img/gh-Rvt-anim-panels.fc45add6.gif"},544:function(e,t,a){e.exports=a.p+"assets/img/ghRvt-swapBranches.9c146ba3.gif"},697:function(e,t,a){"use strict";a.r(t);var o=a(44),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"grasshopper-➡-revit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#grasshopper-➡-revit"}},[e._v("#")]),e._v(" Grasshopper ➡ Revit")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Level:")]),e._v(" Intermediate")]),e._v(" "),o("p",[o("strong",[e._v("Author:")]),e._v(" Alan")]),e._v(" "),o("p",[o("strong",[e._v("Software used:")]),e._v(" Revit 2021, Grasshopper for Rhino 7")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("We recently upgraded this guide. If you're looking for the previous version, you can find it "),o("RouterLink",{attrs:{to:"/user/interop-gh-revit-v1.html"}},[e._v("here")])],1)]),e._v(" "),o("p",[o("strong",[e._v("Stream "),o("em",[e._v("Grasshopper")]),e._v(" geometry to Revit using Speckle!")])]),e._v(" "),o("p",[e._v("In this guide, we will send different types of geometry to Revit to understand how Speckle converts them into Revit geometry. We will also create some "),o("code",[e._v("BuiltElements")]),e._v(" using the "),o("code",[e._v("SchemaBuilder")]),e._v(" node, which allows for the generation of native Revit elements such as walls, floors, topography, etc...")]),e._v(" "),o("p",[o("img",{attrs:{src:a(521),alt:""}})]),e._v(" "),o("h2",{attrs:{id:"getting-started"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),o("p",[e._v("Before getting started, check that you have a supported version of Rhino (6 or 7) and Revit (2019-22) and the Speckle 2.0 connectors installed for "),o("strong",[e._v("Grasshopper")]),e._v(" and "),o("strong",[e._v("Revit")]),e._v(".")]),e._v(" "),o("p",[e._v("With everything set up, download the Rhino and Grasshopper files for this tutorial "),o("a",{attrs:{href:"https://drive.google.com/drive/folders/1bFRqtdL62bHaA1LAfdzll59FBv0givxE?usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1)]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("Our Rhino and Grasshopper connectors are independent of each other, unlike in Speckle 1.0. This means you can choose whichever one best suits your workflow 😁")])]),e._v(" "),o("p",[e._v("We're also going to assume that you already have access to a Speckle 2.0 server, and you have correctly set up your account for that server in the "),o("em",[e._v("Speckle Manager")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"sharing-revit-project-data"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sharing-revit-project-data"}},[e._v("#")]),e._v(" Sharing Revit Project Data")]),e._v(" "),o("p",[e._v("Let's start with the easy part: In order to create Revit elements using Speckle, we should ideally have some knowledge of the current information available in our Revit project.")]),e._v(" "),o("p",[e._v("Let's create a new Revit project using the default "),o("code",[e._v("Architectural Template")]),e._v(". You can use your preferred units. A project will be created with 2 default levels ("),o("em",[e._v("level 0")]),e._v(" and "),o("em",[e._v("level 1")]),e._v("). It should also have some default families loaded in the project.")]),e._v(" "),o("p",[e._v("Now, go to the "),o("strong",[e._v("Add-Ins")]),e._v(" tab, and press the "),o("code",[e._v("Revit Connector")]),e._v(" icon. The Speckle "),o("em",[e._v("Desktop UI")]),e._v(" should appear.")]),e._v(" "),o("ul",[o("li",[e._v("Press the blue "),o("code",[e._v("+")]),e._v(" button on the lower-right corner to add a stream to the file.")]),e._v(" "),o("li",[e._v("Create a new stream by writing a name and clicking on the blue arrow icon. You should see the "),o("code",[e._v("Stream")]),e._v(" appear in the streams list.")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("In our case, we'll call our stream "),o("strong",[e._v("Interop - GH/Revit - Project Data")])])]),e._v(" "),o("ul",[o("li",[e._v("Press the blue button at the center that reads "),o("code",[e._v("0 objects")]),e._v(" and select the option "),o("code",[e._v("Set/Edit Objects Filter")]),e._v(".")]),e._v(" "),o("li",[e._v("Go to the "),o("code",[e._v("Project Info")]),e._v(" filter type, select the "),o("em",[e._v("Project Info")]),e._v(", "),o("em",[e._v("Levels")]),e._v(" and "),o("em",[e._v("Families and Types")]),e._v(" options and press "),o("code",[e._v("Set Filter")]),e._v(".")]),e._v(" "),o("li",[e._v("Press the "),o("code",[e._v("Send")]),e._v(" button in the "),o("em",[e._v("Project Data")]),e._v(" stream.")])]),e._v(" "),o("p",[o("img",{attrs:{src:a(522),alt:""}})]),e._v(" "),o("p",[e._v("That's it! We've effectively pushed our project information, including all existing levels and loaded families/types to Speckle. We'll use this information to correctly set family/type names for Revit elements.")]),e._v(" "),o("p",[e._v("This concludes our setup. We'll now switch to Grasshopper to receive it and use it to generate new Revit elements.")]),e._v(" "),o("h2",{attrs:{id:"using-revit-project-data"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-revit-project-data"}},[e._v("#")]),e._v(" Using Revit Project Data")]),e._v(" "),o("p",[e._v("Now let's open up our "),o("em",[e._v("fake Leadenhall")]),e._v(" building model in Rhino. You'll need to open both Rhino and Grasshopper files, as there are some Grasshopper nodes that reference geometries from the Rhino file.")]),e._v(" "),o("p",[e._v("Go to a blank area of your Grasshopper canvas:")]),e._v(" "),o("ol",[o("li",[e._v("Create a "),o("code",[e._v("Panel")]),e._v(" and a "),o("code",[e._v("Receive")]),e._v(" node.")]),e._v(" "),o("li",[e._v("Paste the "),o("em",[e._v("stream url")]),e._v(" we copied in the previous step into the panel.")]),e._v(" "),o("li",[e._v("Connect the panel to the "),o("code",[e._v("Receive")]),e._v(" node input and press the "),o("em",[e._v("Receive")]),e._v(" button.")]),e._v(" "),o("li",[e._v("Create an "),o("code",[e._v("Expand Speckle Object")]),e._v(" node, and connect the received data to it.")])]),e._v(" "),o("p",[e._v("Once done, it should look like this:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(523),alt:""}})]),e._v(" "),o("p",[e._v("Most of the outputs will also be "),o("code",[e._v("Base")]),e._v(" objects, meaning you'll have to expand them to inspect their properties (more on this later when using family types).")]),e._v(" "),o("h2",{attrs:{id:"sending-geometry-to-revit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sending-geometry-to-revit"}},[e._v("#")]),e._v(" Sending Geometry to Revit")]),e._v(" "),o("p",[o("img",{attrs:{src:a(524),alt:""}})]),e._v(" "),o("p",[e._v("We'll start by sending some contextual geometry to Revit, along with the surrounding street lines and plot terrain. For this, we'll first create a "),o("code",[e._v("Speckle Object")]),e._v(" to organize our data.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(525),alt:""}})]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("Remember you must correctly specify the "),o("code",[e._v("Access Type")]),e._v(" for each input to generate the right amount of "),o("code",[e._v("Base")]),e._v(" objects.")]),e._v(" "),o("p",[e._v("Inputs set with "),o("code",[e._v("List Access")]),e._v(" will be shown with an "),o("code",[e._v("L")]),e._v(" icon beside them.")])]),e._v(" "),o("p",[e._v("We'll also need to create a new "),o("em",[e._v("stream")]),e._v(" in our server to send our data to. Create it, name it "),o("code",[e._v("Interop - GH/Revit - Plot Data")]),e._v(", and copy its "),o("code",[e._v("url")]),e._v(".")]),e._v(" "),o("p",[e._v("Then, we can just plug in the geometries directly into their respective inputs. Connect it to a "),o("code",[e._v("Send Data")]),e._v(" node pointing to the stream we just created and press "),o("code",[e._v("Send")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:a(526),alt:""}})]),e._v(" "),o("p",[e._v("In Revit, add the stream to your DesktopUI and press "),o("code",[e._v("Receive")]),e._v(". Here's a quick peek of the process:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(527),alt:""}})]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("About sending BREPs")]),e._v(" "),o("p",[e._v("Rhino BREP support still has some limitations we are working on improving, but others are strictly imposed by the Revit API. In order to ensure unsupported geometric objects still get represented when importing to Revit, we provide a "),o("code",[e._v("fallback")]),e._v(" value for every "),o("code",[e._v("BREP")]),e._v(" in the form of a "),o("code",[e._v("Mesh")]),e._v(".")]),e._v(" "),o("p",[e._v("In short, this means whenever a BREP conversion fails in Revit, the resulting object will still be generated in the model, only as a tesselated representation of the smooth BREP. It's nice to have a Plan B.")])]),e._v(" "),o("h3",{attrs:{id:"controlling-the-directshape-conversion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#controlling-the-directshape-conversion"}},[e._v("#")]),e._v(" Controlling the DirectShape Conversion")]),e._v(" "),o("p",[e._v("As you may have noticed, our surrounding buildings have been created in Revit as "),o("code",[e._v("Generic Models")]),e._v(". This is the default conversion behaviour when sending geometry elements that are not directly supported by Revit (such as meshes or breps).")]),e._v(" "),o("p",[e._v("In order to control this behaviour, we can use the "),o("code",[e._v("Schema Builder")]),e._v(" node.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("SchemaBuilder Node Pop-up")]),e._v(" "),o("p",[e._v("When first placing the node, a pop-up window will appear allowing you to select the object type you want to create. These are organized into two main categories:")]),e._v(" "),o("ul",[o("li",[e._v("Built Elements: These are Speckle elements created to support common built elements (beam, wall, slab, level...) accross the entire Speckle ecosystem.")]),e._v(" "),o("li",[e._v("Revit Elements: These are specifically designed to support Revit specific entities and workflows.")])]),e._v(" "),o("p",[o("img",{attrs:{src:a(313),alt:""}})])]),e._v(" "),o("ul",[o("li",[e._v("Drag a "),o("code",[e._v("Create Schema Object")]),e._v(" node to your canvas.")]),e._v(" "),o("li",[e._v("From the pop-up, select "),o("code",[e._v("DirectShape")]),e._v(" and press ok. A new node and a dropdown should appear.")]),e._v(" "),o("li",[e._v("Select "),o("code",[e._v("Mass")]),e._v(" from the dropdown list.")]),e._v(" "),o("li",[e._v("Connect the surrounding building geometries to the "),o("code",[e._v("baseGeometries")]),e._v(" input. "),o("em",[e._v("Graft")]),e._v(" the input to generate one direct shape per geometry.")]),e._v(" "),o("li",[e._v("You'll also need to connect a panel with a desired name for each "),o("code",[e._v("DirectShape")]),e._v(".")])]),e._v(" "),o("p",[e._v("Let's also send the "),o("code",[e._v("terrain")]),e._v(" as a native "),o("code",[e._v("RevitTopography")]),e._v(" object.")]),e._v(" "),o("ul",[o("li",[e._v("Drag a "),o("code",[e._v("Create Schema Object")]),e._v(" node to your canvas and select the "),o("code",[e._v("RevitTopography")]),e._v(" type.")]),e._v(" "),o("li",[e._v("Connect the terrain mesh to the revit topography "),o("code",[e._v("displayMesh")]),e._v(" input.")])]),e._v(" "),o("p",[e._v("It should end up looking like this:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(528),alt:""}})]),e._v(" "),o("p",[e._v("Now swap those direct shapes for the original geometries and send them.")]),e._v(" "),o("p",[e._v("In Revit, once you get the notification that data was changed, press the receive button. You should now see the surrounding buildings appear as "),o("code",[e._v("Massing")]),e._v(" objects.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("If you don't see the surrounding buildings, ensure your Visibility/Graphics (or View Template) settings are set to display elements of the "),o("em",[e._v("Massing / Site")]),e._v(" category.")])]),e._v(" "),o("p",[o("img",{attrs:{src:a(529),alt:""}})]),e._v(" "),o("h2",{attrs:{id:"generating-floors-and-levels"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#generating-floors-and-levels"}},[e._v("#")]),e._v(" Generating Floors and Levels")]),e._v(" "),o("p",[e._v("Now that we have our plot and surrounding buildings set-up, let's proceed with the creation of the levels and floor slabs for each level.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(530),alt:""}})]),e._v(" "),o("h3",{attrs:{id:"creating-levels"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-levels"}},[e._v("#")]),e._v(" Creating Levels")]),e._v(" "),o("ul",[o("li",[e._v("Drag a "),o("code",[e._v("Create Schema Object")]),e._v(" node to your canvas and select the "),o("code",[e._v("RevitLevel")]),e._v(" type.")]),e._v(" "),o("li",[e._v("A Revit level requires a "),o("em",[e._v("name")]),e._v(" and "),o("em",[e._v("elevation")]),e._v(". You'll also need to specify whether to create a view to go along with the new level.")]),e._v(" "),o("li",[e._v("Connect the "),o("code",[e._v("lower floor names")]),e._v(" and "),o("code",[e._v("lower floor heights")]),e._v(" to their respective inputs in the "),o("code",[e._v("RevitLevel")]),e._v(" node.")])]),e._v(" "),o("p",[o("img",{attrs:{src:a(531),alt:""}})]),e._v(" "),o("h3",{attrs:{id:"creating-floors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-floors"}},[e._v("#")]),e._v(" Creating Floors")]),e._v(" "),o("p",[e._v("Now we'll create some native Revit floors, using the levels we previously created and the curves available on the "),o("code",[e._v("Upper/Lower Floor Outlines")]),e._v(" nodes. We'll also need to select a floor type from one of the "),o("code",[e._v("available floor types")]),e._v(" we received from Revit.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("To select a specific floor type, first select an individual type with a "),o("code",[e._v("list item")]),e._v(" node, and then use the "),o("code",[e._v("Expand Speckle Object")]),e._v(" node to inspect its properties.")])]),e._v(" "),o("ol",[o("li",[e._v("Create two "),o("code",[e._v("SchemaBuilder")]),e._v(" nodes with "),o("code",[e._v("RevitFloor")]),e._v(" type.")]),e._v(" "),o("li",[e._v("Connect the selected family name and type.")]),e._v(" "),o("li",[e._v("Connect the respective levels and outlines (upper/lower) to each "),o("code",[e._v("RevitFloor")]),e._v(" node.")])]),e._v(" "),o("p",[o("img",{attrs:{src:a(532),alt:""}})]),e._v(" "),o("h2",{attrs:{id:"creating-beams"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-beams"}},[e._v("#")]),e._v(" Creating Beams")]),e._v(" "),o("p",[o("img",{attrs:{src:a(533),alt:""}})]),e._v(" "),o("p",[e._v("In this case, we do not have much information about the structural beams since they are modelled as simple lines. This is the perfect scenario in which to use Speckle's "),o("code",[e._v("BuiltElements")]),e._v(".")]),e._v(" "),o("p",[e._v("These are simple representations of common BIM elements, that require a minimum amount of input. These elements will be appropriately converted to native elements on each target platform wherever possible.")]),e._v(" "),o("p",[e._v("In the case of a "),o("code",[e._v("BuiltElements.Beam")]),e._v(", the input required is only the axis line of that beam.")]),e._v(" "),o("ol",[o("li",[e._v("Drag a "),o("code",[e._v("Create Schema Object")]),e._v(" node to your canvas and select the "),o("code",[e._v("Beam")]),e._v(" type (not "),o("code",[e._v("RevitBeam")]),e._v(").")]),e._v(" "),o("li",[e._v("Connect all truss lines to the "),o("code",[e._v("baseLine")]),e._v(" input. Since we don't really care about the data structure they're organized by, we can flatten the input.")])]),e._v(" "),o("p",[o("img",{attrs:{src:"https://link",alt:""}})]),e._v(" "),o("h2",{attrs:{id:"creating-the-walls"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-walls"}},[e._v("#")]),e._v(" Creating the Walls")]),e._v(" "),o("p",[o("img",{attrs:{src:a(534),alt:""}})]),e._v(" "),o("h3",{attrs:{id:"core-walls"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#core-walls"}},[e._v("#")]),e._v(" Core walls")]),e._v(" "),o("p",[e._v("Just like with floors, we can create walls using the "),o("code",[e._v("Create Schema Object")]),e._v(" node. There are several ways to create a wall, but for the "),o("code",[e._v("Core Walls")]),e._v(", we're going to create them with the "),o("code",[e._v("Wall by Face")]),e._v(" type. This takes a surface as a reference to create a wall in revit with the same shape.")]),e._v(" "),o("ol",[o("li",[e._v("Drag a "),o("code",[e._v("Create Schema Object")]),e._v(" node to your canvas and select the "),o("code",[e._v("Wall by Face")]),e._v(" type.")]),e._v(" "),o("li",[e._v("Locate the node called "),o("code",[e._v("Core Walls")]),e._v(" and connect it to the "),o("code",[e._v("surface")]),e._v(" input.")]),e._v(" "),o("li",[e._v("Select a category from the "),o("em",[e._v("available wall types")]),e._v(" we received from Revit and connect its family name and type.")]),e._v(" "),o("li",[e._v("The last thing we need is a level, but in this case, we already know there is a level called "),o("code",[e._v("Level 0")]),e._v(" on our project, which is at ground level. We can reference it using the "),o("code",[e._v("Level by name")]),e._v(" schema.")]),e._v(" "),o("li",[e._v("Drag a "),o("code",[e._v("Create Schema Object")]),e._v(" node to your canvas and select the "),o("code",[e._v("Level by name")]),e._v(".")]),e._v(" "),o("li",[e._v('Connect a panel with the text "Level 0" to its only input, and connect the resulting level into the '),o("code",[e._v("Wall by Face")]),e._v(" node.")])]),e._v(" "),o("p",[o("img",{attrs:{src:a(535),alt:""}})]),e._v(" "),o("h3",{attrs:{id:"interior-walls"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#interior-walls"}},[e._v("#")]),e._v(" Interior Walls")]),e._v(" "),o("p",[e._v("We have a bunch of interior walls we haven't done anything with yet. Let's create them using a "),o("code",[e._v("line")]),e._v(" and a "),o("code",[e._v("height")]),e._v(".")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Drag a "),o("code",[e._v("Create Schema Object")]),e._v(" node to your canvas and select the "),o("code",[e._v("Wall by curve and height")]),e._v(" type.")])]),e._v(" "),o("li",[o("p",[e._v("Connect the nodes "),o("code",[e._v("Wall Baseline per level")]),e._v("and "),o("code",[e._v("Wall Height per level")]),e._v(" to the "),o("code",[e._v("baseLine")]),e._v(" and "),o("code",[e._v("height")]),e._v(" input respectively.")])]),e._v(" "),o("li",[o("p",[e._v("Connect the "),o("code",[e._v("filtered levels")]),e._v(" node to the "),o("code",[e._v("level")]),e._v(" input.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("Notice that, since not all levels have walls, the levels have been filtered to contain only the ones that are to be used.")])])]),e._v(" "),o("li",[o("p",[e._v("You can "),o("em",[e._v("flatten")]),e._v(" the output of the node, as we won't be needing that data tree structure anymore.")])])]),e._v(" "),o("p",[o("img",{attrs:{src:a(536),alt:""}})]),e._v(" "),o("h2",{attrs:{id:"categorizing-generic-geometric-objects"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#categorizing-generic-geometric-objects"}},[e._v("#")]),e._v(" Categorizing Generic Geometric Objects")]),e._v(" "),o("p",[e._v("For anything that cannot be directly translated into Revit elements, you can still send them directly, as we saw in the first step. Just as we did with the "),o("em",[e._v("surrounding buildings")]),e._v(", we can categorize the "),o("em",[e._v("Ground Floor Objects")]),e._v(", "),o("em",[e._v("Foundation")]),e._v(" and "),o("em",[e._v("Ramps")]),e._v(" as "),o("code",[e._v("DirectShape")]),e._v(" objects with their appropriate categories.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(537),alt:""}})]),e._v(" "),o("h2",{attrs:{id:"organize-the-building-structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#organize-the-building-structure"}},[e._v("#")]),e._v(" Organize the Building Structure")]),e._v(" "),o("p",[e._v("Until this moment, we've been creating several Revit elements we want to send. Before doing so, let's organize that data into a single "),o("code",[e._v("Speckle Object")]),e._v(" to keep everything tidy.")]),e._v(" "),o("p",[e._v("We have several parts to send:")]),e._v(" "),o("ul",[o("li",[e._v("Floors")]),e._v(" "),o("li",[e._v("Core walls")]),e._v(" "),o("li",[e._v("Interior walls")]),e._v(" "),o("li",[e._v("Beams")]),e._v(" "),o("li",[e._v("Objects at ground floor")]),e._v(" "),o("li",[e._v("Substructure")]),e._v(" "),o("li",[e._v("Ramps")])]),e._v(" "),o("ol",[o("li",[e._v("Drag a new "),o("code",[e._v("Create Speckle Object")]),e._v(" node.")]),e._v(" "),o("li",[e._v("Create inputs for each of the object types we just created.")]),e._v(" "),o("li",[e._v("Connect everything appropriately.")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("Always remember to set the access type of your inputs appropriately.")])]),e._v(" "),o("p",[o("img",{attrs:{src:a(538),alt:""}})]),e._v(" "),o("h2",{attrs:{id:"sending-the-building-structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sending-the-building-structure"}},[e._v("#")]),e._v(" Sending the Building Structure")]),e._v(" "),o("p",[e._v("In the "),o("RouterLink",{attrs:{to:"/user/web.html"}},[e._v("Speckle Web App")]),e._v(", create a new stream to send the structure data to. Copy its "),o("code",[e._v("url")]),e._v(". In Grasshopper, create a "),o("code",[e._v("Send")]),e._v(" node and a panel with the "),o("code",[e._v("url")]),e._v(" of the stream we created earlier to share the structure.")],1),e._v(" "),o("p",[o("img",{attrs:{src:a(539),alt:""}})]),e._v(" "),o("p",[e._v("In Revit, add the newly created stream to the DesktopUI and press "),o("code",[e._v("Receive")]),e._v(". You can see the entire process in the animation bellow.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(540),alt:""}})]),e._v(" "),o("h2",{attrs:{id:"create-adaptive-components"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-adaptive-components"}},[e._v("#")]),e._v(" Create Adaptive Components")]),e._v(" "),o("p",[o("img",{attrs:{src:a(541),alt:""}})]),e._v(" "),o("p",[e._v("Adaptative Component families in Revit are a ton of fun. They are defined by a set of points, flexing to adapt their geometry as these adaptive points move around.")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("In order to correctly create "),o("em",[e._v("Adaptive Component")]),e._v(" family instances, the specified family must be loaded into the Revit project.")]),e._v(" "),o("p",[e._v("The amount of points provided must also coincide with the amount of points the "),o("em",[e._v("Adaptive Component")]),e._v(" family uses internally.")])]),e._v(" "),o("p",[e._v("You'll find a very simple adaptive component called "),o("code",[e._v("4Pt-AdaptivePanel")]),e._v(" along with the rest of the files of this guide.")]),e._v(" "),o("p",[e._v("In the file, we already created some "),o("em",[e._v("curved square panels")]),e._v(" to act as a fancy roof shading. In the grasshopper file, you'll find a node called "),o("code",[e._v("Point groups for adaptive component")]),e._v(", containing the 4 corners of this panels individually grouped.")]),e._v(" "),o("p",[e._v("Sending "),o("em",[e._v("Adaptive Components")]),e._v(" to Revit using Speckle is quite easy:")]),e._v(" "),o("ul",[o("li",[e._v("Drag a "),o("code",[e._v("Create Schema Object")]),e._v(" node to your canvas and select the "),o("code",[e._v("AdaptiveComponent")]),e._v(" type.")]),e._v(" "),o("li",[e._v("Input the appropriate "),o("code",[e._v("family")]),e._v(" and "),o("code",[e._v("type")]),e._v(" (in our case, they are both the same: "),o("code",[e._v("4Pt-AdaptivePanel")]),e._v(")")]),e._v(" "),o("li",[e._v("Connect the grouped points to the "),o("code",[e._v("basePoints")]),e._v(" input. The component would generate an "),o("code",[e._v("AdaptiveComponent")]),e._v(" object for every group of points.")]),e._v(" "),o("li",[e._v("Create a new stream on the server to hold this adaptive panels and create a "),o("code",[e._v("Send")]),e._v(" node pointing to that stream.")]),e._v(" "),o("li",[e._v("Send the "),o("code",[e._v("AdaptiveComponents")]),e._v(" you just created.")])]),e._v(" "),o("p",[o("img",{attrs:{src:a(542),alt:""}})]),e._v(" "),o("p",[e._v("In Revit, add the stream you just created using the Desktop UI and receive the data. Your panels should appear on the top floor of the building.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(543),alt:""}})]),e._v(" "),o("h3",{attrs:{id:"using-branches-to-swap-design-alternatives"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-branches-to-swap-design-alternatives"}},[e._v("#")]),e._v(" Using Branches to Swap Design Alternatives")]),e._v(" "),o("p",[e._v("This is a perfect moment to introduce the concept of "),o("code",[e._v("branches")]),e._v(" and how you can leverage this feature to alternate between different design options.")]),e._v(" "),o("ol",[o("li",[e._v("Go to the stream's url in your web browser, and create a new branch called "),o("code",[e._v("design-option-2")]),e._v(".")]),e._v(" "),o("li",[e._v("Copy the url of the "),o("code",[e._v("branch")]),e._v(" page (it should end in "),o("code",[e._v("/branches/BRANCH_NAME")]),e._v(")")]),e._v(" "),o("li",[e._v("On the grasshopper file, modify the points in any way, like modifying the "),o("code",[e._v("seed")]),e._v(" input in the "),o("code",[e._v("Random numbers")]),e._v(" node.")]),e._v(" "),o("li",[e._v("Change the "),o("code",[e._v("stream url")]),e._v(" for the "),o("code",[e._v("branch url")]),e._v(" we just copied and press send.")])]),e._v(" "),o("p",[e._v("In Revit, you'll notice there's an update notification in the "),o("em",[e._v("Roof Panels")]),e._v(" stream that specifies there have been changes in a "),o("strong",[e._v("different branch")]),e._v(". You need to switch branches to receive the new data.")]),e._v(" "),o("ol",[o("li",[e._v("Click the branch name on the stream.")]),e._v(" "),o("li",[e._v("Select the branch we just created.")]),e._v(" "),o("li",[e._v("Click the "),o("code",[e._v("Receive")]),e._v(" button.")])]),e._v(" "),o("p",[e._v("You should see the new panels update to reflect the new design option. To go back to the previous version, you can always go back to the "),o("code",[e._v("main")]),e._v(" branch.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(544),alt:""}})]),e._v(" "),o("h2",{attrs:{id:"using-speckle-in-the-family-editor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-speckle-in-the-family-editor"}},[e._v("#")]),e._v(" Using Speckle in the Family Editor")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("🚧 This section is still under construction 🚧")])]),e._v(" "),o("h3",{attrs:{id:"populating-family-instances-in-the-model"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#populating-family-instances-in-the-model"}},[e._v("#")]),e._v(" Populating Family Instances in the Model")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("🚧 This section is still under construction 🚧")])]),e._v(" "),o("h2",{attrs:{id:"known-issues"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[e._v("#")]),e._v(" Known Issues")]),e._v(" "),o("p",[e._v("Speckle 2.0 is currently in "),o("code",[e._v("beta")]),e._v(" mode. You can find any known issues on our "),o("a",{attrs:{href:"https://github.com/specklesystems/speckle-sharp/issues?q=is%3Aissue+is%3Aopen",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Repo Issues page"),o("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);