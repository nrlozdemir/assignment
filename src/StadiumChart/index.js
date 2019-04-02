import React from 'react'

import style from "./style.scss"

const lineSize = parseInt(style.lineSize)
const minHeight = parseInt(style.minHeight)
const minWidth = parseInt(style.minWidth)

let stats = [
  {value: '20'},
  {value: '50'},
  {value: '45'},
  {value: '40'}
]

const StadiumChart = () => (
	<div className="d-flex justify-space-between align-items-center">
		<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
      <g>
        <g id="two">
          <rect 
          className="bar bar2"
              fill="none"
              rx="120" x="152" y="20" width="368" height="240"
          />
        </g>
        <g id="one">
          <rect 
          className="bar bar1"
              fill="none"
              rx="80" x="152" y="20" width="288" height="160"
          />
        </g>
      </g>
    </svg>
	</div>
)

export default StadiumChart
