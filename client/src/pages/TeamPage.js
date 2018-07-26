import React from 'react';
import { Container, Row, Col, Avatar, Fa } from 'mdbreact';

const TeamPage = () => {
	return (
		<Container className="pt-3">

<Row className="text-center">


			{/* John*/}
			<Col lg="3" md="6" className="mb-lg-0 mb-5">
				<Avatar tag="img" src="./images/team/john.png" className="rounded-circle hoverable z-depth-1 img-fluid" alt="John" />
				<h5 className="font-weight-bold mt-4 mb-3">John Stuart</h5>
				<p className="text-uppercase blue-text">Full Stack Web Developer<br />API Brain</p>
				<p className="grey-text hoverable px-2	 ">MERN Developer focused on API building and Data Structure<br />I like smol dogs, coffee and coding.<br/><br/>
						<img src="./images/team/QRJohn.png" alt="John" className="img-fluid px-4" />

					<ul className="list-unstyled mb-0">
						<a className="p-2 fa-lg" target="blank" href="https://github.com/johnstuart670">
							<Fa icon="github" className="blue-text" />
						</a>
						<a className="p-2 fa-lg" target="blank" href="https://www.linkedin.com/in/john-stuart-78b523a9/">
							<Fa icon="linkedin" className="blue-text" />
						</a>
					</ul></p>
			</Col>
			{/* /John */}

			{/* Kevin */}
			<Col lg="3" md="6" className="mb-lg-0 mb-5">
				<Avatar tag="img" src="./images/team/kvn.png" className="hoverable rounded-circle z-depth-1 img-fluid" alt="Kevin" />
				<h5 className="font-weight-bold mt-4 mb-3">Kevin Smith</h5>
				<p className="text-uppercase blue-text">Full Stack Web Developer<br />Frontend Mastermind</p>
				<p className="grey-text hoverable px-1">MERN Developer specializing in Front End Developement.<br /><br /><br/><br/>
					<img src="./images/team/QRKevin.png" alt="Kevin Smith PNG" className="img-fluid px-4" />
					<ul className="list-unstyled mb-0">
						<a className="p-2 fa-lg" target="blank" href="https://github.com/brainchomper">
							<Fa icon="github" className="blue-text" />
						</a>
						<a className="p-2 fa-lg" target="blank" href="https://www.linkedin.com/in/kvnsmith">
							<Fa icon="linkedin" className="blue-text" />
						</a>
						<a className="p-2 fa-lg">
							<Fa icon="twitter" target="blank" href="https://twitter.com/_kvnsmith" className="blue-text" />
						</a>
					</ul>
					<a href="https://kvnsmith.com">kvnsmith.com</a></p>

			</Col>
			{/* /Kevin */}

				{/* Joe */}
				<Col lg="3" md="6" className="mb-lg-0 mb-5">
				<Avatar tag="img" src="./images/team/joe.png" className="rounded-circle z-depth-1 img-fluid hoverable" alt="Joe" />
				<h5 className="font-weight-bold mt-4 mb-3">Joe Calderon</h5>
				<p className="text-uppercase blue-text">Full Stack Web Developer<br />Backend Ninja</p>
				<p className="grey-text hoverable px-1 ">MERN Developer with an emphasis on backend development. I come to chew bubble gum and code, and I'm all out of bubble gum.
						<img src="./images/team/QRJoe.png" alt="Joe" className="img-fluid px-4" />

					<ul className="list-unstyled mb-0">
						<a className="p-2 fa-lg" target="blank" href="https://github.com/gbert254">
							<Fa icon="github" className="blue-text" />
						</a>
						<a className="p-2 fa-lg" target="blank" href="https://www.linkedin.com/in/joseph-calderon/">
							<Fa icon="linkedin" className="blue-text" />
						</a>
					</ul></p>
			</Col>
			{/* /Joe */}

			{/* Alex */}
			<Col lg="3" md="6" className="mb-lg-0 mb-5">
				<Avatar tag="img" src="./images/team/alex.png" className="hoverable rounded-circle z-depth-1 img-fluid" alt="Alex" />
				<h5 className="font-weight-bold mt-4 mb-3">Alex Butler</h5>
				<p className="text-uppercase blue-text">Full Stack Web Developer<br /> Something Here</p>
				<p className="grey-text hoverable px-1">MERN Developer<br /><br /><br /><br /><br/>
					<img src="./images/team/QRAlex.png" alt="Kevin Smith PNG" className="img-fluid px-4" />
					<ul className="list-unstyled mb-0">
						<a className="p-2 fa-lg" target="blank" href="https://github.com/brainchomper">
							<Fa icon="github" className="blue-text" />
						</a>
						<a className="p-2 fa-lg" target="blank" href="https://www.linkedin.com/in/kvnsmith">
							<Fa icon="linkedin" className="blue-text" />
						</a>
						<a className="p-2 fa-lg">
							<Fa icon="twitter" target="blank" href="https://twitter.com/" className="blue-text" />
						</a>
					</ul>
					{/* <a href="https://kvnsmith.com">kvnsmith.com</a> */}
					</p>

			</Col>
			{/* /Alex */}
				</Row>
			
		</Container >
	);
}

export default TeamPage;