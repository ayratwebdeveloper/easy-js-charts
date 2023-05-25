// Определение параметров графика
const chartOptions = {
	chart: {
			type: 'area',
			height: 180,
			// Спрятать панель инструментов графика
			toolbar: { show: false }, 
			// Отключение масштабирования графика
			zoom: { enabled: false } 
	},
	colors: ['#3498db'], // Цвет графика
	series: [{ name: 'Views', data: [18, 50, 42, 94, 41, 65] }], // Данные графика
	dataLabels: { enabled: false }, // Спрятать метки данных диаграммы
	stroke: { width: 3, curve: 'smooth' }, // Настройка свойств обводки графика
	fill: {
			type: 'gradient',
			gradient: {
					shadeIntensity: 1,
					opacityFrom: 0.7,
					opacityTo: 0,
					stops: [0, 90, 100] // Останавливаю заливку графика
			}
	},
	xaxis: {
			// Установка категорий
			categories: ['Feb', 'Apr', 'Jun', 'Aug', 'Oct', 'Dec'], 
			// Скрыть границы
			axisBorder: { show: false }, 
			// Установка свойств
			labels: { style: { colors: '#a7a7a7', fontFamily: 'Poppins' } } 
	
	},
	// Скрытие оси y
	yaxis: { show: false }, 
	grid: {
		// Установка цвета границы сетки
			borderColor: 'rgba(0, 0, 0, 0)', 
			// Установка отступов сетки
			padding: { top: -30, bottom: -8, left: 12, right: 12 } 
	},
	tooltip: {
		// Включить всплывающую подсказку на графике
			enabled: true, 
			// Формат метки всплывающей подсказки по оси y
			y: { formatter: value => `${value}K` }, 
			// Установка шрифта в всплывающей подсказки
			style: { fontFamily: 'Poppins' } 
	},
	// Спрятать маркеры для диаграмм
	markers: { show: false } 
};

// Создание нового экземпляра ApexCharts с параметрами графика и отобразите его
const chart = new ApexCharts(document.querySelector('.chart-area'), chartOptions);
chart.render();