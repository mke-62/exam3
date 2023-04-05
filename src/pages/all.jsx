
const cars = [
    {
        id: 1,
        label: 'AUDI',
        model: 'tt',
        power: 2,
        year: 2005,
        prise: 22000,
        color: 'red',
    },
    {
        id: 2,
        label: 'BMW',
        model: 'x6',
        power: 3,
        year: 2009,
        prise: 32000,
        color: 'white',
    },
    {
        id: 3,
        label: 'MAZDA',
        model: '3',
        power: 1.6,
        year: 2010,
        prise: 12000,
        color: 'blue',
    },
    {
        id: 4,
        label: 'OPEL',
        model: 'astra',
        power: 1.8,
        year: 2009,
        prise: 32000,
        color: 'green',
    },
    {
        id: 5,
        label: 'RENAUL',
        model: 'logan',
        power: 1.4,
        year: 2020,
        prise: 26000,
        color: 'white',
    },
];
const Page = ({arr}) => (
    <>
        <table>
            <tr>
                <th>Россия</th>
                <th>Великобритания</th>
                <th>Европа</th>
                <th>Длина ступни, см</th>
                <th>Длина ступни, см</th>
                <th>Длина ступни, см</th>
            </tr>
                { cars.map((cars) => (
                    <tr key={cars.id}>
                        <td>{cars.label}</td>
                        <td>{cars.model}</td>
                        <td>{cars.power}</td>
                        <td>{cars.year}</td>
                        <td>{cars.prise}</td>
                        <td>{cars.color}</td>
                    </tr>
                ))}

            { arr.map((cars) =>
                <tr key={cars.id}>
                    <td>{cars.label}</td>
                    <td>{cars.model}</td>
                    <td>{cars.power}</td>
                    <td>{cars.year}</td>
                    <td>{cars.prise}</td>
                    <td>{cars.color}</td>
                </tr>

            )}

        </table>
    </>
);

export default Page;