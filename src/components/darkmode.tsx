import './darkmode.css'
// import './Moon.svg'
// import './Sun.svg'

const DarkMode = () => {
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                {/* Sun and Moon 
                components need to be imported */}
            </label>
        </div>
    );
};

export default DarkMode;
