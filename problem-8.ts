{
    // 
    function validateKeys<T>(obj: T, keys: (keyof T)[]):boolean{
        for(const key of keys){
            if(!(key in obj)){
                return false;
            }
            else 
            return true 
        
        }
              
    }
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));
    


    // 
}