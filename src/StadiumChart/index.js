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
		<div className="stadiumCharts" data-title="Total Percentage">
      
      <div className="stadiumChart" data={60}>
        <div className="tick" style={{left: (lineSize * 0) + 130}}>
          {[100 - 50, '% Slowest'].join('')}
        </div>
				<svg xmlns="http://www.w3.org/2000/svg">
          <rect className="bar" fill="none" 
            rx={(lineSize * (0 + 2))}
            x={152}
            y={(lineSize / 2)}
            width={528-240} 
            height={minHeight + (lineSize * (0 * 2))}
            strokeDasharray="300%"
            strokeDashoffset="300%" 
          />
				</svg>
			</div>

      <div className="stadiumChart" data={80}>
        <div className="tick" style={{left: (lineSize * 1) + 130}}>
          {[100 - 60, '% Slowest'].join('')}
        </div>
				<svg xmlns="http://www.w3.org/2000/svg">
          <rect className="bar" fill="none" 
            rx={(lineSize * (1 + 2))}
            x={152}
            y={(lineSize / 2)}
            width={528-160} 
            height={minHeight + (lineSize * (1 * 2))} 
          />
				</svg>
			</div>

      <div className="stadiumChart" data={70}>
        <div className="tick" style={{left: (lineSize * 2) + 130}}>
          {[100 - 70, '% Slowest'].join('')}
        </div>
				<svg xmlns="http://www.w3.org/2000/svg">
          <rect className="bar" fill="none" 
            rx={(lineSize * (2 + 2))}
            x={152}
            y={(lineSize / 2)}
            width={528-80} 
            height={minHeight + (lineSize * (2 * 2))} 
          />
				</svg>
			</div>

      <div className="stadiumChart" data={80}>
        <div className="tick" style={{left: (lineSize * 3) + 130}}>
          {[100 - 80, '% Slowest'].join('')}
        </div>
				<svg xmlns="http://www.w3.org/2000/svg">
          <rect className="bar" fill="none" 
            rx={(lineSize * (3 + 2))}
            x={152}
            y={(lineSize / 2)}
            width={528}
            height={minHeight + (lineSize * (3 * 2))} 
          />
				</svg>
			</div>

		</div>
	</div>
)

export default StadiumChart
