# Blog

### Disaster Recovery Bot Simulation
#### July 2023

I created a robotics simulation using CoppeliaSim and Lua. 

The scene is of a suburban lot with a building. Bill is inside. There has been a chemical or radiation disaster and it is impossible to communicate with him. He may or may not be aware of danger in the air. The disaster recovery bot, bubbleRob, rolls around the lot, exploring. A remote operator can get an intuition for the lot's layout and potential obstacles using bubbleRob's streaming vision data. A widget can be used to capture images from its front vision sensor, which streams in color. The robot's proximity sensors help prevent it from getting stuck at obstacles and from falling off the edge. 

I simulated the scene over a series of steps.

The first step was following the bubbleRob tutorial in CoppeliaSim's handbook. It outlines a step by step process for building a basic version of bubbleRob, the parts necessary to keep it together, the configurations for keeping it balanced, and the Lua code necessary for handling its proximity sensor. The tutorial was missing a few details so I filled in the blanks by looking at a prebuilt version and comparing values and configurations. Then I added obstacles to the environment to test that bubbleRob would reverse and rotate whenever reaching an obstacle. 

Once bubbleRob worked as expected, I brainstormed disaster recovery scenarios and chose one that would fit bubbleRob's capabilities. A chemical or radiation disaster would leave the ground relatively unchanged and bubbleRob would be able to move around with ease. In that situation, people may be unaware of danger in the air and bubbleRob could be sent out to search in lieu of people who could be unnecessarily put at risk.

Next I built the lot. The lot supports a small house consisting of four walls, a window, and a door. Bill is standing inside and can be viewed through the window. The front yard has a tree and two potted plants.

Then I chose modifications to add to bubbleRob. 

I wanted bubbleRob to be able to see inside windows, so I added a lightweight rod to the top of bubbleRob and attached vision sensors to it. The front facing vision sensor provides streaming color video data to the remote operator and has an associated widget that can capture images and save them to disk. The other four vision sensors provide a 360 degree depth image view of bubbleRob's surroundings. 

I also wanted bubbleRob to avoid falling off the sides of the lot and getting stuck behind obstacles, so I added eight proximity sensors. Four are ray detection sensors that detect the presence of floor by pointing downward in front of bubbleRob. The other four are volume sensors that point straight out from bubbleRob's face and detect the presence of objects.

Finally, I rewrote bubbleRob's Lua scripts to accommodate the addition of eight proximity sensors and the removal of the one there previously. All proximity sensors are used to guide bubbleRob's rotation and movement using the CoppeliaSim Regular API. I added the image capturing widget using the simUI API for custom user interfaces. 

In the following video demonstration I run the simulation and show my version of bubbleRob.

<iframe class="wrapper video" height="415" src="https://www.youtube.com/embed/_-UEMS_5qRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<br/>

