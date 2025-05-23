
document.getElementById('search1-btn').addEventListener('click', function() {
    const query = document.getElementById('search-query').value;
    fetch(`/search?q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';
            data.results.forEach(result => {
                const item = document.createElement('div');
                item.className = 'result-item';
                item.innerHTML = `<a href="${result.url}" target="_blank">${result.title}</a>`;
                resultsDiv.appendChild(item);
            });
        });
});
