fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const visitorIp = data.ip;
            if (visitorIp !== "YOUR_IP_ADDRESS") {  
                fetch('https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/actions/workflows/update_visitors.yml/dispatches', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer YOUR_GITHUB_TOKEN',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ "ref": "main" })
                });
            }
        });
