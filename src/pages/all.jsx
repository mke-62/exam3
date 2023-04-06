import {cars} from "../constArr"

const Page = ( ) => (
    <>
        <table>
            <tr>
                <th>Марка</th>
                <th>Модель</th>
                <th>Двигатель</th>
                <th>Год</th>
                <th>Цена</th>
                <th>Цвет</th>
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