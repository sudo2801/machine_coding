//Localstorage with expiry

window.LocalStorageWithExpiry = {
    setItem: function (key, value, expiryTime) {
        let result = {
            value,
            expiryTime: Date.now() + expiryTime
        }
        localStorage.setItem(key, JSON.stringify(result))
    },
    getItem: function (key) { 
        let data = localStorage.getItem(key)
        data = JSON.parse(data);
        if (data.expiryTime <= Date.now()) { 
            localStorage.removeItem(key)
            return null;
        }
        return data?.value; 
    } , 
    removeItem: function () { 
        localStorage.removeItem();
    },
    clear: function () {
        localStorage.clear();
     }
}

console.log(LocalStorageWithExpiry.setItem("name", "parag", 2000));

setTimeout(() => { 
    console.log(LocalStorageWithExpiry.getItem("name"))
   
},1500)