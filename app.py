from flask import Flask, request, render_template
# from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
# app.config['SECRET_KEY'] = "xxxxxxxx"
# db = SQLAlchemy(app)
# username = "postgres"
# password = "1984"
# dbname = "formsinfo"
#
# app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://{username}:{password}@localhost/{dbname}"



if __name__ == "__main__":
    app.run()
