const helloAsync = async () => "Hello";
const helloWorldAsync = async () => `${await helloAsync()} World`;
helloWorldAsync();