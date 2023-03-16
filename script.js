const createCard1 = () => {
	const card = document.querySelector('#container1');
	let div = document.createElement('div');
        div.setAttribute('class', 'card d-flex flex-wrap justify-content-center align-items-center');
				div.setAttribute('id', 'card1');
				div.innerHTML = `	<div class="polygon1">
														<img src="./images/avatar_removebg.png" class="img mt-2 align-self-center" alt="avatar" style="width: 10rem; height: auto;">
														<div class="card-body">
															<h5 class="card-title">María Belén De Franchi</h5>
															<p class="card-text">Hola, soy Belu, y trabajo como Sysadmin en una industria desde hace más de 6 años. Me gusta estar en constante aprendizaje, por eso, me encuentro desarrollando habilidades como full stack web developer.</p>
														</div>
													</div>
													<span class="text-light">Conóceme en mis redes:</span>
													<div class="d-flex justify-content-center p-2 gap-3">
														<a class="nav-link" href="https://www.linkedin.com/in/maria-bel%C3%A9n-de-franchi-26b00591/"
															title="linkedIn" target="_blank" rel="noopener noreferrer">
															<img class="icon" src="./images/linkedin.png" width="35" alt="LinkedIn">
														</a>
														<a class="nav-link" href="https://github.com/Belendefranchi/" title="Github" target="_blank"
															rel="noopener noreferrer">
															<img class="icon" src="./images/github.png" width="35" alt="GitHub">
														</a>
													</div>
													<button class="btn btn-secondary m-3" id="btn" onClick="createCard2()">Más info.</button>
												</div>`
	card.appendChild(div);
}

const createCard2 = () => {
	const card = document.querySelector('#container2');
	let div = document.createElement('div');
        div.setAttribute('class', 'card card2 d-flex flex-wrap justify-content-center align-items-center');
				div.setAttribute('id', 'card2');
        div.innerHTML = `	<div class="card-body">
														<h5 class="card-title">Más sobre mí:</h5>
														<p class="card-text">Estoy adquiriendo habilidades como desarrolladora gracias a programas como Codo a Codo 4.0 y Argentina Programa 4.0. También me encuentro realizando la carrera de Desarrollador Full Stack en CoderHouse. Y si tengo suerte, pronto empezaré el programa de Oracle ONE.</p>
														<div class="d-flex justify-content-center align-items-center">
															<span>Acá podés ver mi &nbsp</span>
															<a href="https://belendefranchi.github.io/argentinaPrograma/" target="_blank">Curriculum Vitae</a>
														</div>
														<h5 class="mt-4">Lenguajes, Frameworks y otros:</h5>
														<div>
															<div class="d-flex flex-column flex-wrap align-items-center">
																<h6 class="pt-3 fs-4 text-start text-decoration-underline">Front End:</h6>
																<div>
																	<img class="icon m-2" src="./images/html.png" height="55" alt="HTML">
																	<img class="icon m-2" src="./images/css.png" height="55" alt="CSS">
																	<img class="icon m-2" src="./images/js.png" height="55" alt="JS">
																	<img class="icon m-2" src="./images/sass.png" height="55" alt="Sass">
																	<img class="icon m-2" src="./images/bootstrap.png" height="55" alt="Bootstrap">
																	<img class="icon m-2" src="./images/react.png" height="55" alt="React">
																</div>
															</div>
														</div>
														<div>
															<div class="d-flex flex-column flex-wrap align-items-center">
																<h6 class="pt-3 fs-4 text-start text-decoration-underline">Back End:</h6>
																<div>
																	<img class="icon m-2" src="./images/php.png" height="55" alt="PHP">
																	<img class="icon m-2" src="./images/mysql.png" height="55" alt="mysql">
																	<img class="icon m-2" src="./images/sql.png" height="55" alt="SQL">
																	<img class="icon m-2" src="./images/fire.png" height="55" alt="Firebase">
																	<img class="icon m-2" src="./images/node.png" height="55" alt="Node">
																</div>
															</div>
														</div>
														<div>
															<div class="d-flex flex-column flex-wrap align-items-center">
																<h6 class="pt-3 fs-4 text-start text-decoration-underline">Versionado:</h6>
																<div>
																	<img class="icon m-2" src="./images/git.png" height="55" alt="Git">
																	<img class="icon m-2" src="./images/github2.png" height="55" alt="GitHub">
																</div>
															</div>
														</div>
													</div>`;
	card.appendChild(div);
	console.log("se creó la card");
}

createCard1();