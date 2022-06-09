const helloAsync = async () => "Hello";
const helloWorldAsync = async () => `${await helloAsync()} World`;
const onSuccess = (result) => { console.log(result); };
const onFailure = (error) => { throw error; };
helloWorldAsync().then(onSuccess, onFailure);
