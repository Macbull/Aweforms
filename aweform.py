from flask import Flask, Response
import requests
import logging
import re
logging.basicConfig(level=logging.INFO)
LOG = logging.getLogger("aweform.py")


app = Flask(__name__, static_url_path='')


@app.route('/')
def index():
    '''Serve Static file index.html. Rest of the routing will be done by ngRoute'''
    return app.send_static_file('index.html')

@app.route('/proxy/<path:url>')
def home(url):
    '''Serve google form page using proxy method due to cross origin policy'''
    req = requests.get(url, stream = True)
    rreq = re.sub(r'https://(?!(fonts.googleapis)|(docs.google))', '/proxy/https://',req.content, flags=re.IGNORECASE)
    return Response(rreq, content_type = req.headers['content-type'])

if __name__ == '__main__':
    app.run()
