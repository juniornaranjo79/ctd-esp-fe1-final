import './filtros.css';

const Filtros = ({inputRef, searchCharacter, value}) => {

    return (
        <div className='filtros'>
            <label htmlFor='nombre'>Filtrar por nombre:</label>
            <input type='text' placeholder='Rick, Morty, Beth, Alien, ...etc' name='nombre' value={value} onChange={searchCharacter} ref={inputRef} />
        </div>
    );
};

export default Filtros;
