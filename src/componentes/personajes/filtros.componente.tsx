import './filtros.css';


interface Props {
    inputRef: React.RefObject<HTMLInputElement>;
    searchCharacter: (e: React.ChangeEvent<HTMLInputElement>) => void ;
    value:string;
}

const Filtros = ({inputRef, searchCharacter, value} : Props) => {

    return (
        <div className='filtros'>
            <label htmlFor='nombre'>Filtrar por nombre:</label>
            <input type='text' placeholder='Rick, Morty, Beth, Alien, ...etc' name='nombre' value={value} onChange={searchCharacter} ref={inputRef} />
        </div>
    );
};

export default Filtros;
