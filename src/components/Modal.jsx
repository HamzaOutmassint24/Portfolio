import { useEffect } from 'react';
import StockBuildingmaterials from './StockBuildingmaterials';
import MultiShop from './Multishop';

const Modal = ({ isModalOpen, handleModalToggle ,switchProject}) => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    })

    if (isModalOpen) {
        if(switchProject === 'Stock-Building-materials'){
             return <StockBuildingmaterials handleModalToggle={handleModalToggle} />
        }
        else if(switchProject === 'Multishop'){
            return <MultiShop handleModalToggle={handleModalToggle} />
        }
    }
}
export default Modal