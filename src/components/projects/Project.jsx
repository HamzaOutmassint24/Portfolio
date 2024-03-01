import { useEffect } from 'react';
import StockBuildingmaterials from './StockBuildingmaterials';
import MultiShop from './Multishop';

const Project = ({ isModalOpen, handleModalToggle ,ProjectName}) => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    })

    if (isModalOpen) {
        if(ProjectName === 'Stock-Building-materials'){
             return <StockBuildingmaterials handleModalToggle={handleModalToggle} />
        }
        else if(ProjectName === 'Multishop'){
            return <MultiShop handleModalToggle={handleModalToggle} />
        }
    }
}
export default Project