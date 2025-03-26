from flask import Flask, url_for, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager

app = Flask(__name__)
db = SQLAlchemy(app)
login_manager = LoginManager(app)

@app.route("/")
def home():
    return render_template("track.html")

if __name__ == "__main__":
    app.run()