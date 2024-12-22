function adjustLayout() {
  const contentDiv = document.getElementById("carousel-inside");
  contentDiv.innerHTML = ""; // Очищаем содержимое

  if (window.innerWidth < 768) {
    // Мобильная версия
    contentDiv.innerHTML = `
					<!-- первая страница -->
					<div class="carousel-item active">
						<div class="row-project">
							<div class="card-project" style="width: 18rem">
								<img src="./assets/projects/skills.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Card title</h5>
									<p class="card-text-project">
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</p>
									<a href="https://github.com/kkonstantin08/online-skills_site" target="_blank" class="button">Github↗</a>
								</div>
							</div>
						</div>
					</div>
					<!-- вторая страница -->
					<div class="carousel-item">
						<div class="row-project">
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/veterinar.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Card title</h5>
									<p class="card-text-project">
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</p>
									<a href="https://github.com/kkonstantin08/veterinary-clinic-site" target="_blank" class="button">Github↗</a>
								</div>
							</div>
						</div>
					</div>
					<!-- третья страница -->
					<div class="carousel-item">
						<div class="row-project">
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/weather.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Card title</h5>
									<p class="card-text-project">
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</p>
									<a href="https://github.com/kkonstantin08/tg_weather_bot_forecast" target="_blank" class="button">Github↗</a>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="row-project">
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/calculator.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Card title</h5>
									<p class="card-text-project">
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</p>
									<a href="https://github.com/kkonstantin08/PyQt_calculator" target="_blank" class="button">Github↗</a>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="row-project">
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/horoscope.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Card title</h5>
									<p class="card-text-project">
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</p>
									<a href="https://github.com/kkonstantin08/horoscope_tg_bot" target="_blank" class="button">Github↗</a>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="row-project">
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/flask.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Card title</h5>
									<p class="card-text-project">
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</p>
									<a href="https://github.com/kkonstantin08/flask_project" target="_blank" class="button">Github↗</a>
								</div>
							</div>
						</div>
					</div>
					<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			`;
  } else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
    // Планшетная версия
    contentDiv.innerHTML = `
					<!-- первая страница -->
					<div class="carousel-item active">
						<div class="row-project">
							<!-- flask проект -->
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/flask.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Card title</h5>
									<p class="card-text-project">
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</p>
									<a href="https://github.com/kkonstantin08/flask_project" target="_blank" class="button">Github↗</a>
								</div>
							</div>
							<!-- skills проект -->
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/skills.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Card title</h5>
									<p class="card-text-project">
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</p>
									<a href="https://github.com/kkonstantin08/online-skills_site" target="_blank" class="button">Github↗</a>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="row-project">
							<!-- calculator проект -->
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/calculator.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Card title</h5>
									<p class="card-text-project">
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</p>
									<a href="https://github.com/kkonstantin08/PyQt_calculator" target="_blank" class="button">Github↗</a>
								</div>
							</div>
							<!-- horoscope проект -->
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/horoscope.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Card title</h5>
									<p class="card-text-project">
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</p>
									<a href="https://github.com/kkonstantin08/horoscope_tg_bot" target="_blank" class="button">Github↗</a>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="row-project">
							<!-- veterinar проект -->
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/veterinar.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Card title</h5>
									<p class="card-text-project">
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</p>
									<a href="https://github.com/kkonstantin08/veterinary-clinic-site" target="_blank" class="button">Github↗</a>
								</div>
							</div>
							<!-- weather проект -->
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/weather.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Card title</h5>
									<p class="card-text-project">
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</p>
									<a href="https://github.com/kkonstantin08/tg_weather_bot_forecast" target="_blank" class="button">Github↗</a>
								</div>
							</div>
						</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
				`;
  } else {
    // Десктопная версия
    contentDiv.innerHTML = `
					<div class="carousel-item active">
						<div class="row-project">
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/flask.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Card title</h5>
									<p class="card-text-project">
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</p>
									<a href="https://github.com/kkonstantin08/flask_project" target="_blank" class="button">Github↗</a>
								</div>
							</div>
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/skills.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Card title</h5>
									<p class="card-text-project">
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</p>
									<a href="https://github.com/kkonstantin08/online-skills_site" target="_blank" class="button">Github↗</a>
								</div>
							</div>
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/veterinar.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Card title</h5>
									<p class="card-text-project">
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</p>
									<a href="https://github.com/kkonstantin08/veterinary-clinic-site" target="_blank" class="button">Github↗</a>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="row-project">
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/calculator.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Card title</h5>
									<p class="card-text-project">
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</p>
									<a href="https://github.com/kkonstantin08/PyQt_calculator" target="_blank" class="button">Github↗</a>
								</div>
							</div>
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/horoscope.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Card title</h5>
									<p class="card-text-project">
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</p>
									<a href="https://github.com/kkonstantin08/horoscope_tg_bot" target="_blank" class="button">Github↗</a>
								</div>
							</div>
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/weather.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Card title</h5>
									<p class="card-text-project">
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</p>
									<a href="https://github.com/kkonstantin08/tg_weather_bot_forecast" target="_blank" class="button">Github↗</a>
								</div>
							</div>
						</div>
					</div>
					<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			`;
  }
}

// Вызываем функцию при загрузке страницы
window.onload = adjustLayout;

// Вызываем функцию при изменении размера окна
window.onresize = adjustLayout;
