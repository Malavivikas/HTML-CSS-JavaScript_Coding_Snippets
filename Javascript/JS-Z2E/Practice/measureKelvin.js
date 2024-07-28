const measureKelvin = () => {
    const measurement = {
        type: 'temp',
        unit: 'celcius',
        value: Number(prompt('Degrees celcius')),
    };

    const kelvin = measurement.value + 273;
    return kelvin;
}

console.log(measureKelvin())
