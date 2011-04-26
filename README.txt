CSS Hologram Jquery Plugin
by Katherine Leipper
http://katherineleipper.com



-----------------------------
How to Install:
-----------------------------

Download the script. In the head of your HTML file, be sure to add a link to 
the latest version of Jquery. Below that, include a link to the plugin script.


-----------------------------
Requirements:
-----------------------------

ABSOLUTE or FIXED -----------
To give elements the hologram effect, their CSS position property MUST be set 
to either absolute or fixed.

Z-INDEX ---------------------
You should also set your hologram elements' z-index properties. The z-index 
will make it appear more in the foreground or background compared to the other 
elements. If you don't give the element a z-index, it will default to 10.

Reference the element name, id, or class, like this in your Jquery:

   $('#move-this-id').cssHolo();

This example will move the element with the corresponding id. Likewise, you 
can move more than one element at a time:

   $('div, p').cssHolo();



-----------------------------
Changing Settings:
-----------------------------

You can pass certain parameters to the plugin to control some of the settings 
of the movement of the object. Here are the default settings:

{
   'skew': 10, // how much it likes to move, with 1 being the least amount of movement
      //(you can set it beyond 10 if you want)
   'centerX': $(document.body).width()/2, // how far from the left the centerpoint is, in pixels
   'centerY': $(document.body).height()/2, // how far from the top the centerpoint is, in pixels
   'invert': true, // does it move toward or away from the cursor? by default, away from it
   'container': document //the element containing the moving elements
      //the hologram moves only when the mouse enters it. Samples: document.body, $('#container')
}

To change any of the default parameters, pass them in like this:

   $('#move-this-id').cssHolo({'skew': 20, 'centerX': '100px', 'centerY': '100px'});



-----------------------------
Other Effects:
-----------------------------

Adding a shadow -------------
A shadow effect can be achieved by layering one element under another. The bottom 
shadow layer should have a lesser z-index than the top element, and a lesser skew.

   $('.shadows').cssHolo({'skew': 10});