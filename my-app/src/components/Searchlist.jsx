
import style from "./styles/Searchlist.module.css"

const Searchlist = ({ value, onChange }) => {
    return (
        <div className={style.inputStyle}>

            <input 
                type="text"
                placeholder="Escribe el manga"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default Searchlist;