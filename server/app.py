from flask import Flask, render_template

app = Flask(__name__, static_folder='../client/dist', template_folder='../client/dist', static_url_path='')

@app.route("/")
def index():
    # Flask will automatically look for 'index.html' in the specified template_folder
    return render_template('index.html') 

if __name__ == "__main__":
    app.run(debug=True)
