import React from 'react';
import StatusCard from './StatusCard.tsx';

// const yesterdayPrevision:Number[] = [];
// const todayPrevision:Number[] = [];


export default function Prevision() {
    function yesterday(direction:boolean) {
        let res:Number[] = [];
        if(direction) {
            for (let i = 0; i < 24; i++) {
                res[i] = i;
            }
        } else {
            for (let i = 0; i < 24; i++) {
                res[i] = 23 - i;
            }
        }
        return res;
    }
    const yesterdayPrevision:Number[] = yesterday(false);
    const todayPrevision:Number[] = yesterday(true);
    return(
        <>
            <h2>Previous</h2>
            <div className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 xl:grid-cols-12 p-2 justify-between gap-1'>
                {
                    yesterdayPrevision.map((hour,index) => {
                        return <StatusCard key={index} hour={hour}/>
                    })
                }
            </div>
            <h2>Next</h2>
            <div className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 xl:grid-cols-12 p-2 justify-between gap-1'>
                {
                    todayPrevision.map((hour, index) => {
                        return <StatusCard key={index} hour={hour}/>
                    })
                }
            </div>
        </>
    );
};
