import {XSquare } from 'react-bootstrap-icons';

const Model = ({isModalOpen , handleModalToggle}) =>{

    if(isModalOpen){
        return (
            <div className="fixed inset-0 bg-bg-color flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full max-w-screen-lg mx-auto rounded-lg overflow-hidden shadow-lg animate-slide-up">
                    {/* <img src={Project1Img1} alt="project image" className="rounded-md w-full"/> */}
                    <button onClick={handleModalToggle} className='absolute top-4 right-4'>
                        <XSquare size={18}/>
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Model