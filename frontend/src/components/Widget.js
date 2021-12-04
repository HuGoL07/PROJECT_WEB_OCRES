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
                    <div className='widget1-title'>{title} </div>
                </div>
            </div>

            {/*--- WIDGET 2 ---*/} 
            <div className='widget2-container'>
                <div className='widget2-banner'>
                    <div className='widget2-title'>{title2} </div>
                </div>
            </div>

            {/*--- WIDGET 3 ---*/} 
            <div className='widget1-container'>
                <div className='widget1-banner'>
                    <div className='widget1-title'> Ajouter une playlist </div>
                </div>
            </div>

            {/*--- WIDGET 4 ---*/} 
            <div className='widget2-container'>
                <div className='widget2-banner'>
                    <div className='widget2-title'> Supprimer un titre </div>
                </div>
            </div>

            {/*--- WIDGET 5 ---*/} 
            <div className='widget1-container'>
                <div className='widget1-banner'>
                    <div className='widget1-title'> Vos titres </div>
                </div>
            </div>

            {/*--- WIDGET 6 ---*/} 
            <div className='widget2-container'>
                <div className='widget2-banner'>
                    <div className='widget2-title'> Notre API</div>
                </div>
            </div>

        </div>
        

    )
}

export default Widget