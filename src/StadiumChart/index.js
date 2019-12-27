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
		<div className="colorList">
			<div className="colorListItem">Fast</div>
			<div className="colorListItem">Medium</div>
			<div className="colorListItem">Slow</div>
			<div className="colorListItem">Slowest</div>
		</div>
		<div className="stadiumCharts" data-title="Total Percentage">
		{stats.map((stat, index) => {
      return(
        <div key={index} className="stadiumChart" data={stat.value}>
          <div className="tooltip">{[100 - stat.value, '% Slowest'].join('')}</div>
				  <svg xmlns="http://www.w3.org/2000/svg">
            <rect className="bar" fill="none"
              rx={(lineSize * (index + 2))}
              x={(lineSize / 2)}
              y={(lineSize / 2)}
              width={minWidth + (lineSize * (index * 2))}
              height={minHeight + (lineSize * (index * 2))}
            />
				  </svg>
			  </div>
      )
    })}
		</div>
	</div>
)

export default StadiumChart
