import React from 'react';

export default function Prevision() {
    function yesterday(direction:boolean) {
        let res:Number[] = [];
        if(direction) {
            for (let i = 0; i < 23; i++) {
                res[i] = i;
            }
        } else {
            for (let i = 0; i < 23; i++) {
                res[i] = 23 - i;
            }
        }
        return res;
    }
    const yesterdayPrevision:Number[] = yesterday(false);
    const todayPrevision:Number[] = yesterday(true);
    return(
        <>
            <div className='flex flex-row w-3/4 p-2 border-2 border-white rounded-md text-wrap justify-between'>
                {
                    yesterdayPrevision.map(hour => {
                        return <p className="text-xl">{hour}</p>
                    })
                }
            </div>
            <div className='flex flex-row w-3/4 p-2 border-2 border-white rounded-md text-wrap justify-between'>
                {
                    todayPrevision.map(hour => {
                        return <p>{hour}</p>
                    })
                }
            </div>
        </>
    );
};
