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

@app.route('/.well-known/acme-challenge/ptOx49Nh3FVv6_Rb6hZoQERCWq6jon6yAZjYOQ1lo_A')
def ssl_challenge():
    '''Serve Static file index.html. Further routing will be done by ngRoute'''
    return 'ptOx49Nh3FVv6_Rb6hZoQERCWq6jon6yAZjYOQ1lo_A.OYZx-Fqd4aJRebIokBij4MHE-BcngKLT1w6EmITT4UQ'



@app.route('/.well-known/acme-challenge/e1bgomeHP0_sIcUFwdGedFuIq2ALqxNwECIIUs0BjtU')
def ssl_challenge2():
    '''Serve Static file index.html. Further routing will be done by ngRoute'''
    return 'e1bgomeHP0_sIcUFwdGedFuIq2ALqxNwECIIUs0BjtU.OYZx-Fqd4aJRebIokBij4MHE-BcngKLT1w6EmITT4UQ'



@app.route('/.well-known/acme-challenge/hEKEOpDe9Pi_VOBeG8-dEXMGd5gA6W7Lv5ZacZrWz0o')
def ssl_challenge3():
    '''Serve Static file index.html. Further routing will be done by ngRoute'''
    return 'hEKEOpDe9Pi_VOBeG8-dEXMGd5gA6W7Lv5ZacZrWz0o.OYZx-Fqd4aJRebIokBij4MHE-BcngKLT1w6EmITT4UQ'


@app.route('/.well-known/acme-challenge/XcUHeJszbBue7fqEffaWe8qptz-lfh2LlQ00Dlrw7Zg')
def ssl_challenge4():
    '''Serve Static file index.html. Further routing will be done by ngRoute'''
    return 'XcUHeJszbBue7fqEffaWe8qptz-lfh2LlQ00Dlrw7Zg.OYZx-Fqd4aJRebIokBij4MHE-BcngKLT1w6EmITT4UQ'

@app.route('/.well-known/acme-challenge/wwYSA8fnWUS3uvHc-3a084BkvivaSUkSCGFWZbyCSMc')
def ssl_challenge5():
    '''Serve Static file index.html. Further routing will be done by ngRoute'''
    return 'wwYSA8fnWUS3uvHc-3a084BkvivaSUkSCGFWZbyCSMc.OYZx-Fqd4aJRebIokBij4MHE-BcngKLT1w6EmITT4UQ'


@app.route('/.well-known/acme-challenge/OeTbqc4jImbDCDaRJfwNSMYTcV4xgsxmJ1iFyen4Ytc')
def ssl_challenge6():
    '''Serve Static file index.html. Further routing will be done by ngRoute'''
    return 'OeTbqc4jImbDCDaRJfwNSMYTcV4xgsxmJ1iFyen4Ytc.OYZx-Fqd4aJRebIokBij4MHE-BcngKLT1w6EmITT4UQ'

if __name__ == '__main__':
    app.run(Threaded=True)
