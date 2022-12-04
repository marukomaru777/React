from flask import Flask
from flask import render_template
app = Flask(__name__)
@app.route("/")
def Index():
    return render_template('Index.html')
@app.route("/hello")
def hello():
    return "Hello World! This is Hello Page "
if __name__ == "__main__":
    app.debug = True
    app.run()