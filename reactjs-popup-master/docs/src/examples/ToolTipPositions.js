import React from 'react'
import Popup from '../../../src/index'
//

const ToolTipPositions = () => (
	<div className="example-warper">
		<Popup
			trigger={<button type="button" className="button"> Right Top </button>}
			position="right top"
			on="hover"
		>
			<Card title="Right Top" />
		</Popup>

		<Popup
			trigger={<button type="button" className="button"> Bottom Center </button>}
			position="bottom center"
			on="hover"
		>
			<Card title="Bottom Center" />
		</Popup>

		<Popup
			trigger={<button type="button" className="button"> Left Top </button>}
			position="left top"
			on="hover"
		>
			<Card title="Left Top" />
		</Popup>

		<Popup
			trigger={<button type="button" className="button"> Right Center </button>}
			position="right center"
			on="hover"
		>
			<Card title="Right Center" />
		</Popup>
		<Popup
			trigger={<button type="button" className="button"> Top Center </button>}
			position="top center"
			on="hover"
		>
			<Card title="Top Center" />
		</Popup>
		<Popup
			trigger={<button type="button" className="button"> left Center </button>}
			position="left center"
			on="hover"
		>
			<Card title="Left Center" />
		</Popup>
		<Popup
			trigger={<button type="button" className="button"> Right Bottom </button>}
			position="right bottom"
			on="hover"
		>
			<Card title="Right bottom" />
		</Popup>

		<Popup
			trigger={<button type="button" className="button"> Top Center </button>}
			position="top center"
			on="hover"
		>
			<Card title="Top Center" />
		</Popup>

		<Popup
			trigger={<button type="button" className="button"> Left Bottom </button>}
			position="left bottom"
			on="hover"
		>
			<Card title="Left Bottom" />
		</Popup>

		<Popup
			trigger={<button type="button" className="button"> Center Center </button>}
			position="center center"
			on="hover"
			arrow={false}
		>
			<Card title="Center Center" />
		</Popup>
	</div>
)
const Card = ({ title }) => (
	<div className="card">
		<div className="header">{title} position </div>
		<div className="content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem
      sapiente labore architecto exercitationem optio quod dolor cupiditate
		</div>
	</div>
)

export default ToolTipPositions
