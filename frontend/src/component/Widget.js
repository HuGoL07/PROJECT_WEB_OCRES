import React from 'react'
import '../style/Widget.css'

function Widget() {
    const title = 'Recommandation de titres'
    const title2 = 'Sauvegarder un titre'
    return (
        
        <div className='globalWidgets-Container'> 

            {/*--- WIDGET 1 ---*/} 
            <div className='widget1-container'> 
                <div className='widget1-banner'>
                    <h2 className='widget1-title'>{title} </h2>
                </div>
            </div>

            {/*--- WIDGET 2 ---*/} 
            <div className='widget2-container'>
                <div className='widget2-banner'>
                    <h2 className='widget2-title'>{title2} </h2>
                </div>
            </div>

            {/*--- WIDGET 3 ---*/} 
            <div className='widget3-container'>
                <div className='widget3-banner'>
                    <h2 className='widget3-title'> Ajouter une playlist </h2>
                </div>
            </div>

            {/*--- WIDGET 4 ---*/} 
            <div className='widget4-container'>
                <div className='widget4-banner'>
                    <h2 className='widget4-title'> Supprimer un titre </h2>
                </div>
            </div>

            {/*--- WIDGET 5 ---*/} 
            <div className='widget5-container'>
                <div className='widget5-banner'>
                    <h2 className='widget5-title'> Vos titres </h2>
                </div>
            </div>

            {/*--- WIDGET 6 ---*/} 
            <div className='widget6-container'>
                <div className='widget6-banner'>
                    <h2 className='widget6-title'> Notre API</h2>
                </div>
            </div>

        </div>
        

    )
}

export default Widget