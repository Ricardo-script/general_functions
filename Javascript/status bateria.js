// Ler o status da bateria do notebook/Celular

navigator.getBattery().then((battery) => {
	console.log(`${battery.charging}`);
	console.log(`${battery.level * 100}%`);
	console.log(`${battery.chargingTime}`);
	console.log(`${battery.dischargingTime}`);
})