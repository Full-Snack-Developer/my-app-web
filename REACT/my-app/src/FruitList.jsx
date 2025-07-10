export const FruitList = () =>  {
    const fruits = ['tao', 'nho', 'thom', 'chuoi']
    const fruits2 = [
        {id: 1, name: 'Táo', price: 1200},
        {id: 2, name: 'Chuối', price: 800},
        {id: 3, name: 'Cam', price: 500}
    ];

    return(
        <ul>
            {fruits2.map((fruit, id) => 
                (
                <li key={id}>
                    <h3>Ten: {fruit.name}</h3>
                    <p>Gia: {fruit.price}</p>
                </li>
                )
            )}
        </ul>
    )
}

