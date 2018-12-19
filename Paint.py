from bottle import route, template
from sys import argv
import bottle


@route('/')
def index():
    return template('Paint.html', root="")


@route('/js/<filename:re:.*js>')
def javascript(filename):
    return bottle.static_file(filename, root='js')


@route('/css/<filename:re:.*css>')
def stylesheet(filename):
    return bottle.static_file(filename, root='css')


@route('/images/<filename>')
def images(filename):
    return bottle.static_file(filename, root='images')


def main():
    bottle.run(host='0.0.0.0', port=argv[1])


if __name__ == '__main__':
    main()
