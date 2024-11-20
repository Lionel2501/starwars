import '../../src/Parallax.scss'

const Parallax = () => {
    
    return (
        <>
            <div className="perspective">
                <div className="parallax_card">
                    <div className="parallax_text_main">
                        <h1 className="parallax_title">title</ h1>
                        <div className='parallax_text_contain'>
                            <br></br>
                            <div>text
                                <br />
                                <br />
                                test
                                <br />
                                <small>test</small>
                            </div>
                        </div>
                    </div> 
                    <div className="parallax_img"></div>
                </div>
            </div>
        </>
    );
};

export default Parallax;