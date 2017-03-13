from flask import Flask, Response, request, redirect
from urlparse import urlparse, urlunparse
import urllib2
import logging
import re
logging.basicConfig(level=logging.INFO)
LOG = logging.getLogger("aweform.py")


app = Flask(__name__, static_url_path='')


@app.before_request
def redirect_nonwww():
    """Redirect non-www requests to www."""
    urlparts = urlparse(request.url)
    if urlparts.netloc not in ['www.aweforms.com', '']:
        urlparts_list = list(urlparts)
        urlparts_list[1] = 'www.aweforms.com'
        return redirect(urlunparse(urlparts_list), code=301)


@app.route('/')
def index():
    '''Serve Static file index.html. Further routing will be done by ngRoute'''
    return app.send_static_file('index.html')

@app.route('/forms/<path:url>')
def forms(url):
    '''Serve google form page using proxy method due to cross origin policy'''
    page = urllib2.urlopen('https://docs.google.com/forms/'+url)
    mod_page = re.sub(r'https://(?!(fonts.googleapis)|(docs.google))',
                  '/proxy/', page.read(), flags=re.IGNORECASE)
    return Response(mod_page, content_type=page.headers['content-type'])



@app.route('/proxy/<path:url>')
def scripts(url):
    '''Serve google form page using proxy method due to cross origin policy'''
    page = urllib2.urlopen('https://'+url)
    mod_page = re.sub(r'https://(?!(fonts.googleapis)|(docs.google))',
                  '/proxy/', page.read(), flags=re.IGNORECASE)
    return Response(mod_page, content_type=page.headers['content-type'])


if __name__ == '__main__':
    app.run(Threaded=True)
