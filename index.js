const app = "I don't do much.";
fetch('https://api.github.com/repos/jquery/jquery/commits')
  .then(res => res.json())
  .then(json => console.log(json));
  
// 1st - URL for data
// 2nd - gets response (res) from fetch and using the json() to turn it into JSON
// 3rd - then that gets passed to the console.log()

const token = 'YOUR_TOKEN_HERE';

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));