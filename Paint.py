from bottle import static_file, route, run, template


@route('/', method='GET')
def index():
    return template('Paint.html', root="")


@route('/js/<filename:re:.*js>')
def javascript(filename):
    return static_file(filename, root='js')


@route('/css/<filename:re:.*css>')
def stylesheet(filename):
    return static_file(filename, root='css')


@route('/images/<filename>')
def images(filename):
    return static_file(filename, root='images')


def main():
    run(host='localhost', port=7001)


if __name__ == '__main__':
    main()
