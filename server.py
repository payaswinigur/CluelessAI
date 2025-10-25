from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        # Default to preview.html if root is requested
        if self.path == '/':
            self.path = '/preview.html'
        return SimpleHTTPRequestHandler.do_GET(self)

    def guess_type(self, path):
        # Override to ensure .html files are served as text/html
        if path.endswith(".html"):
            return 'text/html'
        return SimpleHTTPRequestHandler.guess_type(self, path)

if __name__ == '__main__':
    server = HTTPServer(('localhost', 5173), Handler)
    print('Starting server at http://localhost:5173')
    server.serve_forever()