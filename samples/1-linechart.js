import './1-linechart.css'
import * as d3 from 'd3'

/**
 * Create a simple line chart
 */

// data
const data = [23, 18, 16, 10, 15, 20, 22, 19, 21, 22]

// SVG dimensions
const dimensions = {
  w: 320,
  h: 320,
  t: '10, -10'
}

// Create a scale based on the number of items in the data
const xConverter = d3.scaleLinear()
.domain([0, data.length - 1])
.range([0, 300])

const dataExtent = d3.extent(data, d => d);

// Create a scale based on the lowest and highest value in the array
const yConverter = d3.scaleLinear()
.domain(dataExtent)
.range([0, 300])

// Create chart data
const chartData = data.map((d, i) => (
  {
    x: xConverter(i),
    y: yConverter(d)
  }
))

// Create line function for chart A
const lineA = d3.line()
.x(d => d.x)
.y(d => dimensions.h - d.y) //inverse the Y coordinate
.curve(d3.curveLinear)
// line data
const lineDataA = lineA(chartData)
// render the SVG image using data above
const svgA = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width=${dimensions.w}
  height=${dimensions.h}
>

  <g transform="translate(${dimensions.t})">
    <path
      d=${lineDataA}
      fill=${'none'}
      strokeWidth=${2}
    />
  </g>

</svg>
`
document.querySelector('#chart-A').innerHTML = svgA

// = = = = = = = = = = = = = = = = = = = = = = = = =

// Create line function for chart B
const lineB = d3.line()
.x(d => d.x)
.y(d => dimensions.h - d.y) //inverse the Y coordinate
.curve(d3.curveMonotoneX)
// line data
const lineDataB = lineB(chartData)
// render the SVG image using data above
const svgB = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width=${dimensions.w}
  height=${dimensions.h}
>

  <g transform="translate(${dimensions.t})">
    <path
      d=${lineDataB}
      fill=${'none'}
      strokeWidth=${2}
    />
  </g>

</svg>
`
document.querySelector('#chart-B').innerHTML = svgB

// = = = = = = = = = = = = = = = = = = = = = = = = =

// Create line function for chart B
const lineC = d3.line()
.x(d => d.x)
.y(d => dimensions.h - d.y) //inverse the Y coordinate
.curve(d3.curveStepBefore)
// line data
const lineDataC = lineC(chartData)
// render the SVG image using data above
const svgC = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width=${dimensions.w}
  height=${dimensions.h}
>

  <g transform="translate(${dimensions.t})">
    <path
      d=${lineDataC}
      fill=${'none'}
      strokeWidth=${2}
    />
  </g>

</svg>
`
document.querySelector('#chart-C').innerHTML = svgC
