# React Radar Chart

react-radar-chart is intended to be a simple solution for those seeking a standalone radar chart for use in their project.

## Installation

The easiest way to use react-radar-chart is to install it from npm and build it into your app with Webpack. (this package is curently inactive)

```
npm install react-radar-chart
```

Then just import react-radar-chart into your project and you're all set!

```
npm install react-radar-chart
```

## Props

| Property       | Type            | Default 					 |Description																																																																	   |
| :------------: | :-------------: | :---------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: |
|  axisNames     |  array          |  []     					 |  Array of string values that will be used as the labels for each of the radar chart axes. 																										 |
|  classNames    |  object         |  {}     					 |  Object containing class names for the various components and sub components of the radar chart.  See 'styling' section below for details. 	 |
|  groups        |  object         |  {}     					 |  Object containing color and rating attributes for each group, by group name {[groupName]: {[color]: 'blue', [attributes]: {[skill]: 5}}} 		 |
|  rungs         |  number         |  10     					 |  Number indicating the number of rungs the chart should have.  					 				 				 				 				 				 				 				 				 		 |
|  scaleAlign    |  string         |  'bottom-left'  	 |  A string indicating where to align the scale.  See 'scale alignment' section below for details. 																						 |
|  scaleRenderer |  function       |  see description	 |  A function that can be used to render a custom chart scale.  Renders a simple scale by default. 																						 |

##Styling

Custom classNames can be passed via the classNames prop.

| Class Name     | Use																																										|
| :------------: | :------------------------------------------------------------------------------------: |
|  axis     		 |  change the color / thickness of the Axes																							|
|  container     |  style the containing div 																															|
|  key           |  change the text size or the position of the key																				|
|  label         |  change the size, color, font of the axis labels																				|
|  outline       |  change the opacity of the outline, size of the rating points, or width of the border 	|
|  rung 				 |  change the width / color for the chart rungs																					|
|  scale 				 |  change color / font size of the scale 																							  |
|  svgParent 		 |  style the svgParent element																														|
|  wrapper       |  style the wrapper div																																	|

##Scale Alignment

There are 8 areas that the scale can be aligned:

top (right / left)
bottom (right / left)
left (top / bottom)
right (top / bottom)

To align in one of these areas, use the following format and pass via the scaleAlign prop.
'[edge]-[alignment]' eg. 'top-right' or 'left-bottom'.


## Contributing

Please read [CONTRIBUTING.md](https://github.com/vanleuvenze/react-radar-chart/blob/master/README.md/) for details on submitting a pull request.

## Author

**Zachary Dean** [vanleuvenze](https://github.com/vanleuvenze)

## License

This project is licensed under the ISC License.
