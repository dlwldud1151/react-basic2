import React, {useEffect} from 'react';

function FetchGet(){
    useEffect(async()=>{
        const response = await fetch('http://date.jsontest.com/');
        const body = await response.json();
        alert(body.date);
    }) 
    return(
        <h3>get 호출해보기</h3>
    )
}

export default FetchGet;