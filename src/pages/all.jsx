import {cars} from "../constArr"

const Page = ( ) => (
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

        </table>
    </>
);

export default Page;