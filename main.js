document.addEventListener('DOMContentLoaded', function() { 
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const avatar = document.querySelector('#avatar');
    const repos = document.querySelector('#repos');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const githubLink = document.querySelector('#github-link');

    // Buscar os dados
    fetch('https://api.github.com/users/lucasvitareli') // Buscar os dados da API do GitHub
        .then(function(response) {               // Pegar a resposta da API
            return response.json();                 // Retornar a resposta como JSON
        })
        
        .then(function(json) {                     // Pegar os dados do JSON
            name.innerHTML = json.name; 
            username.innerHTML = json.login; 
            avatar.src = json.avatar_url; 
            repos.innerHTML = json.public_repos; 
            followers.innerHTML = json.followers; 
            following.innerHTML = json.following; 
            githubLink.href = json.html_url; 
        })

});