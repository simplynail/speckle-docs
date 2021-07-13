(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{690:function(e,t,o){"use strict";o.r(t);var a=o(44),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"advanced-concepts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#advanced-concepts"}},[e._v("#")]),e._v(" Advanced Concepts")]),e._v(" "),o("p",[e._v("Congratulations on being an advanced user of Speckle!\nYou've breezed through our git-based walkthrough guide and have arrived at the hard stuff.")]),e._v(" "),o("p",[e._v("A lot of careful thought has gone into planning Speckle v2.0.\nIts architecture has been designed to be modular, swappable and hackable. Nearly every part of Speckle can be disassembled and customised to your heart's content.")]),e._v(" "),o("p",[e._v("Want to write your own Speckle Connector? We wrote a guide to help you with that!\nWant to run your own Speckle server or embed our Three.js viewer into your Notion document? We've got you covered there, too!")]),e._v(" "),o("p",[e._v("But that's enough talk - let's dive in.")]),e._v(" "),o("h2",{attrs:{id:"the-base-object-🟦"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-base-object-🟦"}},[e._v("#")]),e._v(" The Base Object 🟦")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("Base")]),e._v(" object is probably not something you'll have to deal with directly when you're just getting started with Speckle. However, it is a helpful concept to be aware of if you want to get into creating custom Speckle objects, work on your own conversions (AKA Speckle Kits), or building scripts and apps on top of Speckle.")]),e._v(" "),o("h3",{attrs:{id:"what-is-the-base-object"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-base-object"}},[e._v("#")]),e._v(" What is the Base Object?")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("Base")]),e._v(' object is the building block of Speckle data. It is a dynamic object that is the "base" of all other Speckle objects. The '),o("code",[e._v("Base")]),e._v(" and other objects that inherit from it have a combination of pre-defined properties (eg "),o("code",[e._v("id")]),e._v(", "),o("code",[e._v("speckle_type")]),e._v(", "),o("code",[e._v("units")]),e._v(") and dynamic properties which can be added on the fly. Property values can also be other "),o("code",[e._v("Base")]),e._v(" objects such as a "),o("code",[e._v("RevitColumn")]),e._v(" containing a "),o("code",[e._v("Line")]),e._v(" representing its base line.")]),e._v(" "),o("p",[e._v("Sending a collection of Revit elements? Each of those elements is being converted into a Speckle Object equivalent which inherits from Speckle's "),o("code",[e._v("Base")]),e._v(" class. The commit you just created when sending those elements? That is also a "),o("code",[e._v("Base")]),e._v(" which contains all the Revit elements nested within it.")]),e._v(" "),o("p",[e._v("A key feature of the "),o("code",[e._v("Base")]),e._v(" object is "),o("strong",[e._v("decomposition")]),e._v(". This allows you to flag properties as "),o("em",[e._v("detachable")]),e._v("; this means they'll exist outside of the parent "),o("code",[e._v("Base")]),e._v(" object and can be stored or retrieved separately.")]),e._v(" "),o("p",[e._v("For example, if you have several "),o("code",[e._v("Beam")]),e._v(" and "),o("code",[e._v("Wall")]),e._v(" elements that all want to reference the same "),o("code",[e._v("Level")]),e._v(". Instead of creating multiple copies of this "),o("code",[e._v("Level")]),e._v(" and storing it within each of the "),o("code",[e._v("Beam")]),e._v(" and "),o("code",[e._v("Wall")]),e._v(" objects, you would instead make the "),o("code",[e._v("Level")]),e._v(" detachable in the "),o("code",[e._v("Beam")]),e._v("s and "),o("code",[e._v("Wall")]),e._v("s. This allows all the objects to reference the same "),o("code",[e._v("Level")]),e._v(", which now only needs to be stored once.")]),e._v(" "),o("h3",{attrs:{id:"how-do-i-use-the-base-object"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-use-the-base-object"}},[e._v("#")]),e._v(" How do I use the Base Object?")]),e._v(" "),o("p",[e._v("When using the connectors to send existing data, you won't really need to think about the "),o("code",[e._v("Base")]),e._v(" object as all this is taken care of for you behind the scenes. The objects in your model are converted to Speckle "),o("code",[e._v("Base")]),e._v(" objects and then are nested within a parent "),o("code",[e._v("Base")]),e._v(' object to create the commit - all when you press the "Send" button.')]),e._v(" "),o("p",[e._v("If you are getting into creating your own "),o("code",[e._v("Base")]),e._v(" objects, our "),o("a",{attrs:{href:"/dev/base"}},[e._v("The Base Object")]),e._v(" section and the "),o("a",{attrs:{href:"/dev/decomposition"}},[e._v("Decomposition API")]),e._v(" are a great way to get started.")]),e._v(" "),o("p",[e._v("For further information on the "),o("code",[e._v("Base")]),e._v(" object, see our "),o("a",{attrs:{href:"https://speckle.community/t/core-2-0-the-base-object/782",target:"_blank",rel:"noopener noreferrer"}},[e._v("deep dive"),o("OutboundLink")],1),e._v(" on the Speckle community forum.")]),e._v(" "),o("h2",{attrs:{id:"speckle-kits-🔀"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#speckle-kits-🔀"}},[e._v("#")]),e._v(" Speckle Kits 🔀")]),e._v(" "),o("h3",{attrs:{id:"what-are-speckle-kits"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-are-speckle-kits"}},[e._v("#")]),e._v(" What are Speckle Kits?")]),e._v(" "),o("p",[e._v("We said every part of Speckle is hackable. "),o("code",[e._v("Speckle Kits")]),e._v(" are probably one of the more accessible hacks we've made possible.")]),e._v(" "),o("p",[e._v("As mentioned previously, Speckle converts all incoming data from various software (Revit, Grasshopper, etc) to its software-agnostic 'Speckle' format. It does this via detailed conversion routines, built to handle each of the support applications' APIs.")]),e._v(" "),o("p",[e._v("However, perhaps you don't like the way Speckle handles "),o("code",[e._v("Brep")]),e._v(" geometry by default, or you wish we stripped out more data to suit your hyper-fast application. Why not hack one of our translation routines, or (better yet) build your own from scratch?\nIf this sounds like you, you'll want to read about creating "),o("code",[e._v("Speckle Kits")]),e._v("!")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("In short - Speckle Kits are custom translators to get data to (and from) Speckle's native object model.")])]),e._v(" "),o("h3",{attrs:{id:"how-do-i-use-speckle-kits"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-use-speckle-kits"}},[e._v("#")]),e._v(" How do I use Speckle Kits?")]),e._v(" "),o("p",[e._v("For a detailed overview of Speckle Kits, see our developer section, and our "),o("a",{attrs:{href:"https://speckle.community/t/introducing-kits-2-0/710/37",target:"_blank",rel:"noopener noreferrer"}},[e._v("deep dive"),o("OutboundLink")],1),e._v(" on the Speckle community forum.")]),e._v(" "),o("h2",{attrs:{id:"transports-💾"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#transports-💾"}},[e._v("#")]),e._v(" Transports 💾")]),e._v(" "),o("h3",{attrs:{id:"what-are-transports"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-are-transports"}},[e._v("#")]),e._v(" What are Transports?")]),e._v(" "),o("p",[e._v("Speckle data is designed to be serialized and stored in a number of ways: perhaps you keep your Speckle data in Excel, an SQL database or a non-relational DB system? We introduced "),o("code",[e._v("Transports")]),e._v(" to Speckle 2.0 to give you full control over how and where your data is stored.")]),e._v(" "),o("h3",{attrs:{id:"how-do-i-use-transports"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-use-transports"}},[e._v("#")]),e._v(" How do I use Transports?")]),e._v(" "),o("p",[e._v("For a detailed overview of Transports, see our developer section, and our "),o("a",{attrs:{href:"https://speckle.community/t/core-2-0-transports/919",target:"_blank",rel:"noopener noreferrer"}},[e._v("deep dive"),o("OutboundLink")],1),e._v(" on the Speckle community forum.")])])}),[],!1,null,null,null);t.default=s.exports}}]);