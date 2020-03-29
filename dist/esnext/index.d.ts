interface Subject {
    registerObserver(o: Observer): void;
    removeObserver(o: Observer): void;
    notifyObserver(): void;
}
interface Observer {
    update(temperature: number): void;
}
declare class WeatherStation implements Subject {
    registerObserver(o: Observer): void;
    removeObserver(o: Observer): void;
    notifyObserver(): void;
    private temperature;
    setTemperature(temp: number): void;
}
declare class TemperatureDisplay {
}
