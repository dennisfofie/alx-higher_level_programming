import requests

response = requests.get('https://fourtonfish.com/hellosalut/?lang=fr')
data=response.json()
print(data)
