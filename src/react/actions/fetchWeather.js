
export function fetchWeather(city){
    return function (dispatch){
        fetch(`http://api.weatherstack.com/current?access_key=7cfa0c7856a954546ddf9f3d3dbda4c2&query=${city}`)
        .then(res=>{
            return res.json();
        })
        .then(JSONres => {
            dispatch({type:"FETCH_WEATHER",
            payload:JSONres

            });
        }).catch(err=>{
            console.log(err);
        })
    }
}