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
	<div className="">
		<div className="charts" data-title="Total Percentage">
      
      <div className="chart" data={60}>
				<div className="chart-inner">
          <svg className="chart-svg" xmlns="http://www.w3.org/2000/svg">
            <rect 
              className="chart-bar"
                  fill="none"
                  rx="160" x="0" y="0" width="630" height="320"
            />
          </svg>
        </div>
			</div>
      
      <div className="chart" data={60}>
				<div className="chart-inner">
          <svg className="chart-svg" xmlns="http://www.w3.org/2000/svg">
            <rect 
              className="chart-bar"
                  fill="none"
                  rx="120" x="0" y="0" width="550" height="240"
            />
          </svg>
        </div>
			</div>
      
      <div className="chart" data={60}>
				<div className="chart-inner">
          <svg className="chart-svg" xmlns="http://www.w3.org/2000/svg">
            <rect 
              className="chart-bar"
                  fill="none"
                  rx="80" x="0" y="0" width="470" height="160"
            />
          </svg>
        </div>
			</div>

		</div>
	</div>
)

export default StadiumChart
