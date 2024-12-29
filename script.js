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
								<img src="/assets/projects/skills.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Online Learning Platform</h5>
									<p class="card-text-project">
										This is my HTML and CSS implementation of an online learning platform website design based on a Figma mockup.
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
									<h5 class="card-title-project">Mixlab</h5>
									<p class="card-text-project">
										This is my HTML and CSS implementation of the Mixlab website design based on a Figma mockup.
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
									<h5 class="card-title-project">Weather Telegram Bot</h5>
									<p class="card-text-project">
										This is my Telegram bot that provides the current weather forecast based on the user's location.
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
									<h5 class="card-title-project">PyQt6 Calculator</h5>
									<p class="card-text-project">
										This is my implementation of a calculator with a graphical interface developed using the PyQt6 library, supporting basic arithmetic operations.
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
									<h5 class="card-title-project">Horoscope Telegram Bot</h5>
									<p class="card-text-project">
										This is my Telegram bot that delivers daily horoscopes for zodiac signs, fetching data from horoscope.com and translating it into Russian for users.
									</p>
									<a href="https://github.com/kkonstantin08/horoscope_tg_bot" target="_blank" class="button">Github↗</a>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="row-project">
							<div class="card-project" style="width: 18rem">
								<img src="./assets/projects/flask.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">News Portal</h5>
									<p class="card-text-project">
										A news website where anyone can share fictional news, built using Flask.
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
									<h5 class="card-title-project">News Portal</h5>
									<p class="card-text-project">
										A news website where anyone can share fictional news, built using Flask.
									</p>
									<a href="https://github.com/kkonstantin08/flask_project" target="_blank" class="button">Github↗</a>
								</div>
							</div>
							<!-- skills проект -->
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/skills.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Online Learning Platform</h5>
									<p class="card-text-project">
										This is my HTML and CSS implementation of an online learning platform website design based on a Figma mockup.
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
									<h5 class="card-title-project">PyQt6 Calculator</h5>
									<p class="card-text-project">
										This is my implementation of a calculator with a graphical interface developed using the PyQt6 library, supporting basic arithmetic operations.
									</p>
									<a href="https://github.com/kkonstantin08/PyQt_calculator" target="_blank" class="button">Github↗</a>
								</div>
							</div>
							<!-- horoscope проект -->
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/horoscope.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Horoscope Telegram Bot</h5>
									<p class="card-text-project">
										This is my Telegram bot that delivers daily horoscopes for zodiac signs, fetching data from horoscope.com and translating it into Russian for users.
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
									<h5 class="card-title-project">Mixlab</h5>
									<p class="card-text-project">
										This is my HTML and CSS implementation of the Mixlab website design based on a Figma mockup.
									</p>
									<a href="https://github.com/kkonstantin08/veterinary-clinic-site" target="_blank" class="button">Github↗</a>
								</div>
							</div>
							<!-- weather проект -->
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/weather.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Weather Telegram Bot</h5>
									<p class="card-text-project">
										This is my Telegram bot that provides the current weather forecast based on the user's location.
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
									<h5 class="card-title-project">News Portal</h5>
									<p class="card-text-project">
										This is a Flask-based news website where users can create and share fictional news stories, fostering creativity and community engagement.
									</p>
									<a href="https://github.com/kkonstantin08/flask_project" target="_blank" class="button">Github↗</a>
								</div>
							</div>
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/skills.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Online Learning Platform</h5>
									<p class="card-text-project">
										This is my HTML and CSS implementation of an online learning platform website design based on a Figma mockup.
									</p>
									<a href="https://github.com/kkonstantin08/online-skills_site" target="_blank" class="button">Github↗</a>
								</div>
							</div>
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/veterinar.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Mixlab</h5>
									<p class="card-text-project">
										This is my HTML and CSS implementation of the Mixlab website design based on a Figma mockup.
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
									<h5 class="card-title-project"> PyQt6 Calculator</h5>
									<p class="card-text-project">
										This is my implementation of a calculator with a graphical interface developed using the PyQt6 library, supporting basic arithmetic operations.
									</p>
									<a href="https://github.com/kkonstantin08/PyQt_calculator" target="_blank" class="button">Github↗</a>
								</div>
							</div>
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/horoscope.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Horoscope Telegram Bot</h5>
									<p class="card-text-project">
										This is my Telegram bot that delivers daily horoscopes for zodiac signs, fetching data from horoscope.com and translating it into Russian for users.
									</p>
									<a href="https://github.com/kkonstantin08/horoscope_tg_bot" target="_blank" class="button">Github↗</a>
								</div>
							</div>
							<div class="card-project" style="width: 18rem">
								<img src="/assets/projects/weather.png" class="card-img-top" alt="..." />
								<div class="card-body-project">
									<h5 class="card-title-project">Weather Telegram Bot</h5>
									<p class="card-text-project">
										This is my Telegram bot that provides the current weather forecast based on the user's location.
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
