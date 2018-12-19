from bottle import route, template
import bottle


@route('/', method='GET')
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
    bottle.run(host='localhost', port=7001)


if __name__ == '__main__':
    main()
