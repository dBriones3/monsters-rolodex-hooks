import './search-box.styles.css';

const SearchBox = ({placeholder, className, onChangeHandler}) => (
        <input 
            type='search'
            placeholder={placeholder}
            className={className}
            onChange={onChangeHandler}
        />
); //parenthesis 'cuse implicit return


export default SearchBox;